import { Box, Container, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import GameHub from "../Images/GameHub.png";


const Projects = () => {
  return (
    <>
      <Stack spacing={5} sx={{border:1, borderColor:'error.main'}}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2">Projects</Typography>
          <Typography variant="body1" sx={{ pt: 1 }}>
            Here are some of the projects I have worked on:
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid md={6}>
            <Container>
              <Typography variant="h5">Project 1</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Description of Project 1
              </Typography>
            </Container>
          </Grid>
          <Grid md={6}>
            <Paper elevation={3}><img src="src\Images\GameHub.png" alt="game hub site" height="100%" width="100%" /></Paper>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Projects;
