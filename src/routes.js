import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) =>{
    return res.send("funcionando...");
})
//Rotas relativa a usuários
routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios', UsuarioController.update);
routes.delete('/usuarios', UsuarioController.destroy);

//Rotas relatvias a sessões
routes.post('/sessions', SessionController.store);


export default routes;