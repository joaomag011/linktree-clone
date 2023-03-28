import './RedesSociais.css'

const RedesSociais = () => {

    const listaRedes = [
        { id: 1, urlNome: 'Instagram', url: 'https://www.instagram.com/dev_magalhaes/#'},
        { id: 2, urlNome: 'Linkedin', url: 'https://www.linkedin.com/in/dev-magalhaes'},
        { id: 3, urlNome: 'GitHub', url: 'https://github.com/joaomag011'},
        { id: 4, urlNome: 'Facebook', url: 'https://www.facebook.com/joaovitor.magalhaes.756?mibextid=ZbWKwL'}
    ]

    const linksRedes = listaRedes.map((props) => 

        <div key={props.id} className="conteudo_links">
            <a href={props.url}>{props.urlNome}</a>
        </div>

    )

    return (
        <>
            {linksRedes}
        </>
    )
}

export default RedesSociais;