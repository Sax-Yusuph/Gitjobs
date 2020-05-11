import React from 'react';
import {Box, Button, Input, InputLeftElement, InputRightElement, Icon, InputGroup, Flex, Divider } from '@chakra-ui/core'

const SearchField = () => {
    return ( 
        <Box px='12' py='5' bg='gray.200'>
            <Flex bg='white' p='3' justify='space-between' align='center' >
                <InputGroup flexGrow='1'>
                    <InputLeftElement color="gray.300" fontSize="1.2em" children={<Icon name="search" color="blue.500" />} />
                    <Input variant="flushed" placeholder="enter job name" />
                    <InputRightElement color='gray.300' children={<Icon name='small-close' color ='blue.500'/>} />
                </InputGroup>
                <Divider orientation='vertical' borderColor='purple' mx='5'/>
                <InputGroup flexGrow='1' mr='3'>
                    <InputLeftElement color="gray.300" fontSize="1.2em" children={<Icon name="sarch" color="blue.500" />} />
                    <Input variant="flushed" placeholder="enter category" />
                    <InputRightElement color='gray.300' children={<Icon name='small-close' color ='blue.500'/>} />
                </InputGroup>
                <Button variantColor='purple' size='lg' shadow='lg'>
                    Find job
                </Button>
            </Flex>
        </Box>
     );
}
 
export default SearchField;