
export const MovieCard = ( props: { movie: any, imagePath: string, genres: [] }  ) => {
    
    var gTemp: any[] = []

    props.movie.genre_ids.forEach( ( genre: string ) => {

        props.genres.forEach( ( g: any ) => {
            if( g.id == genre ) { 
                gTemp.push( g )
            }
        })
    })

    return (
        <div className="col-4 animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={props.imagePath} alt="imagen" className="card-img img-thumbnail"/>
                    </div>
                    <div className="col-8">
                        <div className='card-body'>
                            <h1 className='card-title'>{props.movie.title}</h1>
                            <h2>Descripcion:</h2>
                            <p className='card-text'>{props.movie.overview}</p>
                            <h3>Titutlo:</h3>
                            <p className="text-muted">{props.movie.title}</p>
                            <h3>Calificación:</h3>
                            <p className="text-muted">{props.movie.vote_average}</p>
                            <h3>Género:</h3>
                            <p className="text-muted">{ gTemp.reduce( (string, genre) => string + genre.name + ", ", "").slice(0, -2) }</p>
                            <h3>Fecha de realizacion:</h3>
                            <p className="text-muted">{props.movie.release_date}</p>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    )
}
