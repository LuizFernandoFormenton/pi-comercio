export default function CadastroUsuario() {
  return (
    <div className="d-flex justify-content-center vh-100 " >

            <div className="align-self-center border rounded p-5">
                <form>

                    <h1> Cadastro Usuário </h1>

                    <br />

                    <div class="mb-3">
                        <label class="form-label">Nome Completo *</label>
                        <input class="form-control"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">CPF *</label>
                        <input class="form-control"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Telefone *</label>
                        <input type="tel" class="form-control"/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email *</label>
                        <input type="email" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Senha *</label>
                        <input type="password" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Confirmar Senha*</label>
                        <input type="password" class="form-control" />
                    </div>

                    <button type="button" class="btn btn-outline-dark w-100 my-2">Salvar</button>

                    <br/>

                </form>
            </div>

        </div>
  );
}