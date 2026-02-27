export default function CadastroComercios() {
    return (

        <div className="d-flex justify-content-center vh-100 " >

            <div  className="align-self-center border rounded p-3">

                <form >

                    <h1> Cadastro Comércio </h1>

                    <br />

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nome da Empresa *</label>
                        <input className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email *</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha *</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Telefone *</label>
                        <input className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">WhatsApp</label>
                        <input className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Endereço Completo *</label>
                        <input placeholder="" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div>

                        <label className="mb-2" > Categoria da Empresa *</label>
                        <select className="form-select" aria-label="Default select example">

                            <option >Selecione</option>
                            <option>Resturante</option>
                            <option>Lachonete</option>
                            <option>Moda</option>
                            <option>Eletronicos</option>
                            <option>Saude e Bem-estar</option>
                            <option>Supermercados</option>

                        </select>

                    </div>

                    <br />

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Logo da Empresa*</label>
                        <input type="file" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="floatingTextarea2">Descrição</label>
                    </div>

                </form>
            </div>

        </div>

    )
}