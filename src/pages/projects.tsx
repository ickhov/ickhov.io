import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { GrowAnimation, StyledAnchor, StyledLayout } from "../components";
import BikeSharingVisual from "../static/images/bike-sharing-visual.png";
import MonowealthAppIcon from "../static/images/monowealth-app-icon.png";
import NookerooAppIcon from "../static/images/nookeroo-app-icon.png";
import UCDavisMobileAndroidImg from "../static/images/uc-davis-mobile-android.png";
import UCDavisMobileIOSImg from "../static/images/uc-davis-mobile-ios.png";
import UnitransAppIcon from "../static/images/unitrans-app-icon.png";

interface IProjects {
  title: string;
  description: string;
  role: string;
  img: string;
  repoURL?: string;
  websiteURL?: string;
}

const Projects = () => {
  const delay = 400;
  const items: IProjects[] = [
    {
      title: "Nookeroo",
      description: `
        A React Native Android and iOS mobile app that serves as a guide and progress tracker
        for Animal Crossing New Horizons players. It is created using Javascript, React Native,
        and React Components & Hooks.
      `,
      role: `
        I implemented the app using React Native and deployed it to the Google Play Store and Apple App Store.
        Unfortunately, due to my busy schedule, I decided to take it down as I no longer have time to
        maintain the project. However, you can still view the source code on my GitHub.
      `,
      img: NookerooAppIcon,
      repoURL: "https://github.com/ickhov/Nookeroo",
    },
    {
      title: "UC Davis Mobile (iOS)",
      description: `
        UC Davis Mobile is the University of California, Davis' official iOS mobile application.
        It gives students access to the official UC Davis' news feed known as Aggiefeed,
        Unitrans' bus information, parking locations, and other relevant information.
      `,
      role: `
        I fixed bugs, implemented new features, and updated deprecated APIs in the app. I also
        designed and updated user interfaces (UIs).
      `,
      img: UCDavisMobileIOSImg,
      websiteURL: "https://apps.apple.com/us/app/uc-davis-mobile/id455098573",
    },
    {
      title: "UC Davis Mobile (Android)",
      description: `
        UC Davis Mobile is the University of California, Davis' official Android mobile application.
        It gives students access to the official UC Davis' news feed known as Aggiefeed,
        Unitrans' bus information, parking locations, and other relevant information.
      `,
      role: `
        I fixed bugs, implemented new features, and updated deprecated APIs in the app. I also
        designed and updated user interfaces (UIs). I played a big part in revamping most of the UIs
        that you see in this app today.
      `,
      img: UCDavisMobileAndroidImg,
      websiteURL:
        "https://play.google.com/store/apps/details?id=edu.ucdavis.mobile.aggie&hl=en_US",
    },
    {
      title: "Monowealth (Android)",
      description: `
        Monowealth is a minimalist financial tracking Android app. The app features a simple and minimalistic
        user interface that allows you to easily record your income and expenses. You can also self-categorize
        your finances and see an overview of your finance for the month.
      `,
      role: `
        I implemented the app using Java and Android Studio and deployed it to the Google Play Store.
        Unfortunately, due to my busy schedule, I decided to take it down as I no longer have time to
        maintain the project. However, you can still view the source code on my GitHub.
      `,
      img: MonowealthAppIcon,
      repoURL: "https://github.com/ickhov/MonowealthAndroid",
    },
    {
      title: "Unitrans Prototype",
      description: `
        Unitrans is a student-run UC Davis bus service. This app was meant to demo some changes that should be
        implemented into their official Android mobile app.
      `,
      role: `
        I implemented the app using Java and Android Studio and used Google Cloud Platform, specifically 
        the Google Map API and Directions API to simulate a scenerio.
      `,
      img: UnitransAppIcon,
      repoURL: "https://github.com/ickhov/UnitransPrototype",
    },
    {
      title: "Bike Sharing Visualization",
      description: `
        This visualization showcase a bike sharing data (Ford GoBike) in 2015 from Kaggle.
        I am unable to make the source code public as it contains some sensitive data. However, 
        you can view the project directly on a website. Give it about 30 seconds to load the big data.
      `,
      role: `
        I implemented the app using Javascript, HTML5, CSS3, D3 and Leaflet. 
      `,
      img: BikeSharingVisual,
      websiteURL:
        "https://ickhov.github.io/projects/bike-share/bike-share.html",
    },
  ];
  return (
    <StyledLayout>
      <GrowAnimation timeout={{ enter: delay }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          Projects
        </Typography>
      </GrowAnimation>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <GrowAnimation
            key={`projects-${item.title}-${index}`}
            timeout={{ enter: delay }}
            delay={delay * (index + 1)}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <CardMedia
                    component="img"
                    height="260"
                    image={item.img}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="body2">Role: {item.role}</Typography>
                  </CardContent>
                </div>
                {(item.repoURL || item.websiteURL) && (
                  <CardActions>
                    {item.repoURL && (
                      <StyledAnchor
                        href={item.repoURL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repository
                      </StyledAnchor>
                    )}
                    {item.websiteURL && (
                      <StyledAnchor
                        href={item.websiteURL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </StyledAnchor>
                    )}
                  </CardActions>
                )}
              </Card>
            </Grid>
          </GrowAnimation>
        ))}
      </Grid>
    </StyledLayout>
  );
};

export default Projects;
