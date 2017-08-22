(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = {};
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();