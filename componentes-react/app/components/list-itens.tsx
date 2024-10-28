const names = [
    'Izabelinha',
    'Camilinha',
    'Prof Augusto',
    'pessoas'
]

export function ListItem(){
    return <>
    <ul>
        {names.map((x, index) => <li key={index}>{x}</li>)}
    </ul>
    </>
}