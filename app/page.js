'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./conexao/supabase";
import { Router } from "next/router"

function Pagina_inicial() {

  const [listaComercios, alteraListaComercios] = useState([])
  const [listaAnuncios, alteraListaAnuncios] = useState([])
  const [categoria, alteraCategoria] = useState("")
  const [busca, alteraBusca] = useState("")


  async function buscarComercios() {
    if (categoria == "") {
      const { data, error } = await supabase
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
      .select()
    console.log(data)
    alteraListaAnuncios(data)
  }

  useEffect(() => {
    buscarComercios();
  }, [categoria, busca]);

  useEffect(() => {
    buscarAnuncios();
  }, []);

  return (
    <div className="container-fluid p-0">



      {/* NAvbar Superior */}
      <nav className="navbar navbar-dark bg-dark px-4 fixed-top">
        <span className="navbar-brand fw-bold">🚗 Guia Comercial São Carlos</span>

        <div>
          <Link href="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link href="/cadastro_usuario" className="btn btn-warning">Cadastrar</Link>
        </div>
      </nav>

      <div style={{ marginTop: "80px" }}></div>

      {/* Buscar Comércios */}
      <div className="container mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar comércio..."
            value={busca}
            onChange={(e) => alteraBusca(e.target.value)} />

          <button className="btn btn-warning" onClick={buscarComercios}>Buscar</button>

        </div>
      </div>

      {/* Categorias dos Comércios */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {["Restaurantes", "Lanchonetes", "Pizzarias", "Mercados", "Moda"].map((categorias) => (
            <button className={`btn ${categoria === categorias ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => alteraCategoria(categorias)}>{categorias}</button>
          ))}

          <button className="btn btn-secondary" onClick={() => alteraCategoria("")}>Ver todos</button>

        </div>
      </div>

      {/* Anuncios */}
      <div className="container mb-5 d-flex justify-content-center align-items-center">

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="https://spiner.com.br/wp-content/uploads/2020/01/anuncios-online-de-sua-empresa.jpg" class="width:640px; height:360px" alt="..." />
            </div>

            <div class="carousel-item">
              <img src="https://uolhost.uol.com.br/blog/wp-content/uploads/2025/09/BANNER_16-09.jpg" class="width:640px; height:360px" alt="..." />
            </div>

            <div class="carousel-item">
              <img src="https://spiner.com.br/wp-content/uploads/2020/01/anuncios-online-de-sua-empresa.jpg" class="width:640px; height:360px" alt="..." />
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      {/* Comercios */}
      <div className="container">
        <h4 className="mb-4">Empresas</h4>

        <div className="row g-4">
          {listaComercios.map(item => (
            <div className="col-md-4">
              <div className="card shadow h-100 border-0">

                <img
                  src={item.logo}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }} />

                <div className="card-body">
                  <p className="card-title fw-bold">{item.nome}</p>
                  <p className="text-muted small">{item.categoria}</p>
                  <p className="card-text">{item.descricao}</p>
                </div>

                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => Router.push = "/comercio/" + item.id_comercio}>Ver mais</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Pagina_inicial;
