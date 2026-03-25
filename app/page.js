'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./conexao/supabase";

function Pagina_inicial({ params }) {

  const [listaComercios, alteraListaComercios] = useState([])
  const [listaAnuncios, alteraListaAnuncios] = useState([])
  const [listaCategorias, alteraListaCategorias] = useState([])

  async function buscarComercios() {
    const { data, error } = await supabase
      .from('comercios')
      .select()

    alteraListaComercios(data)
  }

  async function buscarCategorias() {
    const { data, error } = await supabase
      .from('comercios')
      .select('*')
      .eq('categoria', params.categoria)

    alteraListaCategorias(data)
  }

  async function buscarAnuncios() {
    const { data, error } = await supabase
      .from('anuncios')
      .select('*')
      console.error("Erro ao buscar anúncios:", error)

      alteraListaAnuncios(data)
    
  }

  useEffect(() => {
    buscarComercios();
    buscarCategorias();
    buscarAnuncios()

  }, [params]);

  return (
    <div className="container-fluid">

      {/* LINHA SUPERIOR */}
      <div className="row bg-light p-3 align-items-center">
        <div className="col">
          <h4 className="m-0">Guia Comercial</h4>
        </div>

        <div className="col text-end">
          <Link href="/perfil_comerciante" className="me-2 border border-0">
            <img
              width="40"
              src="https://static.vecteezy.com/system/resources/thumbnails/054/563/337/small/orange-profile-icon-png.png"
              alt="Perfil"
            />
          </Link>

          <Link href="/login">
            <button className="btn btn-outline-warning me-2">LOGIN</button>
          </Link>

          <Link href="/cadastro_usuario">
            <button className="btn btn-warning">CADASTRAR</button>
          </Link>
        </div>
      </div>


      <div className="row mt-4">
        {/* CATEGORIAS - para fazer esse codigo só precisa de um eq*/}
        <div className="col-md-3 border-end">
          <h5 className="mb-3">Categorias</h5>
          <ul className="list-group-item"
            onClick={() => location.href = "/categoria/Restaurantes"}
          >
            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => location.href = "/categoria/Restaurantes"}
            >
              🍽️ Restaurantes
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => location.href = "/categoria/Lanchonetes"}
            >
              🍔 Lanchonetes
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => location.href = "/categoria/Pizzarias"}
            >
              🍕 Pizzarias
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => location.href = "/categoria/Mercados"}
            >
              🛒 Mercados
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => location.href = "/categoria/Moda"}
            >
              👗 Moda
            </li>
          </ul>
        </div>


        {/* Cards vindos do banco */}
        <div className="col-md-9">
          <div className="row justify-content-center g-4">



            {/*ANUNCIO*/}

            <div className="row mt-4">
              <div className="col-12">
                <h5 className="mb-3">Anúncios</h5>

                <div className="d-flex gap-3 overflow-auto pb-2">
                  {listaAnuncios.map((item) => (
                    <div>
                      <img
                        src={item.imagem}
                        className="card-img-top"
                        alt="Anúncio"
                        style={{ height: "180px", objectFit: "cover" }}
                      />

                      <div className="card-body">
                        <p className="card-text">{item.descricao}</p>

                        <button
                          className="btn btn-warning w-100"
                          onClick={() => location.href = item.url}
                        >
                          Ver anúncio
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {listaComercios.map((item) => (
              <div className="col-md-4 d-flex justify-content-center" key={item.id}>
                <div className="card shadow" style={{ width: "22rem" }}>
                  <img
                    src={item.logo}
                    className="card-img-top"
                    alt={item.nome}
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <p className="card-text">{item.descricao}</p>
                    <p className="card-text">📞 {item.telefone}</p>
                    <p className="card-text">📍 {item.endereco}</p>
                    <p className="card-text">🏷️ {item.categoria}</p>

                    <button
                      className="btn btn-warning w-100" onClick={() => location.href = "/comercio/" + item.id}>
                      Ver mais 🔽
                    </button>
                  </div>
                </div>
              </div>
            ))}


            {listaCategorias.map((item) => (
              <div className="col-md-4 d-flex justify-content-center" key={item.id}>
                <div className="card shadow" style={{ width: "22rem" }}>
                  <img
                    src={item.logo}
                    className="card-img-top"
                    alt={item.nome}
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <p className="card-text">{item.descricao}</p>
                    <p className="card-text">📞 {item.telefone}</p>
                    <p className="card-text">📍 {item.endereco}</p>
                    <p className="card-text">🏷️ {item.categoria}</p>

                    <button
                      className="btn btn-warning w-100" onClick={() => location.href = "/comercio/" + item.id}>
                      Ver mais 🔽
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* ANÚNCIOS */}
            <div className="row mt-4">
              <div className="col-12">
                <h5 className="mb-3">🔥 Anúncios em destaque</h5>

                <div className="d-flex gap-3 overflow-auto pb-2">

                  {listaAnuncios.map((item) => (
                    <div>
                      <img
                        src={item.imagem}
                        className="card-img-top"
                        alt="Anúncio"
                        style={{ height: "160px", objectFit: "cover" }}
                      />

                      <div className="card-body">
                        <p className="card-text">{item.descricao}</p>

                        <button
                          className="btn btn-warning w-100"
                          onClick={() => location.href = "/anuncio/" + item.id}
                        >
                          Ver oferta 🔥
                        </button>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



export default Pagina_inicial;