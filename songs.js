var songs = [];
var deleteBtn = [];
var button = document.getElementById("submitSong");
var songRequest = new XMLHttpRequest();

var playList = document.getElementById("songList");

function removeSong(){
	var songIndex = deleteBtn.indexOf(event.target);
	console.log(songs);
	songs.splice(songIndex, 1);
	console.log(songs);
	printPlayList(songs);
};

function activateEvents(listLength){
	for (var j = 0; j< listLength; j++){
		deleteBtn[j] = document.getElementById(`delete${j}`);
		deleteBtn[j].addEventListener("click", removeSong); 
	}
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