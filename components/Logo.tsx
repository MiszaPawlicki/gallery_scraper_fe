import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className=" flex-shrink-0 pl-4 pr-4">
      <img
        src="images/full_logo.png" // Replace with the actual path to your image
        alt="Will wants art logo"
        // Adjust size as needed
        height="75"
        width="75"
      />
    </Link>
  );
};

export default Logo;
