import { Paper, Typography } from "@mui/material"

const Contact = () => {
  return (
          <>
          <Paper elevation={8} sx={{borderRadius:4}}>
              <Typography variant="h2">Contact</Typography>
              <Typography variant="body1" sx={{pt:1}}>
                Send me an email at:
              </Typography>
          </Paper>
        </>
    );
};

export default Contact