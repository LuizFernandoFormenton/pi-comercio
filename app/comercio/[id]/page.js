'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "../../conexao/supabase";

function Comercio() {
    const params = useParams()

    const [listaComercios, alteraListaComercios] = useState([])
    const [listaProdutos, alteraListaProdutos] = useState([])

    async function mostraID() {
        const { data, error } = await supabase
            .from('comercios')
            .select('*')
            .eq('id', params.id)

        alteraListaComercios(data || [])
        console.log(error)
    }

    async function buscarProdutos() {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('id_comercio', params.id)

        alteraListaProdutos(data || [])
        console.log(error)
    }

    function formataData(data) {
        let data_formatadas = new Date(data)
        data_formatadas = data_formatadas.toLocaleDateString()
        return data_formatadas
    }

    function formataHoras(horas) {
        let horas_formatadas = new Date(horas)
        horas_formatadas = horas_formatadas.toLocaleTimeString()
        return horas_formatadas
    }

    useEffect(() => {
        if (params.id) {
            mostraID();
            buscarProdutos();
        }
    }, [params.id]);

    return (
        <div className="container mt-4">
            <button
                className="btn btn-outline-warning mb-3"
                onClick={() => location.href = "/"}
            >
                ← Voltar
            </button>

            <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }} >Detalhes do comércio</h1>
            <p><strong>ID:</strong> {params.id}</p>

            <hr />

            {listaComercios?.map((item) => (
                <div className="card p-3 shadow mb-4" key={item.id}>
                    <img
                        src={item.logo}
                        alt="Logo do comércio"
                        style={{ width: "90px", marginBottom: "10px" }}
                    />
                    <p><strong>ID:</strong> {item.id}</p>
                    <p><strong>Comércio:</strong> {item.nome}</p>
                    <p><strong>E-mail:</strong> {item.email}</p>
                    <p><strong>Telefone:</strong> {item.telefone}</p>
                    <p><strong>Whatsapp:</strong> {item.whatsapp}</p>
                    <p><strong>Endereço:</strong> {item.endereco}</p>
                    <p><strong>Categoria:</strong> {item.categoria}</p>
                    <p><strong>Descrição:</strong> {item.descricao}</p>
                    <p><strong>Data de criação:</strong> {formataData(item.created_at)} {formataHoras(item.created_at)}</p>
                </div>
            ))}

            <h2 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>Produtos do comércio</h2>
            <hr />

            <div className="row">
                {listaProdutos?.map((item) => (
                    <div className="col-md-4 mb-4" class= {item.id}>
                        <div className="card h-100 shadow p-3">
                            <p><strong>Produto:</strong> {item.nome}</p>
                            <p><strong>Descrição:</strong> {item.descricao}</p>
                            <p><strong>Valor:</strong> R$ {item.valor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comercio;