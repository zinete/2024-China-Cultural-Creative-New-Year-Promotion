import { animated, useInView, config } from "@react-spring/web";

import { useEffect, useRef } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";

import "./index.css";

interface ISwiperSlideWigetProps {
  activeIndex: number;
  sources?: { src: string; type: string }[];
}
const SlideWiget = ({ activeIndex }: ISwiperSlideWigetProps) => {
  const videoRef = useRef(null);
  const [ref, springs] = useInView(
    () => ({
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
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        playbackRates: [1.0, 2.0, 3.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        controls: true,
        fluid: true,
        aspectRatio: "16:9",
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true, //全屏按钮
        },
        poster: "",
        sources: [
          {
            src: "/video/huluwa/playlist.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }
    console.log(activeIndex, "activeIndex");
  }, [videoRef, activeIndex]);

  return (
    <>
      <animated.div className="h-full w-full" ref={ref}>
        <div className="flex items-center h-full absolute inset-0">
          <div className="w-full relative">
            <img
              src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAg2cS0jwYosPT1YTDuBTi2Cg.png.webp"
              alt=""
            />
            {/* title */}
            <div className="z-1 absolute inset-0">
              <div className="flex justify-center mt-[40%]">
                <animated.img
                  style={springs}
                  src="//14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgoL_0jwYo8ubbuQMwzAM43gE.png.webp"
                  alt=""
                  className="w-[50%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* left top logo */}
        <img
          src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgjKq4jwYojMfU7AEwigE45QE!200x200.png.webp"
          alt="logo"
          className="w-[10%] absolute top-[10%] left-[5%]"
        />
        {/* video */}
        <div className="absolute top-[50%] left-1/2 ml-[-34%] w-[70%] h-[300px]">
          <video ref={videoRef} className="w-full h-full video-js"></video>
        </div>
        {/* footer logo */}
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="https://14329833.s50i.faiusr.com/4/104/ADIIABAEGAAgob_0jwYo4OumggMw7gU4_AE.png.webp"
            alt="w-full"
          />
        </div>
      </animated.div>
    </>
  );
};

export default SlideWiget;
