const Login = require('../models/login.js')


//Função para listar todos os logins GET

exports.getAllLogin = async(req,res) =>{
    try{
        const login = await Login.findAll()
        res.json(login)
    } catch(error){
        res.status(500).json({error: 'Erro ao listar Logins'})
    }
}

//Função para criar um novo login POST
 
exports.createLogin = async (req,res) =>{
    const {email,senha} = req.body
    try{
        const login = await Login.create({email, senha})
        res.status(201).json(login)
    }catch(error){
        res.status(500).json({error: 'Erro ao criar Login'})
    }
}

//Função para editar um login existente PUT
exports.updateLogin = async (req,res) =>{
    const {email, senha} = req.body
    try{
        const login = await Login.findByPk(req.params.id)
        if(!login){
            return res.status(404).json({error: 'Login não  encontrado'})
        }
        login.email = email || login.email
        login.senha = senha || login.senha

        //salvar as alterações 
        await login.save()
        res.json(login)
    } catch(error){
        res.status(500).json({error: 'Erro ao editar Login'})
    }
}

//Funçao para excluir um  login DELETE
exports.deleteLogin = async (req,res) =>{
    try{
        const login = await Login.findByPk(req.params.id)
        if(!login){
            return res.status(404).json({error: 'Produto não encontrado'})
        }
        await login.destroy()
        res.status(204).json()
    } catch(error){
        res.status(500).json({error: 'Error ao excluir produto'})
    }
}