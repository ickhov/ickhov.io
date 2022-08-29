import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledAppBar } from "../components";
import Home from "./home";

const Main = () => {
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
    <BrowserRouter>
      <StyledAppBar title={"Iev Chhoung Khov"} menu={menu}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="experience" element={<Home />} />
            <Route path="projects" element={<Home />} />
            <Route path="education" element={<Home />} />
          </Route>
        </Routes>
      </StyledAppBar>
    </BrowserRouter>
  );
};

export default Main;
