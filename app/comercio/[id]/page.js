'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import supabase from "../../conexao/supabase";
import "./comercio.css"; // Importar CSS customizado

function Comercio() {
    const params = useParams()

    const [listaComercios, alteraListaComercios] = useState([])
    const [listaProdutos, alteraListaProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    async function mostraID() {
        try {
            const { data, error } = await supabase
                .from('comercios')
                .select()
                .eq('id', params.id)

            if (error) throw error;
            alteraListaComercios(data)
        } catch (error) {
            console.error('Erro ao buscar comércio:', error)
            setErro('Erro ao carregar comércio')
        }
    }

    async function buscarProdutos() {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select()
                .eq('id_comercio', params.id)

            if (error) throw error;
            alteraListaProdutos(data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
            setErro('Erro ao carregar produtos')
        } finally {
            setCarregando(false)
        }
    }

    function formataData(data) {
        let data_formatadas = new Date(data)
        data_formatadas = data_formatadas.toLocaleDateString('pt-BR')
        return data_formatadas
    }

    function formataHoras(horas) {
        let horas_formatadas = new Date(horas)
        horas_formatadas = horas_formatadas.toLocaleTimeString('pt-BR')
        return horas_formatadas
    }

    function formataMoeda(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }

    useEffect(() => {
        mostraID();
        buscarProdutos();
    }, []);

    if (carregando) {
        return (
            <div className="container-loading">
                <div className="spinner"></div>
                <p>Carregando informações...</p>
            </div>
        )
    }

    if (erro) {
        return (
            <div className="container-erro">
                <p>{erro}</p>
                <button className="btn-tentar-novamente" onClick={() => location.href = "/"}>
                    Voltar
                </button>
            </div>
        )
    }

    return (

        
        <div className="comercio-container">
            {/* BOTÃO VOLTAR */}
            <button
                className="btn-voltar"
                onClick={() => location.href = "/"}
            >
                ← Voltar
            </button>

            {/* SEÇÃO DETALHES DO COMÉRCIO */}
            {listaComercios.map((item) => (
                <div key={item.id} className="comercio-detalhes">
                    {/* HERO SECTION COM IMAGEM */}
                    <div className="hero-section">
                        <div className="hero-imagem">
                            <img
                                src={item.logo}
                                alt={item.nome}
                                className="imagem-principal"
                            />
                        </div>
                    </div>

                    {/* INFORMAÇÕES PRINCIPAIS */}
                    <div className="info-principal">
                        <div className="info-header">
                            <h1 className="titulo-comercio">{item.nome}</h1>
                            <span className="badge-categoria">{item.categoria}</span>
                        </div>


                        {/* GRID DE CONTATOS */}
                        <div className="contatos-grid">
                            <div className="contato-item">
                                <span className="icon">📱</span>
                                <div>
                                    <p className="label">Telefone</p>
                                    <a href={`tel:${item.telefone}`} className="valor">
                                        {item.telefone}
                                    </a>
                                </div>
                            </div>

                            <div className="contato-item">
                                <span className="icon">💬</span>
                                <div>
                                    <p className="label">WhatsApp</p>
                                    <a href={`https://wa.me/${item.whatsapp}`} target="_blank" className="valor">
                                        {item.whatsapp}
                                    </a>
                                </div>
                            </div>

                            <div className="contato-item">
                                <span className="icon">📍</span>
                                <div>
                                    <p className="label">Endereço</p>
                                    <p className="valor">{item.endereco}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

            {/* SEÇÃO PRODUTOS */}
            <div className="produtos-secao">
                <div className="secao-header">
                    <h2 className="titulo-secao">Produtos</h2>
                    <div className="linha-decorativa"></div>
                </div>

                {listaProdutos.length === 0 ? (
                    <div className="produtos-vazio">
                        <p>Nenhum produto cadastrado</p>
                    </div>
                ) : (
                    <div className="produtos-grid">
                        {listaProdutos.map((item) => (
                            <div key={item.id} className="produto-card">
                                {item.imagem && (
                                    <div className="produto-imagem">
                                        <img
                                            src={item.imagem}
                                            alt={item.nome}
                                        />
                                    </div>
                                )}

                                <div className="produto-conteudo">
                                    <h3 className="produto-nome">{item.nome}</h3>
                                    <p className="produto-descricao">{item.descricao}</p>

                                    <div className="produto-footer">
                                        <span className="produto-valor">
                                            {formataMoeda(item.valor)}
                                        </span>
                                       
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comercio;