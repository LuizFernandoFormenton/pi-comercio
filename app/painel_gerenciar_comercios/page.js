'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'
import Link from "next/link"

function GerenciarComercios() {

    const [comercios, alteraComercios] = useState([])

    const [pesquisaComercio, alteraPesquisaComercio] = useState("")
    const [filtraComercio, alteraFiltraComercio] = useState("")

    async function buscar() {

        const { data, error } = await supabase
            .from('comercios')
            .select(`*`)
            .order('id', { ascending: true })

        console.log(data)

        alteraComercios(data)

        console.log(error)
    }

    async function pesquisaPorNomeComercio() {
        const { data, error } = await supabase
        .from('comercios')
        .select(`*`)
        .ilike('nome', "%" + pesquisaComercio + "%")
        
        alteraComercios(data)

        alteraPesquisaComercio("")

    }

    async function filtrarPorStatus() {
        const { data, error } = await supabase
        .from('comercios')
        .select(`*`)
        .eq('status', filtraComercio)
        
        alteraComercios(data)
        
    }


    async function alteraStatusComercio(item) {

        const objeto = {
           
            status: !item.status
        }

        const { error } = await supabase
            .from('comercios')
            .update(objeto)
            .eq('id', item.id)

        buscar()
    
}

    useEffect(() => {

        buscar()

    }, [])

    return (

        <div className="container-fluid" >

            <div className="row">

                <div className="col-2 menuLateral">
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

                <div className="col-10" >

                    {/* Parte superior do painel adm onde fica o filtrar e o localizar */}

                    <h1>Painel do Administrativo - Comércios</h1>
                    <hr />

                    <div className="row">

                        <div className="col-10">

                            <div className="input-group">
                                <input value={pesquisaComercio} onChange={e => alteraPesquisaComercio(e.target.value)} type="text" className="form-control" placeholder="Pesquisar..."
                                    aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                                <button onClick={pesquisaPorNomeComercio} className="input-group-text" id="basic-addon2">🔍</button>
                            </div>

                        </div>

                        <div className="col-2">

                            <div className="input-group">
                                <select onChange={e => alteraFiltraComercio(e.target.value)} className="form-select" id="inputGroupSelect01">
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

                        {
                            comercios.length == 0 ?

                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr className="table-primary">
                                            <th scope="col">Id</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">email</th>
                                            <th scope="col">Telefone</th>
                                            <th scope="col">WhatsApp</th>
                                            <th scope="col">Endereço Completo</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Logo da impresa</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr>
                                        <tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr>
                                        <tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr>
                                        <tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr><tr className='placeholder-glow' >

                                            <td> <span className='placeholder w-100'></span></td>
                                            <td> <span className='placeholder w-100 '></span> </td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                            <td> <span className='placeholder  w-100'></span></td>
                                        </tr>


                                    </tbody>
                                </table>
                                :

                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr className="table-primary">
                                            <th scope="col">Id</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">email</th>
                                            <th scope="col">Telefone</th>
                                            <th scope="col">WhatsApp</th>
                                            <th scope="col">Endereço Completo</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Logo da impresa</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Ação</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            comercios.map(

                                                item => <tr >

                                                    <td>{item.id} </td>
                                                    <td>{item.nome}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.telefone}</td>
                                                    <td>{item.whatsapp}</td>
                                                    <td>{item.endereco}</td>
                                                    <td>{item.categoria}</td>
                                                    <td><img className="text-center rounded-circle" width="150" src="./Programadora.avif" /></td>
                                                    <td>{item.descricao}</td>
                                                    <td>{item.status == true ? "Ativo" : "Inativo"}</td>
                                                    <td>{item.status ? (<button onClick={()=> alteraStatusComercio(item)}>Desativar</button>) : <button onClick={()=> alteraStatusComercio(item)}>Ativar</button>}</td>

                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>


                        }


                    </div>

                </div>
            </div>
        </div>
    );
}

export default GerenciarComercios;