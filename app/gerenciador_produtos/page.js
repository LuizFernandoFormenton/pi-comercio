'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'

function Produtos() {
    
    if(typeof window === "undefined")return null

    if(typeof window === "undefined") return null
    
    const [produtos, alteraProdutos] = useState([])

    const [id_comercio, alteraId_comercio] = useState("")
    const [nome, alteraNome] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState("")

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

    }

    function cancelaEdicao() {

        alteraEditando(null)

        alteraNome("")
        alteraDescricao("")
        alteraValor("")
    }
    async function atualizar() {

        const obj = {
            nome: nome,
            descricao: descricao,
            valor: valor
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

        const id_usuario = localStorage.getItem("id_usuario")

        const objeto = {

            nome: nome,
            descricao: descricao,
            valor: valor.replaceAll(",", "."),
            id_comercio: id_usuario 

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

            <h2 className="text-center mb-4 fw-bold p-3 mt-5" style={{ color: "#ff6b00" }}>
                Produtos Cadastrados
            </h2>

            <hr />

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: "#ff6b00" }}>#</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Produto</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Descrição</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Valor</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Criado em</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Acões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.length === 0 ? (

                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Carregando...</span>
                            </div>
                        ) : (
                            produtos.map(
                                (item, index) => (
                                    <tr>
                                        <td onClick={() => location.href = "/produtos/" + item.id}>{index + 1}</td>
                                        <td onClick={() => location.href = "/produtos/" + item.id}>{item.nome}</td>
                                        <td onClick={() => location.href = "/produtos/" + item.id}>{item.descricao}</td>
                                        <td onClick={() => location.href = "/produtos/" + item.id}>
                                            R$ {item.valor.toString().split('.')[0]},
                                            <small style={{ fontSize: '12px' }}>
                                                {item.valor.toString().split('.')[1] || '00'}
                                            </small>
                                        </td>
                                        <td onClick={() => location.href = "/produtos/" + item.id}>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                                        <td> <button onClick={() => location.href = "/produtos/" + item.id} >Ver</button> <button onClick={() => editar(item)} >Editar</button> <button onClick={() => deletar(item.id)} >Excluir</button> </td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Produtos;