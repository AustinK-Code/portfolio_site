import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <Box sx={{border:1, borderColor:'error.main'}}>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="body1" sx={{pt:1}}>
            I am a software developer with a passion for creating and building
            things. I have experience with a variety of technologies and languages,
            including JavaScript, Python, and Java. I am always looking to learn new
            things and expand my skillset. In my free time, I enjoy playing video
            games, reading, and spending time with my family and friends.
          </Typography>
      </Box>
    </>
  );
};

export default AboutMe;
