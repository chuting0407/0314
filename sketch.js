let input;
let slider;
let button;
let jump = false;
let dropdown;
let iframe;

function setup() {  //設定函數
  //產生一個畫布充滿整個視窗，背景顏色為#89c2d9
  createCanvas(windowWidth, windowHeight);
  background('#89c2d9'); 

  // 創建輸入框
  input = createInput('💙🧡🤍💜');
  input.position(10, 10);
  input.size(300, 80);
  input.style('background-color', '#01497c');

  // 創建滑桿
  slider = createSlider(20, 50, 30);
  slider.position(440, 35);
  slider.size(200);

  // 創建按鈕
  button = createButton('跳動');
  button.position(660, 25);
  button.size(100, 50); // 設置按鈕大小
  button.style('font-size', '24px');
  button.style('background-color', '#ff758f');
  button.mousePressed(toggleJump);

  // 創建下拉選單
  dropdown = createSelect();
  dropdown.position(800, 40);
  dropdown.size(100);
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.changed(handleDropdownChange);

  // 創建 iframe
  iframe = createElement('iframe');
  iframe.position((windowWidth - (windowWidth - 200)) / 2, (windowHeight - (windowHeight - 200)) / 2);
  iframe.size(windowWidth - 200, windowHeight - 200);
}

function toggleJump() {
  jump = !jump;
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw');
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw');
  }
}

function draw() {  //繪圖函數
  background('#89c2d9'); // 清除之前的繪圖

  // 顯示滑桿標籤，字大小固定為24
  textSize(24);
  fill(0);
  textAlign(LEFT, TOP);
  text('文字大小', 330, 35);

  // 根據滑桿值設置文字大小
  let textSizeValue = slider.value();
  textSize(textSizeValue);

  let textContent = input.value() + " ";
  let spaceWidth = textWidth(' ');
  let totalTextWidth = textWidth(textContent) + spaceWidth + 20; // 增加 20 單位的間距
  let startX = 0;
  let startY = 100;
  let lineHeight = textSizeValue + 20; // 行與行之間的間距設為 20

  for (let y = startY; y < windowHeight; y += lineHeight) {
    let yOffset = jump ? random(-5, 5) : 0;
    for (let x = startX; x < windowWidth; x += totalTextWidth) {
      text(textContent, x, y + yOffset);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.position((windowWidth - (windowWidth - 200)) / 2, (windowHeight - (windowHeight - 200)) / 2);
  iframe.size(windowWidth - 200, windowHeight - 200);
}