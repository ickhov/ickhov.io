import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";
import { GrowAnimation, FadeAnimation, StyledLayout } from "../components";

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

enum EmploymentType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Internship = "Internship",
}

interface IRawExperience {
  title: string;
  startMonth: Month;
  startYear: number;
  endMonth: Month | "Present";
  endYear: number | "Present";
  location: string;
  tasks: string[];
  type: EmploymentType;
  company: string;
}

interface IExperience {
  title: string;
  start: string;
  end: string;
  location: string;
  tasks: string[];
  duration: number;
  durationStr: string;
  type: EmploymentType;
  company: string;
}

const Experience = () => {
  const delay = 400;
  const [experience, setExperience] = React.useState<IExperience[]>([]);
  const data: IRawExperience[] = React.useMemo(
    () => [
      {
        title: "Software Engineer II",
        startMonth: Month.Nov,
        startYear: 2022,
        endMonth: "Present",
        endYear: "Present",
        location: "Sacramento, California (Remote)",
        tasks: [],
        type: EmploymentType.FullTime,
        company: "College Board",
      },
      {
        title: "Software Engineer",
        startMonth: Month.Feb,
        startYear: 2021,
        endMonth: Month.Nov,
        endYear: 2022,
        location: "Sacramento, California",
        tasks: [
          "Manage multiple frontend (React & Next.js) and backend (Node.js) projects written in TypeScript",
          "Design and implement user interfaces for React & Next.js projects using MUI library",
          "Develop RESTful and GraphQL APIs using Node.js, TypeScript, and PostgreSQL",
          "Deploy websites, APIs, and microservices on Ubuntu servers using Docker images",
          "Perform code reviews and provide meaningful feedback to improve code maintainability",
        ],
        type: EmploymentType.FullTime,
        company: "RL Liquidators",
      },
      {
        title: "Junior Application Developer",
        startMonth: Month.May,
        startYear: 2019,
        endMonth: Month.Sep,
        endYear: 2020,
        location: "Davis, California",
        tasks: [
          "Wrote production-level Java and Swift code under supervision in an agile development team",
          "Fixed bugs, implemented new features, and updated deprecated APIs in the UC Davis Mobile Android and iOS apps",
          "Designed and updated user interfaces (UIs) for the UC Davis Mobile Android and iOS apps using the Material Design guidelines",
        ],
        type: EmploymentType.PartTime,
        company: "UC Davis Information and Educational Technology",
      },
      {
        title: "Web Development Intern",
        startMonth: Month.May,
        startYear: 2019,
        endMonth: Month.Sep,
        endYear: 2019,
        location: "Davis, California",
        tasks: [
          "Developed web pages UIs for a multi-page ASP.NET web application using C#, HTML, and CSS",
          "Wrote a custom authentication flow that generates a login token for a web app using C#",
          "Implemented a custom SQL database APIs to access data for multiple web pages using C#",
        ],
        type: EmploymentType.Internship,
        company: "University of California, Davis",
      },
      {
        title: "Technology Associates",
        startMonth: Month.Sep,
        startYear: 2018,
        endMonth: Month.May,
        endYear: 2019,
        location: "Davis, California",
        tasks: [
          "Maintained and update the official CCCD website using JavaScript, HTML, CSS, and jQuery",
          "Updated CCCD membership databases weekly using MySQL Workbench",
          "Fixed technical issues around the office",
        ],
        type: EmploymentType.PartTime,
        company: "California Center-Co-op Development",
      },
      {
        title: "Web Development Intern",
        startMonth: Month.Jun,
        startYear: 2018,
        endMonth: Month.Sep,
        endYear: 2018,
        location: "Davis, California",
        tasks: [
          "Maintained and update the official CCCD website using JavaScript, HTML, CSS, and jQuery",
          "Integrated PayPal into a web app using JavaScript, HTML, and CSS for an online payment feature",
          "Developed an authentication flow for a web app using JavaScript, HTML, CSS, and jQuery",
        ],
        type: EmploymentType.PartTime,
        company: "California Center-Co-op Development",
      },
      {
        title: "Computer Graphics Tutor",
        startMonth: Month.Apr,
        startYear: 2018,
        endMonth: Month.Jun,
        endYear: 2018,
        location: "Davis, California",
        tasks: [
          "Provided help to students with their Java assignments every Monday and Wednesday",
        ],
        type: EmploymentType.PartTime,
        company: "University of California, Davis",
      },
      {
        title: "Computer Science Tutor",
        startMonth: Month.Sep,
        startYear: 2017,
        endMonth: Month.Jun,
        endYear: 2018,
        location: "Davis, California",
        tasks: [
          "Assisted college students with C, C++, and Python programming assignments",
          "Hosted review sessions for Computer Science courses",
          "Reviewed class materials when requested by students",
        ],
        type: EmploymentType.PartTime,
        company: "University of California, Davis",
      },
      {
        title: "Computer Science Tutor",
        startMonth: Month.Mar,
        startYear: 2017,
        endMonth: Month.Jun,
        endYear: 2017,
        location: "Davis, California",
        tasks: [
          "Traveled to multiple middle schools to teach students the basics of coding",
        ],
        type: EmploymentType.PartTime,
        company: "CS4K",
      },
    ],
    []
  );

  // calculate the durations using the month and year of start and end date
  const calculateDuration = (
    startMonth: Month,
    startYear: number,
    endMonth: Month,
    endYear: number
  ) => {
    const monthDiff = endMonth - startMonth;
    const yearDiff = endYear - startYear;
    return yearDiff * 12 + monthDiff;
  };

  const formatDuration = (totalDurationsInMonths: number) => {
    const months = totalDurationsInMonths % 12;
    const years = Math.floor(totalDurationsInMonths / 12);
    const monthStr = months > 1 ? "months" : "month";
    const yearStr = years > 1 ? "years" : "year";

    // use totalMonths to see if we need to display year
    if (totalDurationsInMonths < 11)
      return `${totalDurationsInMonths} ${monthStr}`;
    return `${years} ${yearStr} ${months} ${monthStr}`;
  };

  // calculate total full-time experience
  const calculateFullTime = React.useCallback(() => {
    const items = experience.filter(
      (item) => item.type === EmploymentType.FullTime
    );
    const totalMonths = items.reduce((sum, item) => sum + item.duration, 0);
    return totalMonths;
  }, [experience]);

  // reformat and calculate some of the data without hardcoding them
  React.useEffect(() => {
    const temp = data.map((item) => {
      const {
        title,
        startMonth,
        startYear,
        endMonth,
        endYear,
        location,
        tasks,
        type,
        company,
      } = item;
      let duration = 0;
      if (endMonth === "Present" && endYear === "Present") {
        const today = new Date();
        duration = calculateDuration(
          startMonth,
          startYear,
          today.getUTCMonth(),
          today.getUTCFullYear()
        );
      } else
        duration = calculateDuration(
          startMonth,
          startYear,
          endMonth as Month,
          endYear as number
        );
      const start = `${Month[startMonth]} ${startYear}`;
      const end =
        endMonth === "Present" ? "Present" : `${Month[endMonth]} ${endYear}`;
      return {
        title,
        start,
        end,
        location,
        tasks,
        duration,
        durationStr: formatDuration(duration),
        type,
        company,
      };
    });
    setExperience([...temp]);
  }, [data]);

  return (
    <StyledLayout>
      <GrowAnimation timeout={{ enter: delay }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          TL;DR
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay}>
        <Typography>
          I have <b>{formatDuration(calculateFullTime())}</b> of{" "}
          <b>full-time</b> SWE experience and <b>2 years 3 months</b> of{" "}
          <b>part-time/internship</b> SWE experience.
        </Typography>
      </GrowAnimation>
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 2}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, marginTop: (theme) => theme.spacing(2) }}
        >
          Experience
        </Typography>
      </GrowAnimation>
      {/* Computer screen view */}
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 3}>
        <Timeline
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          {experience.map((item, index) => (
            <FadeAnimation
              key={`computer-view-experience-${item.title}-${index}`}
              timeout={{ enter: delay }}
              delay={delay * index}
            >
              <TimelineItem key={`${item.title}-${index}`}>
                <TimelineOppositeContent>
                  <Typography>
                    {item.start} - {item.end} &#8226; {item.durationStr}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography
                    color={(theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[300]
                    }
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    color={(theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[300]
                    }
                  >
                    {item.location} &#8226; {item.type}
                  </Typography>
                  {item.tasks.map((task, index) => (
                    <Typography key={`${item.title}-task-${index}`}>
                      &#8226; {task}
                    </Typography>
                  ))}
                </TimelineContent>
              </TimelineItem>
            </FadeAnimation>
          ))}
        </Timeline>
      </GrowAnimation>
      {/* Mobile view */}
      <GrowAnimation timeout={{ enter: delay }} delay={delay * 3}>
        <Timeline
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          {experience.map((item, index) => (
            <FadeAnimation
              key={`mobile-view-experience-${item.title}-${index}`}
              timeout={{ enter: delay }}
              delay={delay * index}
            >
              <TimelineItem key={`${item.title}-${index}`}>
                <TimelineOppositeContent sx={{ display: "none" }} />
                <TimelineSeparator>
                  <TimelineDot />
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography
                    color={(theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[300]
                    }
                  >
                    {item.company}
                  </Typography>
                  <Typography>
                    {item.start} - {item.end} &#8226; {item.durationStr}
                  </Typography>
                  <Typography
                    color={(theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[300]
                    }
                  >
                    {item.location} &#8226; {item.type}
                  </Typography>
                  {item.tasks.map((task, index) => (
                    <Typography key={`${item.title}-task-${index}`}>
                      &#8226; {task}
                    </Typography>
                  ))}
                </TimelineContent>
              </TimelineItem>
            </FadeAnimation>
          ))}
        </Timeline>
      </GrowAnimation>
    </StyledLayout>
  );
};

export default Experience;
