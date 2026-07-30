let count = 0;
const today = document.getElementById("today");
const clock = document.getElementById("clock");
const timeButton = document.getElementById("timeButton");
const timeMessage = document.getElementById("timeMessage");
function showClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("ja-JP");
}
showClock();
today.textContent = new Date().toLocaleDateString("ja-JP");
setInterval(showClock, 1000);
timeButton.addEventListener("click", function() {
  const now=new Date();
  count=count+1;
  const hour=now.getHours();
  let greeting="";
  if(hour < 12){
    greeting="午前です。今日もがんばりましょう。";
  }else if(hour < 18){
    greeting="午後です。もうひとふんばりです。";
  }else{
    greeting="夕方以降です。おつかれさまでした。";
  }
  timeMessage.textContent=count+"回目に押した時刻は"+now.toLocaleTimeString("ja-JP")+" です。"+greeting;
});
const omikujiButton = document.getElementById("omikujiButton");
const omikujiResult = document.getElementById("omikujiResult");
const results = [
  "大吉",
  "中吉",
  "吉",
  "小吉",
  "末吉",
  "凶"
];
omikujiButton.addEventListener("click", function() {
  const number = Math.floor(Math.random() * results.length);
  omikujiResult.textContent = "結果は 「" + results[number] + "」 です！";
});