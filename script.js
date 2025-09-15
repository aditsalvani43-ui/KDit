const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.innerText = "🔊 Pause Music";
  } else {
    music.pause();
    toggleBtn.innerText = "🎵 Play Music";
  }
});
