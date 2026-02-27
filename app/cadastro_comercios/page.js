export default function CadastroComercios() {
    return (

        <div className="d-flex justify-content-center vh-100 " >

            <div className="align-self-center border rounded p-5">

                <form>

                    <h1> Cadastro Comércio </h1>

                    <br />

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nome da Empresa *</label>
                        <input class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email *</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Telefone *</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">WhatsApp</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Endereço Completo *</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div>

                        <label className="mb-2" > Categoria da Empresa *</label>
                        <select class="form-select" aria-label="Default select example">

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

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Logo da Empresa*</label>
                        <input type="file" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="form-floating"  >
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>





                    {/* <label>

                    Nome da Empresa *
                    <br />
                    <input placeholder="Digite o nome" />

                </label>

                <br /><br />

                <label>

                    Email *
                    <br />
                    <input type="email" placeholder="email@empresa.com" />

                </label>

                <br /><br />

                <label>

                    Telefone *
                    <br />
                    <input  placeholder="(00) 0000-0000 "  />

                </label>

                <br /><br />

                <label>

                    WhatsApp
                    <br />
                    <input placeholder="(00) 00000-0000 "  />

                </label>

                <br /><br />

                <label>

                    Endereço Completo *
                    <br />
                    <input placeholder="Rua, número, bairro "  />

                </label>

                <br /><br />

                <label>

                   Categoria da Empresa *
                    <br />
                    <select>

                        <option> Selecione </option>
                        <option> Resturante </option>
                        <option> Lachonete </option>
                        <option> Moda </option>
                        <option> Eletronicos </option>
                        <option> Saude e Bem-estar </option>
                        <option> Supermercados </option>

                    </select>

                </label>

                <br /><br />

                <label>

                    Horário de Funcionamento *
                    <br />
                    <input placeholder="Ex: Seg-Sex: 9h-18h | Sábado: 9h-13h" />

                </label>

                <br/><br />

                <label>

                    Logo da Empresa
                    <br/>
                    <input type="file" />

                </label>

                <br /><br />

                <label>

                    <p> Descrição * </p>
                    <textarea placeholder="Descreva seu comércio, o que você vende, diferenciais..."  class="descricao" rows="5" cols="40" ></textarea>

                    <br /><br />

                    <button> Cadastrar </button>
                    <button type="reset" > Cancelar </button>

                </label>

                <br /><br /> */}


                </form>
            </div>

        </div>

    )

}