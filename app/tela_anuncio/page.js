'use client'

import Link from 'next/link';
import { useState } from 'react';
import supabase from '../conexao/supabase';

export default function CadastroAnuncioModal() {

  const [descricao, setDescricao] = useState("");
  const [planos, setPlanos] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState(null);

  async function inscrever(e) {
    e.preventDefault();
    if (!planos) { alert("Por favor, selecione um plano."); return; }
    if (!imagem) { alert("Adicione uma imagem do anúncio"); return; }

    const id_usuario = localStorage.getItem("id_usuario")

    const obj = {

      
      descricao: descricao,
      planos: planos,
      url: link,
      imagem: imagem,
      id_comercios: id_usuario

    };

    try {
      const { error, data } = await supabase.from('anuncios').insert(obj);
      if (error) {
        alert("Erro ao salvar: " + error.message);
        console.log(error)
      } else {
        alert("Anúncio cadastrado com sucesso!");
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  }

  return (
    <main style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://caminhodafe.com.br/ptbr/wp-content/uploads/2016/12/Catedral.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px)',
        zIndex: -1,
        transform: 'scale(1.1)'

      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: -1
      }} />

      <div className="container" zIndex={1} style={{ maxWidth: "600px" }}>
        <div className="text-center" style={{ color: "white" }}>
          <h1 className="display-4 fw-bold" style={{ color: "#f06509b6" }}>
            Bem-vindo ao painel de anúncios!
          </h1>
          <p className="fs-5 mb-4">Crie seu anúncio e destaque seu negócio!</p>
          
          <button 
            type="button" 
            className="btn btn-success btn-lg shadow" 
            data-bs-toggle="modal" 
            data-bs-target="#modalCadastroAnuncio"
          >
            Criar Novo Anúncio
          </button>
          <br />
          <br />
          <br />
          <h2 style={{color: '#c2ec72b6'}}>Saiba se o seu anúncio está sendo aprovado!</h2>
          <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalStatusAnuncio" onClick={() => {window.location.href = "/listagem_anuncios";}} >
            Ver Status
          </button>
        </div>
      </div>

      <div className="modal fade" id="modalCadastroAnuncio" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content shadow-lg">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">Cadastre seu anúncio</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body" style={{ color: "#e67e22" }}>
              <form onSubmit={inscrever}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Descrição</label>
                  <input onChange={e => setDescricao(e.target.value)} type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Planos</label>
                  <select onChange={e => setPlanos(e.target.value)} className="form-select" required>
                    <option value="">Selecione</option>
                    <option value="30">30 dias</option>
                    <option value="45">45 dias</option>
                    <option value="60">60 dias</option>
                    <option value="90">90 dias</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Link para o site</label>
                  <input onChange={e => setLink(e.target.value)} type="url" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">URL da imagem</label>
                  <input type="text" className="form-control" onChange={(e) => setImagem(e.target.value)} required placeholder="http://..." />
                </div>

                <div className="modal-footer px-0 pb-0 mt-4">
                  <button type="submit" className="btn btn-success px-4">Enviar</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}