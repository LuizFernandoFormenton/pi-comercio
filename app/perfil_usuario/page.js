'use client'

import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";

export default function PerfilUsuario() {

    if(typeof window === "undefined")return null

    const [nome, alteraNome] = useState("")
    const [cpf, alteraCpf] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")
    const [confirmarSenha, alteraConfirmarSenha] = useState("")
    const [imagem, alteraImagem] = useState("")

    const [editando, alteraEditando] = useState("")

    const [usuario, alteraUsuario] = useState(null)

    const id_usuario = localStorage.getItem("id_usuario")


    async function buscarUsuario() {

        const { data, error } = await supabase
            .from("usuarios")
            .select()
            .eq("id", id_usuario)

        console.log(data)

        alteraUsuario(data[0])

        console.log(error)
    }


    async function atualizar() {

        const objeto = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,

        }

        const { error } = await supabase
            .from('usuarios')
            .update(objeto)
            .eq('id', editando)

        if (error == null) {
            alert("Atualização realizada com sucesso! ✅")

        } else {
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }

    }

    async function atualizarSenha() {

        const objeto = {
            senha: senha
        }

        if (senha !== confirmarSenha) {
            alert("As senhas são diferentes, tente novamente...")
            return
        }

        const { error } = await supabase
            .from('usuarios')
            .update(objeto)
            .eq('id', editando)

        if (error == null) {
            alert("Senha alterada com sucesso! ✅")

        } else {
            alert("Não foi possível alterar a senha, tente novamente...")
        }

    }


    async function atualizarImagem() {

        const objeto = {

            imagem: imagem
        }

        const { error } = await supabase
            .from('usuarios')
            .update(objeto)
            .eq('id', editando)

        if (error == null) {
            alert("Imagem alterada com sucesso! ✅")

        } else {
            alert("Não foi possível alterar a imagem!")
        }

    }

    useEffect(() => {

        buscarUsuario()

    }, [])


    return (

        <div>
            {
                usuario == null ? <div></div> :
                <div className="container-fluid">

                    <div className="row">

                        {/* Menu Lateral */}

                        <div className="col- ">
                            {/* <div className="text-center">

                                <img className="my-2 text-center rounded-circle" width="200" src="/Programadora.avif" />
                                <h1 className="mt-1 fs-4">Geovana Ribeiro</h1>
                                <p>Bem-Vindo {usuario == null ? "Carregando..." : usuario.nome}</p>
                                <button onClick={atualizarImagem} className="btn btn-outline-dark">Alterar Foto</button>
                                <hr />

                            </div>


                            <div className="mt-5 fs-5 list-group list-group-flush">
                                <a href="#" className="list-group-item list-group-item-action">Cupons</a>
                                <a href="#" className="list-group-item list-group-item-action">Favoritos</a>
                                <a href="#" className="list-group-item list-group-item-action">Editar Perfil</a>

                            </div> */}

                            {/* <div className="text-center mt-auto">

                                <button className="my-2 text-center btn btn-outline-light">Sair</button>

                            </div> */}

                        </div>

                        <div className="col-"></div>

                        {/* Perfil do usuário */}

                        <div className="col-6">

                            <div className="editarPerfil align-self-center border rounded p-5 my-5">


                                <h2 className="my-2">Perfil do Usuário</h2>
                                <hr />


                                <form onsubmit={(e) => e.preventDefault()}>

                                    <div className="mb-3">
                                        <label className="form-label">Nome Completo *</label>
                                        <input value={nome} onChange={(e) => alteraNome(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">CPF *</label>
                                        <input value={cpf} onChange={(e) => alteraCpf(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Telefone *</label>
                                        <input value={telefone} onChange={(e) => alteraTelefone(e.target.value)} type="tel" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">E-mail *</label>
                                        <input value={email} onChange={(e) => alteraEmail(e.target.value)} type="email" className="form-control" />
                                    </div>

                                    <button onClick={atualizar} type="button" class="btn btn-outline-dark">Atualizar Dados</button>

                                </form >

                                <form onSubmit={(e) => e.preventDefault()}>

                                    <hr />
                                    <h3>Alterar Senha</h3>

                                    <div className="mb-3">
                                        <label className="form-label">Nova Senha *</label>
                                        <input value={senha} onChange={(e) => alteraSenha(e.target.value)} type="password" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Confirmar Senha *</label>
                                        <input value={confirmarSenha} onChange={(e) => alteraConfirmarSenha(e.target.value)} type="password" className="form-control" />
                                    </div>

                                    <button onClick={atualizarSenha} type="button" class="btn btn-outline-dark">Alterar Senha</button>

                                </form>

                            </div>

                        </div>

                        <div className="col-2"></div>

                    </div>


                </div>
            }
        </div>

        
    );
}