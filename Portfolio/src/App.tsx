import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Stack spacing={3}>
        <Navigation />
        <Intro/>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Stack>
    </>
  );
}

export default App;
