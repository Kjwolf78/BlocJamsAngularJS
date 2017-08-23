(function() {
    function PlayerBarCtrl(Fixtures, Songplayer) {
        this.albumData = Fixtures.getAlbumm();
        this.songPlayer = Songplayer;
    }

    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', [Fixtures, 'Songplayer', PlayerBarCtrl]);

})();