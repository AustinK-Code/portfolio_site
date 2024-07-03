import {
  Box,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import GameHub from "../assets/GameHub.png";

const Projects = () => {
  return (
    <>
      <Paper elevation={8} sx={{ borderRadius: 4 }}>
        <Stack spacing={5} sx={{margin:8, marginTop:2}}>
          {/* writing at the top */}
            <Typography variant="h2">Projects</Typography>
          {/* Project Card */}
          <Paper elevation={8} sx={{ backgroundColor: "#212121" }}>
            <Grid container spacing={2} alignItems="center">
              {/* Description side */}
              <Grid item xs={4}>
                <Container>
                  <Typography variant="h5">Game Hub</Typography>
                  <Typography variant="body1" sx={{ pt: 1 }}>
                    A videogame discovery application using React, Chakra UI,
                    Vite, and the RAWG.io API. Deployed on Vercel.
                    <br />
                    <Link
                      href="https://game-hub-six-eta.vercel.app/"
                      target="_blank"
                      variant="inherit"
                      underline="hover"
                    >
                      Here is a link
                    </Link>
                  </Typography>
                </Container>
              </Grid>
              {/* Picture */}
              <Grid item xs={8}>
                <Box
                  sx={{ margin: 4}}
                >
                  <img
                   border-radius="50%"
                    src={GameHub}
                    alt="game hub site"
                    height="100%"
                    width="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      </Paper>
    </>
  );
};

export default Projects;
