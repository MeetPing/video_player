const player = document.getElementById('video');
const progressBar  = document.getElementById('progress-bar');
const playbtnn  = document.getElementById('playbutton');
var videowidth = document.getElementById('video').offsetWidth;
var buttonwidth = document.getElementById('playbutton').offsetWidth;
var progressbarwidth = videowidth - buttonwidth - 60
const controlss = document.getElementById('controls');
console.log(progressbarwidth)
function resizeall() {
    const bodywidth = document.getElementById('body').offsetWidth;
    const bodyheight = document.getElementById('body').offsetHeight;
    var progressbarwidth = bodywidth - buttonwidth - 60
    console.log(progressbarwidth + 'px has been set for Progressbar')
    document.getElementById('progress-bar').style.width = progressbarwidth+'px';
}
function playbtn() {
    if(player.paused) {
        player.play();
        playbtnn.innerHTML = '<i class="fas fa-pause"></i>';
    }else {
        player.pause();
        playbtnn.innerHTML = '<i class="fas fa-play"></i>';
    }
    }
function showorhide() {
    
    if (controlss.style.display === "none") {
        controlss.style.display = "block";
      } else {
        controlss.style.display = "none";
      }
    }
document.getElementById('progress-bar').style.width = progressbarwidth+'px';
function updateProgressBar() {
    var percentage = Math.floor((100 / player.duration) * player.currentTime);
    // Update the progress bar's value
    progressBar.value = percentage;
    // Update the progress bar's text (for browsers that don't support the progress element)
    progressBar.innerHTML = percentage + '% played';
    console.log(percentage)
}
function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    e.target.value = Math.floor(percent / 100);
    e.target.innerHTML = progressBar.value + '% played';
}
function toggleFullScreen() {
    //var player = document.getElementById("player");

    if (player.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player.requestFullscreen();
        }
        else if (player.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player.msRequestFullscreen();
        }
        else if (player.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player.mozRequestFullScreen();
        }
        else if (player.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");
        
    }
  }
setInterval(updateProgressBar, 500);
setInterval(resizeall, 1);
progressBar.addEventListener("click", seek);