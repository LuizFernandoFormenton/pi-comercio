'use client'

import { createClient } from '@supabase/supabase-js'
import { useState } from 'react';

const supabase = createClient('https://myrdwyenvuxdgrbdbjgl.supabase.co', 'sb_publishable_QItyhHGNmCrt94WyCBRqrw_41i_b-63')

export default function CadastroAnuncio() {


  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [planos, setPlanos] = useState("")
  const [link, setLink] = useState("")
  const [zap, setZap] = useState("")
  


  async function inscrever(e) {
    e.preventDefault()

    const { error } = await supabase
      .from('anuncios')
      .insert([{
        nome:nome,
        descricao: descricao,
        planos: planos,
        link:link
      }])

    if (error) {
      console.error('Erro ao cadastrar anúncio:', error)
    } else {
      console.log('Anúncio cadastrado com sucesso!')
    }
  }

  return (
    <div className="d-flex justify-content-center min-vh-100">
      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>
        <div className="container mt-5">
          <h1 className="mb-4">Cadastre seu anúncio e impulsione seu negócio</h1>


          <form onSubmit={inscrever}>
            <div className="mb-3">
              <label htmlFor="nomeAnuncio" className="form-label">Nome</label>
              <input onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nomeAnuncio" />
            </div>

            <div className="mb-3">
              <label htmlFor="descAnuncio" className="form-label">Descrição</label>
              <input onChange={e => setDescricao(e.target.value)} type="text" className="form-control" id="descAnuncio" />
            </div>

            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Planos</label>
              <select onChange={e => setPlanos(e.target.value)} className="form-select" id="categoria">
                <option value="">Selecione</option>
                <option value="30">30 dias</option>
                <option value="45">45 dias</option>
                <option value="60">60 dias</option>
                <option value="90">90 dias</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="linkSite" className="form-label">Link do site</label>
              <input onChange={e => setLink(e.target.value)} type="url" className="form-control" id="linkSite" />
            </div>

            <div className="mb-3">
              <label htmlFor="linkWhatsApp" className="form-label">Link para WhatsApp</label>
              <input onChange={e => setZap(e.target.value)} type="url" className="form-control" id="linkWhatsApp" />
            </div>

            <div className="mb-3">
              <label htmlFor="imgAnuncio" className="form-label">Imagem</label>
              <input type="file" className="form-control" id="imgAnuncio" />
            </div>

            <hr />
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="button" className="btn btn-secondary ms-2">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );

      
}