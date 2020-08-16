import React from "react";
import {
  Box,
  useDisclosure,
  Alert,
  Avatar,
  Text,
  Flex,
  Badge,
  Divider,
  Button,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  AlertTitle,
} from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

const ResultTemplate = ({ job }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const bgColor2 = { light: "white", dark: "white" };
  const color = { light: "gray.700", dark: "gray.100" };
  const color2 = { light: "purple.800", dark: "gray.100" };
  const modalColor1 = { light: "gray.800", dark: "#FFAF30" };
  const modalColor2 = { light: "gray.500", dark: "#gray.700" };
  return (
    <>
      <Flex
        p="5"
        bg={bgColor[colorMode]}
        rounded="md"
        shadow="xl"
        className="hvr-float-shadow"
        overflow="hidden"
        flexDir="column"
        height="376px"
        border="1px"
        borderColor="gray.200"
      >
        <Flex align="flex-start" justify="flex-start">
          <Avatar
            src={job.company_logo}
            name={job.company}
            size="lg"
            objectFit="contain"
          />
          <Flex ml="3" flexDir="column" flexGrow={1}>
            <Text className="text" fontWeight="bold" fontSize="lg">
              {job.title}
            </Text>
            <Flex flexDir="row" justify="space-between">
              <Text fontSize="sm">
                <a href={job.company_url}>{job.company}</a>
              </Text>
              <Badge
                ml="2"
                variantColor="green"
                variant="subtle"
                rounded="lg"
                alignSelf="center"
                isTruncated
                px="2"
                py="1"
                style={{ maxWidth: "100px" }}
              >
                {job.location}
              </Badge>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Text mb="3" overflow="hidden" flexGrow={1} color={color[colorMode]}>
          <div style={{ wordBreak: "break-all" }}>
            <ReactMarkdown source={job.description} />
          </div>
        </Text>
        <Button
          width="100%"
          variant="solid"
          color="gray.800"
          py={3}
          bg={bgColor2[colorMode]}
          shadow="lg"
          justifySelf="flex-end"
          onClick={onOpen}
        >
          View Details
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <ModalOverlay />
        <ModalContent px="2%" py="2%">
          <ModalHeader color={color2[colorMode]} fontSize="xl">
            {job.title}
            <Box as="p" color={modalColor1[colorMode]} fontSize="sm">
              {job.company}
            </Box>
            <Box as="p" color={modalColor2[colorMode]} fontSize="sm">
              {job.location} &bull; {job.type}
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={color[colorMode]}>
            <ReactMarkdown source={job.description} />
            <Alert
              status="success"
              variant="left-accent"
              m={2}
              flexDir="column"
              wrap="wrap"
            >
              <AlertTitle fontSize="lg" mt={4} mb={1}>
                How to Apply
              </AlertTitle>

              <div style={{ wordBreak: "break-all" }}>
                <ReactMarkdown source={job.how_to_apply} />
              </div>
            </Alert>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Hide details
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResultTemplate;
