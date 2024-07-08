import {
  Box,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../assets/AK.png";
import linkedin from "../assets/Socials/linkedin-icon.svg";
import github from "../assets/Socials/github-icon.svg";

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  if (matches)
    return (
      <>
        <div id="contact"></div>
        <Paper elevation={8} sx={{ borderRadius: 4 }}>
          <Typography variant="h2">Contact Me!</Typography>
          <Stack
            direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ margin: 8 }}
          >
            {/* Bottom logo */}
            <img src={logo} alt="logo" style={{ width: 200, height: 200 }} />
            {/* Contact and socials */}
            <Box>
              <Stack
                spacing={2}
                justifyContent="space-evenly"
                alignItems="flex-start"
              >
                <Link
                  href="https://www.linkedin.com/in/austin-kinnard/"
                  target="_blank"
                  variant="inherit"
                  underline="hover"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: 50, height: 50 }}
                  />
                </Link>
                <Link
                  href="https://github.com/AustinK-Code"
                  target="_blank"
                  variant="inherit"
                  underline="hover"
                >
                  <img
                    src={github}
                    alt="github"
                    style={{ width: 50, height: 50 }}
                  />
                </Link>
                <Typography variant="h5">
                  Email:{" "}
                  <Link href="mailto:austink145@gmail.com" underline="hover">
                    austink145@gmail.com
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </>
    );
  if (!matches)
    return (
      <>
        <div id="contact"></div>
        <Paper elevation={8} sx={{ borderRadius: 4 }}>
          <Typography variant="h2" mt={3}>Contact Me!</Typography>
          <Stack
            direction="column"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: 8 }}
          >
            {/* Contact and socials */}
            <Box>
              <Stack
                spacing={2}
                justifyContent="space-evenly"
                alignItems="center"
              >
                {" "}
                {/* Bottom logo */}
                <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
                <Link
                  href="https://www.linkedin.com/in/austin-kinnard/"
                  target="_blank"
                  variant="inherit"
                  underline="hover"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: 50, height: 50 }}
                  />
                </Link>
                <Link
                  href="https://github.com/AustinK-Code"
                  target="_blank"
                  variant="inherit"
                  underline="hover"
                >
                  <img
                    src={github}
                    alt="github"
                    style={{ width: 50, height: 50 }}
                  />
                </Link>
                <Typography variant="h5">
                  Email:{" "}
                  <Link href="mailto:austink145@gmail.com" underline="hover">
                    austink145@gmail.com
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </>
    );
};

export default Contact;
