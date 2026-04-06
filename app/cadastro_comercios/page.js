'use client'

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://myrdwyenvuxdgrbdbjgl.supabase.co', 'sb_publishable_QItyhHGNmCrt94WyCBRqrw_41i_b-63')

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function CadastroComercios() {

    const route = useRouter()

    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [whatsapp, alteraWhatsapp] = useState("")
    const [endereco, alteraEnderecoCompleto] = useState("")
    const [categoria, alteraCategoria] = useState("")
    const [logo, alteraLogo] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [admin, alteraAdmin] = useState(false)
    const [status, alteraStatus] = useState(true)


    async function salvar(e) {

        e.preventDefault()

        const auth = {

            email: email,
            password: senha

        }

        const { data, error } = await supabase.auth.signUp(auth)

        if (data == null) {

            alert("Dados inválidos...")
            return

        }


        const objeto = {

            id: data.user.id,
            nome: nome,
            telefone: telefone,
            whatsapp: whatsapp,
            endereco: endereco,
            categoria: categoria,
            logo: logo,
            descricao: descricao

        }

        const resposta = await supabase

            .from('comercios')
            .insert(objeto)
        console.log(resposta.error)
        console.log(resposta.data)


        if (resposta.error == null) {

            alert("Comércio cadastrado!")

        } else {

            alert("Verifique os campos e tente novamnte!")

        }

        if (objeto.nome.length == 0) {

            alert("Nome muito curto, digite novamente!")

        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {

            alert("O email deve ter um @ e um ponto")
            return
        }

        if (objeto.email.length > 100) {

            alert("Nome de usuário muito longo!")
            return
        }


    }


    return (

        <div className="d-flex justify-content-center vh-100">
            <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "700px" }}>

                <form onSubmit={salvar} className="row g-3">

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button onClick={() => route.back()} className="btn btn-warning text-left mb-1">
                            ← Voltar
                        </button>

                        <h1 className="m-0">Cadastro Comércio</h1>

                        <div></div> 
                    </div>

                    {/* Nome */}
                    <div className="col-12">
                        <label htmlFor="nome" className="form-label">Nome da Empresa *</label>
                        <input onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input onChange={e => alteraEmail(e.target.value)} type="email" className="form-control" id="email" />
                    </div>

                    {/* Senha */}
                    <div className="col-md-6">
                        <label htmlFor="senha" className="form-label">Senha *</label>
                        <input onChange={e => alteraSenha(e.target.value)} type="password" className="form-control" id="senha" />
                    </div>

                    {/* Telefone */}
                    <div className="col-md-6">
                        <label htmlFor="telefone" className="form-label">Telefone *</label>
                        <input type='number' onChange={e => alteraTelefone(e.target.value)} className="form-control" id="telefone" />
                    </div>

                    {/* WhatsApp */}
                    <div className="col-md-6">
                        <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                        <input type='number' onChange={e => alteraWhatsapp(e.target.value)} className="form-control" id="whatsapp" />
                    </div>

                    {/* Endereço */}
                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label">Endereço Completo *</label>
                        <input onChange={e => alteraEnderecoCompleto(e.target.value)} className="form-control" id="endereco" />
                    </div>

                    {/* Categoria */}
                    <div className="col-12">
                        <label htmlFor="categoria" className="form-label">Categoria da Empresa *</label>
                        <select onChange={e => alteraCategoria(e.target.value)} className="form-select" id="categoria">
                            <option>Selecione</option>
                            <option>Restaurantes</option>
                            <option>Lanchonetes</option>
                            <option>Moda</option>
                            <option>Eletrônicos</option>
                            <option>Saúde e Bem-estar</option>
                            <option>Supermercados</option>
                        </select>
                    </div>

                    {/* Logo */}
                    <div className="col-12">
                        <label htmlFor="logo" className="form-label">Link do logo da Empresa *</label>
                        <input onChange={e => alteraLogo(e.target.value)} type="text" className="form-control" id="logo" />
                    </div>

                    {/* Descrição */}
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                onChange={e => alteraDescricao(e.target.value)}
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

                        {/* <Link href="login" >*/} <button type="submit" className="btn btn-warning px-5">Cadastrar</button> {/* </Link>  */}


                        <br /><br />

                        <p> Se cadastrar como usuário? <Link href="cadastro_usuario" >Clique aqui</Link> </p>

                    </div>


                </form>

            </div>
        </div>
    )
}