import { Button } from "@chakra-ui/react";

interface PageItemProps {
  pageNumber: number;
  isCurrentPage?: boolean;
}

export function PageItem({ pageNumber, isCurrentPage = false }: PageItemProps) {
  if (isCurrentPage) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bgColor='gray.700'
      _hover={{ bg: 'gray.500' }}
    >
      {pageNumber}
    </Button>
  );
}