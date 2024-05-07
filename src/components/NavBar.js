"use client";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  BackupTable as BackupTableIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Create as CreateIcon,
  Percent as PercentIcon,
  Gamepad as GamepadIcon,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

const Navigation = () => {
  const navigation = [
    {
      name: "Live",
      link: "/live",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "Stats",
      link: "/stats",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "Search",
      link: "/search",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "Bets",
      link: "/bets",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "History",
      link: "/history",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "Transactions",
      link: "/transaction",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
  ];

  const handleLogout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    window.location.reload();
  };

  return (
    <div className="h-screen flex flex-col ">
      <div className="navbar-container bg-[#182c34] py-2 flex justify-center items-center z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="w-[95%] font-['Poppins'] text-white ">
          <Toolbar disableGutters>
            <div className="absolute left-0 flex flex-col">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/live"
                sx={{
                  // position: "absolute",
                  // left: 0,
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ADMIN CONTROL
              </Typography>
              {/* <p className="self-end text-xs italic">by Dom</p> */}
            </div>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "35px",
                margin: "0 50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navigation &&
                navigation.map((page, index) => (
                  <div
                    key={index}
                    className="text-xl flex text-white justify-center items-center font-bold"
                  >
                    {page.sublinks.length > 0 ? (
                      <Box
                        sx={{
                          flexGrow: 0,
                          cursor: "pointer",
                          borderRadius: "6px",
                        }}
                      >
                        <Tooltip>
                          <div
                            className="flex justify-center items-center gap-1 text-xl px-2 py-1 rounded-md transition ease-in-out"
                            onClick={page.open}
                          >
                            <p className="font-semibold select-none">
                              {page.name}
                            </p>
                            <div
                              className={`transition-transform duration-300 ease-in-out ${
                                page.anchor ? "rotate-180" : ""
                              }`}
                            >
                              <KeyboardArrowDownIcon
                                style={{ fontSize: "1.2rem" }}
                              />
                            </div>
                          </div>
                        </Tooltip>
                        <Menu
                          sx={{ mt: "45px" }}
                          id="menu-appbar"
                          anchorEl={page.anchor}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          open={Boolean(page.anchor)}
                          onClose={page.close}
                        >
                          {page.sublinks.map((item, subIndex) => (
                            <MenuItem key={subIndex} onClick={page.close}>
                              <Link to={item.link} className="text-xl w-full">
                                <div className="flex justify-center items-center gap-4 font-['Poppins'] w-full">
                                  {item.icon}
                                  <div className="text-base flex flex-col justify-start items-start font-semibold">
                                    {item.name}
                                    <p className="text-xs text-gray-500 font-light">
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    ) : (
                      <Link className="font-semibold" to={page.link}>
                        {page.name}
                      </Link>
                    )}
                  </div>
                ))}
            </Box>

            <div onClick={handleLogout} className="cursor-pointer">
              <LogoutIcon />
            </div>
          </Toolbar>
        </div>
      </div>
      <div className="outlet-container flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
