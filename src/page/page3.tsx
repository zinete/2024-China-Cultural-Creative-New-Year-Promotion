/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-01 20:42:44
 * @ Description:
 */

import { useTrail, animated, useInView } from "@react-spring/web";

const Page3 = () => {
  const [ref, inView] = useInView();

  const trails = useTrail(12, {
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateX(0px) scale(1)"
      : "translateX(-10px) scale(0)",
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div className="h-full relative">
      <div className="relative px-[60px] pt-[110px]">
        <img src="./img/page3_title.png" alt="" className="w-full h-full" />
        <img src="./img/page3_des.png" alt="" className="w-full h-full" />
      </div>
      <div className="px-[130px] grid grid-cols-3 gap-3 mt-[56px]">
        {trails.map((item, index) => {
          return (
            <animated.div
              ref={ref}
              key={index}
              style={{
                ...item,
                boxShadow: "8px 8px 16px 0px rgba(184, 77, 0, 0.30)",
                border: "4px solid #FFFDF9",
              }}
              className="h-[340px] bg-[#D9D9D9] rounded-[30px] overflow-hidden"
            >
              <img
                src={`./img/gift/${index + 1}.png`}
                alt=""
                className="object-cover w-full h-full"
              />
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Page3;
