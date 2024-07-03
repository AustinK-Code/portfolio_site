import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <Paper elevation={8} sx={{borderRadius:4}}>
      <Typography variant="h2"> Skills</Typography>
      <Typography variant="body1" sx={{ pt: 1 }}>
        Here are some of my skills: Java, Python, JavaScript, React, HTML, CSS, PEGA.
      </Typography>
    </Paper>
  );
};

export default Skills;
