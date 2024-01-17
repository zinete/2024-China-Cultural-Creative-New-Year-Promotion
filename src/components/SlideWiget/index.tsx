import { animated, useInView } from "@react-spring/web";

import * as React from "react";

interface ISwiperSlideWigetProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  activeIndex: number;
}
const SlideWiget = ({ videoRef, activeIndex }: ISwiperSlideWigetProps) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );
  return (
    <>
      <animated.div className="h-full w-full" ref={ref}>
        <span>{activeIndex}</span>
        <div className="flex items-center h-full absolute inset-0">
          <div className="w-full relative">
            <img
              src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAg2cS0jwYosPT1YTDuBTi2Cg.png.webp"
              alt=""
            />
            {/* title */}
            <div className="z-1 absolute inset-0">
              <div className="flex justify-center mt-[250px]">
                <animated.img
                  style={springs}
                  src="//14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgoL_0jwYo8ubbuQMwzAM43gE.png.webp"
                  alt=""
                  className="w-[450px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* left top logo */}
        <img
          src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgjKq4jwYojMfU7AEwigE45QE!200x200.png.webp"
          alt="logo"
          className="w-[100px] absolute top-[120px] left-[20px]"
        />
        {/* video */}
        <div className="">
          <video
            ref={() => videoRef.current}
            controls
            preload="auto"
            autoPlay
            src="http://demo-videos.qnsdk.com/only-video-1080p-60fps.m4s"
            className="absolute top-[50%] left-1/2 ml-[-34%] w-[70%]"
          ></video>
        </div>
        {/* footer logo */}
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgob_0jwYo4OumggMw7gU4_AE.png.webp"
            alt="w-full"
          />
        </div>
      </animated.div>
    </>
  );
};

export default SlideWiget;
