const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV; //package.json에서 설정한것 가져오기
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE], //webpack.config 설정을 바꿨으면 다시 dev:assets를 실행해야함
  mode: MODE.replace(/\s/g, ""),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/, //scss파일을 만나면...! , 정규식 사용
        use: ExtractCSS.extract([
          //webpack에서 로더를 사용할때 아래서부터 위로 적용함
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader", //접두사 처리와 같은 css 호환성
            options: {
              plugin() {
                return [autoprefixer({ browsers: "cover 99.5%" })]; //시중 브라우저99.5% 호환할 수 있게해줌
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
