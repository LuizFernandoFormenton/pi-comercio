'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./conexao/supabase";

function Pagina_inicial() {

  const [listaComercios, alteraListaComercios] = useState([])
  const [listaAnuncios, alteraListaAnuncios] = useState([])
  const [categoria, setCategoria] = useState("")

  async function buscarComercios() {
  if (categoria === "") {
    const { data } = await supabase
      .from('comercios')
      .select()

    alteraListaComercios(data)
  } else {
    const { data } = await supabase
      .from('comercios')
      .select()
      .eq('categoria', categoria)

    alteraListaComercios(data)
  }
}
  async function buscarAnuncios() {
    const { data } = await supabase
      .from('anuncios')
      .select('*')
    alteraListaAnuncios(data)
  }

  useEffect(() => {
    buscarComercios();
  }, [categoria]);

  useEffect(() => {
    buscarAnuncios();
  }, []);

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
        {/* CATEGORIAS */}
        <div className="col-md-3 border-end">
          <h5 className="mb-3">Categorias</h5>
          <ul className="list-group">
            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("Restaurantes")}
            >
              🍽️ Restaurantes
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("Lanchonetes")}
            >
              🍔 Lanchonetes
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("Pizzarias")}
            >
              🍕 Pizzarias
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("Mercados")}
            >
              🛒 Mercados
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("Moda")}
            >
              👗 Moda
            </li>

            <li
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setCategoria("")}
            >
              🔄 Ver todos
            </li>
          </ul>
        </div>

        {/* CONTEÚDO */}
        <div className="col-md-9">
          <div className="row justify-content-center g-4">

            {/* ANÚNCIOS */}
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {listaAnuncios.map((item, index) => (
                  <div
                    key={item.id || index}
                    className={index === 0 ? "carousel-item active" : "carousel-item"}
                  >
                    <img
                      src={item.imagem}
                      className="d-block w-100"
                      alt="Anúncio"
                      onClick={() => location.href = item.url}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COMÉRCIOS */}
            {listaComercios.map((item, index) => (
              <div className="col-md-4 d-flex justify-content-center" key={item.id || index}>
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
                      className="btn btn-warning w-100"
                      onClick={() => location.href = "/comercio/" + item.id_comercio}
                    >
                      Ver mais 🔽
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagina_inicial;