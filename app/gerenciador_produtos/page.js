"use client"
import { useState } from "react";

export default function GerenciadorProdutos() {

  const [produtos, setProdutos] = useState([]);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    empresa: "",
    produto: "",
    descricao: "",
    preco: "",
    imagem: null
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleImagem(e) {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setForm({
        ...form,
        imagem: imageUrl
      });

      setPreview(imageUrl);
    }
  }

  function salvar(e) {
    e.preventDefault();

    setProdutos([...produtos, form]);

    setForm({
      empresa: "",
      produto: "",
      descricao: "",
      preco: "",
      imagem: null
    });

    setPreview(null);
  }

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff6b00" }}>
        Gerenciador de Produtos
      </h1>

      {/* FORMULÁRIO */}
      <div className="card shadow mb-5">
        <div className="card-header text-white"
          style={{ backgroundColor: "#ff6b00" }}>
          Cadastrar Produto
        </div>

        <div className="card-body">
          <form onSubmit={salvar}>

            <div className="row mb-3">

              <div className="col-md-12">
                <label className="form-label">Produto</label>
                <input
                  type="text"
                  name="produto"
                  value={form.produto}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Descrição</label>
              <input
                type="text"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Valor</label>
                <input
                  type="number"
                  name="preco"
                  value={form.preco}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-8">
                <label className="form-label">Imagem</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagem}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* PREVIEW DA IMAGEM */}
            {preview && (
              <div className="mb-3 text-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            )}

            <div className="text-end">
              <button
                type="submit"
                className="btn text-white"
                style={{ backgroundColor: "#ff6b00" }}
              >
                Salvar
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* LISTAGEM */}
      <h3 className="mb-3">Listagem</h3>

      <div className="table-responsive">
        <table className="table table-striped table-hover text-center align-middle">
          <thead style={{ backgroundColor: "#ff6b00", color: "white" }}>
            <tr>
              <th>Empresa</th>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Imagem</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, index) => (
              <tr key={index}>
                <td>{item.empresa}</td>
                <td>{item.produto}</td>
                <td>{item.descricao}</td>
                <td>
                  {item.imagem && (
                    <img
                      src={item.imagem}
                      alt="Produto"
                      style={{ width: "80px", borderRadius: "8px" }}
                    />
                  )}
                </td>
                <td>R$ {item.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}