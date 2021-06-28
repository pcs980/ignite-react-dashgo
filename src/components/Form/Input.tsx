import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputElement: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, name, label, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel id={name} htmlFor='password'>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        size='lg'
        _hover={{ bgColor: 'gray.900' }}
        {...rest}
      />

      {
        !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )
      }
    </FormControl>
  );
}

export const Input = forwardRef(InputElement);
