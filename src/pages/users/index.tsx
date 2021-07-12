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
  Spinner,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isFetching } = useUsers(currentPage);

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(id: string) {
    await queryClient.prefetchQuery(['user', id], async () => {
      const response = await api.get(`users/${id}`);
      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutos
    });
  }

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
            <NextLink href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Novo usuário
              </Button>
            </NextLink>
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
                      data.users.map((user) => (
                        <Tr key={user.id}>
                          <Td px={['3', '3', '6']}>
                            <Checkbox colorScheme='pink' />
                          </Td>
                          <Td>
                            <Box>
                              <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                <Text fontWeight='bold'>{user.name}</Text>
                              </Link>
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

                <Pagination
                  totalCount={data.totalCount}
                  page={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  );
}
