
const fightersController = require('../controllers/fighters')


module.exports = function(app){  
  
/* GET home page. */
//app.get('/', fightersController.index);


  app.get('/fighters', fightersController.list)//http://localhost:8000/fighters/
  app.get('/fighters/:id', fightersController.individual)  //http://localhost:8000/fighters/1
  app.post('/fighters', fightersController.plus)//http://localhost:8000/fighters/add
  app.put('/fighters/edit/:id', fightersController.update)  //http://localhost:8000/fighters/edit/2id
  app.delete('/fighters/remove/:id', fightersController.delete)
  
}