import { StyledAppBar } from "../components";


const Home = () => {

  const menu = [
    {
      label: "Home",
      onClick: () => {},
    },
    {
      label: "Experience",
      onClick: () => {},
    },
    {
      label: "Projects",
      onClick: () => {},
    },
    {
      label: "Education",
      onClick: () => {},
    },
  ];

  return (
    <StyledAppBar
      title={"Iev Chhoung Khov"}
      menu={menu}
      sx={{ padding: (theme) => theme.spacing(3) }}
    ></StyledAppBar>
  );
};

export default Home;
