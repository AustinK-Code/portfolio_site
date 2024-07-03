import { Paper, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <div id="aboutme"></div>
      <Paper elevation={8} sx={{ borderRadius: 4 }} className="AboutMe">
        <Typography variant="h2" sx={{ mt: 3 }}>
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ pt: 1, mb: 4, ml: 3, mr: 3 }}
          textAlign="left"
        >
          <p>
            I am a dedicated and experienced software developer with a diverse
            skill set across multiple technologies. My career has been focused
            on government contracting, where I apply my expertise to develop
            robust and efficient software solutions. As a veteran, I bring a
            strong sense of discipline, dedication, and commitment to my work.
            My background has instilled in me the values of teamwork,
            perseverance, and a mission-focused approach, all of which I carry
            into my professional endeavors.
          </p>{" "}
          <p>
            I am passionate about continuous learning and staying updated with
            the latest advancements in the tech world. This drive for knowledge
            fuels my ability to innovate and deliver high-quality results in
            every project I undertake.
          </p>{" "}
          <p>
            Outside of my professional life, I am a proud family man and father
            of three wonderful children. Balancing my career with family life is
            a priority for me, and I cherish the moments spent with my loved
            ones.
          </p>
        </Typography>
      </Paper>
    </>
  );
};

export default AboutMe;
