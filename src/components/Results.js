import React from 'react';
import{ SimpleGrid, Box, Text } from '@chakra-ui/core'
import ResultTemplate from './ResultTemplate';

const Results = () => {
    return ( 
        <Box px='12' pt='12'>
            <Text mb='5'fontWeight='bold' color='blue.800'>7 Product Designer Jobs Found</Text>
            <SimpleGrid minChildWidth="21rem" spacing="40px">
                <ResultTemplate />
                <ResultTemplate />
                <ResultTemplate />
                <ResultTemplate />
                <ResultTemplate />
                <ResultTemplate />
                <ResultTemplate />

            </SimpleGrid>
        </Box>
     );
}
 
export default Results;