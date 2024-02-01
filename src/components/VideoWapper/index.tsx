import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "./index.css";
interface IVideoWapperProps {
  videoUrl: string;
  poster: string;
  title?: string;
}
const VideoWapper = ({ videoUrl, title, poster }: IVideoWapperProps) => {
  const videoRef = useRef(null);
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
        poster: poster,
        sources: [
          {
            src: videoUrl,
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  }, [videoRef, videoUrl, poster]);

  useEffect(() => {
    const player = videojs("myVideo");
    player.on("play", () => {
      // 发送自定义事件
      const event = new Event("customEvent");
      document.dispatchEvent(event);
    });
  }, []);
  return (
    <div className="relative w-full">
      <img src="./img/video_wapper.png" alt="" />
      <div
        className={`absolute inset-0 flex flex-row  items-center justify-center mx-[150px] ${
          title?.length ? "mb-[220px]  mt-[100px]" : "mb-[220px] mt-[150px]"
        } `}
      >
        <div className="w-full h-full bg-[#FFF1DF]">
          <div className="w-full h-full ">
            <video
              ref={videoRef}
              className="w-full h-full video-js"
              id="myVideo"
            ></video>
          </div>
        </div>
        {title?.length ? (
          <div className="w-full absolute left-0 right-0 bottom-[-100px] text-[#DD4F12] text-[44px] font-normal z-20 text-center">
            {title}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoWapper;
