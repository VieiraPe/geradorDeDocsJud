import DadosFormClientes from "../components/DadosFormClientes";
import SelecionadorDeDocumentos from "../components/SelecionadorDeDocumentos";

const GeradorDocs = () => {
  return (
    <div>
      <div className="container">
        <DadosFormClientes />
        <SelecionadorDeDocumentos />
      </div>
    </div>
  );
};

export default GeradorDocs;
