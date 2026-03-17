'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'

function PainelAdmUsuario() {

    const [usuarios, alteraUsuarios] = useState([])

    async function buscar() {

        const { data, error } = await supabase
            .from('usuarios')
            .select()
        console.log(data)
        alteraUsuarios(data)
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
                        <h1 className="mt-1 fs-4">Geovana 🌷</h1>

                    </div>

                    <div className="mt-5 fs-5 list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">Usuários</a>
                        <a href="#" className="list-group-item list-group-item-action">Comerciantes</a>
                        <a href="#" className="list-group-item list-group-item-action">Inativos</a>

                    </div>

                    <div className="text-center menuLateralPerfil">

                        <img className="rounded-circle" width="100" src="./Programadora.avif" />

                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-outline-primary dropdown-toggle ms-5"
                                data-bs-toggle="dropdown" aria-expanded="false">Perfil</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Editar</a></li>
                                <li><a className="dropdown-item" href="#">Sair</a></li>

                            </ul>
                        </div>


                    </div>

                </div>

                <div className="col-10" >

                    <h1>Painel Administrador de Usuários</h1>
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

                        <div className="mt-3 col-12">

                            <table className="table table-sm" >
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">

                                    {usuarios.map(
                                        item => <tr>

                                            <td>{item.nome}</td>
                                            <td>{item.cpf}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.status ? "Ativo" : "Inativo"}</td>
                                            <td>{item.status ? <button>Desativar</button> : <button>Ativar</button>}
                                            </td>

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