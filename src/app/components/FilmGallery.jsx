import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FilmGallery = () => {
  const filmRow1 = [
    "https://i.imgur.com/kWBGAkz.jpg",
    "https://i.imgur.com/CTW97kM.jpg",
    "https://i.imgur.com/wRjbQu6.jpg",
    "https://i.imgur.com/IuJyj2l.jpg",
    "https://i.imgur.com/dlS1TaE.jpg",
    "https://i.imgur.com/aIbdm2i.jpg",
    "https://i.imgur.com/7r8gQN5.jpg",
  ];
  const filmRow2 = [
    "https://i.imgur.com/EWdfaYj.jpg",
    "https://i.imgur.com/qI4UYV7.jpg",
    "https://i.imgur.com/0IvtFJG.jpg",
    "https://i.imgur.com/uEtxZMb.jpg",
    "https://i.imgur.com/uieA2G8.jpg",
    "https://i.imgur.com/AbUjXL8.jpg",
    "https://i.imgur.com/59VI4bH.jpg",
  ];

  const row1 = useRef(null);
  const row2 = useRef(null);
  const Phrow1 = useRef(null);
  const Phrow2 = useRef(null);
  const container = useRef(null);
  const phoneContainer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(row1.current, {
      x: -450,
      duration: 2,
    });
    tl.to(
      row2.current,
      {
        x: 450,
        duration: 2,
      },
      "-=2"
    );
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneContainer.current,
        start: "top 20%",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(Phrow1.current, {
      x: -600,
      duration: 2,
    });
    tl.to(
      Phrow2.current,
      {
        x: 600,
        duration: 2,
      },
      "-=2"
    );
  });

  return (
    <div>
      <div className="pc-view z-10 sm:hidden md:hidden lg:block xl:block">
        <div className="overflow-hidden" ref={container}>
          <div
            className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] text-white my-3"
            ref={row1}
          >
            {filmRow1.map((src) => (
              <div
                className="flex relative justify-center items-center mx-2 h-full w-full"
                key={src}
              >
                <Image
                  src={src}
                  alt={`Film ${filmRow1.indexOf(src) + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
          <div
            className="grid grid-cols-7 gap-2 h-[40vh] w-[130vw] bg-[#121212] text-white my-3"
            ref={row2}
            style={{ marginLeft: "-30vw", overflowX: "hidden" }}
          >
            {filmRow2.map((src) => (
              <div
                className="flex relative justify-center items-center mx-2 h-full w-full"
                key={src}
              >
                <Image
                  src={src}
                  alt={`Film ${filmRow2.indexOf(src) + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-view z-10 sm:block md:block lg:hidden xl:hidden">
        <div className="overflow-hidden" ref={phoneContainer}>
          <div
            className="grid grid-cols-5 gap-2 h-[30vh] w-[270vw] text-white my-3"
            ref={Phrow1}
          >
            {filmRow1.slice(0, 5).map((src) => (
              <div
                className="flex relative justify-center items-center mx-2 h-full w-full"
                key={src}
              >
                <Image
                  src={src}
                  alt={`Film ${filmRow1.indexOf(src) + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
          <div
            className="grid grid-cols-5 gap-2 h-[30vh] w-[270vw] bg-[#121212] text-white my-3"
            ref={Phrow2}
            style={{ marginLeft: "-170vw", overflowX: "hidden" }}
          >
            {filmRow2.slice(0, 5).map((src) => (
              <div
                className="flex relative justify-center items-center mx-2 h-full w-full"
                key={src}
              >
                <Image
                  src={src}
                  alt={`Film ${filmRow2.indexOf(src) + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmGallery;
