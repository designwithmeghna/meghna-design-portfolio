"use client";

import { Navbar } from "flowbite-react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const onButtonClick = () => {
    fetch("assets/Meghna_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Meghna_Design_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 w-full z-10 mb-2 rounded-lg shadow-sm"
    >
      <Navbar.Brand as={Link} to="/" id="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800 dark:text-white cursor-pointer">
          Meghna Aggarwal
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="cursor-pointer" onClick={onButtonClick}>
          Download Resume
        </Navbar.Link>
        <Navbar.Link as={Link} to="/digital-resume" className="cursor-pointer">
          Digital Resume
        </Navbar.Link>
        {/* <Navbar.Link as={Link} to="/mini-games" className="cursor-pointer">
          Play Mini Games
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
