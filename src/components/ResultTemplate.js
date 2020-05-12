import React from 'react';
import { Box, Avatar, Text, Flex, Badge, Divider, Button, useColorMode } from '@chakra-ui/core'

const ResultTemplate = () => {
    const { colorMode } = useColorMode()
    const bgColor ={ light: 'white', dark: 'gray.300'}

    return ( 
        <Box p='5' rounded='lg' shadow='2xl' className='hvr-float-shadow'>
            <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                    <Text className='text' fontSize='lg'  >
                        Senior Product Designer
                    <Badge float='right' ml='5' variantColor="green" variant='subtle' rounded='lg' px='2' py='1'>
                        Remote
                    </Badge>
                    </Text>
                    <Text fontSize="sm" >Google</Text>
                </Box>
            </Flex>
            <Divider />
            <Text mb='3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Enim nisi ratione aut magnam commodi et eos, consequuntur 
                voluptatem, quae iste mollitia dolorem veniam
                quia, incidunt dolor voluptate molestias sit obcaecati.
            </Text>
            <Button width='100%' variant='solid' color='gray.800' bg={bgColor[colorMode]} shadow='lg'>Apply Now</Button>
        </Box>
     );
}
 
export default ResultTemplate