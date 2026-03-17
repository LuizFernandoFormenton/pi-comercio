'use client'
import { useState } from "react";
import "./aprovacao_anuncio.css";
import { createClient } from '@supabase/supabase-js'



export default function TelaDeAprovacao() {

  const [anuncios, setAnuncios] = useState([]); 

  const manipularAnuncio = (id) => { 
    const novaLista = anuncios.filter(a => a.id !== id); 
    setAnuncios(novaLista);
    
    console.log(`Anúncio ${id} processado!`);
  };

  async function bucar(anuncios) {
    const { data, error } = await supabase
      .from('anuncios')
      .select()
  }

  return (
    <div>
      <div className="d-flex justify-content-center min-vh-100">
        <div className="telaAprovacao align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>
          <h1 className="text-center">Anúncios aguardando aprovação</h1>
          <br />
          <p className="text-center"><strong>Aprovar ou recusar anúncios de comerciantes:</strong></p>
          <br />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data</th>
                <th scope="col" className="text-center">Ação</th>
              </tr>
            </thead>
            <tbody>
              {anuncios.map((anuncios, index) => (
                <tr key={anuncios.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{anuncios.nome}</td>
                  <td>{anuncios.descricao}</td>
                  <td>{anuncios.data}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-success me-2" type="button" onClick={() => manipularAnuncio(anuncio.id)}>Aceitar</button> 
                      <button className="btn btn-danger" type="button" onClick={() => manipularAnuncio(anuncio.id)}>Recusar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}