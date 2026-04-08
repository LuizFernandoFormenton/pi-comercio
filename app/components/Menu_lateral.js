'use client'


import Link from "next/link";
import { useState } from "react";
import supabase from "../conexao/supabase";

function MenuLateral() {


    if(typeof window === "undefined")return null


    const id_usuario = localStorage.getItem("id_usuario")
    const nome_usuario = localStorage.getItem("nome_usuario")
    const comercio = localStorage.getItem("comercio")

    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [whatsapp, alteraWhatsapp] = useState("")
    const [endereco, alteraEndereco] = useState("")
    const [categoria, alteraCategoria] = useState("")
    const [logo, alteraLogo] = useState("")
    const [descricao, alteraDescricao] = useState("")

    const [editando, alteraEditando] = useState(false)

    async function editar() {

        let usuario = await supabase.from(comercio == "true" ? "comercios" : "usuarios").select().eq("id", id_usuario)
        usuario = usuario.data[0]


        let objeto = {}

        const objeto_usuario = {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
        }

        if(comercio == "true"){
            const objeto_comercio = {
                whatsapp: usuario.whatsapp,
                endereco: usuario.endereco,
                categoria: usuario.categoria,
                logo: usuario.logo,
                descricao: usuario.descricao
            }
            objeto = {...objeto_usuario, ...objeto_comercio}
        }else{
            objeto = objeto_usuario
        }

        alteraEditando(true)

        alteraNome(objeto.nome)
        alteraEmail(objeto.email)
        alteraSenha(objeto.senha)
        alteraTelefone(objeto.telefone)
        alteraWhatsapp(objeto.whatsapp)
        alteraEndereco(objeto.endereco)
        alteraCategoria(objeto.categoria)
        alteraLogo(objeto.logo)
        alteraDescricao(objeto.descricao)

    }

    function cancelaEdicao() {

        alteraEditando(false)

        alteraNome("")
        alteraEmail("")
        alteraSenha("")
        alteraTelefone("")
        alteraWhatsapp("")
        alteraEndereco("")
        alteraCategoria("")
        alteraLogo("")
        alteraDescricao("")


    }

    async function atualizar() {

        let objeto = {}

        const objeto_usuario = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
        }

        if(comercio == "true"){
            const objeto_comercio = {
                whatsapp: whatsapp,
                endereco: endereco,
                categoria: categoria,
                logo: logo,
                descricao: descricao
            }
            objeto = {...objeto_usuario, ...objeto_comercio}
        }else{
            objeto = objeto_usuario
        }

        const { error } = await supabase
            .from(comercio == "true" ? 'comercios' : 'usuarios')
            .update(objeto)
            .eq('id', id_usuario)



        if (error == null) {

            alert("Ddados alterados com sucesso!")
            cancelaEdicao()

        } else {

            alert("Dados invalidos! Verifique os campos e teste novamente...")

        }

    }

    function sair(){
        localStorage.removeItem("id_usuario")
        localStorage.removeItem("nome_usuario")
        alert("Desconectado com sucesso")
        location.href = "/"
    }

    return (

    <div>
        {
            id_usuario == null || id_usuario == "" ? <p style={{position: "absolute", left: 0, right: 0, top: "2%", width: "100%", textAlign: "center"}}>Faça <a href="/login">login</a> para acessar seu painel</p> :

            <div className=" menuLateral text-white" style={{position: "absolute", left: 0, right: 0, top: "0%", width: "15%", textAlign: "center"}}>

            <button class="btn btn-outline-light btn-sm" onClick={sair} style={{position: "absolute", right: 100, left: 100, bottom: 20}}>Sair</button>

            <div className="text-center p-3">


                <Link href="perfil_comerciante" >

                    <img

                        className="my-2 rounded-circle"
                        width="150"
                        src={"https://ui-avatars.com/api/?background=random&name="+nome_usuario}

                    />

                </Link>

                <h1 className="mt-2 fs-5">{nome_usuario}</h1>
              

                <button onClick={editar} type="button" className="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    Editar perfil
                </button>

                <div className="text-start modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel1">Editar perfil</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div className="row g-3" >

                                    {/* Nome */}
                                    <div className="col-12">
                                        <label htmlFor="nome" className="form-label">Nome </label>
                                        <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email </label>
                                        <input value={email} onChange={e => alteraEmail(e.target.value)} type="email" className="form-control" id="email" />
                                    </div>

                                    {/* Senha */}
                                    {/* <div className="col-md-6">
                                        <label htmlFor="senha" className="form-label">Senha </label>
                                        <input value={senha} onChange={e => alteraSenha(e.target.value)} type="password" className="form-control" id="senha" />
                                    </div> */}

                                    {/* Telefone */}
                                    <div className="col-md-6">
                                        <label htmlFor="telefone" className="form-label">Telefone </label>
                                        <input value={telefone} type='number' onChange={e => alteraTelefone(e.target.value)} className="form-control" id="telefone" />
                                    </div>

                                    {/* WhatsApp */}
                                    {
                                        comercio == "true" &&
                                        <div>

                                            <div className="col-md-6">
                                                <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                                                <input value={whatsapp} type='number' onChange={e => alteraWhatsapp(e.target.value)} className="form-control" id="whatsapp" />
                                            </div>

                                            {/* Endereço */}
                                            <div className="col-12">
                                                <label htmlFor="endereco" className="form-label">Endereço Completo </label>
                                                <input value={endereco} onChange={e => alteraEndereco(e.target.value)} className="form-control" id="endereco" />
                                            </div>

                                            {/* Categoria */}
                                            <div className="col-12">
                                                <label htmlFor="categoria" className="form-label">Categoria da Empresa </label>
                                                <select value={categoria} onChange={e => alteraCategoria(e.target.value)} className="form-select" id="categoria">
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
                                            <div className="col-12 mb-3">
                                                <label htmlFor="logo" className="form-label">Logo da Empresa *</label>
                                                <input onChange={e => alteraLogo(e.target.files[0])} type="file" className="form-control" id="logo" />

                                            </div>


                                            {/* Descrição */}
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea
                                                        value={descricao}
                                                        onChange={e => alteraDescricao(e.target.value)}
                                                        className="form-control"
                                                        placeholder="Descrição"
                                                        id="descricao"
                                                        style={{ height: "100px" }}
                                                    ></textarea>
                                                    <label htmlFor="descricao">Descrição *</label>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>

                            <div class="modal-footer d-flex justify-content-center">
                                <button onClick={atualizar} type="button" className="btn btn-primary">Atualizar</button>
                                <button onClick={() => cancelaEdicao(false)} type="button" className=" text-start btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="fs-6 list-group list-group-flush px-2" style={{position: "relative"}}>

                <Link href="/" className="list-group-item list-group-item-action">
                    Início
                </Link>

                {
                    comercio == "true" ?
                        <div className= "mt-5 fs-5 list-group list-group-flush">
                            <Link href="perfil_comerciante" className="list-group-item list-group-item-action">
                                Meus Produtos
                            </Link>

                            <Link href="tela_anuncio" className="list-group-item list-group-item-action">
                                Meus Anuncios
                            </Link>
                        </div>
                    :
                           <div>

                           </div>
                    
                }



            </div>

            </div>

        }

    </div>
        
    );
}

export default MenuLateral;