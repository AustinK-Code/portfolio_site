import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Stack spacing={8}>
        <Intro />
        <Navigation />
        <AboutMe />
        <Projects />
        <Contact />
      </Stack>
    </>
  );
}

export default App;
