"use client";
import { getAddress } from "@/get-adress";
import { useState } from "react";

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
  ddd: string;
}

export function Button() {
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function HandleGetAddress() {
    setLoading(true);
    setError("");
    try {
      const result = await getAddress(cep);
      setAddress(result);
      console.log(address);
    } catch (error) {
      setError("Por favor, insira um CEP válido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite seu CEP"
        className="m-3 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-gray-500"
      />

      <button
        onClick={HandleGetAddress}
        className={`${
          loading && "opacity-30"
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
                    className="py-2 px-2 m-2 border border-gray-100 rounded-lg text-black bg-transparent border-none focus:outline-none focus:ring-0"
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
