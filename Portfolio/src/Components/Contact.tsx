import { Box, Typography } from "@mui/material"

const Contact = () => {
  return (
          <>
          <Box sx={{border:1, borderColor:'error.main'}}>
              <Typography variant="h2">Contact</Typography>
              <Typography variant="body1" sx={{pt:1}}>
                Send me an email at:
              </Typography>
          </Box>
        </>
    );
};

export default Contact