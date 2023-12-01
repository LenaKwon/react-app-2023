function MovieDetail({title,description,rating,genres,img}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* <p>{movie.year}</p> */}
            <p>{rating}</p>
            <p>{`Genre: ${genres} `}</p>
            <img src={img} alt="{movie.title}"/>
            {/* <ul>{movie.genres.map(a=><li>{a}</li>)}</ul> */}
        </div>
    );
    
}
export default MovieDetail;