import { Button } from "@chakra-ui/react";

interface PageItemProps {
  pageNumber: number;
  isCurrentPage?: boolean;
  onPageChange: (page: number) => void;
}

export function PageItem({ isCurrentPage = false, pageNumber, onPageChange }: PageItemProps) {
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
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}