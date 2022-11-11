var video;

document.querySelector("#volume").innerHTML = 100 + "%"
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

	video.autoplay = false
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function () {
	video.play()
	video.volume = 1


});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause()

});


document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
		console.log(video.currentTime)
		return
	}
	video.currentTime += 10;
	console.log(video.currentTime)
});


document.querySelector("#slider").addEventListener("change", function () {
	video.volume = document.querySelector("#slider").value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})


document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted
	document.querySelector("#mute").innerHTML = video.muted ? "Unmute" : "Mute"
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool")
});
