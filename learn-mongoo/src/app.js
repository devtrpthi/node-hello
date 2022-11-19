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
    const nodePlaylist = new Playlist({
      name: 'nodejs',
      ctype: 'backend',
      videos: 10,
      author: 'nobody',
      active: false
    })

    const result = await nodePlaylist.save();
    console.log(result);
  }catch(err){
    console.log(err);
  }
}
 createDocument();
