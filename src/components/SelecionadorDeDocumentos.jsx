import Button from "./Button";
import React from "react";

const SelecionadorDeDocumentos = () => {
  return (
    <div>
      <div className="container mx-auto p-4 bg-gray-300 rounded-lg ">
        <h2 className="text-2xl text-center mb-4">Selecione os Documentos</h2>
        <div className="">
          <div className="flex gap-2">
            <input type="checkbox" /> PROCURAÇÃO JUDICIAL
            <input type="checkbox" className="ml-4" /> GRATUIDADE DE JUSTIÇA
            <input type="checkbox" className="ml-4" /> DECLARAÇÃO DE CIÊNCIA DA
            AÇÃO
            <input type="checkbox" className="ml-4" /> CONTRATO DE HONORÁRIOS
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SelecionadorDeDocumentos;
