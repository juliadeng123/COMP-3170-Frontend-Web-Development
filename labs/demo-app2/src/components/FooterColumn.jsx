export default function FooterColumn(data) {
    const {links} = data;
    const linksList = links.map(link => <li key={link}><a href="">{link}</a></li>);
    
    return(
        <div>
        <h3>{data.title}</h3>
        <ul>
            {linksList}
        </ul>
        </div>
    )
}