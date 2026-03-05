'use client'
import "./gerenciar_comercios.css"

function GerenciarComercios() {

    const listaComercios = [

        {

            nome: "Pizzaria dos Crias",
            email: "pizzariacrias@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-1100",
            whatsapp: "(16) 99371-3443",
            endereco_completo: "Rua Nicola Zambrano, 174, Jardim Mercedez",
            categoria: "Pizzaria",
            logo_empresa: "logo_pizzaria_crias.png",
            descricao: "Pizzaria fundada em 2004, especializada em pizzas artesanais e atendimento familiar."
        },
        {
            nome: "Hamburgueria Prime Burgers",
            email: "primeburgers@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-2200",
            whatsapp: "(16) 99123-4567",
            endereco_completo: "Av. São Carlos, 1200, Centro",
            categoria: "Hamburgueria",
            logo_empresa: "logo_primeburgers.png",
            descricao: "Hamburgueria artesanal com carnes selecionadas e combinações exclusivas."
        },
        {
            nome: "Mercado Boa Compra",
            email: "boacompra@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-3300",
            whatsapp: "(16) 99222-3344",
            endereco_completo: "Rua Episcopal, 450, Centro",
            categoria: "Mercado",
            logo_empresa: "logo_boacompra.png",
            descricao: "Mercado completo com produtos frescos e preços acessíveis."
        },
        {
            nome: "Padaria Pão Quente",
            email: "paoquente@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-4400",
            whatsapp: "(16) 99333-4455",
            endereco_completo: "Rua Dona Alexandrina, 890, Vila Prado",
            categoria: "Padaria",
            logo_empresa: "logo_paoquente.png",
            descricao: "Padaria tradicional com pães fresquinhos todos os dias."
        },
        {
            nome: "Açaí Tropical",
            email: "acaitropical@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-5500",
            whatsapp: "(16) 99444-5566",
            endereco_completo: "Av. Getúlio Vargas, 300, Centro",
            categoria: "Açaíteria",
            logo_empresa: "logo_acaitropical.png",
            descricao: "Especializada em açaí na tigela com diversos acompanhamentos."
        },
        {
            nome: "Restaurante Sabor Caseiro",
            email: "saborcaseiro@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-6600",
            whatsapp: "(16) 99555-6677",
            endereco_completo: "Rua Major José Inácio, 2100, Centro",
            categoria: "Restaurante",
            logo_empresa: "logo_saborcaseiro.png",
            descricao: "Comida caseira com tempero especial e ambiente acolhedor."
        },
        {
            nome: "Lanchonete Point 24h",
            email: "point24h@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-7700",
            whatsapp: "(16) 99666-7788",
            endereco_completo: "Av. Trabalhador São-Carlense, 500, Jardim Paulistano",
            categoria: "Lanchonete",
            logo_empresa: "logo_point24h.png",
            descricao: "Lanches rápidos e atendimento 24 horas."
        },
        {
            nome: "Churrascaria Boi Forte",
            email: "boiforte@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-8800",
            whatsapp: "(16) 99777-8899",
            endereco_completo: "Rodovia Washington Luís, Km 235",
            categoria: "Churrascaria",
            logo_empresa: "logo_boiforte.png",
            descricao: "Rodízio completo com carnes nobres e buffet variado."
        },
        {
            nome: "Sorveteria Gelato Mix",
            email: "gelatomix@gmail.com",
            senha: "123456",
            telefone: "(16) 3509-9900",
            whatsapp: "(16) 99888-9900",
            endereco_completo: "Rua XV de Novembro, 600, Centro",
            categoria: "Sorveteria",
            logo_empresa: "logo_gelatomix.png",
            descricao: "Sorvetes artesanais com sabores exclusivos."
        },
        {
            nome: "Farmácia Vida Mais",
            email: "vidamais@gmail.com",
            senha: "123456",
            telefone: "(16) 3510-1100",
            whatsapp: "(16) 99999-1122",
            endereco_completo: "Av. Sallum, 1500, Vila Nery",
            categoria: "Farmácia",
            logo_empresa: "logo_vidamais.png",
            descricao: "Farmácia com ampla variedade de medicamentos e atendimento especializado."
        }



    ]

    return (

        <div className="container-fluid">

            <div className="row">

                {/* <!-- Menu lateral --> */}
                <div className="col-2 menuLateral">

                    <div className="text-center mt-4 mb-3  ">

                        <img className="w-50 mb-3 rounded-4 " src="/imagens/barata.webp" />
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
                        <table className="table table-striped table-bordered">

                            <thead>

                                <tr className="table-primary">
                                    <th scope="col">Nome</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">WhatsApp</th>
                                    <th scope="col">Endereço Completo</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Logo da impresa</th>
                                    <th scope="col">Descrição</th>
                                </tr>

                            </thead>

                            <tbody>

                                {

                                    listaComercios.map(

                                        comercio => <tr>

                                            <td>{comercio.nome}</td>
                                            <td>{comercio.email}</td>
                                            <td>{comercio.telefone}</td>
                                            <td>{comercio.whatsapp}</td>
                                            <td>{comercio.endereco_completo}</td>
                                            <td>{comercio.categoria}</td>
                                            <td>{comercio.logo_empresa}</td>
                                            <td>{comercio.descricao}</td>

                                        </tr>

                                    )

                                }


                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            {/* <!-- Modals --> */}
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

            </div>

        </div>

    );
}

export default GerenciarComercios;