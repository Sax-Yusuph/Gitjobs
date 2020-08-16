import React, { useState } from "react";
import Header from "./components/Header";
import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box,
  Flex,
} from "@chakra-ui/core";
import useFetchJobs from "./hooks/useFetchJobs";
import Results from "./components/Results";
import Hero from "./components/hero";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

function App() {
  const [params, setParams] = useState({});
  const [jobTitle, setJobtitle] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(newParams) {
    setPage(1);
    setJobtitle(newParams);
    setParams((prevParams) => {
      return { ...prevParams, ...newParams };
    });
  }
  return (
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Box as="div" className="intro-effect-fadeout modify" pb={3}>
          <Header />
          <Hero params={params} onParamChange={handleParamChange} setParams={setParams} />
          <Results
            loading={loading}
            jobTitle={jobTitle}
            jobs={jobs}
            error={error}
            page={page}
            hasNextPage={hasNextPage}
            setPage={setPage}
          />
        </Box>
        <Flex justify="center" align="center" color="gray.50" py={5} bg="gray.600" shadow="xl"> 
            Designed with &#128151; Sax-Yusuph. All rights Reserved. &copy; {new Date().getFullYear()}
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
