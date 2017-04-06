var songs = [];
var deleteBtn = [];
var button = document.getElementById("submitSong");
var songRequest = new XMLHttpRequest();
var songRequest2 = new XMLHttpRequest();
var playList = document.getElementById("songList");
var moreMusic;

function removeSong(){
	var songIndex = deleteBtn.indexOf(event.target);
	songs.splice(songIndex, 1);
	printPlayList(songs);
};

function addToSongs(){
	var data2 = JSON.parse(this.responseText);	
	songs = songs.concat(data2.songs);
	printPlayList(songs);
};

function loadSideB(){
	songRequest2.addEventListener("load", addToSongs);
	songRequest2.open("GET", "sideB.json");
	songRequest2.send();
	moreMusic.setAttribute("disabled", "disabled");
};

function activateEvents(listLength){
	console.log(listLength);
	for (var j = 0; j< listLength; j++){
		deleteBtn[j] = document.getElementById(`delete${j}`);
		deleteBtn[j].addEventListener("click", removeSong); 
	}
	moreMusic = document.getElementById("more");
	moreMusic.addEventListener("click", loadSideB);
}
function printPlayList(songData){
	playList.innerHTML = "";
	for (var i = 0; i < songData.length; i++) {
		var currentSong = songData[i];
		var fullSongName = currentSong.songName;
		var fullArtist = currentSong.artistName;
		var fullAlbum = currentSong.albumName;
		var genre = currentSong.genre;
		playList.innerHTML += `<h3>${fullSongName}</h3><ul><li class = 'songInfo'>${fullArtist}</li><li class = 'songInfo'>|</li><li class = 'songInfo'>${fullAlbum}</li><li class = 'songInfo'>|</li><li class = 'songInfo'>${genre}</li><li class = 'songInfo'>|</li><li class = 'songInfo'><button id = "delete${i}">Delete</button></li> </ul>`;
	}
		// playList.innerHTML += `<br><br><button id="more">More</button>`;

		activateEvents(i);	
}
function getSongInfo(){
	var data = JSON.parse(this.responseText);
	songs = data.songs;
	printPlayList(songs);
}

songRequest.addEventListener("load", getSongInfo);
songRequest.open("GET", "songList.json");
songRequest.send();