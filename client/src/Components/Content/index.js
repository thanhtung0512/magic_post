import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import SideBar from "../SideBar";
import ContentPage from "../ContentPage";
import style from './Content.module.css'

const Content = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleNavItemClick = (navItem, isSideBarOpen) => {
    setActiveNavItem(navItem);
    setIsSideBarOpen(isSideBarOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.SideBar}>
        <SideBar
          userRole="companyLeader"
          activeNavItem={activeNavItem}
          onNavItemClick={handleNavItemClick}
          isSideBarOpening={isSideBarOpen}
        />
      </div>
      <div className={style.ContentPage}>
        <ContentPage
          title={activeNavItem}
        //   flex="1"
          isSideBarOpening={isSideBarOpen}
        />
      </div>
    </div>
  );
};
export default Content;
