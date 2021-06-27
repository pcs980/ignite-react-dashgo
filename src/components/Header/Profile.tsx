import { Avatar, Box, Flex, Text, } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align='center'
    >
      <Box mr='4' textAlign='right'>
        <Text>Paulo César</Text>
        <Text color='gray.300' fontSize='small'>
          paulocsmg@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Paulo César' src='https://github.com/pcs980.png'
      />
    </Flex>
  );
}
