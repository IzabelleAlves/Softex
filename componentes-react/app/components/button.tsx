"use client";
import { getAddress } from "@/get-adress";
import { useState } from "react";
import { inicialEndereco } from "./address";
import { formatDistanceToNow } from "date-fns";

type Address = {
  cep: string;
  id: string,
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  createdAt: Date;
};
const array: Address[] = [];

function formatDate(date: Date){
  const result = formatDistanceToNow(
    new Date(2015, 0, 1, 0, 0, 15),
    {includeSeconds: true}
  )

  return result
}
//RENDERIZAR AQUI!!!!
export function Button() {
  const [address, setAddress] = useState<Address | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [enderecos, setEnderecos] = useState<Address[]>([])

  async function HandleGetAddress() {
    if (inputValue.length != 8) {
      alert("CEP inválido");
    }
    setLoading(true);
    setError("");

    try {
      const result = await getAddress(inputValue);
      setAddress(result);

      const newEndereco: Address = {id: self.crypto.randomUUID(), createdAt: new Date(),...result}
      // const incrementarArrayCep = inicialEndereco.some(
      //   (item) => item.cep === result.cep
      // );

      setEnderecos([newEndereco, ...enderecos])
      console.log(newEndereco)
      // if (!incrementarArrayCep) {
      //   endereco.push(result);
      // }
      // console.log(endereco.length);
      // console.log(endereco);
    } catch (error) {
      setError("Por favor, insira um CEP válido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <input
        className="m-3 px-2 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-gray-500"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite seu CEP"
      />

      <button
        disabled={inputValue === ""}
        onClick={HandleGetAddress}
        className={`${
          loading || (inputValue == "" && "opacity-30")
        } m-3 w-fit px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75`}
      >
        {loading ? "Carregando..." : "Obter endereço"}
      </button>

      {error && (
        <div className="m-3 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="">
        {address && (
          <>
            <div>
              <h1>Rua: {address.logradouro}</h1>
            </div>
            <div>
              <h1>Bairro: {address.bairro}</h1>
            </div>
            <div>
              <h1>Cidade: {address.localidade}</h1>
            </div>
            <div>
              <h1>Estado: {address.estado}</h1>
            </div>
            <div>
              <h1>DDD: {address.ddd}</h1>
            </div>
            <div>
              <h1>
                Number:{""}
                {
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Número"
                    className="py-2 px-2 m-2 border border-gray-900 rounded-lg text-black bg-transparent focus:outline-none focus:ring-0"
                  />
                }
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}
