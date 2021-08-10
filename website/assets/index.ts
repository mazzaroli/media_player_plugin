import MediaPlayer from "@mazzaroli/platzimediaplayer";
import AutoPlay from    "@mazzaroli/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from   "@mazzaroli/platzimediaplayer/lib/plugins/AutoPause";
import AdsPlugin from   "@mazzaroli/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({ 
  element: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin(),
  ],
});


const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.tooglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => player.toogleMute();


if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}