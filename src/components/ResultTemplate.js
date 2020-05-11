import React from 'react';
import { Box, Avatar, Text, Flex, Badge, Divider, Button } from '@chakra-ui/core'

const ResultTemplate = () => {


    return ( 
        <Box p='5' rounded='lg' shadow='xl' className='card-link'>
            <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                    <Text fontSize='lg' fontWeight="bold" >
                        Senior Product Designer
                    <Badge float='right' ml='5' variantColor="purple" variant='subtle' rounded='lg' px='2' py='1'>
                        Remote
                    </Badge>
                    </Text>
                    <Text fontSize="sm"  className='text'>Google</Text>
                </Box>
            </Flex>
            <Divider />
            <Text mb='3' fontSize='sm' className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Enim nisi ratione aut magnam commodi et eos, consequuntur 
                voluptatem, quae iste mollitia dolorem veniam
                quia, incidunt dolor voluptate molestias sit obcaecati.
            </Text>
            <Button width='100%' variant='solid' shadow='lg'>Apply Now</Button>
        </Box>
     );
}
 
export default ResultTemplate