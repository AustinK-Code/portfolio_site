import { Box, Button, Container, Typography } from '@mui/material'

const Intro = () => {
  return (
    <Box sx={{border:1, borderColor:'error.main'}}>
    <Typography variant='h1' >Hello I'm <Typography display="inline" variant='h1' color="red">Austin</Typography>, a software developer</Typography>
    </Box>
  )
}

export default Intro