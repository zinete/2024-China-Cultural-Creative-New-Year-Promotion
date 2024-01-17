import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcsstoviewport from "postcss-px-to-viewport";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss(),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        postcsstoviewport({
          propList: ["*", "!font-size"], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
          viewportWidth: 750, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: [".ignore", ".hairlines", ".swiper*"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false, // 允许在媒体查询中转换`px`
        }),
      ],
    },
  },
});
