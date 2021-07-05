import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  IconButton,
  Spinner
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { api } from "../../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface Response {
  users: User[];
}

export default function UserList() {
  const { data, error, isLoading, isFetching } = useQuery('users', async () => {
    const { data } = await api.get<Response>('/users');
    console.log(data);
    const users = data.users.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }));
    return users;
  }, {
    staleTime: 1000 * 5,
  });

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxW={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb={['4', '4', '8']} justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários {
                (isFetching && !isLoading) && (<Spinner size='sm' color='gray.500' ml='4' />)
              }
            </Heading>
            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Novo usuário
              </Button>
            </Link>
          </Flex>

          {
            isLoading ? (
              <Flex justify='center'>
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify='center'>
                <Text>Erro ao obter usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme='whiteAlpha'>
                  <Thead>
                    <Tr>
                      <Th px={['3', '3', '6']} color='gray.300' width='8'>
                        <Checkbox colorScheme='pink' />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideScreen && <Th>Data de cadastro</Th>}
                      <Th width={['3', '3', '6']}></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      data.map((user) => (
                        <Tr key={user.id}>
                          <Td px={['3', '3', '6']}>
                            <Checkbox colorScheme='pink' />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight='bold'>{user.name}</Text>
                              <Text fontSize='sm'>{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideScreen && <Td>{user.createdAt}</Td>}
                          <Td>
                            {
                              isWideScreen
                                ? <Button
                                  as='a'
                                  size='sm'
                                  fontSize='sm'
                                  colorScheme='purple'
                                  leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                >
                                  Editar
                                </Button>
                                : <IconButton
                                  size='sm'
                                  colorScheme='purple'
                                  borderRadius='6'
                                  aria-label='Edit user'
                                  icon={<Icon as={RiPencilLine} />}
                                  fontSize='16'
                                />
                            }
                          </Td>
                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  );
}
