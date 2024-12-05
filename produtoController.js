const Produto = require('../models/produto.js')


//Função para listar todos os produtos GET

exports.getAllProduto = async(req,res) =>{
    try{
        const produtos = await Produto.findAll()
        res.json(produtos)
    } catch(error){
        res.status(500).json({error: 'Erro ao listar produtos'})
    }
}

//Função para criar um novo produto POST
 
exports.createProduto = async (req,res) =>{
    const {nome, quantidade, descricao, marca} = req.body
    try{
        const produto = await Produto.create({nome,quantidade, descricao, marca})
        res.status(201).json(produto)
    }catch(error){
        res.status(500).json({error: 'Erro ao criar produto'})
    }
}

//Função para editar um produto existente PUT
exports.updateProduto = async (req,res) =>{
    const {nome, quantidade, descricao, marca} = req.body
    try{
        const produto = await Produto.findByPk(req.params.id)
        if(!produto){
            return res.status(404).json({error: 'Produto não  encontrado'})
        }

        produto.nome = nome || produto.nome
        produto.quantidae = quantidade || produto.quantidade
        produto.descricao = descricao || produto.descricao
        produto.marca = marca || produto.marca

        //salvar as alterações 
        await produto.save()
        res.json(produto)
    } catch(error){
        res.status(500).json({error: 'Erro ao editar produto'})
    }
}

//Funçao para excluir um produto DELETE
exports.deleteProduto = async (req,res) =>{
    try{
        const produto = await Produto.findByPk(req.params.id)
        if(!produto){
            return res.status(404).json({error: 'Produto não encontrado'})
        }
        await produto.destroy()
        res.status(204).json()
    } catch(error){
        res.status(500).json({error: 'Error ao excluir produto'})
    }
}