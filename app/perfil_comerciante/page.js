import "./Perfil_comerciante.css"

export default function PerfilComerciante() {
    return (
        <div className="container-fluid">

            <div className="row">

                {/* Menu Lateral */}

                <div className="col-2 menuLateral">
                    <div className="text-center">

                        <img className="my-2 text-center rounded-circle" width="200" src="https://placehold.co/400" />
                        <h1 className="mt-1 fs-4">Yachi Restaurante</h1>
                        <p>Usuário desde 2026</p>
                        <button className="btn btn-outline-light">Alterar Foto</button>
                        <hr />

                    </div>

                    <div className="mt-5 fs-5 list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">Cadastro de Produtos</a>
                        <a href="#" className="list-group-item list-group-item-action">Gerenciar Anúncios</a>

                    </div>

                </div>

                <div className="col-2"></div>

                {/* Perfil do usuário */}

                <div className="col-6">

                    <div className="editarPerfil align-self-center border rounded p-5 my-5">


                        <h2 className="my-2">Editar Perfil da Empresa</h2>
                        <hr />


                        <form onsubmit="criarConta(event)">

                            <div className="mb-3">
                                <label className="form-label">Nome da Empresa </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Telefone *</label>
                                <input type="tel" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">WhatsApp</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Endereço Completo</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="col-12">
                                <label htmlFor="categoria" className="form-label">Categoria da Empresa </label>
                                <select className="form-select" id="categoria">
                                    <option>Selecione</option>
                                    <option>Restaurante</option>
                                    <option>Lanchonete</option>
                                    <option>Moda</option>
                                    <option>Eletrônicos</option>
                                    <option>Saúde e Bem-estar</option>
                                    <option>Supermercados</option>
                                </select>
                            </div>

                                <br/>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Descrição"
                                        id="descricao"
                                        style={{ height: "100px" }}
                                    ></textarea>
                                    <label htmlFor="descricao">Descrição *</label>
                                </div>
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