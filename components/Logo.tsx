import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className=" flex-shrink-0 pl-4 pr-4">
      <img
        src="images/logo.png" // Replace with the actual path to your image
        alt="Art Map-It Logo"
        // Adjust size as needed
        height="36"
        width="36"
      />
    </Link>
  );
};

export default Logo;
