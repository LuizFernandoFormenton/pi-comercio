'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import supabase from '../conexao/supabase';

export default function CadastroAnuncioModal() {

  const [descricao, setDescricao] = useState("");
  const [planos, setPlanos] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState(null);
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    buscarAnuncios();
  }, []);

  async function buscarAnuncios() {
    const { data, error } = await supabase
      .from('anuncios')
      .select('*');

    if (!error) {
      setAnuncios(data);
    } else {
      console.log(error);
    }
  }

  async function inscrever(e) {
    e.preventDefault();

    if (!planos) { 
      alert("Por favor, selecione um plano."); 
      return; 
    }

    if (!imagem) { 
      alert("Adicione uma imagem do anúncio"); 
      return; 
    }

    const id_usuario = localStorage.getItem("id_usuario")

    const obj = {
      descricao: descricao,
      planos: planos,
      url: link,
      imagem: imagem,
      id_comercios: id_usuario
    };

    try {

      const { error } = await supabase
        .from('anuncios')
        .insert(obj);

      if (error) {
        alert("Erro ao salvar: " + error.message);
        console.log(error)
      } else {
        alert("Anúncio cadastrado com sucesso!");
        buscarAnuncios();
      }

    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  }

  async function deletar(id) {

    const { error } = await supabase
      .from('anuncios')
      .delete()
      .eq('id', id);

    if (error) {
      alert("Erro ao excluir");
    } else {
      buscarAnuncios();
    }
  }

  async function aceitarAnuncio(id) {

    const { error } = await supabase
      .from('anuncios')
      .update({ status: "aceito" })
      .eq('id', id);

    if (!error) {
      buscarAnuncios();
    }
  }

  return (

<div className="container mt-5">
    <h1><strong>Listagem de Anúncios</strong></h1>
    <p>Aqui você pode ver todos os anúncios cadastrados.</p>
    <hr />
  
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Pesquisar..."
                        aria-label="Recipients username" aria-describedby="basic-addon2" />
                    <button className="input-group-text" id="basic-addon2">🔍</button>
                </div>
    <br />
    
    <button 
        className="btn btn-warning mb-3"
        data-bs-toggle="modal"
        data-bs-target="#modalCadastroAnuncio"
    >
        Cadastrar Novo Anúncio
    </button>

    <table className="table table-hover">

        <thead style={{ backgroundColor: "#ff6b00", color: "white", fontWeight: "bold", fontSize: "18px"}}>
            <tr>
                <th scope="col">Descrição</th>
                <th scope="col">Plano</th>
                <th scope="col">Link</th>
                <th scope="col">Imagem</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>

        <tbody>

            {anuncios.map((anuncio) => (

                <tr key={anuncio.id}>

                    <td><strong>{anuncio.descricao}</strong></td>

                    <td>{anuncio.planos} dias</td>

                    <td>
                        <a 
                        href={anuncio.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <strong>Acessar o link da empresa</strong>
                        </a>
                    </td>

                    <td>
                        <img 
                        src={anuncio.imagem} 
                        alt="Imagem do anúncio" 
                        style={{ width: '300px' }} 
                        />
                    </td>

                    <td>

                        <button
                        onClick={() => aceitarAnuncio(anuncio.id)}
                        style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", marginRight: "5px" }}
                        >
                        Aceitar
                        </button>

                        <button
                        onClick={() => deletar(anuncio.id)}
                        style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px" }}
                        >
                        Excluir
                        </button>

                    </td>

                </tr>

            ))}

        </tbody>

    </table>


    <div className="modal fade" id="modalCadastroAnuncio" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered modal-lg">

            <div className="modal-content shadow-lg">

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modalLabel">Cadastre seu anúncio</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body" style={{ color: "#e67e22" }}>

                    <form onSubmit={inscrever}>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Descrição</label>
                            <input
                            onChange={e => setDescricao(e.target.value)}
                            type="text"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Planos</label>
                            <select
                            onChange={e => setPlanos(e.target.value)}
                            className="form-select"
                            required
                            >
                                <option value="">Selecione</option>
                                <option value="30">30 dias</option>
                                <option value="45">45 dias</option>
                                <option value="60">60 dias</option>
                                <option value="90">90 dias</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Link para o site</label>
                            <input
                            onChange={e => setLink(e.target.value)}
                            type="url"
                            className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">URL da imagem</label>
                            <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setImagem(e.target.value)}
                            required
                            placeholder="http://..."
                            />
                        </div>

                        <div className="modal-footer px-0 pb-0 mt-4">

                            <button
                            type="submit"
                            className="btn btn-success px-4"
                            >
                            Enviar
                            </button>

                            <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            >
                            Cancelar
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>

</div>

  );

}