import { Paper, Typography } from "@mui/material";

import c from "../assets/Languages/c-sharp.svg";
import css from "../assets/Languages/css-3.svg";
import dotNet from "../assets/Languages/dotnet.svg";
import html from "../assets/Languages/html-5.svg";
import java from "../assets/Languages/java.svg";
import javascript from "../assets/Languages/javascript.svg";
import pega from "../assets/Languages/Pegasystems-Logo.wine.svg";
import postgress from "../assets/Languages/postgresql.svg";
import postman from "../assets/Languages/postman-icon.svg";
import react from "../assets/Languages/react.svg";

const logoList = [
  { id: 1, src: c, alt: "C" },
  { id: 2, src: css, alt: "CSS" },
  { id: 3, src: dotNet, alt: ".NET" },
  { id: 4, src: html, alt: "HTML" },
  { id: 5, src: java, alt: "Java" },
  { id: 6, src: javascript, alt: "JavaScript" },
  { id: 7, src: pega, alt: "PEGA" },
  { id: 8, src: postgress, alt: "Postgress" },
  { id: 9, src: postman, alt: "Postman" },
  { id: 10, src: react, alt: "React" }
]

const Skills = () => {
  return (
    <Paper elevation={8} sx={{borderRadius:4}}>
      <Typography variant="h2" sx={{marginTop:3}}> Skills</Typography>
      <Paper elevation={8} sx={{ margin:8,marginTop:2 , backgroundColor: "#212121"}}>
        {logoList.map((logo) => (
          <img key={logo.id} src={logo.src} alt={logo.alt} style={{ width: 100, height: 100, margin:50 }} />
        ))}
      </Paper>
    </Paper>
  );
};

export default Skills;
