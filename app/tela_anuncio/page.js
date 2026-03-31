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

    if (!planos) {
      alert("Por favor, selecione um plano.");
      return;
    }

    if (!imagem) {
      alert("Adicione uma imagem do anúncio");
      return;
    }

    const obj = {
      // id_comercio: id_comercio(), // Certifique-se que esta função existe no escopo
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
        // Opcional: fechar a modal ou limpar campos aqui
      }

    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  }

  return (
    <>
      {/* Botão para disparar a modal (Coloque onde desejar na sua tela) */}
      <div>
        <h1 className="text-center mt-5">Bem-vindo ao painel de anúncios!</h1>
        <p className="text-center mb-4">Crie seu anúncio e destaque seu negócio!</p>
        
      </div>
    <div className='text-center'>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCadastroAnuncio">
        Criar Novo Anúncio
      </button>
      
    </div>

      {/* Estrutura da Modal */}
      <div className="modal fade" id="modalCadastroAnuncio" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">Cadastre seu anúncio e impulsione seu negócio</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={inscrever}>
                
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

                <div className="modal-footer px-0 pb-0 mt-4">
                  <button type="submit" className="btn btn-primary"> Enviar </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cancelar </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}