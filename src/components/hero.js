import React from 'react';
import { Flex } from "@chakra-ui/core";
import SearchField from './SearchField';


const Hero = ({ params, onParamChange }) => (
  <Flex justifyContent="center"  alignItems="center">
    <SearchField params={params} onParamChange={onParamChange} />
  </Flex>
);


export default Hero