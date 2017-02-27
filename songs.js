var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("Standing Outside the Fire > by Garth Brooks on the album In Pieces");
songs.unshift("I Won't Give Up > by Jason Mraz on the album Love is A Four Letter Word");

var element = document.getElementById("songList");

// <div class = "playlist">
// 				<h3>Song Name</h3>
// 				<ul>
// 					<li class = "songInfo">Artist name</li>
// 					<li class = "songInfo">|</li>
// 					<li class = "songInfo">Album name</li>
// 					<li class = "songInfo">|</li>
// 					<li class = "songInfo">Genre</li>
// 				</ul>

for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("!", "").replace("@", "").replace("#", "").replace("$", "").replace("^", "").replace("*", "").replace("(", "").replace(")", "");
	var endName = songs[i].search(" - ");
	var fullSongName = songs[i].substr(0, endName);
	var beginArtist = songs[i].search("- by ");
	var endArtist = songs[i].search(" on the album");
	var fullArtist = songs[i].substring(beginArtist + 5, endArtist);
	var beginAlbum = songs[i].search(" album ");
	var fullAlbum = songs[i].substring(beginAlbum + 7, songs[i].length);

	element.innerHTML += "<h3>" + fullSongName + "</h3> <ul><li class = 'songInfo'>" + fullArtist + "</li><li class = 'songInfo'>|</li><li class = 'songInfo'>" + fullAlbum + "</li><li class = 'songInfo'>|</li><li class = 'songInfo'>Genre</li> </ul>";
}