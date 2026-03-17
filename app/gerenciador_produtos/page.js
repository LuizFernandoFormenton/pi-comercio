'use client'

import { useEffect, useState } from 'react'
import supabase from '../conexao/supabase'

function Produtos() {
    const [produtos, alteraProdutos] = useState([])

    const [id_comercio, alteraId_comercio] = useState("")
    const [nome, alteraNome] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState("")
    const [created_at, alteraCreated_at] = useState("")

    async function buscar() {
        const { data, error } = await supabase
            .from('produtos')
            .select(`
                *,
                id_comercio (nome)
            `);

        alteraProdutos(data)
    }
    async function salvar(e) {
        e.preventDefault();

        const objeto = {
            id_comercio: id_comercio,
            nome: nome,
            descricao: descricao,
            valor: valor.replaceAll(",", "."),
            created_at: created_at
        }


        if (objeto.id_comercio.length < 1 || objeto.nome.length < 3 || objeto.descricao.length < 3 || objeto.valor.length < 1) {
            alert("Campos inválidos ou quantidade de caracteres insuficiente.");
            return;
        }

        const { error } = await supabase
            .from('produtos')
            .insert([objeto]);

        if (error == null) {
            alert("Produto cadastrado com sucesso");
            alteraId_comercio("");
            alteraNome("");
            alteraDescricao("");
            alteraValor("");
            alteraCreated_at("");
        } else {
            console.error(error);
            alert("Dados inválidos, verifique os campos e tente novamente...");
        }
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
        buscar();
    }, []);

    return (
        <div className="container py-5">

            <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>
                Gerenciador de Produtos
            </h1>

            <div className="d-flex justify-content-center min-vh-40">

                <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "800px" }}>

                    <form className="row g-3">

                        <div className="col-12">
                            <label htmlFor="empresa" className="form-label">Empresa</label>
                            <input value={id_comercio} onChange={e => alteraId_comercio(e.target.value)} id="empresa" className="form-control" />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="produto" className="form-label">Produtos</label>
                            <input id="produto" className="form-control" value={nome} onChange={e => alteraNome(e.target.value)} />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input id="descricao" className="form-control" value={descricao} onChange={e => alteraDescricao(e.target.value)} />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="valor" className="form-label">Valor</label>
                            <input id="valor" type="number" className="form-control" value={valor} onChange={e => alteraValor(e.target.value)} />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="valor" className="form-label">Criado em:</label>
                            <input id="valor" type="number" className="form-control" value={created_at} onChange={e => alteraCreated_at(e.target.value)} />
                        </div>

                        <div className="col-md-2 p-20">
                            <button onClick={salvar} class="btn btn-warning p-4">Salvar</button>
                        </div>

                    </form>
                </div>
            </div >

            <h2 className="text-center mb-4 fw-bold p-3 mt-5" style={{ color: "#ff6b00" }}>
                Produtos Cadastrados
            </h2>

            <hr />

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: "#ff6b00" }}>#</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Empresa</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Produto</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Descrição</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Valor</th>
                            <th scope="col" style={{ color: "#ff6b00" }}>Criado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.length === 0 ? (

                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Carregando...</span>
                            </div>
                        ) : (
                            produtos.map(
                                (item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id_comercio.nome}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>
                                        <td>
                                            R$ {item.valor.toString().split('.')[0]},
                                            <small style={{ fontSize: '12px' }}>
                                                {item.valor.toString().split('.')[1] || '00'}
                                            </small>
                                        </td>
                                        <td>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Produtos;