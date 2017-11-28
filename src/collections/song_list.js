import Backbone from 'backbone';

//tell the collection what model to use
import Song from '../models/song'

// create the collection
const SongList = Backbone.Collection.extend({
  model: Song
});

// export the collection
export default SongList;
