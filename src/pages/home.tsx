import { StyledAppBar } from "../components";


const Home = () => {

  const menu = [
    {
      label: "Create Product",
      onClick: () => {},
    },
    {
      label: "Logout",
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
