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
    const [idUsuario, alteraIdUsuario] = useState(null)
    const [carregando, alteraCarregando] = useState(true)

    async function excluir(id) {
        const opcao = confirm("Deseja realmente excluir esse item?")
        if (opcao == false) return

        await supabase
            .from('produtos')
            .delete()
            .eq('id', id)

        buscar()
    }

    async function buscar(id) {
        alteraCarregando(true)
        const { data, error } = await supabase
            .from('produtos')
            .select()
            .eq('id_comercio', id)

        alteraListaProdutos(data || [])
        alteraCarregando(false)
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
        const id = localStorage.getItem("id_usuario")
        alteraIdUsuario(id)
        buscar(id)
    }, [])

    return (
        <div className="pagina-produtos">

            {/* Remova o modal Bootstrap e substitua por este: */}
            {editando !== null && (


                <div
                    className="text-start modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel2"
                    aria-hidden="true"
                >

                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content modal-personalizado">
                            <div className="modal-header border-0">
                                <h1 className="modal-title fs-5 titulo-modal" id="exampleModalLabel2">
                                    Editar produto
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={cancelaEdicao}
                                ></button>
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

            {carregando ? (
                <div className="estado-vazio">
                    <div className="spinner-border" style={{ color: 'var(--laranja-principal)', width: '3rem', height: '3rem' }} role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                    <p className="mt-3" style={{ color: 'var(--cinza-texto)' }}>Carregando produtos...</p>
                </div>
            ) : listaProdutos.length === 0 ? (
                <div className="estado-vazio">
                    <div className="estado-vazio-icone">📦</div>
                    <h3 className="estado-vazio-titulo">Nenhum produto cadastrado</h3>
                    <p className="estado-vazio-subtitulo">Você ainda não cadastrou nenhum produto. Comece agora e mostre seus produtos para seus clientes!</p>
                    <button
                        onClick={() => { location.href = "gerenciador_produtos" }}
                        className="btn btn-laranja px-4 py-2 mt-2"
                    >
                        ＋ Criar meu primeiro produto
                    </button>
                </div>
            ) : (
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
                                                className="btn-laranja btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal2"
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
            )}

        </div>
    );
}

export default Produtos;