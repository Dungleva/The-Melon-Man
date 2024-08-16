document.addEventListener("DOMContentLoaded", () => {
  const musicControlButton = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const music = document.getElementById("musicElement");

  let musicPlaying = true;

  function toggleMusic() {
    if (musicPlaying) {
      music.play();
      musicIcon.src = "./no-sound.png";
    } else {
      music.pause();
      musicIcon.src = "./mute.png";
    }
    musicPlaying = !musicPlaying;
  }

  musicControlButton.addEventListener("click", toggleMusic);
});
