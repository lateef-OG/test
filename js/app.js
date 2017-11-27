	


window.onload = function() {
	// Video
	var video = document.getElementById("player");
	video.controls = false;

	// Buttons
	var playButton = document.getElementById("play-pause");
	var playIcon = document.getElementById("play-icon");
	var muteButton = document.getElementById("mute-icon");
	var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");
	var progressBar = document.getElementById("progress-bar");

	var videoControls = document.getElementById("video-controls");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playIcon.src = "assets/pause.png";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playIcon.src = "assets/play.png";

		}
	});




	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.src = "assets/mute.png";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.src = "assets/unmute.png";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	var fill = document.getElementById("fill");
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = 0;
		value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
		fill.style.width = value + "%";

		//display video controls when videos ends
		if (fill.style.width == "100%"){
			playIcon.src = "assets/play.png";
			videoControls.style.opacity = ".9";
		}
	});

	var customsb = document.getElementById("custom-seekbar");
	var customsbWidth = customsb.offsetWidth;

	customsb.addEventListener("click", function(event){
		video.currentTime = video.duration * clickPercent(event);
	}, false);

	function clickPercent(event) {
    	return (event.clientX - getPosition(customsb)) / customsbWidth;
	}

	function getPosition(el) {
    	return el.getBoundingClientRect().left;
	}
	
	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
}
