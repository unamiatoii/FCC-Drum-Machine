const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

drumPads.forEach((pad) => {
  pad.addEventListener('click', () => {
    const audio = pad.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    display.innerText = pad.id;
  });
});

document.addEventListener('keydown', (e) => {
  const drumPad = Array.from(drumPads).find((pad) => pad.id === e.key.toUpperCase());
  if (drumPad) {
    const audio = drumPad.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    display.innerText = drumPad.id;
  }
});
