'use client'

import Link from "next/link";

import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";


export default function Login() {

  const [autenticado, alteraAutenticado] = useState(false)

  const [email, alteraEmail] = useState("")
  const [senha, alteraSenha] = useState("")

  async function autenticar() {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,

    })

    if(data.user == null){
      alert("Dados inválidos...")
      return
    }

    alert("Autenticado com sucesso! ✅")
    localStorage.setItem("id_usuario", data.user.id)
    location.href="/"

  }

  async function desconectar() {
    const { error } = await supabase.auth.signOut()
  }


  return (


    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "550px" }}>

        {autenticado == false ?

          <form className="row g-3">

            <h1 className="text-center mb-3">Bem-Vindo!</h1>

            {/* Email */}
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email *</label>
              <input value={email} onChange={e => alteraEmail(e.target.value)} id="email" type="email" className="form-control" />
            </div>

            {/* Senha */}
            <div className="col-12">
              <label htmlFor="senha" className="form-label">Senha *</label>
              <input value={senha} onChange={e => alteraSenha(e.target.value)} id="senha" type="password" className="form-control" />
            </div>

            <button onClick={autenticar} type="button" class="btn btn-outline-dark">LOGIN</button>
            <br/>

            <p className="text-center mb-3">Não tem cadastro ? <Link href="/cadastro_usuario">Clique Aqui </Link> </p>

          </form>

          :

          <div>
            <p>Você já esta logado!</p>
            <button onClick={desconectar} >Sair da Conta</button>

          </div>

        }


      </div>

    </div>
  );
}