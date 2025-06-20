import DadosFormClientes from "../components/DadosFormClientes";
import SelecionadorDeDocumentos from "../components/SelecionadorDeDocumentos";

const GeradorDocs = () => {
  return (
    <div className="container max-w-5xl mx-auto p-4 ">
      <DadosFormClientes />
      <SelecionadorDeDocumentos />
    </div>
  );
};

export default GeradorDocs;
