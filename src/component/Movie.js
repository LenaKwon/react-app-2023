import PropTypes from "prop-types";

// 자꾸 실수하는 부분: return (); 과 함수인자({}) 안에 중괄호 넣는것
function Movie({title, coverImg, summary, genres}) {
   return (
      <div>
         <h1>{title}</h1>
         <img
            src={coverImg}
            alt={title}
         />
         <p>{summary}</p>
         <ul>
            {genres.map((g) => (
               <li key={g}>{g}</li>
            ))}
         </ul>
      </div>
   );
}
Movie.propTypes ={
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
