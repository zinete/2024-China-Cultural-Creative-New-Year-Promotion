/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-01 20:54:37
 * @ Description:
 */

import { animated, config, useInView } from "@react-spring/web";
import VideoWapper from "../components/VideoWapper";

const Page4 = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: -100,
      scale: 0,
    },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    configs: {
      easing: config.molasses,
    },
    reset: true,
  }));
  return (
    <div className="h-full relative">
      <div className="relative px-[60px] pt-[266px]">
        <img src="./img/page4_title.png" alt="" className="w-full h-full" />
        <img
          src="./img/page4_des.png"
          alt=""
          className="w-full h-full mt-[34px]"
        />
      </div>
      <animated.div ref={ref} style={springs} className="mt-[180px]">
        <VideoWapper
          videoUrl="/video/06/playlist.m3u8"
          poster="/video/poster6.jpg"
        />
      </animated.div>
    </div>
  );
};

export default Page4;
