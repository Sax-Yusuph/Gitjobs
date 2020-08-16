import React from 'react';
import { Box, Heading, Flex, Text, useColorMode, IconButton } from "@chakra-ui/core";
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Header = (props) => {
    const { toggleColorMode, colorMode } = useColorMode();
    const bgColor = { light: "rgba(4,9,110,0.95)", dark: "purple.800" };
    const color = { light: "gray.50", dark: "tomato" };

    return (
        <Box px='5%' bg={bgColor[colorMode]} shadow="xl"> 
            <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              padding="1rem 0"
              color="gray.50"
              {...props}
            >
              <Flex align="center" mr={5} flexGrow='1' color={color[colorMode]} >
                <Heading as="h1" size="lg" className='logo' mt='0' >
                  GitJobs <Text as='span' fontSize='4xl'>.</Text>
                </Heading>
              </Flex>
        
        
              <Box as={FaGithub} size="1.3rem" color={color[colorMode]}  mr='4' />
              <Box as={FaLinkedin} size="1.3rem" color={color[colorMode]} mr='4'/>
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