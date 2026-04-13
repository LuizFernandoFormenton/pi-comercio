'use client'

import supabase from "../conexao/supabase";
import { useEffect, useState } from "react";
import "./Perfil_comerciante.css";

function Produtos() {
    const [listaProdutos, alteraListaProdutos] = useState([])
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState("")
    const [nome, alteraNome] = useState("")
    const [editando, alteraEditando] = useState(null)

    async function excluir(id) {
        const opcao = confirm("Deseja realmente excluir esse item?")
        if (opcao == false) return

        await supabase
            .from('produtos')
            .delete()
            .eq('id', id)

        buscar()
    }

    async function buscar() {
        const { data, error } = await supabase
            .from('produtos')
            .select()

        alteraListaProdutos(data || [])
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
            buscar()
        } else {
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }
    }

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div className="pagina-produtos">

            {/* Remova o modal Bootstrap e substitua por este: */}
            {editando !== null && (
                <div className="modal-overlay" onClick={cancelaEdicao}>
                    <div className="modal-content modal-personalizado" onClick={e => e.stopPropagation()}>
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5 titulo-modal">Editar produto</h1>
                            <button type="button" className="btn-laranja btn-sm" onClick={cancelaEdicao}></button>
                        </div>

                        <div className="modal-body">
                            <div className="col-12">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />

                                <label htmlFor="descricao" className="form-label mt-3">Descrição</label>
                                <input value={descricao} onChange={e => alteraDescricao(e.target.value)} className="form-control" id="descricao" />

                                <label htmlFor="valor" className="form-label mt-3">Valor</label>
                                <input value={valor} onChange={e => alteraValor(e.target.value)} className="form-control" id="valor" />
                            </div>
                        </div>

                        <div className="modal-footer border-0">
                            <button onClick={atualizar} type="button" className="btn btn-laranja">Atualizar</button>
                            <button onClick={cancelaEdicao} type="button" className="btn btn-cinza">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="topo-produtos">
                <h1 className="titulo-pagina">Meus Produtos</h1>
            </div>

            <hr className="linha-suave" />

            <div className="barra-superior row g-3 align-items-center">
                <div className="col-md-8">
                    <div className="input-group busca-box">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pesquisar..."
                            aria-label="Pesquisar"
                        />
                        <button className="input-group-text botao-busca" id="basic-addon2">🔍</button>
                    </div>
                </div>

                <div className="col-md-2">
                    <select className="form-select filtro-box" defaultValue="">
                        <option value="" disabled>Filtrar</option>
                        <option value="true">Ativos</option>
                        <option value="false">Inativos</option>
                    </select>
                </div>

                <div className="col-md-2 text-md-end">
                    <button
                        onClick={() => { location.href = "gerenciador_produtos" }}
                        className="btn btn-laranja w-100"
                    >
                        Criar
                    </button>
                </div>
            </div>

            <div className="table-responsive tabela-box mt-4">
                <table className="table table-hover align-middle mb-0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Criado em</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listaProdutos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>R$ {item.valor}</td>
                                <td>{new Date(item.created_at).toLocaleString()}</td>
                                <td className="text-center">
                                    <div className="acoes-botoes">
                                        <button
                                            onClick={() => editar(item)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            className=" btn-laranja btn-sm"
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() => excluir(item.id)}
                                            className="btn-vermelho btn-sm"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Produtos;