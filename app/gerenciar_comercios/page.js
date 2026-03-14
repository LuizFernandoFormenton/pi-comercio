'use client'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://myrdwyenvuxdgrbdbjgl.supabase.co', 'sb_publishable_QItyhHGNmCrt94WyCBRqrw_41i_b-63')

import "./gerenciar_comercios.css"
import { useEffect, useState } from 'react'

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

        // console.log("Ola cheguei")
        buscar()

    }, [])

    return (

        <div className="container-fluid">

            <div className="row">

                {/* <!-- Menu lateral --> */}
                <div className="col-2 menuLateral">

                    <div className="text-center mt-4 mb-3  ">

                        <img className="w-50 mb-3 rounded-4 " />
                        <h1 className="fs-6" > <i> BigLouis System </i></h1>

                    </div>

                    <div className="list-group list-group-flush fs-4 mt-5 ">

                        <a href="#" className="list-group-item list-group-item-action" aria-current="true"> Início </a>
                        <a href="#" className="list-group-item list-group-item-action  ">Usuários</a>
                        <a href="#" className="list-group-item list-group-item-action">Produtos</a>

                    </div>

                    <div className="text-center menuLateralPerfil ">

                        <img className="me-3 w-25 rounded-4 " src="/imagens/barata.webp" />
                        {/* <!-- Default dropend button --> */}
                        <div className="btn-group dropend">

                            <button type="button" className="btn btn-secondary dropdown-toggle bg-white text-dark "
                                data-bs-toggle="dropdown" aria-expanded="false"> Perfil </button>

                            <ul className="dropdown-menu">

                                {/* <!-- Dropdown menu links --> */}
                                <li><button className="dropdown-item" type="button">Editar</button></li>
                                <li><button className="dropdown-item" type="button">Sair</button></li>

                            </ul>
                        </div>

                    </div>

                </div>


                {/* <!-- Conteúdo Principal --> */}
                <div className="col-9">

                    {/* <!-- Introdução --> */}
                    <div className="mt-4" >

                        <h2> <strong> Gerenciamento de comércios  </strong>  </h2>
                        <hr />

                    </div>

                    {/* <!-- Pesquisa e filtro --> */}
                    <div>


                        <div className="row">

                            <div className="col-10">

                                <div className="input-group mb-3">

                                    <input type="text" className="form-control" placeholder="Pesquisar..."
                                        aria-label="Recipient’s username" aria-describedby="button-addon2" /> <button
                                            className="btn btn-outline-secondary" type="button" id="button-addon2">🔎</button>

                                </div>

                            </div>

                            <div className="col-2">

                                <div className="input-group mb-3">

                                    <select className="form-select" id="inputGroupSelect02">

                                        <option hidden selected>Filtrar</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>

                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Cadastro --> */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3 ">

                        <button className="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal"> Novo
                        </button>

                    </div>

                    {/* <!-- Tabela de listagem --> */}
                    <div>

                        {/* <!-- ID, foto, nome,  --> */}

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
                                                    <td><img src='data:image/jpeg;base64,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'/></td>
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

            {/* <!-- Modals -->
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title fs-5">Cadastro de usuário</h3>

                                <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            </div>

                            <div class="modal-body">

                                <div class="mb-3">

                                    <input class="form-control" placeholder="Nome..." />

                                </div>

                                <div>

                                    <input class="form-control" placeholder="Senha..." />

                                </div>

                            </div>

                            <div class="modal-footer">

                                <button class="btn btn-primary">Salvar</button>
                                <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

        </div>

    );
}

export default GerenciarComercios;