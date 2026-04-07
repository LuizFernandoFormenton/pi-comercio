'use client'

import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";


export default function Perfil() {

    return (

        <div className="d-flex" style={{ minHeight: "100vh", background: "#f5f6fa" }}>

            {/* CONTEÚDO */}
            <div className="flex-grow-1 p-4">

                {/* HEADER */}
                <div className="card border-0 shadow-sm mb-4" style={{
                    background: "linear-gradient(120deg, #ff7a00, #ffb347)",
                    color: "white"
                }}>
                    <div className="card-body d-flex align-items-center gap-4">

                        <img
                            src="./Programadora.avif"
                            className="rounded-circle border border-3 border-white"
                            width="100"
                        />

                        <div>

                            <h3 className="mb-1 fw-bold">
                                Geovana Ribeiro
                            </h3>

                            {/* 🔥 DADOS AGORA AQUI */}
                            <div className="small opacity-75">

                                <div>
                                    <i className="bi bi-person-vcard me-2"></i>
                                    CPF: 449.485.698-95
                                </div>

                                <div>
                                    <i className="bi bi-envelope me-2"></i>
                                    geovana.ribeiro.anjos@gmail.com
                                </div>

                                <div>
                                    <i className="bi bi-telephone me-2"></i>
                                    (16) 99701-2991
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                {/* ESTATÍSTICAS */}
                <div className="row mb-4">

                    {
                        [
                            { titulo: "Cupons", valor: 4, icon: "bi-ticket-perforated-fill" },
                            { titulo: "Favoritos", valor: 4, icon: "bi-heart-fill" },
                            { titulo: "Visitas", valor: 30, icon: "bi-geo-alt-fill" },
                            { titulo: "Curtidas", valor: 128, icon: "bi-hand-thumbs-up-fill" }
                        ].map(item => (

                            <div className="col-md-3">
                                <div className="card border-0 shadow-sm text-center p-3">

                                    <i className={`bi ${item.icon} fs-2 text-warning`}></i>

                                    <h4 className="mt-2">{item.valor}</h4>
                                    <p className="text-muted mb-0">{item.titulo}</p>

                                </div>
                            </div>

                        ))
                    }

                </div>

                {/* CONTEÚDO */}
                <div className="row">

                    {/* CUPONS */}
                    <div className="col-md-6">

                        <div className="card shadow-sm border-0 mb-4">
                            <div className="card-body">

                                <h5 className="mb-3">
                                    <i className="bi bi-ticket-perforated me-2"></i>
                                    Cupons
                                </h5>

                                {
                                    [
                                        { texto: "10% de desconto em Moda", codigo: "MODA10" },
                                        { texto: "Entrega grátis em mercados", codigo: "FRETEGRATIS" },
                                        { texto: "R$ 30 reais acima de R$ 249,00", codigo: "DESC30" },
                                        { texto: "Refrigerante grátis", codigo: "BEBIDAFREE" }
                                    ].map(cupom => (

                                        <div className="mb-3 p-3 rounded d-flex justify-content-between align-items-center cupom-card">

                                            <div className="d-flex align-items-center gap-2">

                                                <i className="bi bi-ticket-perforated-fill text-warning"></i>

                                                <div>
                                                    <div>{cupom.texto}</div>
                                                    <span className="badge bg-dark mt-1">
                                                        {cupom.codigo}
                                                    </span>
                                                </div>

                                            </div>

                                            <button
                                                className="btn btn-outline-dark btn-sm"
                                                onClick={() => {
                                                    navigator.clipboard.writeText(cupom.codigo)
                                                    alert("Cupom copiado! 🎉")
                                                }}
                                            >
                                                <i className="bi bi-clipboard"></i>
                                            </button>

                                        </div>

                                    ))
                                }

                            </div>
                        </div>

                    </div>

                    {/* FAVORITOS */}
                    <div className="col-md-6">

                        <div className="card shadow-sm border-0">
                            <div className="card-body">

                                <h5 className="mb-3">
                                    <i className="bi bi-heart me-2"></i>
                                    Favoritos
                                </h5>

                                <div className="row">

                                    {
                                        [
                                            {
                                                nome: "J2 Hamburgueria",
                                                categoria: "Lanchonetes",
                                                whatsapp: "16995863215"
                                            },
                                            {
                                                nome: "Bella Turim",
                                                categoria: "Pizzarias",
                                                whatsapp: "16992536848"
                                            },
                                            {
                                                nome: "Renner",
                                                categoria: "Moda",
                                                whatsapp: "16991992685"
                                            },
                                            {
                                                nome: "Oscar Calçados",
                                                categoria: "Moda",
                                                whatsapp: "16992056895"
                                            }
                                        ].map(item => (

                                            <div className="col-md-6 mb-3">

                                                <div
                                                    className="card border-0 shadow-sm h-100 p-3 favorito-card"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => window.location.href = "/empresa"}
                                                >

                                                    <div className="d-flex justify-content-between">

                                                        <div>
                                                            <h6 className="fw-bold mb-1">{item.nome}</h6>
                                                            <span className="badge bg-warning text-dark">
                                                                {item.categoria}
                                                            </span>
                                                        </div>

                                                        <i className="bi bi-heart-fill text-danger"></i>

                                                    </div>

                                                    <div className="mt-3 d-flex justify-content-between align-items-center">

                                                        <small className="text-muted">
                                                            Ver detalhes
                                                        </small>

                                                        <a
                                                            href={`https://wa.me/${item.whatsapp}`}
                                                            target="_blank"
                                                            className="btn btn-success btn-sm"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <i className="bi bi-whatsapp"></i>
                                                        </a>

                                                    </div>

                                                </div>

                                            </div>

                                        ))
                                    }

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}