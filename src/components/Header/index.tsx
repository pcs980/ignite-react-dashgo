import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useDrawer } from '../../contexts/DrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useDrawer();
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      maxWidth={1480}
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {
        !isWideScreen && (
          <IconButton
            aria-label='Open navigation menu'
            icon={<Icon as={RiMenuLine} />}
            fontSize='24'
            variant='unstyled'
            onClick={onOpen}
            mr='2'
          >

          </IconButton>
        )
      }
      <Logo />
      {
        isWideScreen && <SearchBox />
      }
      <Flex
        align='center'
        ml='auto'
      >
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
}