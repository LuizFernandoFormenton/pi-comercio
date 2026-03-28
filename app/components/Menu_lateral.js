'use client'


import Link from "next/link";
import { useState } from "react";

function MenuLateral() {

    const [nome, alteraNome] = useState()
    const [email, alteraEmail] = useState()
    const [senha, alteraSenha] = useState()
    const [telefone, alteraTelefone] = useState()
    const [whatsapp, alteraWhatsapp] = useState()
    const [endereco, alteraEndereco] = useState()
    const [categoria, alteraCategoria] = useState()
    const [logo, alteraLogo] = useState()
    const [descricao, alteraDescricao] = useState()

    const [editando, alteraEditando] = useState(null)

    function editar(objeto) {

        alteraEditando(objeto.id)

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

        alteraEditando(null)

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

        const objeto = {

            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
            whatsapp: whatsapp,
            endereco: endereco,
            categoria: categoria,
            logo: logo,
            descricao: descricao

        }

        const { error } = await supabase
            .from('comercios')
            .update(objeto)
            .eq('id', editando)



        if (error == null) {

            alert("Produto alterado com sucesso!")
            cancelaEdicao()

        } else {

            alert("Dados invalidos! Verifique os campos e teste novamnete...")

        }

    }

    return (


        
        <div className=" col-2 menuLateral text-white">

            

            <div className="text-center p-3">


                <Link href="perfil_comerciante" >

                    <img

                        className="my-2 rounded-circle"
                        width="150"
                        src="https://placehold.co/400"

                    />

                </Link>

                <h1 className="mt-2 fs-5">Yachi Restaurante</h1>
                <p>Usuário desde 2026</p>

                <button type="button" className="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">
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
                                        <label htmlFor="nome" className="form-label">Nome da Empresa </label>
                                        <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control" id="nome" />
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email </label>
                                        <input value={email} onChange={e => alteraEmail(e.target.value)} type="email" className="form-control" id="email" />
                                    </div>

                                    {/* Senha */}
                                    <div className="col-md-6">
                                        <label htmlFor="senha" className="form-label">Senha </label>
                                        <input value={senha} onChange={e => alteraSenha(e.target.value)} type="password" className="form-control" id="senha" />
                                    </div>

                                    {/* Telefone */}
                                    <div className="col-md-6">
                                        <label htmlFor="telefone" className="form-label">Telefone </label>
                                        <input value={telefone} type='number' onChange={e => alteraTelefone(e.target.value)} className="form-control" id="telefone" />
                                    </div>

                                    {/* WhatsApp */}
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
                                    <div className="col-12">
                                        <label htmlFor="logo" className="form-label">Logo da Empresa *</label>
                                        <input value={logo} onChange={e => alteraLogo(e.target.value)} type="file" className="form-control" id="logo" />

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

            <div className="fs-6 list-group list-group-flush px-2">
                <Link href="gerenciador_produtos" className="list-group-item list-group-item-action bg-secondary text-white border-0">
                    Cadastrar produto
                </Link>

                <Link href="tela_anuncio" className="list-group-item list-group-item-action bg-secondary text-white border-0">
                    Criar anúncio
                </Link>

            </div>

        </div>



    );
}

export default MenuLateral;