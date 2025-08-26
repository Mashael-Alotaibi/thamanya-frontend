import React from "react";
import classes from "./card.module.css";
import Link from "next/link";
import { IData } from "@/app/interfaces/IRequest";

interface props {
  item: IData;
  indx: number;
}
const Card = ({ item, indx }: props) => {
  return (
    <div className={classes.emblaSlide}>
      <Link className={classes.link} target="_blank" href="">
        <div className={classes.card}>
          {/* <div className={classes.img}></div> */}
          <img
            src={item.artworkUrl100}
            alt={`${item.trackCensoredName} image`}
            // width={233}
            // height={200}
          />

          <div className={classes.headerWrap}>
            <div className={classes.number}>#{indx + 1}</div>
            <div>
              <p className={`${classes.title} ${classes.truncate}`}>
                {item.trackCensoredName}
              </p>
              <p className={classes.author}>{item.artistName}</p>
            </div>
            {/* <div className={classes.dropMenu}>:</div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
