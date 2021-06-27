import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Createuser() {
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
        <Box flex='1' borderRadius={8} bg='gray.800' p={['4', '8']}>
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='name' label='Nome'/>
              <Input name='surname' label='Sobrenome'/>
              <Input name='email' type='email' label='E-mail'/>
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['4', '8']} w='100%'>
              <Input name='password' type='password' label='Senha'/>
              <Input name='confirmPassword' type='password' label='Confirmar senha'/>
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme='pink'>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
