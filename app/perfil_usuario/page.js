import supabase from "../conexao/supabase";
import "./Perfil_usuario.css"


export default function PerfilUsuario() {



  return (
    <div className="container-fluid">

            <div className="row">

                {/* Menu Lateral */}

                <div className="col-2 menuLateral">
                    <div className="text-center">

                        <img className="my-2 text-center rounded-circle" width="200" src="/Programadora.avif" />
                        <h1 className="mt-1 fs-4">Geovana Ribeiro</h1>
                        <p>Usuário desde 2026</p>
                        <button className="btn btn-outline-light">Alterar Foto</button>
                        <hr />

                    </div>

                    <div>

                        <h3>⭐Favoritos</h3>

                    </div>

                    <div className="mt-5 fs-5 list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">Pizzaria</a>
                        <a href="#" className="list-group-item list-group-item-action">Lanchonete</a>
                        <a href="#" className="list-group-item list-group-item-action">Farmácia</a>
                        <a href="#" className="list-group-item list-group-item-action">Restaurante</a>
                        <a href="#" className="list-group-item list-group-item-action">Mercados</a>
                        <a href="#" className="list-group-item list-group-item-action">Eventos</a>

                    </div>

                    <div className="text-center mt-auto">

                    <button className= "my-2 text-center btn btn-outline-light">Sair</button>

                    </div>

                </div>

                <div className="col-2"></div>

                {/* Perfil do usuário */}

                <div className="col-6">

                    <div className="editarPerfil align-self-center border rounded p-5 my-5">


                        <h2 className="my-2">Editar Perfil</h2>
                        <hr />


                        <form onsubmit="criarConta(event)">

                            <div className="mb-3">
                                <label className="form-label">Nome Completo *</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">CPF *</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Telefone *</label>
                                <input type="tel" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">E-mail *</label>
                                <input type="email" className="form-control" />
                            </div>

                            <hr />
                            <h3>Alterar Senha</h3>

                            <div className="mb-3">
                                <label className="form-label">Nova Senha *</label>
                                <input type="password" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirmar Senha *</label>
                                <input type="password" className="form-control" />
                            </div>

                            <button type="button" class="btn btn-outline-dark">Salvar Alterações</button>



                        </form>

                    </div>

                </div>

                <div className="col-2"></div>

            </div>


        </div>
  );
}