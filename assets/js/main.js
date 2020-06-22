import "../scss/styles.scss";
import "./videoPlayer";

const something = async () => {
  //백엔드는 몰라도 브라우저에서는 async를 이해하지 못함 따라서 webpack에서 설정해줘야함
  //@babel/polyfill 설치함 그래서
  console.log("something");
};
