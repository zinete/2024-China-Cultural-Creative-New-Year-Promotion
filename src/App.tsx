import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./index.css";
import { useTrail, animated } from "@react-spring/web";
import SlideWiget from "./components/SlideWiget";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const stopVideo = () => {
    // 每次只允许播放一个
    document.querySelectorAll("video").forEach((video) => {
      if (video !== videoRef.current) {
        video.pause();
      }
    });
  };

  const [springs, api] = useTrail(
    6,
    {
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
    },
    []
  );

  return (
    <div>
      <Swiper
        lazyPreloadPrevNext={1}
        wrapperClass="h-screen"
        direction={"vertical"}
        mousewheel={true}
        pagination={false}
        autoHeight
        modules={[Mousewheel]}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
        onActiveIndexChange={(e) => {
          console.log(e.activeIndex);
          stopVideo();
          api.start({
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
          });
        }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[20px]">
            {springs.map((v, i) => {
              return (
                <animated.div
                  key={i}
                  style={v}
                  className="h-[160px] bg-slate-600"
                ></animated.div>
              );
            })}
          </div>
        </SwiperSlide>
        {[1, 2, 0].map((items) => (
          <SwiperSlide
            key={items}
            className="bg-[rgba(195,16,25,1.00)] relative"
          >
            <SlideWiget activeIndex={activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
