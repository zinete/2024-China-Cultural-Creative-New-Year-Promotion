/**
 * @ Author: ZhengHui
 * @ Create Time: 2024-01-30 20:08:22
 * @ Modified by: ZhengHui
 * @ Modified time: 2024-02-01 20:42:42
 * @ Description:
 */

import { useInView, animated, useSpring } from "@react-spring/web";

const Page2 = () => {
  const [ref, inView] = useInView();
  const springs1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateX(0px) scale(1)"
      : "translateX(-10px) scale(0)",
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  return (
    <div className="h-full relative">
      <animated.div
        ref={ref}
        className="flex items-center justify-center pt-[60px]"
        style={springs1}
      >
        <animated.img
          src="./img/page2_title.png"
          alt=""
          className="w-[824px] mb-[-100px]"
        />
      </animated.div>
      <div className="pt-[0px]">
        <div className="bg-[#fdf3e1] mx-[24px] rounded-[36px] p-[20px]">
          <div className="border rounded-[36px] border-[#FBA65280] p-[10px]">
            <div className="rounded-[36px] p-[32px] border border-[#FBA652]">
              <div className="pt-[80px] font-medium pb-[66px] text-justify inline-block indent-[2rem] leading-[60px] text-[#DD4F12] text-[42px]">
                <p className="mb-[24px]">
                  春节是中华民族最重要的传统节日，第78届联合国大会将春节（农历新年）确定为联合国假日。在龙年春节到来之际，来自中国的创意春联、万年历、手工香囊、翻花、灯笼、手账、非遗虎头鞋等多款文创好礼，飞向了不同国家的朋友们手中。他们打开龙年文创礼盒，与亲朋好友一起，感受创意惊喜，分享春节祝福。让我们“龙年有礼
                  一起过节”吧！
                </p>
                <p>
                  The Spring Festival is the most important traditional festival
                  in Chinese culture, and recently has been officially listed as
                  a UN Floating Holiday. On the occasion of the Spring Festival
                  in the Year of the Dragon 2024, a variety of cultural and
                  creative gifts from China, such as Spring Festival couplets,
                  calendars, handmade sachets, DIY lanterns, handbooks, and
                  intangible cultural heritage tiger head shoes, flew to friends
                  from different countries. They opened the Dragon Year gift
                  boxes and shared the blessings of the Spring Festival with
                  their family and friends. Let’s fest!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
