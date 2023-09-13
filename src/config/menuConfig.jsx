import { AiFillCode, AiFillHome } from "react-icons/ai";

import { BsInfoSquareFill } from "react-icons/bs";

import { GiAchievement } from "react-icons/gi";

const menuConfig = {
  sideBarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Achievements",
      path: "/achievements",
      icon: <GiAchievement size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Info",
      path: "/info",
      icon: <BsInfoSquareFill size={30} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
