import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import assetsBgm from "./bgm.mp3";
declare global {
  interface Window {
    WeixinJSBridge: {
      invoke: (
        arg0: string,
        arg1: object,
        arg2: () => void,
        arg3: boolean
      ) => void;
    };
  }
}

const soundBgm = new Howl({
  src: [assetsBgm],
  loop: true,
  preload: true,
});

interface IAudioPlayerProps {}

const AudioPlayer: React.FC<IAudioPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    // 音频资源 load 之后通过微信桥接触发播放
    soundBgm.on("load", () => {
      window.WeixinJSBridge &&
        window.WeixinJSBridge.invoke(
          "getNetworkType",
          {},
          () => {
            soundBgm.play();
            setIsPlaying(true);
          },
          false
        );
    });
  }, []);

  const togglePlay = () => {
    if (soundBgm) {
      if (isPlaying) {
        soundBgm.pause();
      } else {
        soundBgm.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  React.useEffect(() => {
    const handleEvent = () => {
      console.log("接收到事件！");
      if (isPlaying) {
        soundBgm?.pause();
        setIsPlaying(false);
      }
    };

    // 在组件挂载时添加事件监听器
    document.addEventListener("customEvent", handleEvent);

    // 在组件卸载时移除事件监听器
    return () => {
      document.removeEventListener("customEvent", handleEvent);
    };
  }, [isPlaying]);

  return (
    <>
      <div
        onClick={togglePlay}
        className={`w-[88px] h-[88px] rounded-full  absolute top-[50px] right-[50px] z-50 ${
          isPlaying ? "animate-spin" : "animate-none"
        }`}
      >
        <img src="./bgm_icon.svg" alt="" className="w-full h-full" />
      </div>
    </>
  );
};

export default AudioPlayer;
