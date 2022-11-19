const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test1', {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log('connection succes'))
.catch( (err) => console.log(err));


const listSchema = new mongoose.Schema({
  name: String,
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now()
  }
})

const Playlist = new mongoose.model('Playlist', listSchema);

const createDocument = async () => {
  try{
    const jsPlaylist = new Playlist({
      name: 'javascript',
      ctype: 'backend',
      videos: 5,
      author: 'nobody',
      active: false
    })
    
    const mongoPlaylist = new Playlist({
       name: 'mongodb',
       ctype: 'database',
       videos: 30,
       author: 'nobody',
       active: true 
    })

    const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist]);
    console.log(result);
  }catch(err){
    console.log(err);
  }
}
 createDocument();

