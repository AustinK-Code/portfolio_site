import { Box, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <Box sx={{border:1, borderColor:'error.main'}}>
      <Typography variant="h2"> Skills</Typography>
      <Typography variant="body1" sx={{ pt: 1 }}>
        Here are some of my skills: Java, Python, JavaScript, React, HTML, CSS, PEGA.
      </Typography>
    </Box>
  );
};

export default Skills;
