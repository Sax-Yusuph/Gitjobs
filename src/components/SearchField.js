import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputLeftElement,
  InputRightElement,
  Icon,
  InputGroup,
  Flex,
  Divider,
  useColorMode,
} from "@chakra-ui/core";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchField = ({ params, onParamChange }) => {
  const [job, setJob] = useState({ description: "", location: "" });
  const [errMessage, setErrMessage] = useState("");
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "purple.900" };
  const color = { light: "gray.300", dark: "orange.800" };

  const handleInput = (e) => {
    setJob({
      ...job,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = () => {
    onParamChange(job);
    if (!job.description || !job.location) {
      setErrMessage("input fields must not be empty");
      console.log(errMessage);
    }
  };

  const clearInput = (e) => {
    switch (e.target.id) {
      case "clearName":
        setJob({
          ...job,
          description: "",
        });
        break;
      case "clearLocation":
        setJob({
          ...job,
          location: "",
        });
        break;
      default:
        break;
    }
  };

  return (
    <Box px="5%" py="5" bg={bgColor[colorMode]} width="100%" className="search">
      <Flex bg="white" p="3" justify="space-between"  wrap="wrap" flexDir={["column", null, "row"]}>
        <InputGroup flexGrow="1" width={["100%", "auto"]}>
          <InputLeftElement
            color="gray.300"
            fontSize="1em"
            children={<Icon name="search" color={color[colorMode]} />}
          />
          <Input
            id="description"
            value={job.description}
            color={color[colorMode]}
            variant="flushed"
            placeholder="enter job title"
            onChange={handleInput}
          />
          <InputRightElement
            color={color[colorMode]}
            children={
              <Icon
                id="clearName"
                name="small-close"
                color={color[colorMode]}
                onClick={clearInput}
                cursor="pointer"
              />
            }
          />
        </InputGroup>
        <Divider orientation="vertical" borderColor="gray.300" borderWidth="2px" mx="5" />
        <InputGroup flexGrow="1" width={["100%", "auto"]} mt={[3, 2, 0]}>
          <InputLeftElement
            color={color[colorMode]}
            fontSize="1.2em"
            children={<Box as={FaMapMarkerAlt} color={color[colorMode]} />}
          />
          <Input
            id="location"
            value={job.location}
            color={color[colorMode]}
            variant="flushed"
            placeholder="enter location"
            onChange={handleInput}
          />
          <InputRightElement
            color={color[colorMode]}
            children={
              <Icon
                id="clearLocation"
                name="small-close"
                // color={color[colorMode]}
                _hover={{bg: "gray.300"}}
                onClick={clearInput}
                cursor="pointer"
                
              />
            }
          />
        </InputGroup>
        <Button
          bg="#FFAF30"
          size="lg"
          ml={[3, 4, 2]}
          shadow="lg"
          marginTop={[2, 4, 0]}
          onClick={handleSubmit}
         className="search-btn"
          
        >
          Find job
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchField;
