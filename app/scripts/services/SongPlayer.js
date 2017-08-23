(function(){
    function SongPlayer(Fixtures) {
        var SongPlayer = {};

/**
 * @desc To move between songs and to access the songs array
 */
        var currentAlbum = Fixtures.getAlbum();

 /**
 * @desc Buzz object audio file
 * @type {Object}
 */
        var currentBuzzObject = null;
 /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
 var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };

 /**
*@function playSong
*@desc Plays the selected song and changes icon to play button
*@param {Object} song
*/
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }

/**
* @function stopSong
* @desc Stop a song
* @param {Object} song
*/
var stopSong = function(song) {
        currentBuzzObject.stop();
        song.playing = null;
    };

var getSongIndex = function(song) {
    return currentAlbum.songs.indexOf(song);
}
    

/**
* @desc Active song object from list of songs
* @type {Object}
*/
SongPlayer.currentSong = null;

 /**
 * @function play
 * @desc Play current or new song
 * @param {Object} song
 */
 SongPlayer.play = function(song) {
     song = song || SongPlayer.currentSong;
     if (SongPlayer.currentSong !== song) {
         setSong(song);
         playSong(song);
     } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
    }
 };
 /**
 * @function SongPlayer.pause
 * @desc Pause current song
 * @param {Object} song
 */
 SongPlayer.pause = function(song) {
     song = song || SongPlayer.currentSong;
     currentBuzzObject.pause();
     song.playing = false;
 };
/**
 * @function Songplayer.previous
 * @desc Go to previous song, stops playing if the song is number 1
 */
 SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;

     if (currentSongIndex < 0) {
         stopSong;
         SongPlayer.currentSong.playing = null;
     }else {
         var song = currentAlbum.songs [currentSongIndex];
         setSong(song);
         playsSong(song);
     }
 };

/**
 * @function songPlayer.next
 * @desc Skips to next song, stops if last song
 */
 songPlayer.next = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex++;

     var lastSongIndex = currentAlbum.songs.length - 1;

     if (currentSongIndex > lastSongIndex) {
         stopSong(SongPlayer.currentSong);
     } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
 }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });
 
         currentSong = song;

         currentBuzzObject.play();
         song.playing = true;
        }    
     })();

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', Songplayer]);
})();