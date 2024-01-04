import mongoose from 'mongoose';
import config from '../constants/config';

console.log(config);

export default () => {
  mongoose.connect(config.DB_URI);
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  
  db.once('open', function() {
    console.log('Connected to MongoDB');
  });
}
