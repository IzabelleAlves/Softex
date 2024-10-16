async function getAddress(cep: string){ // async deixa a função assíncrona

    try {
        const url = `https://viacep.com/ws/${cep}/json/`
        console.log(url)
    
        const response = await fetch(url) // await diz que vai puxar a resposta do servidor de forma assincrona
        const data = await response.json()
        console.log(data)
        //procesamento
    } catch (error) {
        console.error('Erro')
    }
}

getAddress("52091041")
console.log('restante do codigo')