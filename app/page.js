'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./conexao/supabase";

function Pagina_inicial() {

  if(typeof window === "undefined")return null

  const id_usuario = localStorage.getItem("id_usuario")
  const comercio = localStorage.getItem("comercio")

  const [listaComercios, alteraListaComercios] = useState([])
  const [listaAnuncios, alteraListaAnuncios] = useState([])
  const [categoria, alteraCategoria] = useState("")
  const [busca, alteraBusca] = useState("")


  const [listaCategorias, alteraListaCategorias] = useState ([])


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

      {/* Navbar Superior */}
<nav 
  className="navbar navbar-expand-lg fixed-top px-4 shadow-sm"
  style={{
    background: "linear-gradient(90deg, #ff9100, #ffb347)",
    backdropFilter: "blur(6px)"
  }}
>

  {/* Logo central */}
  <span 
    onClick={()=>{location.href="/"}} 
    className="navbar-brand fw-bold position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2"
    style={{cursor: "pointer"}}
  >
    <i className="bi bi-shop text-white bg-dark rounded-circle p-2 shadow-sm"></i>
    <span className="text-dark">Guia</span>
    <span className="text-white fw-semibold">Comercial São Carlos</span>
  </span>

  {/* Botões direita */}
  <div className="ms-auto d-flex align-items-center gap-2">
    {
      id_usuario == null || id_usuario == "" ?
        <>
          <Link 
            href="/login" 
            className="btn btn-outline-light px-3 rounded-pill fw-semibold"
          >
            Entrar
          </Link>

          <Link 
            href="/cadastro_usuario" 
            className="btn px-3 rounded-pill fw-semibold"
            style={{
              backgroundColor: "#fff",
              color: "#ff9100",
              border: "none"
            }}
          >
            Cadastrar
          </Link>
        </>
      :
        <Link 
          href={comercio == "true" ? "/perfil_comerciante" : "/perfil_usuario"} 
          className="btn btn-outline-light px-3 rounded-pill fw-semibold"
        >
          Perfil
        </Link>
    }
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

          <button className="btn fw-semibold btn-warning" onClick={buscarComercios}>Buscar</button>

        </div>
      </div>

      {/* Categorias dos Comércios */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {["Restaurantes", "Lanchonetes", "Pizzarias", "Supermercados", "Moda"].map((categorias) => (
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


            {listaAnuncios.map((item, index) => (
            <div class="carousel-item active">
              <img src={item.imagem} class="width:640px; height:360px" alt="..." />
              {() => item.url}
            </div>))}

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
              <div className="card shadow h-100 border-0" class = {item.id || index}>

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
                    onClick={() => location.href = "/comercio/" + item.id}>Ver mais</button>
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
