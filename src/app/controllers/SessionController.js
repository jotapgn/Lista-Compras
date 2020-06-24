import Usuario from '../models/Usuario';

class SessionController{
    async store(req, res){
        const {email, password} = req.body;

        let usuario = await Usuario.findOne({ where: { email } }).catch(((err) =>{
            return res.status(401).json({mensagem: "Requisição inválida!"});
        }));
    console.log(usuario);
        if(! usuario){
            return res.status(401).json({mensagem: "Email inválido!"});
        }
        if(! await usuario.checkPassword(password)){
            return res.status(401).json({mensagem: "Senha inválida!"});
        }

        return res.json(usuario);
    }
}

export default new SessionController();