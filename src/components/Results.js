import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Flex,
  useColorMode,
} from "@chakra-ui/core";
import ResultTemplate from "./ResultTemplate";
import ErrorImg from "../assets/error.svg";
import LoadingImg from "../assets/search.gif";
const Results = ({ loading, jobs, error, jobTitle }) => {
  const [searchDescription, setSearchDescription] = useState("");
  const { colorMode } = useColorMode();
  const color = { light: "gray.500", dark: "gray.100" };
  const color2 = { light: "purple.800", dark: "gray.100" };

  useEffect(() => {
    if (jobTitle.length !== undefined) {
      const { description, location } = jobTitle;
      const text =
        location.toUpperCase() === "REMOTE"
          ? `${jobs.length} ${location} ${description} jobs found`
          : `${jobs.length} ${description} jobs found in ${location}`;
      setSearchDescription(text);
    }
  }, [jobTitle, jobs.length]);

  const output =
    jobs.length !== 0 && searchDescription !== "" ? (
      <Text mb="5" fontWeight="bold" color={color2[colorMode]} className="text">
        {searchDescription}
      </Text>
    ) : jobs.length !== 0 ? (
      <Text mb="5" fontWeight="bold" color={color2[colorMode]} className="text">
        {jobs.length} jobs found.
      </Text>
    ) : error ? (
      ""
    ) : loading ? (
      <Text mb="5" fontWeight="bold" color={color2[colorMode]} className="text">
        Searching jobs...
      </Text>
    ) : (
      <Text mb="5" fontWeight="bold" color={color2[colorMode]} className="text">
        opps! no jobs found. Please try another search <br/>
        <span style={{color: "#A0AEC0"}}> for location, try keywords like remote </span> <br/>
        <span style={{color: "#A0AEC0"}}> for job title, try keywords like java, javascript, php, ruby </span> 
      </Text>
    );

  return (
    <Box px="5%" py="12" pos="relative" className="results" minH="50vh">
      {output}
      {loading && (
        <Flex flexDir="column" align="center">
          <img
            src={LoadingImg}
            alt="loading"
            style={{ width: "320px", height: "300px" }}
          />
          <Heading size="md" color={color[colorMode]}>
            Loading...
          </Heading>
        </Flex>
      )}
      {error && (
        <Flex flexDir="column" align="center">
          <img
            src={ErrorImg}
            alt="error"
            style={{ width: "320px", height: "300px" }}
          />
          <Heading size="md" color="gray.500">
            Oops! Error fetching jobs please try refreshing
          </Heading>
        </Flex>
      )}
      <SimpleGrid minChildWidth="17rem" spacing="30px">
        {jobs.map((job) => {
          return <ResultTemplate key={job.id} job={job} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Results;
