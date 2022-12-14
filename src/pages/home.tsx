import { Avatar, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { StyledLayout } from "../components";
import ProfilePic from "../static/images/iev-profile-pic.png";

const Home = () => {
  const theme = useTheme();
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isReverse, setIsReverse] = React.useState(false);
  const items = React.useMemo(
    () => [
      "Software Engineer.",
      "Food Lover.",
      "Boba Drinker.",
      "Problem Solver.",
      "Stargazer.",
    ],
    []
  );
  const [itemIndex, setItemIndex] = React.useState(0);
  const [fullText, setFullText] = React.useState(items[itemIndex]);

  // grab the text up until the specified index
  React.useEffect(() => {
    setText(fullText.slice(0, index));
  }, [index, fullText]);

  // update fullText based on itemIndex
  React.useEffect(() => {
    setFullText(items[itemIndex]);
  }, [items, itemIndex]);

  // add one letter to the text every 50 ms
  React.useEffect(() => {
    if (!isReverse) {
      if (index < fullText.length) {
        setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, 50);
      } else if (index === fullText.length)
        // delay the text delete
        setTimeout(() => {
          setIsReverse(true);
        }, 1000);
    }
  }, [isReverse, index, fullText]);

  // remove one letter form text every 50 ms
  React.useEffect(() => {
    if (isReverse) {
      if (index > 0)
        // remove a letter at a time
        setTimeout(() => {
          setIndex((prev) => prev - 1);
        }, 50);
      else if (index === 0) {
        // removed everything so move on to the next word
        setIsReverse(false);
        setItemIndex((prev) => {
          const next = prev + 1;
          if (next === items.length) return 0;
          return next;
        });
      }
    }
  }, [isReverse, index, items]);

  return (
    <StyledLayout>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt="Iev Khov"
          src={ProfilePic}
          sx={{
            width: 250,
            height: 250,
            border: `1px solid ${theme.palette.text.secondary}`,
          }}
        />
        <Typography
          gutterBottom
          variant="h3"
          fontFamily={"Bungee, cursive"}
          sx={{ marginTop: theme.spacing(3), textAlign: "center" }}
        >
          Hi&#44; I&#39;m Iev Chhoung Khov
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          fontFamily={"Bungee, cursive"}
          sx={{ marginTop: theme.spacing(3), textAlign: "center" }}
        >
          I'm a {text}
        </Typography>
      </Box>
    </StyledLayout>
  );
};

export default Home;
