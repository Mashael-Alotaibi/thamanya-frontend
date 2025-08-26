import React from "react";
import classes from "./header.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={`${classes.header} header`}>
      <div className={classes.navLogo}>
        <Link href={"/"}>
          <Image src="/svg/logo.svg" alt="arrow" width={45} height={49.5} />
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Header;
