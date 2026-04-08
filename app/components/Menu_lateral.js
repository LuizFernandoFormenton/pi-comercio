'use client'

import Link from "next/link";
import { useState } from "react";
import supabase from "../conexao/supabase";
import "./Menu_lateral.css";

function MenuLateral() {
    if (typeof window === "undefined") return null

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
        let usuario = await supabase
            .from(comercio == "true" ? "comercios" : "usuarios")
            .select()
            .eq("id", id_usuario)

        usuario = usuario.data[0]

        let objeto = {}

        const objeto_usuario = {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
        }

        if (comercio == "true") {
            const objeto_comercio = {
                whatsapp: usuario.whatsapp,
                endereco: usuario.endereco,
                categoria: usuario.categoria,
                logo: usuario.logo,
                descricao: usuario.descricao
            }
            objeto = { ...objeto_usuario, ...objeto_comercio }
        } else {
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

        if (comercio == "true") {
            const objeto_comercio = {
                whatsapp: whatsapp,
                endereco: endereco,
                categoria: categoria,
                logo: logo,
                descricao: descricao
            }
            objeto = { ...objeto_usuario, ...objeto_comercio }
        } else {
            objeto = objeto_usuario
        }

        const { error } = await supabase
            .from(comercio == "true" ? 'comercios' : 'usuarios')
            .update(objeto)
            .eq('id', id_usuario)

        if (error == null) {
            alert("Dados alterados com sucesso!")
            cancelaEdicao()
        } else {
            alert("Dados inválidos! Verifique os campos e teste novamente...")
        }
    }

    function sair() {
        localStorage.removeItem("id_usuario")
        localStorage.removeItem("nome_usuario")
        alert("Desconectado com sucesso")
        location.href = "/"
    }

    return (
        <div>
            {
                id_usuario == null || id_usuario == "" ? (
                    <p className="login-alerta">
                        Faça <a href="/login">login</a> para acessar seu painel
                    </p>
                ) : (

                    <div className="menuLateral">

                        <div className="menu-topo">
                            <Link href="perfil_comerciante" className="avatar-link">
                                <img
                                    className="menu-avatar"
                                    width="120"
                                    height="120"
                                    src={"https://ui-avatars.com/api/?background=random&name=" + nome_usuario}
                                    alt={nome_usuario}
                                />
                            </Link>

                            <h1 className="menu-nome">{nome_usuario}</h1>

                            <button
                                onClick={editar}
                                type="button"
                                className="btn btn-editar-perfil"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                            >
                                Editar perfil
                            </button>
                        </div>

                        <hr className="menu-divisor" />

                        <div className="menu-links">
                            <Link href="/" className="menu-link">
                                Início
                            </Link>

                            {
                                comercio == "true" ? (
                                    <>
                                        <Link href="perfil_comerciante" className="menu-link">
                                            Meus Produtos
                                        </Link>

                                        <Link href="tela_anuncio" className="menu-link">
                                            Meus Anúncios
                                        </Link>
                                    </>
                                ) : <div></div>
                            }
                        </div>

                        <div className="menu-rodape">
                            <button className="btn btn-sair" onClick={sair}>
                                Sair
                            </button>
                        </div>

                        {/* Modal */}
                        <div className="text-start modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content modal-personalizado">
                                    <div className="modal-header border-0">
                                        <h1 className="modal-title fs-5 titulo-modal" id="exampleModalLabel1">
                                            Editar perfil
                                        </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="modal-body">
                                        <div className="row g-3">

                                            <div className="col-12">
                                                <label htmlFor="nome" className="form-label">Nome</label>
                                                <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input value={email} onChange={e => alteraEmail(e.target.value)} type="email" className="form-control" id="email" />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="telefone" className="form-label">Telefone</label>
                                                <input value={telefone} type="number" onChange={e => alteraTelefone(e.target.value)} className="form-control" id="telefone" />
                                            </div>

                                            {
                                                comercio == "true" &&
                                                <>
                                                    <div className="col-md-6">
                                                        <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                                                        <input value={whatsapp} type="number" onChange={e => alteraWhatsapp(e.target.value)} className="form-control" id="whatsapp" />
                                                    </div>

                                                    <div className="col-12">
                                                        <label htmlFor="endereco" className="form-label">Endereço Completo</label>
                                                        <input value={endereco} onChange={e => alteraEndereco(e.target.value)} className="form-control" id="endereco" />
                                                    </div>

                                                    <div className="col-12">
                                                        <label htmlFor="categoria" className="form-label">Categoria da Empresa</label>
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

                                                    <div className="col-12">
                                                        <label htmlFor="logo" className="form-label">Logo da Empresa</label>
                                                        <input onChange={e => alteraLogo(e.target.files[0])} type="file" className="form-control" id="logo" />
                                                    </div>

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
                                                            <label htmlFor="descricao">Descrição</label>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>

                                    <div className="modal-footer border-0 justify-content-center">
                                        <button onClick={atualizar} type="button" className="btn btn-laranja">
                                            Atualizar
                                        </button>
                                        <button onClick={() => cancelaEdicao()} type="button" className="btn btn-cinza" data-bs-dismiss="modal">
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
}

export default MenuLateral;