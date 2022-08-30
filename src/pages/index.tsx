import { StyledAppBar } from "../components";
export { default as Experience } from "./experience";
export { default as Home } from "./home";

const Main = () => {
  const menu = [
    {
      label: "About",
      dest: "/",
    },
    {
      label: "Experience",
      dest: "experience",
    },
  ];

  return (
    <StyledAppBar
      title={"Iev Chhoung Khov"}
      menu={menu}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    />
  );
};

export default Main;
