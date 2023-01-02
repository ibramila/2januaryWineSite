// @import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

// html,
// body{
//   margin: 0px;
//   overflow: hidden;
// }

// div{
//   position: absolute;
//   top: 0%;
//   left: 0%;
//   height: 100%;
//   width: 100%;
//   margin: 0px;
//   background: radial-gradient(circle, #240015 0%, #12000b 100%);
//   overflow: hidden;
// }

// .wrap{
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }

// h2{
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   margin-top: 150px;
//   font-size: 32px;
//   text-transform: uppercase;
//   transform: translate(-50%, -50%);
//   display: block;
//   color: #12000a;
//   font-weight: 300;
//   font-family: Audiowide;
//   text-shadow: 0px 0px 4px #12000a;
//   animation: fadeInText 3s ease-in 3.5s forwards, flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;
// }

// #svgWrap_1,
// #svgWrap_2{
//   position: absolute;
//   height: auto;
//   width: 600px;
//   max-width: 100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// #svgWrap_1,
// #svgWrap_2,
// div{
//   animation: hueRotate 6s ease-in-out 3s infinite;
// }

// #id1_1,
// #id2_1,
// #id3_1{
//   stroke: #ff005d;
//   stroke-width: 3px;
//   fill: transparent;
//   filter: url(#glow);
// }

// #id1_2,
// #id2_2,
// #id3_2{
//   stroke: #12000a;
//   stroke-width: 3px;
//   fill: transparent;
//   filter: url(#glow);
// }

// #id3_1{
//   stroke-dasharray: 940px;
//   stroke-dashoffset: -940px;
//   animation: drawLine3 2.5s ease-in-out 0s forwards, flicker3 4s linear 4s infinite;
// }

// #id2_1{
//   stroke-dasharray: 735px;
//   stroke-dashoffset: -735px;
//   animation: drawLine2 2.5s ease-in-out 0.5s forwards, flicker2 4s linear 4.5s infinite;
// }

// #id1_1{
//   stroke-dasharray: 940px;
//   stroke-dashoffset: -940px;
//   animation: drawLine1 2.5s ease-in-out 1s forwards, flicker1 4s linear 5s infinite;
// }

// @keyframes drawLine1 {
//   0%  {stroke-dashoffset: -940px;}
//   100%{stroke-dashoffset: 0px;}
// }

// @keyframes drawLine2 {
//   0%  {stroke-dashoffset: -735px;}
//   100%{stroke-dashoffset: 0px;}
// }

// @keyframes drawLine3 {
//   0%  {stroke-dashoffset: -940px;}
//   100%{stroke-dashoffset: 0px;}
// }

// @keyframes flicker1{
//   0%  {stroke: #ff005d;}
//   1%  {stroke: transparent;}
//   3%  {stroke: transparent;}
//   4%  {stroke: #ff005d;}
//   6%  {stroke: #ff005d;}
//   7%  {stroke: transparent;}
//   13% {stroke: transparent;}
//   14% {stroke: #ff005d;}
//   100%{stroke: #ff005d;}
// }

// @keyframes flicker2{
//   0%  {stroke: #ff005d;}
//   50% {stroke: #ff005d;}
//   51% {stroke: transparent;}
//   61% {stroke: transparent;}
//   62% {stroke: #ff005d;}
//   100%{stroke: #ff005d;}
// }

// @keyframes flicker3{
//   0%  {stroke: #ff005d;}
//   1%  {stroke: transparent;}
//   10% {stroke: transparent;}
//   11% {stroke: #ff005d;}
//   40% {stroke: #ff005d;}
//   41% {stroke: transparent;}
//   45% {stroke: transparent;}
//   46% {stroke: #ff005d;}
//   100%{stroke: #ff005d;}
// }

// @keyframes flicker4{
//   0%  {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   30% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   31% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   32% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   36% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   37% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   41% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   42% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   85% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   86% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   95% {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   96% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
//   100%{color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
// }

// @keyframes fadeInText{
//   1%  {color: #12000a;text-shadow:0px 0px 4px #12000a;}
//   70% {color: #ff005d;text-shadow:0px 0px 14px #ff005d;}
//   100%{color: #ff005d;text-shadow:0px 0px 4px #ff005d;}
// }

// @keyframes hueRotate{
//   0%  {
//     filter: hue-rotate(0deg);
//   }
//   50%  {
//     filter: hue-rotate(-120deg);
//   }
//   100%  {
//     filter: hue-rotate(0deg);
//   }
// }