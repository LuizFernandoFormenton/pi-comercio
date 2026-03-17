'use client'

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient('https://myrdwyenvuxdgrbdbjgl.supabase.co', 'sb_publishable_QItyhHGNmCrt94WyCBRqrw_41i_b-63')

function Gerenciador_Produtos() {

    const [produtos, alteraProdutos] = useState([])
    const [autenticado, alteraAutenticado] = useState(false)

    
    const [nome, alteraNome] = useState("")
    const [descricao, alteraDescricao] = useState("")
    const [valor, alteraValor] = useState("")
   

    async function buscar() {
        const { data, error } = await supabase
            .from('produtos')
            .select()
        console.log(data)
        alteraProdutos(data)
    }

    async function salvar() {
        const objeto = {
            nome: nome,
            descricao: descricao,
            valor: valor,
            id_comercio: 10
        }

        if (objeto.nome.length < 3) {
            alert("Nome do produto inválido.")
            return
        }

        if (objeto.valor <= 0) {
            alert("Valor do produto deve ser maior que zero.")
            return
        }

        const { error } = await supabase
            .from('produtos')
            .insert(objeto)

        console.log(error)

        if (error == null) {
            alert("Produto cadastrado com sucesso!")
            alteraNome("")
            alteraDescricao("")
            alteraValor("")
            buscar()
        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }
    }

    useEffect(() => {
        buscar()
    }, [])



    useEffect(() => {
        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            alteraAutenticado(true)
        }
    }, [])


   return (
        <div className="container py-5">
            {autenticado ? (
                <>
                    <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>
                        Gerenciador de Produtos
                    </h1>

                    <div className="d-flex justify-content-center mb-5">
                        <div className="border rounded p-4 w-100" style={{ maxWidth: "800px" }}>
                            <form className="row g-3">

                                <div className="col-md-12">
                                    <label htmlFor="nome" className="form-label">Produto</label>
                                    <input
                                        id="nome"
                                        className="form-control"
                                        value={nome}
                                        onChange={e => alteraNome(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="descricao" className="form-label">Descrição</label>
                                    <input
                                        id="descricao"
                                        className="form-control"
                                        value={descricao}
                                        onChange={e => alteraDescricao(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="valor" className="form-label">Valor</label>
                                    <input
                                        id="valor"
                                        type="number"
                                        step="0.01"
                                        className="form-control"
                                        value={valor}
                                        onChange={e => alteraValor(e.target.value)}
                                    />
                                </div>


                                <div className="col-md-2 d-flex align-items-end">
                                    <button type="button" className="btn btn-warning w-100" onClick={salvar}>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-center mb-4 fw-bold p-3" style={{ color: "#ff6b00" }}>
                        Produtos cadastrados
                    </h2>
                    <hr />
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ color: "#ff6b00" }}>Empresa</th>
                                    <th scope="col" style={{ color: "#ff6b00" }}>Produto</th>
                                    <th scope="col" style={{ color: "#ff6b00" }}>Descrição</th>
                                    <th scope="col" style={{ color: "#ff6b00" }}>Valor</th>
                                    <th scope="col" style={{ color: "#ff6b00" }}>ID Comércio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Carregando...</span>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    produtos.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.empresa || '-'}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.descricao}</td>
                                            <td>R$ {item.valor}</td>
                                            <td>{item.id_comercio}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}
export default Gerenciador_Produtos