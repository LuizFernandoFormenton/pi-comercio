import Link from "next/link";

export default function Login() {
  return (
    <div className="d-flex justify-content-center min-vh-100">

      <div className="align-self-center border rounded p-4 w-100" style={{ maxWidth: "650px" }}>

        <form className="row g-3">

          <h1 className="text-center mb-3">Login</h1>

          {/* Email */}
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email *</label>
            <input id="email" type="email" className="form-control" />
          </div>

          {/* Senha */}
          <div className="col-12">
            <label htmlFor="senha" className="form-label">Senha *</label>
            <input id="senha" type="password" className="form-control" />
          </div>

           <Link href="/" > <button type="button" class="btn btn-outline-dark">Entrar</button> </Link>

        </form>

      </div>

    </div>
  );
}