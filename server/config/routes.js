
const fightersController = require('../controllers/fighters')


module.exports = function(app){  
  
/* GET home page. */
//app.get('/', fightersController.index);


  app.get('/fighters', fightersController.list)//http://localhost:8000/
  app.get('/fighters/:id', fightersController.individual)  //http://localhost:8000/fighters/1
  app.post('/fighters', fightersController.plus)//http://localhost:8000/fighters/add
  app.put('/fighters/:id', fightersController.update)  //http://localhost:8000/fighters/edit/id
  app.delete('/fighters/:id', fightersController.delete)
  
}