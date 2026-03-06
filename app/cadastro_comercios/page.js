'use client'
import Link from "next/link";
import { useState } from "react";

export default function CadastroComercios() {

    
        const [nome, alteraNome] = useState("")
        const [email, alteraEmail] = useState("")
        const [senha, alteraSenha] = useState("")
        const [telefone, alteraTelefone] = useState("")
        const [whatsapp, alteraWhatsapp] = useState("")
        const [endereco_completo, alteraEnderecoCompleto] = useState("")
        const [categoria, alteraCategoria] = useState("")
        const [logo, alteraLogo] = useState("")
        const [descricao, alteraDescricao] = useState("")
        const [admin, alteraAdmin] = useState(true)


        function salvar(e){

            e.preventDefault()

            const objeto = {

                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone,
                whatsapp: whatsapp,
                endereco_completo: endereco_completo,
                categoria: categoria,
                logo: logo,
                descricao: descricao,
                admin: admin

            }

            console.log(objeto)

        }


    return (

        <div className="d-flex justify-content-center vh-100">
            <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "700px" }}>

                <form onSubmit={ salvar } className="row g-3">

                    <h1 className="text-center mb-3">Cadastro Comércio</h1>

                    {/* Nome */}
                    <div className="col-12">
                        <label htmlFor="nome" className="form-label">Nome da Empresa *</label>
                        <input onChange={ e => alteraNome(e.target.value) }  className="form-control" id="nome" />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input onChange={ e => alteraEmail(e.target.value) } type="email" className="form-control" id="email" />
                    </div>

                    {/* Senha */}
                    <div className="col-md-6">
                        <label htmlFor="senha" className="form-label">Senha *</label>
                        <input  onChange={ e => alteraSenha(e.target.value) } type="password" className="form-control" id="senha" />
                    </div>

                    {/* Telefone */}
                    <div className="col-md-6">
                        <label htmlFor="telefone" className="form-label">Telefone *</label>
                        <input onChange={ e => alteraTelefone(e.target.value) } className="form-control" id="telefone" />
                    </div>

                    {/* WhatsApp */}
                    <div className="col-md-6">
                        <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                        <input onChange={ e => alteraWhatsapp(e.target.value) } className="form-control" id="whatsapp" />
                    </div>

                    {/* Endereço */}
                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label">Endereço Completo *</label>
                        <input onChange={ e => alteraEnderecoCompleto(e.target.value) } className="form-control" id="endereco" />
                    </div>

                    {/* Categoria */}
                    <div className="col-12">
                        <label htmlFor="categoria" className="form-label">Categoria da Empresa *</label>
                        <select onChange={ e => alteraCategoria(e.target.value) } className="form-select" id="categoria">
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
                        <input onChange={ e => alteraLogo(e.target.value) } type="file" className="form-control" id="logo" />
                    </div>

                    {/* Descrição */}
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                onChange={ e => alteraDescricao(e.target.value) }
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

                         {/* <Link href="login" >*/} <button type="submit" className="btn btn-primary px-5">Cadastrar</button> {/* </Link>  */}

                        <br/><br />

                        <p> Se cadastrar como usuário? <Link href="cadastro_usuario" >Clique aqui</Link> </p>

                    </div>


                </form>

            </div>
        </div>
    )
}