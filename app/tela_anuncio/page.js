
export default function CadastroAnuncio() {
return (

  <div className="container mt-5"> 
    <h1 className="mb-4">pagina de cadastro de anuncio!</h1>
    
    <form>
      <div className="mb-3">
        <label htmlFor="nomeAnuncio" className="form-label">Nome do Anúncio</label>
        <input type="text" className="form-control" id="nomeAnuncio" />
      </div>

      <div className="mb-3">
        <label htmlFor="descAnuncio" className="form-label">Descrição do Anúncio</label>
        <input type="text" className="form-control" id="descAnuncio" />
      </div>

      <div className="mb-3">
        <label htmlFor="imgAnuncio" className="form-label">Adicione a imagem do anúncio</label>
        <input type="file" className="form-control" id="imgAnuncio" />
      </div>

      <div className="mb-3">
        <label htmlFor="linkSite" className="form-label">Link do site</label>
        <input type="url" className="form-control" id="linkSite" />
      </div>

      <div className="mb-3">
        <label htmlFor="linkWhatsApp" className="form-label">Link do site</label>
        <input type="url" className="form-control" id="linkWhatsApp" />
      </div>

      <hr />
      <button type="submit" className="btn btn-primary">Enviar</button>
      <button type="button" className="btn btn-secondary ms-2">Cancelar</button>
    </form>
  </div>
  );
}