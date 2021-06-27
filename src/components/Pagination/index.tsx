import { Box, Button, Stack } from "@chakra-ui/react";
import { PageItem } from "./PageItem";

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt={8}
      justify='space-between'
      align='center'
      spacing={['3', '6']}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <PageItem pageNumber={1} />
        <PageItem pageNumber={2} isCurrentPage />
        <PageItem pageNumber={3} />
        <PageItem pageNumber={4} />
      </Stack>
   </Stack>
  );
}