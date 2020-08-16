import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = { light: "rgba(4,9,110,0.95)", dark: "purple.800" };
  const color = { light: "gray.50", dark: "tomato" };

  return (
    <Box px="5%" bg={bgColor[colorMode]} shadow="xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem 0"
        color="gray.50"
        {...props}
      >
        <Flex align="center" mr={5} flexGrow="1" color={color[colorMode]}>
          <Heading as="h1" size="lg" className="logo" mt="0">
           <NavLink to="/">GitJobs{" "}</NavLink> 
            <Text as="span" fontSize="4xl">
              .
            </Text>
          </Heading>
        </Flex>

        <Heading
          as="p"
          size="sm"
          className="logo"
          mt="0"
          mr="4"
          mb={-2}
          color={color[colorMode]}
        >
          <NavLink to="/about">About</NavLink>
        </Heading>
        <a href="https://github.com/sax-yusuph">
          <Box as={FaGithub} size="1.3rem" color={color[colorMode]} mr="4" />
        </a>
        <a href="https://linkedin.com/in/yusuf-shamsondeen-8953a31a0">
          {" "}
          <Box as={FaLinkedin} size="1.3rem" color={color[colorMode]} mr="4" />
        </a>
        <IconButton
          size="lg"
          icon={colorMode === "light" ? "moon" : "sun"}
          variant="unstyled"
          onClick={toggleColorMode}
          color={color[colorMode]}
        />
      </Flex>
    </Box>
  );
};

export default Header;
