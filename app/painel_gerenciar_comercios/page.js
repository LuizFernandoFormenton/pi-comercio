'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'
import Link from "next/link"

function GerenciarComercios() {

    const [comercios, alteraComercios] = useState([])

    async function buscar() {

        const { data, error } = await supabase
            .from('comercios')
            .select()
        console.log(data)
        alteraComercios(data)
        console.log(error)

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
                                <input type="text" className="form-control" placeholder="Pesquisar..."
                                    aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">🔍</span>
                            </div>

                        </div>

                        <div className="col-2">

                            <div className="input-group">
                                <select className="form-select" id="inputGroupSelect01">
                                    <option selected>Filtrar</option>
                                    <option value="1">Ativos</option>
                                    <option value="2">Inativos</option>
                                </select>
                            </div>

                        </div>


                        <div className="text-end my-2">
                            <button className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Localizar</button>

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            comercios.map(

                                                comercio => <tr >

                                                    <td> {comercio.id} </td>
                                                    <td>{comercio.nome}</td>
                                                    <td>{comercio.email}</td>
                                                    <td>{comercio.telefone}</td>
                                                    <td>{comercio.whatsapp}</td>
                                                    <td>{comercio.endereco}</td>
                                                    <td>{comercio.categoria}</td>
                                                    <td><img className="text-center rounded-circle" width="150" src="./Programadora.avif" /></td>
                                                    <td>{comercio.descricao}</td>
                                                    <td>{comercio.status == true ? "Ativo" : "Inativo"}</td>
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