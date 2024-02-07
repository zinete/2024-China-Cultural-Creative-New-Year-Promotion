import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./index.css";
import PageOne from "./page/page1";
import PageTwo from "./page/page2";
import PageThree from "./page/page3";
import PageFour from "./page/page4";
import PageFive from "./page/page5";

import PageSix from "./page/page6";

import PageSeven from "./page/page7";

import PageEight from "./page/page8";

import SlideWiget from "./components/SlideWiget";
import AudioPlayer from "./components/AudioPlayer";

interface IPage {
  childern: JSX.Element;
  title?: JSX.Element;
  key: number;
}

const pageInfo: IPage[] = [
  {
    key: 0,
    childern: <PageOne />,
  },
  {
    key: 1,
    childern: <PageTwo />,
  },
  {
    key: 2,
    childern: <PageThree />,
  },
  {
    key: 3,
    childern: <PageFour />,
  },
  {
    key: 4,
    childern: <PageFive />,
  },
  {
    key: 5,
    childern: <PageSix />,
  },
  {
    key: 6,
    childern: <PageSeven />,
  },
  {
    key: 7,
    childern: <PageEight />,
  },
];

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

  return (
    <div className="h-screen relative">
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
        onActiveIndexChange={() => {
          stopVideo();
        }}
      >
        {pageInfo.map((items) => (
          <SwiperSlide key={items.key}>
            <SlideWiget activeIndex={activeIndex} children={items.childern} />
          </SwiperSlide>
        ))}
      </Swiper>
      <AudioPlayer />
      {activeIndex >= pageInfo?.length - 1 ? null : (
        <div className="absolute left-0 right-0 bottom-[100px] animate-bounce flex flex-row justify-center z-50">
          <img src="./more.svg" alt="" className="w-[80px]" />
        </div>
      )}
    </div>
  );
}
