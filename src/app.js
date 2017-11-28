// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';
import Song from './models/song';
import SongList from './collections/song_list'

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

// create a new instance of SongList
const songList = new SongList(songData);

// define songTemplate as a global variable so you can reference it in render
let songTemplate;

// create a new instance of the Song model
const mySong = new Song({
  title: 'A wonderful song',
  year: 2001,
  artist: 'me'
})

// add mySong to the songList
songList.add(mySong);
// console.log(songList);

const render = function render(songList) {
  // set the ul to a variabel so you on;y have to find it once
  const songUl = $('#song-list');

  // reset #song-list to an empty string each time render is called to make render idempotnet
  songUl.html('');

  songList.forEach((song) => {
    let generatedHTML = songTemplate(song.attributes);
    songUl.append(generatedHTML);
  }) // forEach
} // render


$(document).ready( () => {
  songTemplate = _.template($('#song-template').html());

  render(songList);
  // songData.forEach((song) => {
  //   let generatedHTML = $(songTemplate(song));
  //   $('#song-list').append(generatedHTML);
  // })
});
