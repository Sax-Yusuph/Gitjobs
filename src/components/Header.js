import React ,{ useState } from 'react';
import { Box, Heading, Flex, Text, useColorMode, IconButton } from "@chakra-ui/core";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


const Header = (props) => {
    const { toggleColorMode, colorMode } = useColorMode();
    const bgColor = { light: "purple.500", dark: "purple.800" };
    const color = { light: "blue.900", dark: "tomato" };

    return (
        <Box px='12' bg={bgColor[colorMode]} shadow="xl"> 
            <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              padding="1rem"
              color="blue.900"
              {...props}
            >
              <Flex align="center" mr={5} flexGrow='1' color={color[colorMode]} >
                <Heading as="h1" size="lg" className='logo' mt='0' >
                  Flamingo <Text as='span' fontSize='4xl'>.</Text>
                </Heading>
              </Flex>
        
        
              <Box as={FaGithub} size="24px" color={color[colorMode]}  mr='4' />
              <Box as={FaLinkedin} size="24px" color={color[colorMode]} mr='4'/>
             <IconButton 
                size='lg'
                icon={colorMode=== 'light'? 'moon': 'sun'} 
                variant='unstyled' 
                onClick={toggleColorMode}
                color={color[colorMode]}   
              />
                

            </Flex>
        </Box>
     );
}
 
export default Header;