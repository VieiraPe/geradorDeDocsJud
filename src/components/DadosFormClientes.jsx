
const DadosFormClientes = () => {
  return (
    <div>
      <h1 className="text-center text-3xl pt-4 ">Gerador de Documentos</h1>
      <div className="bg-gray-300 p-4 m-4 rounded-lg shadow-md">
        <h2 className="text-center text-2xl pb-4">Dados dos Clintes</h2>
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            id="nomeCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Nome do Cliente"
          />
          <input
            type="text"
            id="nacionalidadeCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Nacionalidade"
          />
          <input
            type="text"
            id="estadioCivilCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Estado Civil"
          />
          <input
            type="text"
            id="profissaoCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Profissao"
          />
          <input
            type="text"
            id="rgCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="RG"
          />
          <input
            type="text"
            id="orgaoExpedidoCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Órgão Expedidor"
          />
          <input
            type="text"
            id="cpfCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="CPF"
          />
          <input
            type="text"
            id="cepCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="CEP"
          />
          <input
            type="text"
            id="numeroCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Número"
          />
          <input
            type="text"
            id="enderecoCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Endereço"
          />
          <input
            type="text"
            id="bairroCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Bairro"
          />
          <input
            type="text"
            id="cidadeCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="Cidade"
          />
          <input
            type="text"
            id="ufCliente"
            className="bg-gray-100 border border-gray-300 rounded-md"
            placeholder="UF"
          />
        </form>
      </div>
    </div>
  );
};

export default DadosFormClientes;
