import React, { useState }from 'react';
import { Box, Stack, Avatar, Text, Flex, Badge, Divider, Button } from '@chakra-ui/core'

const ResultTemplate = () => {
    const [hover, setHover] = useState(false)

    const hoverTheme = {
        variant: 'solid',
        variantColor: 'white',
        bg: 'purple.500',
        color: 'white'
    }

    const handleHover = (e)=> e.nativeEvent.type ==='mouseover' ? setHover(true) : setHover(false)

    return ( 
        <Box bg={hover ? hoverTheme.bg : 'white'} p='5' rounded='lg' shadow='xl' onMouseOver={handleHover} onMouseOut={handleHover}>
            <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                    <Text fontWeight="bold" color={hover ? hoverTheme.color : 'blue.800'}>
                        Senior Product Designer
                    <Badge float='right' ml='5' variantColor="purple" variant='subtle' rounded='lg' px='2'>
                        Remote
                    </Badge>
                    </Text>
                    <Text fontSize="sm" color={hover ? hoverTheme.color : 'gray.600'}>Google</Text>
                </Box>
            </Flex>
            <Divider />
            <Text color={hover ? hoverTheme.color : 'blue.800'} textAlign='justify' mb='3'>
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