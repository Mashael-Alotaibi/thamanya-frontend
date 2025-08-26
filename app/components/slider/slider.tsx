"use client";
import React, { useCallback } from "react";
import Card from "../card/card";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./slider.module.css";
import Image from "next/image";
import { IData } from "@/app/interfaces/IRequest";
interface props {
  data: IData[];
  title: string;
}

const Slider = ({ data, title }: props) => {
  const options = {
    loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div>
      <div className="flex justify-between">
        <div className={classes.header}>
          <h1>Trending {title} in all genres</h1>
          <p>The most popular {title} overall now. Last updated 3 hours ago.</p>
        </div>
        <div className="flex">
          <button onClick={() => scrollPrev()}>
            <Image
              className={classes.img}
              src="/svg/arrow.svg"
              alt="arrow"
              width={18}
              height={18}
            />
          </button>
          <button onClick={() => scrollNext()}>
            <Image
              className={`${classes.img} rotate-180`}
              src="/svg/arrow.svg"
              alt="arrow"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
      <div className={classes.embla} ref={emblaRef}>
        <div className={classes.emblaContainer}>
          {/* Your carousel slides go here */}
          {data?.map((item: IData, indx: number) => (
            <Card item={item} key={indx} indx={indx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
