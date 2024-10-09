export function Cabecalho(){
    return <div>
        <header className="p-5 mb-3 bg-slate-400">
            <div className="flex justify-between space-x-10">
            <span>Aula - Prof Augusto</span>
                <div className="gap-10">
                    <a href="/" className="m-3 p-2 font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2">Cronograma</a>
                    <a href="/" className="m-3 p-2 font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2">Contato</a>
                    <a href="/" className="m-3 p-2 font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2">Endereço</a>
                </div>
            </div>
        </header>
    </div>
}