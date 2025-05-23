import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
gsap.registerPlugin(Draggable, InertiaPlugin);

const GlowingZig: React.FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set("#paint0_linear", {
      attr: {
        x1: "0%",
        x2: "0%",
        y1: "0%",
        y2: "0%",
      },
    });
    tl.to("#paint0_linear", {
      attr: {
        x1: "100%",
        x2: "20%",
        y1: "100%",
        y2: "93%",
      },
      duration: 1.5,
      delay: 0.8,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, []);
  return (
    <div>
      <svg
        id="eqLUlFBhrE81"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 45"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        height={100}
        width={200}
      >
        <path
          d="M39.944928,108.820394c66.086339,0,66.619294,0,66.086339,0q-.532955,0-.000001,17.489784h68.75111v0c0,0,0,0,0,0"
          transform="matrix(1 0 0-1-34.109077 141.765854)"
          fill="none"
          stroke="url(#paint0_linear)"
          stroke-width="1"
          height={100}
          width={200}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
            <stop stop-color="#2EB9DF"></stop>
            <stop offset="1" stopColor="#9E00FF" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Hero: React.FC = () => {
  const [isHover, setHover] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const xRef = useRef<HTMLSpanElement>(null);
  const resetAnimation = () => {
    if (!xRef.current) return;

    // Reset span content opacity and color
    gsap.to([".first", "#secondPart"], {
      opacity: 1,
      color: "#ededed",
      duration: 0.5,
    });

    gsap.to(xRef.current, {
      x: 0,
      y: 0,
      rotateY: 0,
      color: "#ededed",
    });

    gsap.to("#outer", {
      background: "#424242",
      backgroundPosition: "0% 50%",
      duration: 0.5,
      clearProps: "all", // resets inline styles added by GSAP
    });

    setIsAnimating(false);
  };

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setHover(true);
    if (!xRef.current) return;
    const tl = gsap.timeline();
    tl.from(xRef.current, {
      y: -40,
      rotateY: 180,
      duration: 0.75,
      ease: "bounce.Out",
    });
    gsap.to([".first", "#secondPart"], {
      opacity: 0,
    });
    tl.add([
      gsap.from(xRef.current, {
        x: -110,
      }),
      gsap.to(".first", {
        opacity: 1,
        stagger: 0.25,
      }),
    ]);
    tl.to("#secondPart", {
      opacity: 1,
      duration: 0.5,
    });
    tl.set(["#secondPart", ".first", "#xanim"], {
      color: "black",
    });
    tl.set("#outer", {
      background:
        "linear-gradient(120deg, #c0c0c0, #dcdcdc, #f5f5f5, #dcdcdc, #c0c0c0)",
      backgroundSize: "400% 400%",
    });

    tl.to("#outer", {
      backgroundPosition: "100% 50%",
      duration: 3,
      ease: "linear",
      repeat: -1,
    });

    tl.call(() => {
      setTimeout(() => {
        resetAnimation();
      }, 5000);
    });
  };

  useGSAP(() => {
    Draggable.create("#dragbox", {
      type: "x",
      bounds: "#dragBounds",
      // inertia: true,
      onDrag: function () {
        gsap.to("#dragPath h1", {
          opacity: 0,
        });
      },
      onDragEnd: function () {
        if (this.x < this.maxX) {
          gsap.to("#dragbox", {
            x: 0,
            y: 0,
          });
          gsap.to("#dragBounds h1", {
            opacity: 1,
          });
        } else {
          console.log("link click navigate");
        }
      },
    });
  }, []);

  useGSAP(()=>{
    gsap.to("#arrowSvg",{
      x:4,
      duration: 0.8,
      repeat: -1,
      ease: "power1.inOut"
    })
  },[])

  return (
    <section className="flex w-full h-screen items-center flex-col">
      <div className="sm:max-w-7xl w-full h-full sm:border border-[#49454e] border-double relative">
        <div className="z-10">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_20%,#000_70%,transparent_100%)]">
            <div className="absolute top-14 right-15 z-0 pointer-events-none ">
              <GlowingZig />
            </div>
          </div>
        </div>
        <div className="relative z-20 cursor-default">
          <h1
            className="text-[#ededed] sm:text-7xl text-4xl font-bold text-center leading-normal mt-[135px]"
            onMouseEnter={handleMouseEnter}
          >
            Sky rocket your productivity <br /> with{" "}
            <span
              id="outer"
              className="border border-blue-500 p-1 rounded-lg bg-[#424242] inline-block tracking-wide text-clip"
            >
              <span id="firstPart">
                <span className="first">1</span>
                <span className="first">0</span>
                <span className="first">0</span>
              </span>
              <span id="xanim" ref={xRef} className="inline-block">
                x
              </span>
              <span id="secondPart">Zone</span>
            </span>
          </h1>
          <div className="w-full flex justify-center items-center mt-22">
            <div
              id="dragPath"
              className="h-12 w-60 rounded-lg bg-black border-2 border-red-600 flex items-center justify-center relative overflow-hidden opacity-75 translate-x-0 px-1 py-1"
            >
              <div
                id="dragBounds"
                className="relative w-full h-full flex items-center"
              >
                <div
                  id="dragbox"
                  className="h-full w-11 rounded-md  bg-red-600 flex items-center justify-center absolute left-0"
                >
                  <span className="relative flex" id="arrowSvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      stroke="currentColor"
                      strokeWidth={0.9}
                      className="bi bi-arrow-right text-white"
                      viewBox="0 0 16 16"
                      opacity={1}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </span>
                </div>
                <h1 className="w-full text-center text-sm text-gray-custom">
                  Drag to launch
                </h1>
              </div>
            </div>
          </div>

          <h3 className="text-[#ededed] text-center text-md mt-22 leading-7 font-extralight tracking-wider">
            Boost focus and get more done with{" "}
            <span className="text-lg font-medium">100xZone </span> your
            all-in-one <br /> productivity and time management tool.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
