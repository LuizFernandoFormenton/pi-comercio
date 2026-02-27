import Link from "next/link";

export default function Pagina_inicial() {
  return (
    <div className="container-fluid">

      {/* 🔝 Barra Superior */}
      <div className="row bg-light p-3 align-items-center">
        <div className="col">
          <h4 className="m-0">Guia Comercial</h4>
        </div>

        <div className="col text-end">
          <Link href="perfil_usuario" > <button><img src="https://static.vecteezy.com/system/resources/thumbnails/054/563/337/small/orange-profile-icon-png.png"/></button> </Link>  
          <Link href="login " > <button className="btn btn-outline-warning me-2">LOGIN</button> </Link>  
          <Link href="cadastro_usuario" > <button className="btn btn-warning"> CADASTRAR</button> </Link> 
        </div>
      </div>

      {/* 🔹 Conteúdo Principal */}
      <div className="row mt-4">

        {/* 📌 Menu Lateral - Categorias */}
        <div className="col-md-3 border-end">
          <h5 className="mb-3">Categorias</h5>
          <ul className="list-group">
            <li className="list-group-item">🍽️ Restaurantes</li>
            <li className="list-group-item">🍔 Lanchonetes</li>
            <li className="list-group-item">🍕 Pizzarias</li>
            <li className="list-group-item">🛒 Mercados</li>
            <li className="list-group-item">👗 Moda</li>
          </ul>
        </div>

        {/* 🛍 Área dos Cards */}
        <div className="col-md-9">
          <div className="row justify-content-center g-4">

            {/* Card 1 */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card shadow" style={{ width: "30rem" }}>
                <img src="https://blog.bendize.com.br/wp-content/uploads/2023/09/image-8.jpeg"
                  className="card-img-top"
                  alt="Burger Prime"
                />
                <div className="card-body">
                  <h5 className="card-title">Burger Prime</h5>
                  <p className="card-text">Hambúrguer artesanal e combos especiais.</p>
                  <p className="card-text">⭐ Nota: 4.8</p>
                  <p className="card-text">📞 (16) 99999-1111</p>
                  <p className="card-text">📍 Av. São Carlos, 1300 - Centro</p>
                  <a href="#" className="btn btn-warning w-100">Ver mais 🔽</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card shadow" style={{ width: "30rem" }}>
                <img
                  src="https://invexo.com.br/blog/wp-content/uploads/2022/12/pizza-pizzaria-gavea-rio-de-janeiro.jpg"
                  className="card-img-top"
                  alt="Pizzaria Bella Massa"
                />
                <div className="card-body">
                  <h5 className="card-title">Pizzaria Bella Massa</h5>
                  <p className="card-text">Pizzas tradicionais e especiais.</p>
                  <p className="card-text">⭐ Nota: 4.7</p>
                  <p className="card-text">📞 (16) 98888-2222</p>
                  <p className="card-text">Av. Episcopal, 572 - Centro</p>
                  <a href="#" className="btn btn-warning w-100">Ver mais 🔽</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card shadow" style={{ width: "30rem" }}>
                <img
                  src="https://assets.multiplan.com.br/Multiplan/filer_public/2b/d7/2bd76f5c-a24b-4cf6-8880-12e96054f976/mlf04750.jpg?ims=x800"
                  className="card-img-top"
                  alt="Vista-me Modas"
                />
                <div className="card-body">
                  <h5 className="card-title">Vista-me Modas</h5>
                  <p className="card-text">Roupas modernas e acessíveis.</p>
                  <p className="card-text">⭐ Nota: 4.8</p>
                  <p className="card-text">📞 (16) 98888-2222</p>
                  <p className="card-text">📍 Rua Nove de Julho, 837 - Centro</p>
                  <a href="#" className="btn btn-warning w-100">Ver mais 🔽</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}