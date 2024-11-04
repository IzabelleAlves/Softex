"use client";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Address = {
  cep: string;
  // id: string,
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

export const inicialEndereco: Address[] = [
  {
    cep: "01001-000",
    //   id: '1',
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    unidade: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
    createdAt: new Date(),
  },
  {
    cep: "80010-000",
    //   id: '2',
    logradouro: "Rua das Flores",
    complemento: "",
    unidade: "",
    bairro: "Centro",
    localidade: "Curitiba",
    uf: "PR",
    estado: "Paraná",
    regiao: "Sul",
    ibge: "4106902",
    gia: "",
    ddd: "41",
    siafi: "7535",
    createdAt: new Date(),
  },
  {
    cep: "20090-003",
    //   id: '3',
    logradouro: "Avenida Rio Branco",
    complemento: "até 181 - lado ímpar",
    unidade: "",
    bairro: "Centro",
    localidade: "Rio de Janeiro",
    uf: "RJ",
    estado: "Rio de Janeiro",
    regiao: "Sudeste",
    ibge: "3304557",
    gia: "",
    ddd: "21",
    siafi: "6001",
    createdAt: new Date(),
  },
  {
    cep: "50050-000",
    //   id: '4',
    logradouro: "Rua da Aurora",
    complemento: "",
    unidade: "",
    bairro: "Boa Vista",
    localidade: "Recife",
    uf: "PE",
    estado: "Pernambuco",
    regiao: "Nordeste",
    ibge: "2611606",
    gia: "",
    ddd: "81",
    siafi: "2531",
    createdAt: new Date(),
  },
  {
    cep: "30120-010",
    //   id: '5',
    logradouro: "Avenida Afonso Pena",
    complemento: "até 867 - lado ímpar",
    unidade: "",
    bairro: "Centro",
    localidade: "Belo Horizonte",
    uf: "MG",
    estado: "Minas Gerais",
    regiao: "Sudeste",
    ibge: "3106200",
    gia: "",
    ddd: "31",
    siafi: "4123",
    createdAt: new Date(),
  },
];

function formatDate(date: Date){
  const result = formatDistanceToNow(
    new Date(),
    {includeSeconds: true, locale: ptBR}
  )

  return result
}

export function Address() {
  return (
    <>
      <ul>
        {inicialEndereco.map((item, index) => (
          <li key={index}>{item.logradouro}, {formatDate(item.createdAt)}</li>
        ))}
      </ul>
    </>
  );
}
