'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'
import Link from "next/link"

function PainelAdmUsuario() {

    //Variavel usada no buscar para listagem dos usuários
    const [usuarios, alteraUsuarios] = useState([])


    //Variaveis de pesquisa e filtro
    const [pesquisaUsuario, alteraPesquisaUsuario] = useState("")
    const [filtraUsuario, alteraFiltraUsuario] = useState("")

    // Função para fazer busca e listar os usuários que estão no banco

    async function buscar() {

        const { data, error } = await supabase
            .from('usuarios')
            .select(`*`)
            .order('id', { ascending: true })
        console.log(data)

        alteraUsuarios(data)

        console.log(error)

    }

    // Função para pesquisar o usuário por nome

    async function pesquisaPorNomeUsuario() {
        const { data, error } = await supabase
            .from('usuarios')
            .select(`*`)
            .ilike('nome', "%" + pesquisaUsuario + "%")

        alteraUsuarios(data)

        alteraPesquisaUsuario("")

    }

    // Função para filtrar por ativos e inativos

    async function filtrarPorStatus() {
        const { data, error } = await supabase
            .from('usuarios')
            .select(`*`)
            .eq('status', filtraUsuario)

        alteraUsuarios(data)

    }

    //Função para desativar e ativar o usuário


    async function alteraStatusUsuario(item) {

        const objeto = {

            status: !item.status
        }

        const { error } = await supabase
            .from('usuarios')
            .update(objeto)
            .eq('id', item.id)

        buscar()

    }

    //Mostrar na tela inicial a listagem assim que entrar na tela

    useEffect(() => {
        buscar()
    }, [])


    //Daqui pra baixo "acaba o código" e começa retornar as informações

    return (

        <div className="container-fluid" >

            <div className="row">

                {/* <div className="col-2 menuLateral"> 
                    <div className="text-center">

                        <img className="text-center rounded-circle" width="300" src="./Programadora.avif" />
                        <h1 className="mt-1 fs-4">Adm. Geovana 🌷</h1>

                    </div>

                    <div className="mt-5 fs-5 list-group list-group-flush">
                        <Link href="/painel_adm_usuario" className="list-group-item list-group-item-action">Usuários</Link>
                        <Link href="/painel_gerenciar_comercios" className="list-group-item list-group-item-action">Comércios</Link>
                        <Link href="/painel_aprovacao_anuncio" className="list-group-item list-group-item-action">Analíse de Anúncios</Link>


                    </div>

                </div> */}

                <div className="" >

                    {/* Parte superior do painel adm onde fica o filtrar e o localizar */}

                    <h1>Painel do Administrativo - Usuários</h1>
                    <hr />

                    <div className="row">

                        <div className="col-10">

                            {/* Esse aqui é para pesquisar por nome */}
                            <div className="input-group">
                                <input value={pesquisaUsuario} onChange={e => alteraPesquisaUsuario(e.target.value)} type="text" className="form-control" placeholder="Pesquisar..."
                                    aria-label="Recipients username" aria-describedby="basic-addon2" />
                                <button onClick={pesquisaPorNomeUsuario} className="input-group-text" id="basic-addon2">🔍</button>
                            </div>

                        </div>


                        {/* Esse aqui é para filtrar por ativo e inativo */}

                        <div className="col-2">

                            <div className="input-group">
                                <select onChange={e => alteraFiltraUsuario(e.target.value)} className="form-select" id="inputGroupSelect01">
                                    <option value="Filtrar" disabled selected>Filtrar</option>
                                    <option value="true">Ativos</option>
                                    <option value="false">Inativos</option>
                                </select>
                            </div>

                        </div>


                        <div className="text-end my-2">
                            <button onClick={filtrarPorStatus} className="btn btn-primary">Localizar</button>

                        </div>


                        {/* Tabela para exibir as informações do usuário */}

                        <div className="mt-3 col-12">

                            <table className="table table-striped table-bordered" >
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>



                                    {/* map que faz a listagem de usuários */}

                                    {usuarios.map(
                                        item => <tr>
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.cpf}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.status ? "Ativo" : "Inativo"}</td>
                                            <td>{item.status ? (<button onClick={() => alteraStatusUsuario(item)}>Desativar</button>) : <button onClick={() => alteraStatusUsuario(item)}>Ativar</button>}</td>

                                        </tr>
                                    )
                                    }
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PainelAdmUsuario;