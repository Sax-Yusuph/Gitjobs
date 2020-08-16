import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About"
import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
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
        <Router>
            <Route exact path="/">
              <Flex flexDir="column" overflow="hidden" minH="100vh">
                <Header />
                <Hero
                  params={params}
                  onParamChange={handleParamChange}
                  setParams={setParams}
                />
                <Results
                  loading={loading}
                  jobTitle={jobTitle}
                  jobs={jobs}
                  error={error}
                  page={page}
                  hasNextPage={hasNextPage}
                  setPage={setPage}
                />
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
            </Route>
            <Route exact path="/about" component={About}>
            </Route>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
