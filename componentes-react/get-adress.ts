async function getAddress(cep: string){ // async deixa a função assíncrona
    const url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url)

    const response = await fetch(url) // await diz que vai puxar a resposta do servidor de forma assincrona
    const data = await response.json()
    console.log(data)
    //procesamento
}

getAddress("52091041")