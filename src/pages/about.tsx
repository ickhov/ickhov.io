import { Typography } from "@mui/material";
import { FadeAnimation, GrowAnimation, StyledLayout } from "../components";

const About = () => {
  const delay = 400;
  const description = `
    Hi, my name is Iev, pronounced "I've". I'm a first-generation college graduated from
    UC Davis with a degree in Computer Science. I'm currently a Software Engineer at RL Liquidators
    doing Full Stack development. I have work experience using TypeScript, JavaScript, Python, Swift, Java,
    Node.js, React, and Django. I can program in a lot of other languages but have the most experiences with
    JavaScript and TypeScript at the moment. I also designed and implemented APIs, microservices, and
    websites and deployed them on Linux servers hosted on AWS and DigitalOcean.
  `;
  return (
    <StyledLayout>
      <GrowAnimation timeout={{ enter: delay }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          TL;DR
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay}>
        <Typography>
          <b>Current Position:</b> Software Engineer &#64; RL Liquidators
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 2}>
        <Typography>
          <b>Tech Stack:</b> TypeScript&#44; JavaScript&#44; Python&#44;
          Swift&#44; Java&#44; Node.js&#44; React&#44; Django&#44; AWS&#44;
          DigitalOcean
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 3}>
        <Typography>
          <b>College:</b> University of California, Davis (UC Davis)
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 4}>
        <Typography>
          <b>Degree:</b> Bachelor of Science in Computer Science
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 5}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontWeight: 700, marginTop: (theme) => theme.spacing(2) }}
        >
          About Me
        </Typography>
      </GrowAnimation>
      <FadeAnimation timeout={{ enter: delay }} delay={delay * 6}>
        <Typography>{description}</Typography>
      </FadeAnimation>
    </StyledLayout>
  );
};

export default About;
