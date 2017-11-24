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

function loadVideo(index) {
	video = document.getElementById('player');
	source = document.querySelectorAll("#player source");
	source[0].src = videos[index].src;
	fallback = document.querySelectorAll("embed");
	fallback[0].src = videos[index].src;
	video_name = videos[index].name;
	document.getElementById("video-name").innerHTML = video_name;
	video.load();
	video.play();
}
