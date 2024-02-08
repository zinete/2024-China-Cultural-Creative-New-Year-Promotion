/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-08 17:09:13
 * @ Description:
 */

import { animated, config, useInView } from "@react-spring/web";

const Page8 = () => {
  const [ref2, springs2] = useInView(() => ({
    from: {
      opacity: 0,
      y: -20,
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
  }));
  return (
    <div className="h-full relative">
      <animated.div
        ref={ref2}
        style={springs2}
        className="w-full flex justify-center items-center pt-[120px]"
      >
        <img src="/img/slogan.png" alt="" className="w-[750px]" />
      </animated.div>
      <animated.div
        ref={ref2}
        style={springs2}
        className="w-full px-[96px] mt-[55px]"
      >
        <img src="/img/organizer.png" alt="" className="w-full" />
      </animated.div>
    </div>
  );
};

export default Page8;
