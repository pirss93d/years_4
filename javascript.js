console.log("Hello WOrld! Yo");

const btnYear = document.getElementById("year"); // фон
const btnVideo = document.getElementById("bg_video"); // Video
const btnWinter = document.getElementById("Winter"); //зима точка входа 8?8
const WinterFon = "/img/Winter+Wonder+[1920+x+1080].mp4";
const SummerFon = "/img/Summer_FHD.mp4";
const SpringFon = "/img/Spring_FHD.mp4";
const AutumnFon = "/img/Autumn_FHD.mp4";



btnWinter.addEventListener("click", function () {
   bg_video.src =  WinterFon;
  
 });
const btnSummer = document.getElementById("Summer"); //лето
btnSummer.addEventListener("click", function () {
    bg_video.src =  SummerFon;
    
});
const btnSpring = document.getElementById("Spring"); //весна
btnSpring.addEventListener("click", function () {
   bg_video.src =  SpringFon;
});
const btnAutumn = document.getElementById("Autumn"); //осень
btnAutumn.addEventListener("click", function () {
   bg_video.src =  AutumnFon;
});


