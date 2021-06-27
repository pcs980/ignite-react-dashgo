import { createContext, ReactNode, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useEffect } from "react";

interface DrawerProviderProps {
  children: ReactNode;
}

type DrawerContextData = UseDisclosureReturn;

const DrawerContext = createContext({} as DrawerContextData);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <DrawerContext.Provider value={disclosure}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
