export default function TelaDeAprovacao() {
  return (
    <div>
     <h1 className="text-center"> Página de aprovação de anúncios </h1>
      <br />
      <br />
      <p className="text-center"> <strong> aqui o anúncio sera aprovado ou recusado</strong></p>
      <br />
      <br />
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data de Criação</th>
            <th scope="col" className="text-center">Ação</th>
          </tr>
          <br/>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>anuncio 1</td>
            <td>comida</td>
            <td>01/01/1945</td>
            <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
          <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>anuncio 2</td>
            <td>bebida</td>
            <td>11/09/2000</td>
            <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
          <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>anuncio 3</td>
            <td>materiais escolares</td>
            <td>06/09/2024</td>
            <td className="text-center"><button type="button" className="btn btn-success">Aprovar</button>
          <button type="button" className="btn btn-danger ms-2">Recusar</button></td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}