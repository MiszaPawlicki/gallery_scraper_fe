"use client";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isBordered
      className="justify-start "
    >
      <NavbarBrand className="flex-grow-0">
        <Logo />
      </NavbarBrand>
      <NavbarContent className="sm:flex flex-wrap items-center  gap-4 pl-20">
        {navigationConfig.map((link: NavigationLink, index: number) => (
          <NavbarItem key={index} isActive={pathname === link.href}>
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
