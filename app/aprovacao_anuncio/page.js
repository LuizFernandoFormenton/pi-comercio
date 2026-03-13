'use client'
import { useState } from "react";
import "./aprovacao_anuncio.css";

export default function TelaDeAprovacao() {

  const [anuncios, setAnuncios] = useState([
    {
      id: 1,
      nome: "Cantina do CAASO",
      descricao: "Lanches e refeições rápidas para a comunidade acadêmica.",
      data: "12/01/2026"
    },
    {
      id: 2,
      nome: "Livraria Saber São Carlos",
      descricao: "Especializada em livros técnicos e literatura nacional.",
      data: "05/02/2026"
    },
    {
      id: 3,
      nome: "Tech Solutions Vila Santa Isabel",
      descricao: "Serviços de manutenção e venda de eletrônicos.",
      data: "18/02/2026"
    },
    {
      id: 4,
      nome: "Boutique do Calçadão",
      descricao: "Vestuário e acessórios com coleções de verão.",
      data: "26/02/2026"
    },
    {
      id: 5,
      nome: "Café Estação 204",
      descricao: "Grãos selecionados e ambiente para reuniões de trabalho.",
      data: "03/03/2026"
    }
  ]);


  const manipularAnuncio = (id) => {

    const novaLista = anuncios.filter(item => item.id !== id);
    setAnuncios(novaLista);
    

    console.log(`Anúncio ${id} processado!`);
  };

  return (
    <div>
      <div className="d-flex justify-content-center min-vh-100">
        <div className="telaAprovacao align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>
          <h1 className="text-center"> Anúncios aguardando aprovação</h1>
          <br />
          <p className="text-center"> <strong> Aprovar ou recusar anúncios de comerciantes:</strong></p>
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
              {anuncios.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.nome}</td>
                  <td>{item.descricao}</td>
                  <td>{item.data}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                 <button className="btn btn-success me-2" type="button" onClick={() => manipularAnuncio(item.id)}>Aceitar</button>
                <button className="btn btn-danger" type="button"onClick={() => manipularAnuncio(item.id)}>Recusar</button>
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