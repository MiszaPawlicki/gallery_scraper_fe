// TODO - only the set active index needs to use client, find clever way to do this

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import navigationConfig, { NavigationLink } from "@/config/navigationConfig";
import Logo from "@/components/Logo";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // Explicitly define the type for activeIndex

  const handleItemClick = (index: number) => {
    // Explicitly define the type for index
    setActiveIndex(index);
  };

  return (
    <Navbar isBordered className="justify-start ">
      <NavbarBrand className="flex-grow-0">
        <Logo />
        <p className="font-bold text-inherit">Art Map-It</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex flex-wrap items-center  gap-4 pl-20">
        {navigationConfig.map((link: NavigationLink, index: number) => (
          <NavbarItem
            className="hover:underline"
            key={index}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
          >
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
