export default function CadastroUsuario() {
  return (
    <div className="d-flex justify-content-center min-vh-100 " >

            <div className="align-self-center border rounded p-5">
                <form>

                    <h1> Cadastro Usuário </h1>

                    <br />

                    <div className="mb-3">
                        <label className="form-label">Nome Completo *</label>
                        <input className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">CPF *</label>
                        <input className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefone *</label>
                        <input type="tel" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email *</label>
                        <input type="email" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Senha *</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirmar Senha*</label>
                        <input type="password" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-outline-dark w-100 my-2">Salvar</button>

                    <br/>

                </form>
            </div>

        </div>
  );
}