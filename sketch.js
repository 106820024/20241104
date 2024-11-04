function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60); // 增大文字大小
  textAlign(CENTER, CENTER); // 讓文字居中顯示
}

function draw() {
  background("#CB997E");

  noFill(); // 圖形不填色
  stroke("#DDBEA9"); // 線條顏色
  strokeWeight(5); // 線條粗細

  // 繪製背景圖案
  for (let j = 0; j < height / 50; j++) {
    for (let i = 0; i < width / 50; i++) {
      rect(25 + i * 50, 25 + j * 50, 50 + mouseX / 5); // 大正方形位置
      stroke("#718355");
      rect(25 + i * 50, 25 + j * 50, 25); // 小正方形位置
      ellipse(25 + i * 50, 25 + j * 50, 25 + mouseY / 10); // 方形內小圓位置
      stroke("#a9bcd0");
      ellipse(25 + i * 50, 25 + j * 50, 5 + mouseY / 5); // 圓形內小小圓
    }
  }

  // 在最上層顯示旋轉字體
  let letters = "TKUET";
  for (let i = 0; i < letters.length; i++) {
    push();
    translate(width / 2 - (letters.length * 40) / 2 + i * 80, 80); // 將每個字母放在畫布上方，並排開
    rotate(radians(frameCount + i * 30)); // 每個字母的旋轉角度遞增
    fill("#FF6F61"); // 醒目顏色
    stroke("#333333"); // 增加深色邊框讓文字更突出
    strokeWeight(2); // 字體邊框粗細
    text(letters[i], 0, 0); // 每個字母的位置
    pop();
  }
}
