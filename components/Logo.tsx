import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className=" flex-shrink-0 pl-4 pr-4">
      <img
        src="images/logo2.png" // Replace with the actual path to your image
        alt="Will wants art logo"
        // Adjust size as needed
        height="50"
        width="50"
      />
    </Link>
  );
};

export default Logo;
