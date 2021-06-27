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
  IconButton
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
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
              Usuários
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

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['3', '3', '6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                { isWideScreen && <Th>Data de cadastro</Th> }
                <Th width={['3', '3', '6']}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['3', '3', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Paulo César da Silva</Text>
                    <Text fontSize='sm'>paulocsmg@gmail.com</Text>
                  </Box>
                </Td>
                { isWideScreen && <Td>10 de Dezembro de 2020</Td> }
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
              <Tr>
                <Td px={['3', '3', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Paulo César da Silva</Text>
                    <Text fontSize='sm'>paulocsmg@gmail.com</Text>
                  </Box>
                </Td>
                { isWideScreen && <Td>10 de Dezembro de 2020</Td> }
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
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
