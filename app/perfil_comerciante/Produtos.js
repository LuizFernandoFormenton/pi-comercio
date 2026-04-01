'use client'

import { useParams } from "next/navigation";
import supabase from "../conexao/supabase";
import { useEffect, useState } from "react";

function Produtos() {


    const [listaProdutos, alteraListaProdutos] = useState([])

    const [descricao, alteraDescricao] = useState()
    const [valor, alteraValor] = useState()
    const [nome, alteraNome] = useState()

    const [editando, alteraEditando] = useState(null)

    async function excluir(id) {

        const opcao = confirm("Deseja realmente exluir esse item?")

        if (opcao == false) {

            return

        }

        const response = await supabase
            .from('produtos')
            .delete()
            .eq('id', id)

        buscar()

    }

    async function buscar() {

        const { data, error } = await supabase

            .from('produtos')
            .select()

        console.log(data)
        alteraListaProdutos(data)
        console.log(error)

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

        const objeto = {

            nome: nome,
            descricao: descricao,
            valor: valor

        }

        const { error } = await supabase
            .from('produtos')
            .update(objeto)
            .eq('id', editando)



        if (error == null) {

            alert("Produto alterado com sucesso!")
            cancelaEdicao()

        } else {

            alert("Dados invalidos! Verifique os campos e teste novamnete...")

        }

    }

    useEffect(() => {

        buscar()

    }, [])

    return (
        <div className="row" >

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar produto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="col-12">

                                <label htmlFor="nome" className="form-label">Nome:</label>
                                <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />

                                <br />

                                <label htmlFor="nome" className="form-label">Descrição:</label>
                                <input value={descricao} onChange={e => alteraDescricao(e.target.value)} className="form-control" id="nome" />

                                <br />

                                <label htmlFor="nome" className="form-label">Valor:</label>
                                <input value={valor} onChange={e => alteraValor(e.target.value)} className="form-control" id="nome" />

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button onClick={atualizar} type="button" class="btn btn-primary">Atualizar</button>
                            <button onClick={() => cancelaEdicao(false)} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="mb-4">Meus Produtos</h1>

            <hr />

            <div className="col-10">

                {/* Esse aqui é para pesquisar por nome */}
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Pesquisar..."
                        aria-label="Recipients username" aria-describedby="basic-addon2" />
                    <button className="input-group-text" id="basic-addon2">🔍</button>
                </div>

            </div>

            <div className="col-2">

                <div className="input-group">
                    <select className="form-select" id="inputGroupSelect01">
                        <option value="Filtrar" disabled selected>Filtrar</option>
                        <option value="true">Ativos</option>
                        <option value="false">Inativos</option>
                    </select>
                </div>

            </div>
            {/* Esse aqui é para filtrar por ativo e inativo */}



            <div className="text-end my-2">

                <button onClick={()=>{location.href = "gerenciador_produtos"}} className="btn btn-primary">Criar</button>

            </div>



            <div className="table-responsive">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr className="table-primary">
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Criado em</th>
                            <th>Ações</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            listaProdutos.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td>R$ {item.valor}</td>
                                    <td>
                                        {new Date(item.created_at).toLocaleString()}
                                    </td>
                                    <td style={{ width: "1%" }}> <button onClick={() => excluir(item.id)} className=" btn btn-danger" > Excluir </button> <td style={{ width: "1%" }}> <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editar(item)} className=" btn btn-primary" > Editar </button> </td> </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default Produtos;