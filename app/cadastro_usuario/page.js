import Link from "next/link";

export default function CadastroUsuario() {
  return (
    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "650px" }}>

        <form className="row g-3">

          <h1 className="text-center mb-3">Cadastro Usuário</h1>

          {/* Nome */}
          <div className="col-12">
            <label htmlFor="nome" className="form-label">Nome Completo *</label>
            <input id="nome" className="form-control" />
          </div>

          {/* CPF */}
          <div className="col-md-6">
            <label htmlFor="cpf" className="form-label">CPF *</label>
            <input id="cpf" className="form-control" />
          </div>

          {/* Telefone */}
          <div className="col-md-6">
            <label htmlFor="telefone" className="form-label">Telefone *</label>
            <input id="telefone" type="tel" className="form-control" />
          </div>

          {/* Email */}
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email *</label>
            <input id="email" type="email" className="form-control" />
          </div>

          {/* Senha */}
          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">Senha *</label>
            <input id="senha" type="password" className="form-control" />
          </div>

          {/* Confirmar senha */}
          <div className="col-md-6">
            <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha *</label>
            <input id="confirmarSenha" type="password" className="form-control" />
          </div>

          {/* Botão */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-outline-dark px-5">Salvar</button>
            <br />
            <br />

            <p>Quer se cadastrar como comerciante ? <Link href="/cadastro_comercios">Clique Aqui </Link> </p>
          </div>



        </form>

      </div>

    </div>
  );
}