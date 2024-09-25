export default function Artist({artist}){

    return (
        <div className="artist">
            <div className="artist-image">
                <img src={artist.photo_url} alt={artist.name} width={100} height={100} style={{borderRadius: 100}}/>
            </div>
            <ul className="artistList">
              <li className="artist-name" ><h2>{artist.name}</h2></li>
              <li className="artist-country">Country: {artist.country}</li>
              <li className="artist-years_active">Years active: {artist.years_active}</li>
            </ul>
        </div>
    );
}