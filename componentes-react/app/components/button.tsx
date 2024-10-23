'use client';
import { use, useState } from "react";
import { getAddress } from "@/get-adress";

export function Button() {
const [address, setAddress] = useState(null)
const [loading, setLoading] = useState(false)

   async function HandleGetAddress() {
    setLoading(true)
    try{
      const result = await getAddress("52091041")
      setAddress(result.logradouro)
      // console.log(result.logradouro)

    } catch(error) {
      alert("Ocorreu um erro")
    } finally {
      setLoading(false)
    }
   }
    return (
      <>
      <button onClick={HandleGetAddress} className={`${ loading && 'opacity-30'}m-3 w-fit px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75`}>
        {loading ? 'Carregando...' : 'Obter endereço'}        
      </button>
      <div>
      <h1>Rua: {address}</h1>
      </div>
      </>
    )  
  };