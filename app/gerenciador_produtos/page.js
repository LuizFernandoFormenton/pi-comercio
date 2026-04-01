'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'

function Produtos() {

    const [produtos, alteraProdutos] = useState([])

    const [id_comercio, alteraId_comercio] = useState("")
    const [nome, alteraNome] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState("")
    const [imagem, alteraImagem] = useState("")

    const [listaComercios, alteralistaComercios] = useState([])
    const [editando, alteraEditando] = useState(null)

    const id_usuario = localStorage.getItem("id_usuario")
    const [ usuario, alteraUsuario] = useState (null)


    async function buscarComercios() {

        const { data } = await supabase
            .from('comercios')
            .select()
        alteralistaComercios(data)
    }

    async function buscaUsuario() {
        const {data, error} = await supabase
        .from ("usuarios")
        .select()   
        .eq("id", id_usuario)

        alteraUsuario(data[0])
    }

    async function buscar() {
        const { error, data } = await supabase
            .from('produtos')
            .select();

        alteraProdutos(data)
        console.log(error)
    }

    function formataData(data) {
        let data_formatadas = new Date(data)
        data_formatadas = data_formatadas.toLocaleDateString()
        return data_formatadas
    }

    function formataHoras(horas) {
        let horas_formatadas = new Date(horas)
        horas_formatadas = horas_formatadas.toLocaleTimeString()
        return horas_formatadas
    }

    async function deletar(id) {
        const opcao = confirm("Tem certeza que deseja excluir?")
        if (opcao == false) {
            return
        }
        const response = await supabase
            .from('produtos')
            .delete()
            .eq('id', id)

    }

    function editar(objeto) {

        alteraEditando(objeto.id)

        alteraNome(objeto.nome)
        alteraDescricao(objeto.descricao)
        alteraValor(objeto.valor)
        alteraImagem(objeto.imagem)

    }

    function cancelaEdicao() {

        alteraEditando(null)

        alteraNome("")
        alteraDescricao("")
        alteraValor("")
        alteraImagem(" ")
    }
    async function atualizar() {

        const obj = {
            nome: nome,
            descricao: descricao,
            valor: valor,
            imagem: imagem
        }

        const { error } = await supabase
            .from('produtos')
            .update(obj)
            .eq('id', editando)

        if (error == null) {
            alert("Atualização realizada com sucesso!")
            cancelaEdicao()
            buscar()
        } else {
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }

    }

    async function salvar(e) {

        e.preventDefault();

        const objeto = {

            nome: nome,
            descricao: descricao,
            valor: valor.replaceAll(",", "."),
            imagem: imagem

        }

        const { error } = await supabase
            .from('produtos')
            .insert(objeto);

        console.log(error)

        if (error == null) {
            alert("Produto cadastrado com sucesso");
            alteraNome("");
            alteraDescricao("");
            alteraValor("");
            alteraImagem(" ")

        }
    }    

    useEffect(() => {
        buscar();
        buscarComercios();
        buscaUsuario()
    }, []);

    return (
        <div className="container-fluid py-5">



            <div className="d-flex justify-content-center min-vh-40">

                <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "800px" }}>

                    <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>
                        Criar produto
                    </h1>

                    <form className="row g-3" onSubmit={salvar}>


                        <div className="col-md-12">
                            <label htmlFor="produto" className="form-label">Produtos</label>
                            <input id="produto" className="form-control" value={nome} onChange={e => alteraNome(e.target.value)} />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input id="descricao" className="form-control" value={descricao} onChange={e => alteraDescricao(e.target.value)} />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="valor" className="form-label">Valor</label>
                            <input id="valor" type="number" className="form-control" value={valor} onChange={e => alteraValor(e.target.value)} />
                        </div>

                        <div className="col-md-8">
                            <label className="form-label">Coloque o link Imagem</label>
                            <input id="imagem" className="form-control" value={imagem} onChange={e => alteraImagem(e.target.value)} />
                           
                        </div>


                        {
                            editando != null ?
                                <div>
                                    <button onClick={atualizar} >Atualizar</button>
                                    <button onClick={() => cancelaEdicao()} >Cancelar</button>
                                </div>
                                :
                                <div className="col-md-2 p-20">
                                    <button onClick={salvar} class="btn btn-warning p-4">Salvar</button>
                                </div>
                        }

                    </form>
                </div>
            </div >
        
        </div>
    );
}

export default Produtos;