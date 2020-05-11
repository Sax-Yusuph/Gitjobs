import React ,{ useState } from 'react';
import { Box, Heading, Flex, Text, useColorMode, IconButton } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 5, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Box px='12' bg="white" shadow="xl"> 
            <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              padding="1rem"
              color="blue.800"
              {...props}
            >
              <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" >
                  Flamingo <Text as='span' color='blue.500' fontSize='4xl'>.</Text>
                </Heading>
              </Flex>
        
              <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
                <svg
                  fill="yellow"
                  width="15px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </Box>
        
              <Flex
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow="1"
              >
                <MenuItems>GitHub</MenuItems>
                <MenuItems>Medium</MenuItems>
                <MenuItems>LinkedIn</MenuItems>
              </Flex>
        
             <IconButton 
                display={{ sm: show ? "block" : "none", md: "block" }} 
                mt={{ base: 4, md: 0 }} 
                size='lg'
                icon={colorMode=== 'light'? 'moon': 'sun'} 
                variant='unstyled' 
                onClick={toggleColorMode}/>

            </Flex>
        </Box>
     );
}
 
export default Header;