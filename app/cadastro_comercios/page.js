import Link from "next/link";

export default function CadastroComercios() {
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

                        <br/><br/>
                        
                        <p>  Se cadastrar como usuário? <Link href="cadastro_usuario" >Clique aqui</Link> </p>

                    </div>


                </form>

            </div>
        </div>
    )
}