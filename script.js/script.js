// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const greetingBtn = document.querySelector('#start');
  const welcomeMessage = document.querySelector('#welcomeMessage');

  if (!greetingBtn || !welcomeMessage) {
    return;
  }

  const greetings = [
    'Сімʼя — це місце, де тебе завжди чекають 💛',
    'Разом ми сильніші, тепліші та щасливіші 🤍',
    'Найкращі моменти — ті, що поруч із рідними ✨'
  ];

  greetingBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    welcomeMessage.textContent = greetings[randomIndex];
  });
});
