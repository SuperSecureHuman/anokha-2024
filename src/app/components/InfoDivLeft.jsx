"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, description, src }) => {
  const container = useRef(null);
  const phoneContainer = useRef(null);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "-25% 55%",
        end: "125% 20%",
        scrub: true,
      },
    });

    //Animation for container opacity
    tl1.from(
      container.current,
      {
        opacity: 0,
        duration: 2,
      },
      "=-1"
    );

    // Animation for the Title
    tl1.from(
      container.current.children[0],
      {
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: "power3.out",
      },
      "=-0.3"
    );

    // Animation for each image
    tl1.from(container.current.children[1], {
      opacity: 0,
      y: 100,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });

    tl1
      .from(container.current.children[2], {
        opacity: 0,
        y: 100,
        scale: 0.5,
        duration: 0.3,
        ease: "power3.out",
      })
      .from(
        container.current.children[3],
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.15"
      )
      .from(
        container.current.children[4],
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.15"
      )
      .from(
        container.current.children[5],
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.15"
      );

    // Animation for the Description
    tl1.from(container.current.children[6], {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    // Reverse animations in tl2

    tl1.to(
      container.current.children[5],
      {
        opacity: 0,
        y: -100,
        scale: 0.5,
        duration: 0.3,
        ease: "power3.out",
      },
      ">1"
    );

    tl1.to(container.current.children[1], {
      opacity: 0,
      y: -100,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });

    tl1.to(container.current.children[4], {
      opacity: 0,
      y: -100,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });

    tl1.to(container.current.children[2], {
      opacity: 0,
      y: -100,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });

    tl1.to(container.current.children[6], {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl1.to(container.current.children[3], {
      opacity: 0,
      y: -100,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });

    tl1.to(container.current.children[0], {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "power3.out",
    });
    //Animation for container opacity
    tl1.to(
      container.current,
      {
        opacity: 0,
        duration: 2,
      },
      "=-1"
    );
  });
  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: phoneContainer.current,
        start: "-10% 50%", // Adjust the start value to start the animation earlier
        end: "120% 10%",
        scrub: true,
      },
    });

    // Animation for the container opacity
    tl1.from(
      phoneContainer.current,
      {
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,0.7,false)",
      },
      "=-1"
    );

    // Animation for the Title
    tl1.from(
      phoneContainer.current.children[0], // Selecting the first child element (title)
      {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power3.out",
      },
      "=-0.3"
    );

    // Animation for each image
    for (let i = 1; i <= 3; i++) {
      // Looping through the image elements
      tl1.from(
        phoneContainer.current.children[i], // Selecting the image elements
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          duration: 0.5,
          ease: "power3.out",
        },
        `=-${0.15 * (3 - i + 1)}` // Delaying each image animation
      );
    }

    // Animation for the Description
    tl1.from(
      phoneContainer.current.children[4], // Selecting the description element
      {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    tl1.to({}, { duration: 3 });

    // Reverse animations
    for (let i = 3; i >= 1; i--) {
      // Looping through the image elements in reverse order
      tl1.to(
        phoneContainer.current.children[i], // Selecting the image elements
        {
          opacity: 0,
          y: -100,
          scale: 0.5,
          duration: 0.5,
          ease: "power3.out",
        },
        `+=${0.1}`
      );
    }

    // Animation for the container opacity (reversed)
    tl1.to(
      phoneContainer.current,
      {
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,0.7,false)",
      },
      "+=1" // Delaying the reverse animation
    );
  });

  return (
    <div>
      <div className="pc-view lg:flex xl:flex md:hidden sm:hidden h-screen items-center justify-center sticky top-10 font-roobert">
        <div
          className="flex flex-col relative -top-20 h-[73vh] w-[65vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl transform origin-top my-10 top-5"
          ref={container}
        >
          <div className="flex absolute top-[35%] -left-[12%] text-white text-6xl z-10 rounded-xl">
            {title}
          </div>
          <div className="flex absolute w-[225px] h-[225px] -top-[13%] -left-[15%] rounded-xl shadow-custom-down">
            <Image
              src={src[0]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="flex absolute w-[125px] h-[125px] top-[5%] left-[12%] rounded-xl shadow-custom-down">
            <Image
              src={src[4]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="flex absolute w-[250px] h-[250px] top-[55%] -left-[10%] rounded-xl shadow-custom-up">
            <Image
              src={src[2]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="flex absolute w-[225px] h-[225px] top-[50%] left-[20%] rounded-xl shadow-custom-up">
            <Image
              src={src[3]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="flex absolute w-[200px] h-[200px] -top-[5%] left-[30%] rounded-xl shadow-custom-down">
            <Image
              src={src[1]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="grid relative grid-cols-[55%,40%] w-full h-full text-white text-md">
            <div className="flex flex-col justify-center items-center"></div>
            <div className="flex justify-center items-center h-full">
              <div className="flex justify-center items-center text-justify bg-gray-600 bg-opacity-10 rounded-xl p-6 mt-6 mb-10">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-view xl:hidden lg:hidden md:flex sm:flex h-screen items-center justify-center sticky overflow-hidden top-10 pt-10">
        <div
          className="flex flex-col relative -top-20 h-[80vh] w-[90vw] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg rounded-xl transform origin-top my-10 top-5"
          ref={phoneContainer}
        >
          <div className="flex relative top-[8%] text-white text-4xl z-10 w-full justify-center flex-wrap">
            {title}
          </div>
          <div
            className="flex absolute w-[150px] h-[150px] -top-[15%] -left-[0%] rounded-xl shadow-custom-down "
            style={{ transform: "rotate(-24deg)" }}
          >
            <Image
              src={src[0]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="flex absolute w-[75px] h-[75px] -top-[15%] left-[50%] rounded-xl shadow-custom-up rotate-12">
            <Image
              src={src[2]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div
            className="flex absolute w-[100px] h-[100px] top-[0%] left-[70%] rounded-xl shadow-custom-down"
            style={{ transform: "rotate(24deg)" }}
          >
            <Image
              src={src[1]}
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl brightness-75"
            />
          </div>
          <div className="grid relative grid-rows-[10%,90%] w-full h-full text-white text-sm">
            <div className="flex flex-col justify-center items-center"></div>
            <div className="flex justify-center items-center h-full my-4 mt-2">
              <div className="flex justify-center items-center text-justify rounded-xl p-6 mt-6 mb-10">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
