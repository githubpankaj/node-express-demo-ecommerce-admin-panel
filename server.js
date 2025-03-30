const app = require('./src/app');
const mongoConnect = require('./src/config/mongo.connect');
const port = 3000;

mongoConnect
.then(function(resp) {
  console.log('[>>>] MongoDB has connected successfully!');
  app.listen(port, function(){
    console.log(`[>>>] App is running on port ${port}`);
  });
})
.catch(function(error){
  console.log('[!!!] Unable to connect with MongoDB!')
})