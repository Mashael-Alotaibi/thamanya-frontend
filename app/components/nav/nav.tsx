import React from "react";
import classes from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={`${classes.nav} nav`}>
      <div className={classes.navLogo}>
        <Link href={"/"}>
          <Image src="/svg/logo.svg" alt="arrow" width={45} height={49.5} />
        </Link>
      </div>

      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link className={`${classes.navLink} ${classes.active}`} href={"/"}>
            <Image
              className={classes.navImage}
              src={"/svg/home-color.svg"}
              width={18}
              height={16}
              alt="home"
            />
            Home
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.navLink} href={"/discover"}>
            <Image
              className={classes.navImage}
              src={"/svg/discover-line.svg"}
              width={18}
              height={16}
              alt="home"
            />
            Discover
          </Link>
        </li>
        <li className={`${classes.navItem} ${classes.sectionHeader}`}>
          Your Stuff
        </li>
        <li className={classes.navItem}>
          <Link className={classes.navLink} href={"/my-queue"}>
            <Image
              className={classes.navImage}
              src={"/svg/my-queue-line.svg"}
              width={18}
              height={16}
              alt="home"
            />
            My Queue
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.navLink} href={"/my-podcasts"}>
            <Image
              className={classes.navImage}
              src={"/svg/my-podcasts-line.svg"}
              width={18}
              height={16}
              alt="home"
            />
            My podcasts
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link className={classes.navLink} href={"/recents"}>
            <Image
              className={classes.navImage}
              src={"/svg/recents-line.svg"}
              width={18}
              height={16}
              alt="home"
            />
            Resents
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
