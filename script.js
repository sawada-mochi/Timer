const input = document.getElementById('secondsInput');
const startBtn = document.getElementById('startBtn');
const display = document.getElementById('display');

let timerId;

startBtn.addEventListener('click', () => {
  const seconds = parseInt(input.value);
  if (isNaN(seconds) || seconds <= 0) {
    alert('1秒以上の数値を入力してください');
    return;
  }

  let timeLeft = seconds;

  clearInterval(timerId); // 既存タイマーをクリア
  updateDisplay(timeLeft);

  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      display.textContent = '時間だよ！';
    } else {
      updateDisplay(timeLeft);
    }
  }, 1000);
});

function updateDisplay(sec) {
  const min = Math.floor(sec / 60);
  const secRemain = sec % 60;
  display.textContent =
    `${String(min).padStart(2, '0')}:${String(secRemain).padStart(2, '0')}`;
}
