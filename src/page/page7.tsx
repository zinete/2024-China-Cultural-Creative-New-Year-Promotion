/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-08 17:08:43
 * @ Description:
 */

import { animated, config, useInView } from "@react-spring/web";
import VideoWapper from "../components/VideoWapper";

const Page7 = () => {
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
      duration: 2000,
    },
    reset: true,
  }));
  return (
    <div className="h-full relative">
      <div className="relative px-[60px] pt-[133px] flex justify-center flex-col items-center">
        <img
          src="./img/page_other_title.png"
          alt=""
          className="w-[498px] h-full"
        />
        <img
          src="./img/page_other_des.png"
          alt=""
          className="w-[862px] mt-[18px]"
        />
      </div>
      <animated.div ref={ref} style={springs} className="mt-[0px]">
        <VideoWapper
          videoUrl="/video/04/playlist.m3u8"
          title="儿童篇 Kids' joy"
          poster="/video/poster4.jpg"
        />
      </animated.div>
      <animated.div ref={ref} style={springs} className="mt-[0px]">
        <VideoWapper
          videoUrl="/video/05/playlist.m3u8"
          title="祝福篇 Blessing"
          poster="/video/poster5.jpg"
        />
      </animated.div>
    </div>
  );
};
export default Page7;
