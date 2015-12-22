(function() {
    'use strict';

    angular
        .module('alexSongApp')
        .service('JsonService', JsonService);

    /** @ngInject */
    function JsonService() {
        var songs = [
            {
                "url": "spotify:album:3qfz9wig4gcrb4bimw9ov7",
                "id": 25479197,
                "songname": "johnny b. goode",
                "artistid": 45,
                "artistname": "chuck berry",
                "albumid": 235469,
                "albumname": "roll over beethoven"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "moonlight sonata",
                "artistid": 1833,
                "artistname": "beethoven",
                "albumid": 5619520,
                "albumname": "beethoven piano sonatas"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "twist and shout",
                "artistid": 1833,
                "artistname": "beatles",
                "albumid": 5619520,
                "albumname": "beatles"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "i saw her standing there",
                "artistid": 1833,
                "artistname": "beatles",
                "albumid": 5619520,
                "albumname": "beatles"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "here comes the sun",
                "artistid": 1833,
                "artistname": "beatles",
                "albumid": 5619520,
                "albumname": "beatles"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "ain't she sweet",
                "artistid": 1833,
                "artistname": "beatles",
                "albumid": 5619520,
                "albumname": "beatles"
            },
            {
                "url": "spotify:track:7linrtr5px7i3r96mducjw",
                "id": 8815585,
                "songname": "beatles reimagined",
                "artistid": 1833,
                "artistname": "beatles",
                "albumid": 5619520,
                "albumname": "beatles"
            }
        ];

        this.getInfo = getInfo;

        function getInfo() {
            return songs;
        }
    }

})();