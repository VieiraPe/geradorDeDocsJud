const DadosFormClientes = () => {
  return (
    <div> 
      <h1 className="text-center text-3xl pt-4 ">Gerador de Documentos</h1>
      <div className="bg-gray-300 p-4 m-4 rounded-2xl shadow-md">
        <h2 className="text-center text-2xl pb-4">Dados dos Clintes</h2>
        <form
          action=""
          className="flex flex-col gap-2 bg-white p-8  rounded-4xl shadow-lg mb-8"
        >
          {" "}
          <div className="grid grid-auto-fit gap-4">
            <div className="mb-2">
              <input
                type="text"
                id="nomeCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Nome do Cliente"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="nacionalidadeCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Nacionalidade"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="estadioCivilCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Estado Civil"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="profissaoCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Profissao"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="rgCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="RG"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="orgaoExpedidoCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Órgão Expedidor"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="cpfCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="CPF"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="cepCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="CEP"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="numeroCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Número"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="enderecoCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Endereço"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="bairroCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Bairro"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="cidadeCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="Cidade"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="ufCliente"
                className="bg-gray-100 border border-gray-300 rounded-md"
                placeholder="UF"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DadosFormClientes;
