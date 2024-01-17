import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

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

  return (
    <div className="mx-auto">
      <Swiper
        zoom={true}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={false}
        modules={[Mousewheel, Pagination]}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
        onActiveIndexChange={(e) => {
          console.log(e.activeIndex);
          stopVideo();
        }}
        width={document.body.clientWidth}
        height={document.body.clientHeight}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="bg-[rgba(195,16,25,1.00)] relative">
            <img
              src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgrYm0jwYohte5NzDuBTi2CQ.png.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        {[1, 2, 3, 4, 5].map((items) => (
          <SwiperSlide
            key={items}
            className="bg-[rgba(195,16,25,1.00)] relative"
          >
            <SlideWiget videoRef={videoRef} activeIndex={activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
