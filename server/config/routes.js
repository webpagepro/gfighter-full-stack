
const fightersController = require('../controllers/fighters')


module.exports = function(app){  
  
/* GET home page. */
//app.get('/', fightersController.index);


  app.get('/fighters', fightersController.list)//http://localhost:8000/fighters/
  app.get('/fighters/:id', fightersController.individual)  //http://localhost:8000/fighters/1
  app.post('/fighters/add', fightersController.plus)//http://localhost:8000/fighters/add
  app.put('/fighters/edit/:id', fightersController.update)
  app.delete('/fighters/remove/:id', fightersController.delete)
  
}