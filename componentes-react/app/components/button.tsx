'use client';

import { getAddress } from "@/get-adress";


export function Button() {
let address = "Rua teste"

   async function HandleGetAddress() {
    try{
      const result = await getAddress("52091041")
      address = result
      
      console.log(result)
    } catch(error) {
      alert("Ocorreu um erro")
    }
   }
    return (
      <button onClick={HandleGetAddress} className="m-3 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
        Obter endereço!
      </button>
      
    )  
  };