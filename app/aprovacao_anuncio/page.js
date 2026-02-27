import "./Aprovacao_anuncio.css"

export default function TelaDeAprovacao() {
  return (
    <div>
      <div className="d-flex justify-content-center min-vh-100">
      <div className="telaAprovacao align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>

        <h1 className="text-center"> Anúncios aguardando aprovação</h1>
        <br />
      
        <p className="text-center"> <strong> Aprovar ou recusar anúncios de comerciantes:</strong></p>
        <br />
        <br />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Empresa</th>
              <th scope="col">Descrição</th>
              <th scope="col">Data de Criação</th>
              <th scope="col" className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Burger</td>
              <td>Comida</td>
              <td>01/02/2026</td>
              <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
                <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Zé Delivery</td>
              <td>Bebidas</td>
              <td>11/02/2026</td>
              <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
                <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Papelaria Tropical</td>
              <td>Materiais escolares</td>
              <td>14/02/2026</td>
              <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
                <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
            </tr>

          </tbody>
        </table>

      </div>
      </div>

    </div>
  );
}