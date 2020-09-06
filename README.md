# Todeo
바닐라 자바스크립트(ES6)를 이용해 웹 풀스텍 개발 연습을 위해 강아지 영상을 공유하는 웹 애플리케이션을 개발함 

## 시스템 구성도
![그림1](https://user-images.githubusercontent.com/26589904/92316940-c0fd9a80-f035-11ea-9832-d489eb8f38c9.jpg)

## Front-end
> - pug: 템플릿 엔진은 html이 아닌 pug를 사용했습니다.
> - ES6: 자바스크립트 최신 문법인 ES6를 사용했습니다.
> - Webpack: SCSS, ES6와 같은 최신 문법을 이해하고 복잡하게 얽힌 의존성을 자동으로 해결해줍니다. 설정을 통해 여러 브라우저에서 이해하는 CSS, ES5 Static 파일로 변환해줍니다.

## Back-end
> - Node.js 런타임을 사용해 서버를 구축합니다. 여러 모듈을 사용하기 위해 NPM을 설치하고 이를 통해 모듈들을 필요에 따라 설치합니다.
> - Express.js: 서버를 구축하는 프레임워크입니다.
> - Multer: 파일을 서버에 저장해주는 미들웨어입니다. 원래는 CSS와 같은 Static 파일을 위해 쓰이지만, 배포 전에는 동영상과 사진저장을 위해 사용했습니다.
> - Mongoose: MongoDB를 연결하는 모듈입니다. 스키마를 작성하고 여러 옵션을 지정할 수 있습니다. 배포 전에는 로컬 MongoDB에 연결했고, 이후 MongoDB Atlas와 연결했습니다.
> - Passport.js: User Authentication을 관리해주는 모듈입니다. 이 모듈을 이용해 사용자 인증(로그인)을 쉽게 할 수 있으며, Github, Kakao 로그인 등과 같은 다양한 로그인, 세션, 쿠키관리 등을 지원합니다. 
> - AJAX: 댓글 달기 기능을 구현할 때 Ajax를 사용했습니다. 페이지 전체를 리로딩하지 않고 필요한 작업을 비동기적으로 수행합니다.

## Cloud & API
> - AWS S3: 사용자가 업로드한 동영상, 사용자 프로필 사진(Avatar)을 저장하는 클라우드 스토리지입니다. Multer-S3 모듈을 사용해 연결했습니다.
> - MongoDB Atlas: 기존 로컬 MongoDB를 클라우드 데이터베이스 저장소로 옮겼습니다. 비교적 안전한 데이터베이스 관리에 용이합니다.
> - KaKao API: 카카오 개발 API를 이용해 카카오 사용자의 인증 및 정보를 가져왔습니다. REST API를 사용했습니다.
> - Github API: 카카오 로그인과 마찬가지로 깃헙 사용자의 인증 및 정보를 가져옵니다.

## 주요 기능

### Users
> 유저 인증, 프로필, 로그인, 로그아웃, 라우팅 보호(Url로 사용자 임시 접근)를 구현했습니다.

### Videos
> 비디오 업로드 및 삭제, 비디오 검색, 비디오 수정, 댓글 달기를 구현했습니다. AJAX를 이용한 댓글 달기, 댓글 수 업데이트를 수행합니다.

## Pages
- Home
> ![home](https://user-images.githubusercontent.com/26589904/92317872-877e5c80-f040-11ea-86a9-615485275f43.PNG)

- Join

> ![join](https://user-images.githubusercontent.com/26589904/92317875-8d743d80-f040-11ea-9fa3-9e74046b3fa7.PNG)

- Login

> ![login](https://user-images.githubusercontent.com/26589904/92317879-92d18800-f040-11ea-8966-5a10cf1de650.PNG)

- User Detail

> ![userdetail](https://user-images.githubusercontent.com/26589904/92317883-97963c00-f040-11ea-8b03-d9c33e3aab82.PNG)

- Edit Profile
![editprofile](https://user-images.githubusercontent.com/26589904/92317887-9f55e080-f040-11ea-9819-0803c5cd28ab.PNG)

- Upload Video
>![upload video1](https://user-images.githubusercontent.com/26589904/92317890-a7ae1b80-f040-11ea-9ae7-1bcfbe243733.PNG)

>![upload video](https://user-images.githubusercontent.com/26589904/92317891-a8df4880-f040-11ea-8a7a-6a0c948a9926.PNG)

- Search Video
>![search](https://user-images.githubusercontent.com/26589904/92317896-b1d01a00-f040-11ea-8a09-e89a56ad2c66.PNG)

- Video Detail
>![videoDetail](https://user-images.githubusercontent.com/26589904/92317900-b7c5fb00-f040-11ea-9e95-7b41299ede07.PNG)

- Edit Video
>![edit video](https://user-images.githubusercontent.com/26589904/92317903-bf859f80-f040-11ea-97d7-3e418a31eb13.PNG)
