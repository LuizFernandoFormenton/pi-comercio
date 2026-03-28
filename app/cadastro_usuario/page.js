'use client'

import Link from "next/link";
import { useState } from "react";
import supabase from "../conexao/supabase";


export default function CadastroUsuario() {

  const [nome, alteraNome] = useState("")
  const [cpf, alteraCpf] = useState("")
  const [telefone, alteraTelefone] = useState("")
  const [email, alteraEmail] = useState("")
  const [senha, alteraSenha] = useState("")
  const [confirmarSenha, alteraConfirmarSenha] = useState("")
  const [imagem, alteraImagem] = useState("")
  const [status, alteraStatus] = useState("")


  const [admin, alteraAdmin] = useState("")

  async function salvar(e) {

    e.preventDefault()

    if (senha != confirmarSenha) {
      alert("As senhas não são iguais, confirme a senha digitada")
      return
    }
    
    //Autenticação para cadastrar novo usuário
  
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: senha
    })

    if(data == null){
      alert("Dados inválidos...")
      return
    }

    //Dados a serem cadastrados na tabela de usuários
    const objeto = {

      id: data.user.id,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      imagem: imagem

    }

    const resposta = await supabase
      .from('usuarios')
      .insert([objeto])

    console.log(error)


    if (resposta.error == null) {
      alert("Usuário cadastrado com sucesso!!! ✅")
      alteraNome("")
      alteraCpf("")
      alteraTelefone("")
      alteraEmail("")
      alteraSenha("")
      alteraConfirmarSenha("")

    } else {
      alert("Verifique os dados inseridos e tente novamente...")
    }

  }


  return (

    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "650px" }}>

        <form onSubmit={salvar} className="row g-3">

          <h1 className="text-center mb-3">Cadastro Usuário</h1>

          {/* Nome */}
          <div className="col-12">
            <label htmlFor="nome" className="form-label">Nome Completo *</label>
            <input value={nome} onChange={e => alteraNome(e.target.value)} id="nome" className="form-control" />
          </div>

          {/* CPF */}
          <div className="col-md-6">
            <label htmlFor="cpf" className="form-label">CPF *</label>
            <input value={cpf} onChange={e => alteraCpf(e.target.value)} id="cpf" className="form-control" />
          </div>

          {/* Telefone */}
          <div className="col-md-6">
            <label htmlFor="telefone" className="form-label">Telefone *</label>
            <input value={telefone} onChange={e => alteraTelefone(e.target.value)} id="telefone" type="tel" className="form-control" />
          </div>

          {/* Email */}
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email *</label>
            <input value={email} onChange={e => alteraEmail(e.target.value)} id="email" type="email" className="form-control" />
          </div>

          {/* Senha */}
          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">Senha *</label>
            <input value={senha} onChange={e => alteraSenha(e.target.value)} id="senha" type="password" className="form-control" />
          </div>

          {/* Confirmar senha */}

          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">Confirmar Senha *</label>
            <input value={confirmarSenha} onChange={e => alteraConfirmarSenha(e.target.value)} id="senha" type="password" className="form-control" />
          </div>

          {/* Botão */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-outline-dark px-5">Cadastrar</button>
            <br />
            <br />

            <p>Quer se cadastrar como comerciante ? <Link href="/cadastro_comercios">Clique Aqui </Link> </p>

          </div>

        </form>

      </div>

    </div>
  );

}