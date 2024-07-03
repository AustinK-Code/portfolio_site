import { Box, Typography } from "@mui/material";
import background from "../assets/black_material_ui_background_by_ministerkraft_dddraqt.png";

const Intro = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            height: "75vh",
            marginTop: 8,
            borderRadius: 4,
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box maxWidth="75vw">
            <Typography variant="h1">
              Hello I'm{" "}
              <Typography display="inline" variant="h1" color="red">
                Austin
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
