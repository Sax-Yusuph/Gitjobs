import React from "react";
import Header from "./Header";
import { Flex, Heading } from "@chakra-ui/core";

function About() {
  return (
    <Flex flexDir="column" overflow="hidden" minH="100vh">
      <Header />
      <Flex m="auto" p={5} textAlign="center" flexDir="column">
        <Heading size="lg">About This App</Heading>
        <p>
          Gitjobs is a job aggregator built with react and chakra-ui. it posts
          job listings for software developers, and it currently consumes the
          github jobs API. other features would be added in the future versions
          <p style={{ marginTop: "5px" }}>Version: 1.0.0</p>
        </p>
      </Flex>
      <Flex
        justify="center"
        justifySelf="flex-end"
        wrap="wrap"
        align="center"
        color="gray.50"
        textAlign="center"
        p={5}
        bg="gray.700"
        shadow="xl"
      >
        Designed with &#10084; Sax-Yusuph. All rights Reserved. &copy;{" "}
        {new Date().getFullYear()}
      </Flex>
    </Flex>
  );
}

export default About;
