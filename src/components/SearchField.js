import React, { useState } from 'react';
import { Box, Button, Input, InputLeftElement, InputRightElement, Icon, InputGroup, Flex, Divider, useColorMode } from '@chakra-ui/core'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SearchField = () => {
    const [job, setJob] = useState({name: '', category: ''})
    const [errMessage, setErrMessage] = useState('')
    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.200", dark: "purple.900" };
    const color = { light: "gray.300", dark: "orange.800" };

    const handleInput = (e)=>{
        setJob({
            ...job,
            [e.target.id]: e.target.value
        })

    }
    const handleSubmit = ()=>{
        if(job.name && job.category){
            console.log(job)
            setJob({name:'', category:''})
        }else{
            setErrMessage('input fields must not be empty')
            console.log(errMessage)
        }
    }

    const clearInput = (e)=>{
        switch (e.target.id) {
            case 'clearName':
                setJob({
                    ...job,
                    name: ''
                })
                break;
            case 'clearCategory':
                setJob({
                    ...job,
                    category:''
                })
            default:
                break;
        }
    }

    return ( 
        <Box px='12' py='5' bg={bgColor[colorMode]}>
            <Flex bg='white' p='3' justify='space-between' align='center' >
                <InputGroup flexGrow='1'>
                    <InputLeftElement color="gray.300" fontSize="1.2em" children={<Icon name="search" color={color[colorMode]} />} />
                    <Input id='name' value={job.name} color={color[colorMode]} variant="flushed" placeholder="enter job name" onChange={handleInput} />
                    <InputRightElement color={color[colorMode]} children={<Icon id='clearName' name='small-close' color={color[colorMode]} onClick={clearInput} />} />
                </InputGroup>
                <Divider orientation='vertical' borderColor='purple' mx='5'/>
                <InputGroup flexGrow='1' mr='3'>
                    <InputLeftElement color={color[colorMode]} fontSize="1.2em" children={<Box as={FaMapMarkerAlt} color={color[colorMode]} />} />
                    <Input id='category' value={job.category} color={color[colorMode]} variant="flushed" placeholder="enter category" onChange={handleInput}/>
                    <InputRightElement color={color[colorMode]} children={<Icon id='clearCategory'name='small-close' color={color[colorMode]} onClick={clearInput}/>} />
                </InputGroup>
                <Button variantColor='purple' size='lg' shadow='lg' onClick={handleSubmit}>
                    Find job
                </Button>
            </Flex>
        </Box>
     );
}
 
export default SearchField;