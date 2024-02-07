/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-06 16:10:43
 * @ Description:
 */

import { config, useInView, animated } from "@react-spring/web";

const Page1 = () => {
  const [ref1, springs1] = useInView(() => ({
    from: {
      opacity: 0,
      x: 200,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    configs: {
      easing: config.wobbly,
    },
  }));
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
      easing: config.wobbly,
    },
  }));
  return (
    <div className="h-full relative">
      <div
        style={{
          backgroundImage: "url('./img/bg_page1.png')",
        }}
        className="w-full bg-cover h-full "
      >
        <animated.div
          ref={ref2}
          style={springs2}
          className="w-full flex justify-center items-center pt-[206px]"
        >
          <img src="./img/slogan.png" alt="" className="w-[750px]" />
        </animated.div>
        <animated.img
          ref={ref1}
          style={springs1}
          src="./img/slogan_right_tips.png"
          alt=""
          className="w-[888px] absolute right-0 mt-[30px]"
        />
      </div>
    </div>
  );
};

export default Page1;
