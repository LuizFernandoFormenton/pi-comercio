'use client'
import Link from "next/link";

export default function CadastroComercios() {

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
        <div className="d-flex justify-content-center vh-100">
            <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "700px" }}>

                <form className="row g-3">

                    <h1 className="text-center mb-3">Cadastro Comércio</h1>

                    {/* Nome */}
                    <div className="col-12">
                        <label htmlFor="nome" className="form-label">Nome da Empresa *</label>
                        <input className="form-control" id="nome" />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input type="email" className="form-control" id="email" />
                    </div>

                    {/* Senha */}
                    <div className="col-md-6">
                        <label htmlFor="senha" className="form-label">Senha *</label>
                        <input type="password" className="form-control" id="senha" />
                    </div>

                    {/* Telefone */}
                    <div className="col-md-6">
                        <label htmlFor="telefone" className="form-label">Telefone *</label>
                        <input className="form-control" id="telefone" />
                    </div>

                    {/* WhatsApp */}
                    <div className="col-md-6">
                        <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                        <input className="form-control" id="whatsapp" />
                    </div>

                    {/* Endereço */}
                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label">Endereço Completo *</label>
                        <input className="form-control" id="endereco" />
                    </div>

                    {/* Categoria */}
                    <div className="col-12">
                        <label htmlFor="categoria" className="form-label">Categoria da Empresa *</label>
                        <select className="form-select" id="categoria">
                            <option>Selecione</option>
                            <option>Restaurante</option>
                            <option>Lanchonete</option>
                            <option>Moda</option>
                            <option>Eletrônicos</option>
                            <option>Saúde e Bem-estar</option>
                            <option>Supermercados</option>
                        </select>
                    </div>

                    {/* Logo */}
                    <div className="col-12">
                        <label htmlFor="logo" className="form-label">Logo da Empresa *</label>
                        <input type="file" className="form-control" id="logo" />
                    </div>

                    {/* Descrição */}
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Descrição"
                                id="descricao"
                                style={{ height: "100px" }}
                            ></textarea>
                            <label htmlFor="descricao">Descrição *</label>
                        </div>
                    </div>

                    {/* Botão */}
                    <div className="col-12 text-center">

                        <Link href="login" > <button type="submit" className="btn btn-primary px-5">Cadastrar</button> </Link>

                        <br /><br />

                        <p>  Se cadastrar como usuário? <Link href="cadastro_usuario" >Clique aqui</Link> </p>

                    </div>


                </form>

            </div>
        </div>
    )
}