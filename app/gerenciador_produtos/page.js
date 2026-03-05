"use client"


function Gerenciador_Produtos() {

  const produtos = [
    {
      empresa: "Moda Elegance",
      produto: "Vestido Midi Floral",
      descricao: "Vestido leve com estampa floral para o dia a dia",
      valor: 179.90
    },
    {
      empresa: "Style Urbano",
      produto: "Jaqueta Jeans",
      descricao: "Jaqueta jeans unissex com lavagem moderna",
      valor: 229.90
    },
    {
      empresa: "Restaurante Sabor Caseiro",
      produto: "Prato Executivo",
      descricao: "Arroz, feijão, filé grelhado e salada",
      valor: 29.90
    },
    {
      empresa: "Restaurante Sabor Caseiro",
      produto: "Lasanha à Bolonhesa",
      descricao: "Lasanha tradicional com molho caseiro",
      valor: 34.90
    },
    {
      empresa: "Pizzaria Bella Massa",
      produto: "Pizza Portuguesa",
      descricao: "Presunto, ovo, cebola, ervilha e mussarela",
      valor: 54.90
    },
    {
      empresa: "Pizzaria Bella Massa",
      produto: "Pizza Quatro Queijos",
      descricao: "Mussarela, provolone, parmesão e gorgonzola",
      valor: 59.90
    },
    {
      empresa: "Lanchonete Burguer Prime",
      produto: "X-Burguer",
      descricao: "Hambúrguer artesanal com queijo e molho especial",
      valor: 24.90
    },
    {
      empresa: "Lanchonete Burguer Prime",
      produto: "Combo Família",
      descricao: "4 hambúrgueres, 2 batatas grandes e 1 refrigerante 2L",
      valor: 89.90
    },
    {
      empresa: "Moda Chic",
      produto: "Blusa Social Feminina",
      descricao: "Blusa social em tecido leve para trabalho",
      valor: 119.90
    },
    {
      empresa: "Restaurante Grill Master",
      produto: "Churrasco Misto",
      descricao: "Porção com carnes variadas e acompanhamentos",
      valor: 79.90
    }
  ];

  return (

    <div className="container py-5">

      <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>
        Gerenciador de Produtos
      </h1>

      <div className="d-flex justify-content-center min-vh-40">

        <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "800px" }}>

          <form className="row g-3">

            <div className="col-12">
              <label htmlFor="empresa" className="form-label">Empresa</label>
              <input id="empresa" className="form-control" />
            </div>

            <div className="col-md-12">
              <label htmlFor="produto" className="form-label">Produtos</label>
              <input id="produto" className="form-control" />
            </div>

            <div className="col-md-12">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <input id="descricao" className="form-control" />
            </div>

            <div className="col-md-5">
              <label htmlFor="valor" className="form-label">Valor</label>
              <input id="valor" type="number" className="form-control" />
            </div>

            <div className="col-md-5">
              <label htmlFor="imagem" className="form-label">Imagem</label>
              <input
                type="file"
                className="form-control"
                id="imagem"
                accept="image/*"/>
            </div>

            <div className="col-md-2 p-20">
            <button type="button" class="btn btn-warning p-4">Enviar</button>
            </div>

          </form>
        </div>
      </div >

    
      <h2 className="text-center mb-4 fw-bold p-3" style={{ color: "#ff6b00" }}>
        Produtos cadastrados
      </h2>

      <hr />

      <table className="col-md-6 table">
        <thead>
          <tr>
            <th scope="col" style={{color: "#ff6b00" }}>Empresa</th>
            <th scope="col" style={{color: "#ff6b00" }}>Produto</th>
            <th scope="col" style={{color: "#ff6b00" }}>Descrição</th>
            <th scope="col" style={{color: "#ff6b00" }}>Valor</th>
          </tr>
        </thead>
        <tbody>

          {
            produtos.map(
              item => <tr>
                <th scope="row">{item.empresa}</th>
                <td>{item.produto}</td>
                <td>{item.descricao}</td>
                <td>R$ {item.valor}</td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>

  )
}

export default Gerenciador_Produtos;
