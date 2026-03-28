'use client'

import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';
import "./tala_anuncio.css"
import { useState } from 'react';
import supabase from '../conexao/supabase';

export default function CadastroAnuncio() {

  const [descricao, setDescricao] = useState("");
  const [planos, setPlanos] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState(null);

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

    const obj = {
      id_comercio: id_comercio(),
      descricao: descricao,
      planos: planos,
      url: link,
      imagem: imagem,
      status: false
    };

    try {
      const { error } = await supabase
        .from('anuncios')
        .insert([obj]);

      if (error) {
        alert("Erro ao salvar: " + error.message);
      } else {
        alert("Anúncio cadastrado com sucesso!");
      }

    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  }

  return (
    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>
        <div className="container mt-5">

          <Link href= "./perfil_comerciante">

          <button type="submit" className="btn btn-primary">Voltar</button>

          </Link>
          <h1 className="mb-4">Cadastre seu anúncio e impulsione seu negócio</h1>

          <form onSubmit={inscrever}>
            <h1 className="mb-4">Cadastre seu anúncio e impulsione seu negócio</h1>

            <div className="mb-3">
              <label className="form-label">Descrição</label>
              <input
                onChange={e => setDescricao(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Planos</label>
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
              <label className="form-label">Link para o site</label>
              <input
                onChange={e => setLink(e.target.value)}
                type="url"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Adicione o url da imagem</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>

            <hr />

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>

            <button type="button" className="btn btn-secondary ms-2">
              Cancelar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}