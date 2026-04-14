'use client'

import Link from "next/link";

import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import { useRouter } from "next/navigation";


export default function Login() {

  const route = useRouter()

  const [autenticado, alteraAutenticado] = useState(false)

  const [email, alteraEmail] = useState("")
  const [senha, alteraSenha] = useState("")

  async function autenticar(e) {

    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    })


    if (data.user == null) {
      alert("Dados inválidos...")
      return
    }

    localStorage.setItem("id_usuario", data.user.id)

    const resposta = await supabase.from('usuarios').select().eq('id', data.user.id)
    if (resposta.data != 0) {
      console.log("Logado como usuario")
      localStorage.setItem("nome_usuario", resposta.data[0].nome)
      localStorage.setItem("comercio", false)
    } else {
      console.log("Logado como comerciante")
      const resposta2 = await supabase.from('comercios').select().eq('id', data.user.id)
      console.log(resposta2)
      localStorage.setItem("nome_usuario", resposta2.data[0].nome)
      localStorage.setItem("comercio", true)
    }

    alert("Autenticado com sucesso! ✅")

    location.href = "/"

  }

  return (


    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "550px" }}>
        <div className="position-relative mb-3">
          <button onClick={() => route.back()} className="btn-laranja btn-sm position-absolute start-0 top-50 translate-middle-y">
            ← Voltar
          </button>

          <div className="" >
            
             <h1 className="text-center m-0">Bem vindo </h1>

          </div>

        </div>

        {autenticado == false ?

          <form  className="row g-3">


            {/* Email */}
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
              <input value={email} onChange={e => alteraEmail(e.target.value)} id="email" type="email" className="form-control" />
            </div>

            {/* Senha */}
            <div className="col-12">
              <label htmlFor="senha" className="form-label">Senha <span className="text-danger">*</span></label>
              <input value={senha} onChange={e => alteraSenha(e.target.value)} id="senha" type="password" className="form-control" />
            </div>

            <button onClick={autenticar} type="button" className="btn-laranja btn-sm">LOGIN</button>
            <br />

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