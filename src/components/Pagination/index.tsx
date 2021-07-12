import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PageItem } from "./PageItem";

interface PaginationProps {
  totalCount: number;
  perPage?: number;
  page?: number;
  siblingsCount?: number;
  onPageChange?: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, i) => from + i + 1)
    .filter((p) => p > 0);
}

export function Pagination({
  page = 1,
  perPage = 10,
  siblingsCount = 1,
  totalCount,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCount / perPage);

  const previousPages = page > 1
    ? generatePagesArray(page - 1 - siblingsCount, page - 1)
    : [];

  const nextPages = page < lastPage
    ? generatePagesArray(page, Math.min(page + siblingsCount, lastPage))
    : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt={8}
      justify='space-between'
      align='center'
      spacing={['3', '6']}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCount}</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {
          page > 1 + siblingsCount && (
            <>
              <PageItem pageNumber={1} onPageChange={onPageChange} />
              {
                page > 2 + siblingsCount && (
                  <Text color='gray.300' width='8' textAlign='center'>
                    ...
                  </Text>
                )
              }
            </>
          )
        }
        {
          previousPages.length > 0 && previousPages.map((page) => (
            <PageItem key={page} pageNumber={page} onPageChange={onPageChange} />
          ))
        }
        <PageItem pageNumber={page} isCurrentPage onPageChange={onPageChange} />
        {
          nextPages.length > 0 && nextPages.map((page) => (
            <PageItem key={page} pageNumber={page} onPageChange={onPageChange} />
          ))
        }
        {
          page + siblingsCount < lastPage && (
            <>
              {
                page + 1 + siblingsCount < lastPage && (
                  <Text color='gray.300' width='8' textAlign='center'>
                    ...
                  </Text>
                )
              }
              <PageItem pageNumber={lastPage} onPageChange={onPageChange} />
            </>
          )
        }
      </Stack>
    </Stack>
  );
}