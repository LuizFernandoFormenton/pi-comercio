'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'
import Link from "next/link"

function PainelAdmAnuncios() {

    const [anuncios, alteraAnuncios] = useState([])

    const [pesquisaAnuncio, alteraPesquisaAnuncio] = useState("")
    const [filtraAnuncio, alteraFiltraAnuncio] = useState("")

    async function buscar() {

        const { data, error } = await supabase
            .from('anuncios')
            .select(`*,id_comercio(*)`)

        console.log(data)

        alteraAnuncios(data || [])

        console.log(error)

    }

    async function pesquisaPorNomeAnuncio() {
        const { data, error } = await supabase
            .from('anuncios')
            .select(`*, id_comercio(*)`)
            .ilike('nome', "%" + pesquisaAnuncio + "%")

        alteraAnuncios(data)

        alteraPesquisaAnuncio("")

    }

    async function filtrarPorStatus() {
        const { data, error } = await supabase
            .from('anuncios')
            .select(`*,id_comercio(*)`)
            .eq('status', filtraAnuncio)

        alteraAnuncios(data)

    }

    async function alteraStatusAnuncio(item) {

        const objeto = {

            status: !item.status
        }

        const { error } = await supabase
            .from('anuncios')
            .update(objeto)
            .eq('id', item.id)

        buscar()

    }

    function formataData(data) {
        let data_formatada = new Date(data)
        data_formatada = data_formatada.toLocaleDateString()
        return data_formatada
    }

    function formataHoras(horas) {
        let horas_formatada = new Date(horas)
        horas_formatada = horas_formatada.toLocaleTimeString()
        return horas_formatada
    }

    useEffect(() => {
        buscar()
    }, [])

    return (

        <div className="container-fluid" >

            <div className="row">

                <div className=" col-2 position-fixed top-0 start-0 vh-100 bg-white shadow" style={{ width: "350px" }}> 
                    <div className="text-center">

                        <img className="text-center rounded-circle" width="300" src="./Programadora.avif" />
                        <h1 className="mt-1 fs-4">Adm. Geovana 🌷</h1>

                    </div>

                    <div className="mt-5 fs-5 list-group list-group-flush">
                        <Link href="/painel_adm_usuario" className="list-group-item list-group-item-action">Usuários</Link>
                        <Link href="/painel_gerenciar_comercios" className="list-group-item list-group-item-action">Comércios</Link>
                        <Link href="/painel_aprovacao_anuncio" className="list-group-item list-group-item-action">Analíse de Anúncios</Link>


                    </div>

                </div>

                <div className="col" style={{ marginLeft: "350px", padding: "20px" }}>


                    {/* Parte superior do painel adm onde fica o filtrar e o localizar */}

                    <h1>Painel do Administrativo - Anúncios</h1>
                    <hr />

                    <div className="row">

                        <div className="col-10">

                            <div className="input-group">
                                <input value={pesquisaAnuncio} onChange={e => alteraPesquisaAnuncio(e.target.value)} type="text" className="form-control" placeholder="Pesquisar..."
                                    aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                                <button onClick={pesquisaPorNomeAnuncio} className="input-group-text" id="basic-addon2">🔍</button>
                            </div>

                        </div>

                        <div className="col-2">

                            <div className="input-group">
                                <select value={filtraAnuncio || "Filtrar"} onChange={e => alteraFiltraAnuncio(e.target.value)} className="form-select">
                                    <option value="Filtrar" disabled>Filtrar</option>
                                    <option value="true">Ativos</option>
                                    <option value="false">Inativos</option>
                                </select>
                            </div>

                        </div>


                        <div className="text-end my-2">
                            <button onClick={filtrarPorStatus} className="btn btn-primary">Localizar</button>

                        </div>


                        {/* Tabela para exibir as informações do anuncio */}

                        <div className="mt-3 col-12">

                            <table className="table table-striped table-bordered" >
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Comércio</th>
                                        <th scope="col">Planos</th>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Link</th>
                                        <th scope="col">Data de Cadastro</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Ações</th>


                                    </tr>
                                </thead>
                                <tbody>



                                    {/* map que faz a listagem de usuários */}

                                    {anuncios.map(
                                        item => <tr>

                                            <td>{item.id}</td>
                                            <td>{item.id_comercio?.nome}</td>
                                            <td>{item.planos}</td>
                                            <td>{item.descricao}</td>
                                            <td>{item.imagem}</td>
                                            <td>{item.url}</td>
                                            <td>{formataData(item.data)} às {formataHoras(item.data)}</td>
                                            <td>{item.status ? "Ativo" : "Inativo"}</td>
                                            <td>{item.status ? (<button onClick={() => alteraStatusAnuncio(item)}>Desativar</button>) : <button onClick={() => alteraStatusAnuncio(item)}>Aceitar</button>}</td>
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

export default PainelAdmAnuncios;