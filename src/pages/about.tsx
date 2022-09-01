import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FadeAnimation, GrowAnimation, StyledLayout } from "../components";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import React from "react";

interface IAbout {
  title: string;
  description: string;
  summary: string;
}

const About = () => {
  const delay = 400;
  const items: IAbout[] = [
    {
      title: "Current Position",
      description: "Software Engineer @ RL Liquidators",
      summary: `
        I'm currently working as a Software Engineer at RL Liquidators doing Full Stack development.
        Previously, I worked as Junior Application Developer for UC Davis Information and Educational Technology
        (IET) doing mobile development in Swift and Java. I did a lot of internships locally during college since
        I didn't have a car to travel around. You can learn more about my past experiences in the Experience page.
      `,
    },
    {
      title: "Tech Stack",
      description:
        "TypeScript, JavaScript, HTML5/CSS3, Python, Swift, Java, Node.js, React, Django, AWS, DigitalOcean, Nginx, Docker",
      summary: `
        I have work experience using TypeScript, JavaScript, Python, Swift, Java, Node.js, React, and Django.
        I can program in a lot of other languages but have the most experiences with JavaScript and TypeScript
        at the moment. I also designed and implemented APIs, microservices, and websites and deployed them on
        Linux machines using Nginx as the web server. I prefer to use AWS and DigitalOcean as my prefered choice
        of cloud platforms. To ensure easy redeployment, I usually create Docker images for APIs and websites
        and deploy them in docker containers.
      `,
    },
    {
      title: "Education",
      description:
        "B.S. in Computer Science from the University of California, Davis (UC Davis)",
      summary: `
        I'm a first-generation college graduated from UC Davis with a degree in Computer Science. I graduated with
        a 3.55/4.00 GPA in March 20, 2020, and I was on the Dean's Honors List in 2019 and 2020.
      `,
    },
  ];
  const [expandedList, setExpandedList] = React.useState<boolean[]>(
    Array(items.length).fill(false)
  );

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedList((prev) => {
        const temp = [...prev];
        temp[index] = isExpanded;
        return temp;
      });
    };

  return (
    <StyledLayout>
      <GrowAnimation timeout={{ enter: delay }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          About Me
        </Typography>
      </GrowAnimation>
      {items.map((item, index) => (
        <FadeAnimation
          key={`about-accordian-${item.title}-${index}`}
          timeout={{ enter: delay }}
          delay={delay * (index + 1)}
        >
          <Accordion
            expanded={expandedList[index]}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreRoundedIcon />}
              aria-controls={`about-item-content-${index}`}
              id={`about-item-header-${index}`}
            >
              <Typography fontWeight={700} sx={{ width: "33%", flexShrink: 0 }}>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.summary}</Typography>
            </AccordionDetails>
          </Accordion>
        </FadeAnimation>
      ))}
    </StyledLayout>
  );
};

export default About;
