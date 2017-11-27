window.onload = function() {

	var videos = [];

	videos.push({name:'Ed Sheeran - Shape of You', src:'http://res.cloudinary.com/dmz79kgf0/video/upload/q_71/v1511391630/Ed_ohshlf.mp4', poster:'http://res.cloudinary.com/dmz79kgf0/image/upload/v1511484161/shape-of-you-1_wuvdew.jpg'}); 

	videos.push({name:'R-Kelly - Step in the Name of Love', src:'http://res.cloudinary.com/dmz79kgf0/video/upload/q_71/v1511391741/R._Kelly_-_Step_In_The_Name_Of_Love_.mp4_Videos_Mp4_Free_Download__ToxicWap_ijo6qn.mp4', poster:'http://res.cloudinary.com/dmz79kgf0/image/upload/v1511484668/step-in-the-name-of-love-1_w0nmmu.jpg'});

	videos.push({name:'P.Diddy feat (Usher and Loon) - I Need A Girl', src:'http://res.cloudinary.com/dmz79kgf0/video/upload/q_71/v1511391793/P._Diddy_Feat._Usher_And_Loon_-_I_Need_A_Girl_Part_One_HD_Dirty_.mp4_Videos_Mp4_Free_Download__ToxicWap_nhrs8d.mp4', poster:'http://res.cloudinary.com/dmz79kgf0/image/upload/v1511484171/i-need-a-girl-1_fqf37n.jpg'});

	videos.push({name:'Sean Kingston - Take You There', src:'http://res.cloudinary.com/dmz79kgf0/video/upload/q_67/v1511391758/Sean_Kingston_-_Take_You_There_toxicwap.com_braozj.mp4', poster:'http://res.cloudinary.com/dmz79kgf0/image/upload/v1511484674/take-you-there-1_vzdfve.jpg'});

	videos.push({name:'Sean Kingston - Beautiful Girls', src:'http://res.cloudinary.com/dmz79kgf0/video/upload/q_62/v1511391794/Sean_Kingston_-_Beautiful_Girls_.mp4_Videos_Mp4_Free_Download__ToxicWap_u8d7mi.mp4',poster:'http://res.cloudinary.com/dmz79kgf0/image/upload/v1511484656/beautiful_girls_1_udxxnj.jpg'}); 

	var div = "";

	for(var i = 0; i < videos.length; i++){
		div += "<div class='playlist' onclick='loadVideo("+ i +");'>";
		div += "<video src="+ videos[i].src +" poster="+ videos[i].poster +"></video>";
		div += "<div class ='playlist-name'>";
		div += "<h4>"+ videos[i].name +"</h4>";
		div += "</div>";
		div += "</div>";
	}

	document.getElementById("show").innerHTML = div;

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
	var playlist = document.getElementByClassName("playlist")

	function loadVideo(index) {
		//video = document.getElementById('player');
		source = document.querySelectorAll("#player source");
		source[0].src = videos[index].src;
		fallback = document.querySelectorAll("embed");
		fallback[0].src = videos[index].src;
		video_name = videos[index].name;
		document.getElementById("video-name").innerHTML = video_name;
		var playIcon = document.getElementById("play-icon");
		playIcon.src = "assets/pause.png";
		video.load();
		video.play();
	}

	playlist.addEventListener("click", function(){
		source = document.querySelectorAll("#player source");
		source[0].src = videos[index].src;
		fallback = document.querySelectorAll("embed");
		fallback[0].src = videos[index].src;
		video_name = videos[index].name;
		document.getElementById("video-name").innerHTML = video_name;
		var playIcon = document.getElementById("play-icon");
		playIcon.src = "assets/pause.png";
		video.load();
		video.play();
	});


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
