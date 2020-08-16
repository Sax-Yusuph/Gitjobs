import React from "react";
import Header from "./Header";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";

function About() {
  return (
    <>
      <Box as="div" className="intro-effect-fadeout modify" pb={3}>
        <Header />
        <Box p={12} h="80vh" textAlign="center">
          <Heading size="lg">About This App</Heading>
          <Text size="md" m="auto" textAlign="center">
            Gitjobs is a job aggregator built with react and chakra-ui. it posts
            job listings for software developers, and it consumes the github
            jobs API.
            <p style={{marginTop: "5px"}}>Version: 1.0.0</p>
          </Text>
        </Box>
      </Box>
      <Flex
        justify="center"
        align="center"
        color="gray.50"
        py={5}
        bg="gray.700"
        shadow="xl"
      >
        Designed with &#10084; Sax-Yusuph. All rights Reserved. &copy;{" "}
        {new Date().getFullYear()}
      </Flex>
    </>
  );
}

export default About;
