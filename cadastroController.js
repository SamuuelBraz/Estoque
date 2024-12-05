const bcrypt = require('bcrypt')
const Usuario = require('../models/cadastro.js')

//Função para listar todos os Usuários GET
   exports.getAllUsuario = async (req,res)=>{
    try{
        const usuario = await Usuario.findAll()
        res.json(usuario)
    }catch(error){
        res.status(500).json({error: 'Erro ao listar usuários'})
    }
   }

   //Função para criar um novo Usuário POST 
   exports.createUsuario = async (req,res)=>{
    const {nome,email,senha} = req.body
   }

   //Verificar se o email já está cadastrado 
   const usuarioExistente = await Usuario.findOne({where: {email}})
   if(usuarioExistente){
    return res.status(400).json({error: 'Email já cadastrado'})
   }

   try {
    // Criptografando a senha
    const salt = await bcrypt.genSalt(10)
    const senhaCriptografada = await bcrypt.hash(senha, salt)

    // Criando o usuário
    const usuario = await Usuario.create({ nome, email, senha: senhaCriptografada });
    res.status(201).json(usuario);
} catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário' })
}


// Função para editar um usuário existente (PUT)
exports.updateUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const usuario = await Usuario.findByPk(req.params.id)
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }

        // Atualiza as informações do usuário
        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;

        if (senha) {
            // Se houver nova senha, criptografa e atualiza
            const salt = await bcrypt.genSalt(10)
            user.senha = await bcrypt.hash(senha, salt)
        }

        // Salvar as alterações
        await user.save()
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar usuário' })
    }
}

//Função para excluir um usuário DELETE 

exports.deleteUsuario = async (req,res)=>{
    const usuario = await findByPk(req.params.id)
    if(!usuario){
        return res.status(404).json({error: 'Usuário não encontrado'})
    }
}