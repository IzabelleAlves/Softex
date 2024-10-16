type TitleProps = {
  text: string,
  name?: string
}

export function Title(props: TitleProps){
  return <h1 className="text-2xl font-bold text-gray-700 m-3">Aula do mês de Outubro.</h1>
  }