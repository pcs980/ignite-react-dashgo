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
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type UserFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const userFormSchema = yup.object().shape({
  name: yup.string()
    .required('Nome é obrigatório'),
  email: yup.string()
    .required('Endereço de e-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup.string()
    .required('A senha é obrigatória')
    .min(5, 'A senha deve ter pelo menos 3 caracteres')
    .max(20, 'A senha deve ter até 20 caracteres'),
  confirmPassword: yup.string()
    .oneOf([null, yup.ref('password')], 'Repita a sua senha'),
});

export default function Createuser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(userFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<UserFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values, event);
  };

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
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['4', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input
                name='name'
                label='Nome'
                error={errors.name}
                {...register('name')}
              />
              <Input
                name='surname'
                label='Sobrenome'
                error={errors.surname}
                {...register('surname')}
              />
              <Input
                name='email'
                type='email'
                label='E-mail'
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['4', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label='Senha'
                error={errors.password}
                {...register('password')}
              />
              <Input
                name='confirmPassword'
                type='password'
                label='Confirmar senha'
                error={errors.confirmPassword}
                {...register('confirmPassword')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>
                  Cancelar
                </Button>
              </Link>
              <Button
                type='submit'
                colorScheme='pink'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
