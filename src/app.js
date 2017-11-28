// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';
import Song from './models/song';

// CSS
import './css/foundation.css';
import './css/style.css';

console.log('it loaded!');

const songData = [
    {
        title: "Drop It Like It's Hot",
        year: 2004,
        artist: "Snoop Dog"
    },
    {
      title: 'Song 2',
      year: 2017,
      artist: 'Unknown'
    },
    {
      title: 'Song 3',
      year: 2001,
      artist: 'Unknown 2'
    },
    {
      title: 'Song 4',
      year: 2001,
      artist: 'Unknown 3'
    }
  ];

  const mySong = new Song({
    title: 'A wonderful song',
    year: 2001,
    artist: 'me'
  })

  console.log(mySong);

const render = function render(songList) {

} // render

$(document).ready( () => {
  const songTemplate = _.template($('#song-template').html());

  songData.forEach((song) => {
    let generatedHTML = $(songTemplate(song));
    $('#song-list').append(generatedHTML);
  })
});
