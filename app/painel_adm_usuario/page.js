function PainelAdmUsuario() {

    const usuarios = [
        {
            nomeCompleto: "Ana Carolina Souza",
            cpf: "123.456.789-00",
            telefone: "(11) 98765-4321",
            email: "ana.souza@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Bruno Henrique Lima",
            cpf: "234.567.890-11",
            telefone: "(21) 99876-5432",
            email: "bruno.lima@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Camila Fernandes Rocha",
            cpf: "345.678.901-22",
            telefone: "(31) 97654-3210",
            email: "camila.rocha@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Daniel Martins Oliveira",
            cpf: "456.789.012-33",
            telefone: "(41) 96543-2109",
            email: "daniel.oliveira@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Eduarda Alves Pereira",
            cpf: "567.890.123-44",
            telefone: "(51) 95432-1098",
            email: "eduarda.pereira@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Felipe Santos Costa",
            cpf: "678.901.234-55",
            telefone: "(61) 94321-0987",
            email: "felipe.costa@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Gabriela Ribeiro Mendes",
            cpf: "789.012.345-66",
            telefone: "(71) 93210-9876",
            email: "gabriela.mendes@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Henrique Carvalho Dias",
            cpf: "890.123.456-77",
            telefone: "(81) 92109-8765",
            email: "henrique.dias@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Isabela Moraes Andrade",
            cpf: "901.234.567-88",
            telefone: "(11) 91234-5678",
            email: "isabela.andrade@email.com",
            status: "true"
        },
        {
            nomeCompleto: "João Pedro Batista",
            cpf: "012.345.678-99",
            telefone: "(21) 92345-6789",
            email: "joao.batista@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Karina Lopes Freitas",
            cpf: "123.987.654-10",
            telefone: "(31) 93456-7890",
            email: "karina.freitas@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Lucas Gabriel Nunes",
            cpf: "234.876.543-21",
            telefone: "(41) 94567-8901",
            email: "lucas.nunes@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Mariana Tavares Pinto",
            cpf: "345.765.432-32",
            telefone: "(51) 95678-9012",
            email: "mariana.pinto@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Nathan Rodrigues Melo",
            cpf: "456.654.321-43",
            telefone: "(61) 96789-0123",
            email: "nathan.melo@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Olívia Santana Duarte",
            cpf: "567.543.210-54",
            telefone: "(71) 97890-1234",
            email: "olivia.duarte@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Paulo Ricardo Teixeira",
            cpf: "678.432.109-65",
            telefone: "(81) 98901-2345",
            email: "paulo.teixeira@email.com",
            status: "true"
        },
        {
            nomeCompleto: "Queila Ramos Vieira",
            cpf: "789.321.098-76",
            telefone: "(91) 99012-3456",
            email: "queila.vieira@email.com",
            status: "false"
        },
        {
            nomeCompleto: "Rafael Moreira Barros",
            cpf: "890.210.987-87",
            telefone: "(62) 90123-4567",
            email: "rafael.barros@email.com",
            status: "true"
        }
    ];

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
                                        <th scope="col">Nome Completo</th>
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

                                            <td>{item.nomeCompleto}</td>
                                            <td>{item.cpf}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.status}</td>
                                            <td> <button>Ativar</button> <button>Desativar</button> </td>

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