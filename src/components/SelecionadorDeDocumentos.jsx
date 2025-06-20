import Button from "./Button";
import React from "react";

const SelecionadorDeDocumentos = () => {
  return (
    <div className="bg-gray-300 p-4 m-4 rounded-2xl shadow-md">
      <h2 className="text-2xl text-center my-4">Selecione os Documentos</h2>
      <div className="grid gap-4 mb-5 p-4 rounded-lg shadow-lg bg-gray-50">
        <div className="mb-4 flex align-center gap-2">
          <input type="checkbox" className="w-auto m-0" id="chkProcuracao" />
          <label className="m-0 cursor-pointer" htmlFor="chkProcuracao">
            PROCURAÇÃO JUDICIAL
          </label>
          <input type="checkbox" className="w-auto m-0" id="chkGratuidade" />
          <label className="m-0 cursor-pointer" htmlFor="chkGratuidade">
            GRATUIDADE DE JUSTIÇA
          </label>
          <input type="checkbox" className="w-auto m-0" id="chkDeclaracao" />
          <label className="m-0 cursor-pointer" htmlFor="chkDeclaracao">
            {" "}
            DECLARAÇÃO DE CIÊNCIA DA AÇÃO
          </label>
          <input type="checkbox" className="w-auto m-0" id="chkContrato" />
          <label className="m-0 cursor-pointer" htmlFor="chkContrato">
            CONTRATO DE HONORÁRIOS
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button />
      </div>
    </div>
  );
};

export default SelecionadorDeDocumentos;
