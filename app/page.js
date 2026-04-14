// 'use client'


// import Link from "next/link";
// import { useEffect, useState } from "react";
// import supabase from "./conexao/supabase";

// function Pagina_inicial() {

//   if (typeof window === "undefined") return null

//   const id_usuario = localStorage.getItem("id_usuario")
//   const comercio = localStorage.getItem("comercio")

//   const [listaComercios, alteraListaComercios] = useState([])
//   const [listaAnuncios, alteraListaAnuncios] = useState([])
//   const [categoria, alteraCategoria] = useState("")
//   const [busca, alteraBusca] = useState("")


//   const [listaCategorias, alteraListaCategorias] = useState([])


//   async function buscarComercios() {
//     if (categoria == "") {
//       const { data, error } = await supabase
//         .from('comercios')
//         .select()
//         .ilike('nome', `%${busca}%`)

//       alteraListaComercios(data)
//     } else {
//       const { data } = await supabase
//         .from('comercios')
//         .select()
//         .eq('categoria', categoria)

//       alteraListaComercios(data)

//     }
//   }
//   async function buscarAnuncios() {
//     const { data } = await supabase
//       .from('anuncios')
//       .select()
//     console.log(data)
//     alteraListaAnuncios(data)
//   }

//   function gerarAvaliacao() {
//   return (Math.random() * (5 - 3.5) + 3.5).toFixed(1) // entre 3.5 e 5.0
// }

// function estaAberto() {
//   const hora = new Date().getHours()
//   return hora >= 8 && hora <= 22
// }

//   useEffect(() => {
//     buscarComercios();
//   }, [categoria, busca]);

//   useEffect(() => {
//     buscarAnuncios();
//   }, []);

//   return (

//     <div className="container-fluid p-0">

//       {/* Navbar Superior */}
//       <nav
//         className="navbar navbar-expand-lg fixed-top px-4 shadow-sm"
//         style={{
//           background: "linear-gradient(90deg, #ff9100, #ffb347)",
//           backdropFilter: "blur(6px)"
//         }}
//       >

//         {/* Logo central */}
//         <span
//           onClick={() => { location.href = "/" }}
//           className="navbar-brand fw-bold position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <i className="bi bi-shop text-white bg-dark rounded-circle p-2 shadow-sm"></i>
//           <span className="text-dark">Guia</span>
//           <span className="text-white fw-semibold">Comercial São Carlos</span>
//         </span>

//         {/* Botões direita */}
//         <div className="ms-auto d-flex align-items-center gap-2">
//           {
//             id_usuario == null || id_usuario == "" ?
//               <>
//                 <Link
//                   href="/login"
//                   className="btn btn-outline-light px-3 rounded-pill fw-semibold"
//                 >
//                   Entrar
//                 </Link>

//                 <Link
//                   href="/cadastro_usuario"
//                   className="btn px-3 rounded-pill fw-semibold"
//                   style={{
//                     backgroundColor: "#fff",
//                     color: "#ff9100",
//                     border: "none"
//                   }}
//                 >
//                   Cadastrar
//                 </Link>
//               </>
//               :
//               <Link
//                 href={comercio == "true" ? "/perfil_comerciante" : "/perfil_usuario"}
//                 className="btn btn-outline-light px-3 rounded-pill fw-semibold"
//               >
//                 Perfil
//               </Link>
//           }
//         </div>
//       </nav>

//       <div style={{ marginTop: "80px" }}></div>

//       {/* Buscar Comércios */}
//       <div className="container mb-4">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Buscar comércio..."
//             value={busca}
//             onChange={(e) => alteraBusca(e.target.value)} />

//           <button className="btn fw-semibold btn-warning" onClick={buscarComercios}>Buscar</button>

//         </div>
//       </div>

//       {/* Categorias dos Comércios */}
//       <div className="container mb-4">
//         <div className="d-flex flex-wrap gap-2 justify-content-center">
//           {["Restaurantes", "Lanchonetes", "Pizzarias", "Supermercados", "Moda"].map((categorias) => (
//             <button className={`btn ${categoria === categorias ? 'btn-warning' : 'btn-outline-warning'}`}
//               onClick={() => alteraCategoria(categorias)}>{categorias}</button>
//           ))}

//           <button className="btn btn-warning" onClick={() => alteraCategoria("")}>Ver todos</button>

//         </div>
//       </div>

//       {/* Anuncios */}
//       <div className="container mb-5 d-flex justify-content-center align-items-center">

//         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
//           <div class="carousel-inner">


//             {listaAnuncios.map((item, index) => (
//               <div class="carousel-item active"
//                 onClick={() => window.location.href = item.url}
//                 style={{ cursor: "pointer" }}>
//                 <img src={item.imagem}  alt="..." />
                
//               </div>))}

//           </div>
//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>

//       </div>

//       {/* Comercios */}
//       <div className="container mb-5">
//  <div className="container mb-5">
//   <h5 className="fw-bold mb-3">Mais Estabelecimentos</h5>

//   <div className="row g-3">
//     {listaComercios.map((item) => {
//       const avaliacao = gerarAvaliacao()
//       const aberto = estaAberto()

//       return (
//         <div key={item.id} className="col-6 col-md-4">
//           <div
//             className="card border-0 shadow-sm h-100 overflow-hidden"
//             style={{
//               borderRadius: "16px",
//               cursor: "pointer",
//               transition: "0.2s"
//             }}
//             onClick={() => location.href = "/comercio/" + item.id}
//           >

//             {/* IMAGEM */}
//             <div style={{ position: "relative" }}>
//               <img
//                 src={item.logo}
//                 className="w-100"
//                 style={{
//                   height: "140px",
//                   objectFit: "cover"
//                 }}
//               />

//               {/* CATEGORIA */}
//               <span
//                 className="position-absolute top-0 start-0 m-2 px-2 py-1 small fw-semibold"
//                 style={{
//                   backgroundColor: "#ff9100",
//                   color: "#fff",
//                   borderRadius: "8px"
//                 }}
//               >
//                 {item.categoria}
//               </span>

//               {/* AVALIAÇÃO (fake) */}
//               <span
//                 className="position-absolute top-0 end-0 m-2 px-2 py-1 small fw-bold"
//                 style={{
//                   backgroundColor: "#fff",
//                   borderRadius: "8px"
//                 }}
//               >
//                 ⭐ {avaliacao}
//               </span>
//             </div>

//             {/* CONTEÚDO */}
//             <div className="p-2">

//               <p className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
//                 {item.nome}
//               </p>

//               {/* STATUS */}
//               <p
//                 className="mb-1 fw-semibold"
//                 style={{
//                   fontSize: "12px",
//                   color: aberto ? "green" : "red"
//                 }}
//               >
//                 {aberto ? "🟢 Aberto agora" : "🔴 Fechado"}
//               </p>

//               {/* ENDEREÇO */}
//               <p className="text-muted mb-2" style={{ fontSize: "12px" }}>
//                 📍 {item.endereco || "Endereço não informado"}
//               </p>

//               {/* DESCRIÇÃO */}
//               <p
//                 className="text-muted small mb-2"
//                 style={{
//                   fontSize: "12px",
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden"
//                 }}
//               >
//                 {item.descricao}
//               </p>

//               {/* BOTÃO */}
//               <button
//                 className="btn w-100 btn-sm fw-semibold"
//                 style={{
//                   backgroundColor: "#ff9100",
//                   color: "#fff",
//                   borderRadius: "10px"
//                 }}
//               >
//                 Ver mais
//               </button>
//             </div>

//           </div>
//         </div>
//       )
//     })}
//   </div>
// </div>
// </div>

//     </div>
//   );
// }

// export default Pagina_inicial;

'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./conexao/supabase";

const categorias = ["Restaurantes", "Lanchonetes", "Pizzarias", "Supermercados", "Moda"];
const emojiCat = { Restaurantes: "🍔", Lanchonetes: "🥪", Pizzarias: "🍕", Supermercados: "🛒", Moda: "👗" };

function gerarAvaliacao() {
  return (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
}

function estaAberto() {
  const hora = new Date().getHours();
  return hora >= 8 && hora <= 22;
}

export default function Pagina_inicial() {
  if (typeof window === "undefined") return null;

  const id_usuario = localStorage.getItem("id_usuario");
  const comercio = localStorage.getItem("comercio");

  const [listaComercios, alteraListaComercios] = useState([]);
  const [listaAnuncios, alteraListaAnuncios] = useState([]);
  const [categoria, alteraCategoria] = useState("");
  const [busca, alteraBusca] = useState("");

  async function buscarComercios() {
    const query = supabase.from('comercios').select();
    const { data } = categoria
      ? await query.eq('categoria', categoria)
      : await query.ilike('nome', `%${busca}%`);
    alteraListaComercios(data || []);
  }

  async function buscarAnuncios() {
    const { data } = await supabase.from('anuncios').select();
    alteraListaAnuncios(data || []);
  }

  useEffect(() => { buscarComercios(); }, [categoria, busca]);
  useEffect(() => { buscarAnuncios(); }, []);

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
  .gc-root { font-family: 'DM Sans', sans-serif; background: #fafaf8; min-height: 100vh; }
  .gc-nav { background: #fff; border-bottom: 1px solid #f0ede8; padding: 18px 40px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
  .gc-logo { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 22px; display: flex; align-items: center; gap: 10px; cursor: pointer; color: #1a1a1a; text-decoration: none; }
  .gc-logo .dot { width: 12px; height: 12px; background: #ff7a00; border-radius: 50%; display: inline-block; flex-shrink: 0; }
  .btn-outline-nav { border: 1.5px solid #e5e2dc; background: transparent; padding: 10px 24px; border-radius: 100px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; color: #1a1a1a; }
  .btn-fill-nav { border: none; background: #ff7a00; color: #fff; padding: 10px 24px; border-radius: 100px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
  .gc-hero { background: linear-gradient(135deg, #fff5eb 0%, #ffe8cc 60%, #ffd4a0 100%); padding: 80px 40px 64px; text-align: center; position: relative; overflow: hidden; }
  .gc-hero::before { content: ''; position: absolute; top: -80px; right: -80px; width: 320px; height: 320px; border-radius: 50%; background: rgba(255,122,0,0.08); }
  .gc-hero h1 { font-family: 'Sora', sans-serif; font-size: clamp(36px, 5vw, 52px); font-weight: 800; color: #1a1a1a; margin: 0 0 14px; line-height: 1.15; }
  .gc-hero h1 span { color: #ff7a00; }
  .gc-hero p { font-size: 19px; color: #6b6560; margin: 0 0 36px; }
  .search-wrap { max-width: 660px; margin: 0 auto; display: flex; box-shadow: 0 4px 24px rgba(255,122,0,0.2); border-radius: 18px; overflow: hidden; background: #fff; }
  .search-wrap input { flex: 1; border: none; outline: none; padding: 20px 24px; font-size: 17px; font-family: 'DM Sans', sans-serif; background: #fff; color: #1a1a1a; }
  .search-wrap button { background: #ff7a00; color: #fff; border: none; padding: 20px 32px; font-size: 16px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; white-space: nowrap; }
  .stats-bar { background: #fff; border-top: 1px solid #f0ede8; padding: 20px 40px; display: flex; gap: 48px; justify-content: center; }
  .stat-num { font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800; color: #ff7a00; display: block; }
  .stat-lbl { font-size: 13px; color: #9b9188; font-weight: 500; }
  .gc-cats { padding: 32px 40px 16px; display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .cat-pill { border: 1.5px solid #e5e2dc; background: #fff; padding: 11px 22px; border-radius: 100px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; color: #3d3830; transition: all 0.15s; }
  .cat-pill:hover, .cat-pill.active { background: #ff7a00; color: #fff; border-color: #ff7a00; }
  .gc-banner-wrap { padding: 20px 40px 32px; max-width: 1200px; margin: 0 auto; }
  .gc-banner { background: linear-gradient(110deg, #ff7a00, #ff4800); border-radius: 22px; padding: 36px 48px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; }
  .gc-banner::after { content: ''; position: absolute; right: -40px; top: -40px; width: 180px; height: 180px; border-radius: 50%; background: rgba(255,255,255,0.08); }
  .banner-text h2 { font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800; color: #fff; margin: 0 0 6px; }
  .banner-text p { color: rgba(255,255,255,0.8); font-size: 16px; margin: 0; }
  .banner-cta { background: rgba(255,255,255,0.2); border: 1.5px solid rgba(255,255,255,0.4); color: #fff; padding: 12px 26px; border-radius: 100px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; white-space: nowrap; flex-shrink: 0; }
  .gc-section { padding: 0 40px 56px; max-width: 1200px; margin: 0 auto; }
  .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
  .section-header h2 { font-family: 'Sora', sans-serif; font-size: 24px; font-weight: 700; margin: 0; color: #1a1a1a; }
  .section-header a { font-size: 15px; color: #ff7a00; text-decoration: none; font-weight: 500; }
  .cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
  .store-card { background: #fff; border-radius: 20px; overflow: hidden; cursor: pointer; border: 1px solid #f0ede8; transition: transform 0.18s, box-shadow 0.18s; }
  .store-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.09); }
  .card-img { width: 100%; height: 180px; object-fit: cover; display: block; background: #f5f2ed; }
  .card-img-top { position: relative; }
  .card-cat-tag { position: absolute; top: 12px; left: 12px; background: #ff7a00; color: #fff; font-size: 13px; font-weight: 600; padding: 5px 12px; border-radius: 8px; }
  .card-rating-tag { position: absolute; top: 12px; right: 12px; background: #fff; color: #1a1a1a; font-size: 14px; font-weight: 600; padding: 5px 12px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .card-body { padding: 18px; }
  .card-name { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700; color: #1a1a1a; margin: 0 0 6px; }
  .card-address { font-size: 14px; color: #9b9188; margin: 0 0 5px; }
  .card-desc { font-size: 14px; color: #6b6560; margin: 0 0 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .status-open { font-size: 13px; font-weight: 600; color: #16a34a; margin: 0 0 10px; }
  .status-closed { font-size: 13px; font-weight: 600; color: #dc2626; margin: 0 0 10px; }
  .card-btn { width: 100%; background: #ff7a00; color: #fff; border: none; padding: 13px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
  .card-btn:hover { background: #e86d00; }
  .carousel-ad { border-radius: 22px; overflow: hidden; }
  .carousel-ad .carousel-item img { border-radius: 22px; max-height: 260px; object-fit: cover; width: 100%; }
  @media (max-width: 600px) {
    .gc-nav { padding: 14px 20px; }
    .gc-hero { padding: 56px 20px 48px; }
    .gc-cats, .gc-banner-wrap, .gc-section { padding-left: 20px; padding-right: 20px; }
    .gc-banner { flex-direction: column; gap: 16px; text-align: center; }
    .stats-bar { gap: 28px; }
  }
`}</style>

      <div className="gc-root">

        {/* Navbar */}
        <nav className="gc-nav">
          <span className="gc-logo" onClick={() => location.href = "/"}>
            <span className="dot"></span>
            Guia <span style={{ color: "#ff7a00", marginLeft: 4 }}>Comercial</span>&nbsp;São Carlos
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {id_usuario == null || id_usuario == "" ? (
              <>
                <Link href="/login"><button className="btn-outline-nav">Entrar</button></Link>
                <Link href="/cadastro_usuario"><button className="btn-fill-nav">Cadastrar</button></Link>
              </>
            ) : (
              <Link href={comercio === "true" ? "/perfil_comerciante" : "/perfil_usuario"}>
                <button className="btn-fill-nav">Perfil</button>
              </Link>
            )}
          </div>
        </nav>

        {/* Hero com busca */}
        <div className="gc-hero">
          <h1>O guia de comércio<br />de <span>São Carlos</span></h1>
          <p>Encontre os melhores estabelecimentos perto de você</p>
          <div className="search-wrap">
            <input
              type="text"
              placeholder="Buscar restaurantes, lojas, serviços..."
              value={busca}
              onChange={(e) => alteraBusca(e.target.value)}
            />
            <button onClick={buscarComercios}>Buscar</button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <div style={{ textAlign: "center" }}>
            <span className="stat-num">{listaComercios.length}+</span>
            <span className="stat-lbl">Estabelecimentos</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-num">{categorias.length}</span>
            <span className="stat-lbl">Categorias</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-num">SC</span>
            <span className="stat-lbl">São Carlos</span>
          </div>
        </div>

        {/* Categorias */}
        <div className="gc-cats">
          <button className={`cat-pill ${categoria === "" ? "active" : ""}`} onClick={() => alteraCategoria("")}>
            Ver todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${categoria === cat ? "active" : ""}`}
              onClick={() => alteraCategoria(cat)}
            >
              {emojiCat[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Anúncios Carousel */}
        {/* Anúncios Carousel */}
{listaAnuncios.length > 0 && (
  <div className="gc-banner-wrap">
    <div id="carouselAnuncios" className="carousel slide carousel-ad" data-bs-ride="carousel">
      <div className="carousel-inner">
        {listaAnuncios.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            onClick={() => window.location.href = item.url}
            style={{ cursor: "pointer" }}
          >
            <img src={item.imagem} className="d-block w-100" alt="Anúncio" />
          </div>
        ))}
      </div>

      {/* Seta Anterior */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAnuncios"
        data-bs-slide="prev"
        style={{
          width: "48px",
          height: "48px",
          background: "#fff",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          left: "12px",
          opacity: 1,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Seta Próxima */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselAnuncios"
        data-bs-slide="next"
        style={{
          width: "48px",
          height: "48px",
          background: "#fff",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          right: "12px",
          opacity: 1,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
)}

        {/* Banner CTA (quando não há anúncios) */}
        {listaAnuncios.length === 0 && (
          <div className="gc-banner-wrap">
            <div className="gc-banner">
              <div className="banner-text">
                <h2>Anuncie seu negócio aqui</h2>
                <p>Alcance milhares de clientes em São Carlos</p>
              </div>
              <button className="banner-cta">Saiba mais →</button>
            </div>
          </div>
        )}

        {/* Grid de comércios */}
        <div className="gc-section">
          <div className="section-header">
            <h2>Mais Estabelecimentos</h2>
            <a href="" onClick={() => alteraCategoria("")}>Ver todos →</a>
          </div>
          <div className="cards-grid">
            {listaComercios.map((item) => {
              const avaliacao = gerarAvaliacao();
              const aberto = estaAberto();
              return (
                <div key={item.id} className="store-card" onClick={() => location.href = "/comercio/" + item.id}>
                  <div className="card-img-top">
                    <img src={item.logo} className="card-img" alt={item.nome} />
                    <span className="card-cat-tag">{item.categoria}</span>
                    <span className="card-rating-tag">⭐ {avaliacao}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-name">{item.nome}</p>
                    <p className={aberto ? "status-open" : "status-closed"}>
                      {aberto ? "● Aberto agora" : "● Fechado agora"}
                    </p>
                    <p className="card-address">📍 {item.endereco || "Endereço não informado"}</p>
                    <p className="card-desc">{item.descricao}</p>
                    <button className="card-btn">Ver mais</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}