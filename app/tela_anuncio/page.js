
export default function CadastroAnuncio() {
  return (

    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "1150px" }}>

        <div className="container mt-5">
          <h1 className="mb-4">Cadastre seu anúncio e impulsione seu negócio</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="nomeAnuncio" className="form-label">Dados do Anúncio</label>
              <input type="text" className="form-control" id="nomeAnuncio" />
            </div>

            <div className="mb-3">
              <label htmlFor="descAnuncio" className="form-label">Descrição</label>
              <input type="text" className="form-control" id="descAnuncio" />
            </div>

            <div className="mb-3">
              <label htmlFor="descAnuncio" className="form-label">Planos</label>
              <select className="form-select" id="categoria">
                <option selected>Selecione</option>
                <option>30 dias</option>
                <option>45 dias</option>
                <option>60 dias</option>
                <option>90 dias</option>
              </select>

            </div>

            <div className="mb-3">
              <label htmlFor="linkSite" className="form-label">Link do site</label>
              <input type="url" className="form-control" id="linkSite" />
            </div>

            <div className="mb-3">
              <label htmlFor="linkWhatsApp" className="form-label">Link para WhatsApp</label>
              <input type="url" className="form-control" id="linkWhatsApp" />
            </div>

            <div className="mb-3">
              <label htmlFor="imgAnuncio" className="form-label">Imagem</label>
              <input type="file" className="form-control" id="imgAnuncio" />
            </div>


            <hr />
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="button" className="btn btn-secondary ms-2">Cancelar</button>
          </form>
        </div>
      </div>

    </div>

  );
}