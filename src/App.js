import React from 'react';
import Header from "./components/Header";
import { theme, ThemeProvider, CSSReset, ColorModeProvider, Box} from "@chakra-ui/core";
// import SearchField from './components/SearchField';
import Results from './components/Results';
import Hero from './components/hero'

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};


function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Box as='div' className='intro-effect-fadeout modify'>
          <Header />
          <Hero />
          {/* <SearchField /> */}
          <Results />

        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
