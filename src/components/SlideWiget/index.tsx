import { animated } from "@react-spring/web";
import { useMemo } from "react";

interface ISwiperSlideWigetProps {
  activeIndex: number;
  title?: JSX.Element;
  titleClassName?: string;
  children?: JSX.Element;
}
const SlideWiget = ({ activeIndex, children }: ISwiperSlideWigetProps) => {
  const getBgUrl = useMemo(() => {
    return [0].includes(activeIndex) ? "h-full relative" : "relative h-full";
  }, [activeIndex]);
  return (
    <div
      className={getBgUrl}
      style={{
        backgroundSize: "100% 100%",
        backgroundImage: [0].includes(activeIndex) ? "" : "url('./img/bg.png')",
      }}
    >
      <animated.div className="h-full w-full">
        {/* children */}
        <div className="w-full h-full relative z-50">{children}</div>
      </animated.div>
    </div>
  );
};

export default SlideWiget;
