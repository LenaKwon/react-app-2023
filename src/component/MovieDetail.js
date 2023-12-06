import styles from './MovieDetail.module.css';
import { Link } from 'react-router-dom';

function MovieDetail({ title, description, rating, genres, img, year, bgimg }) {
   return (
      <div>
         {/* 

You can also bring the image into the component by using the require() function.
<div style={{ backgroundImage: `url(require("images/img.svg"))` }}>
Note the two sets of curly brackets. The first set is for entering react mode and the second is for denoting object */}
         <div
            className={styles.movie_detail}
            style={{ backgroundImage: `url(${bgimg}` }}>
            <div className={styles.movie_detailWrap}>
               <div className={styles.movie_detailBox}>
                  <Link
                     to={`/`}
                     className={styles.close}>
                     <div className={styles.svg}></div>
                  </Link>
                  <h2 className={styles.movie_detailTit}>{title}</h2>
                  <div className={styles.movie_detailImg}>
                     <img
                        src={img}
                        alt='{title}'
                     />
                  </div>
                  <div className={styles.movie_rating}></div>
                  <p className={styles.movie_detailIntro}></p>
                  <ul className={styles.movie_detailGenres}>
                     <li>{`${genres} `}</li>
                  </ul>
                  <p className={styles.movie_imgRating}>{rating}/10</p>
                  <p className={styles.movie_description}>{description.length > 235 ? `${description.slice(0, 235)}...` : description}</p>
                  <p>{year}</p>
                  {/* <div>
         <h2 className={styles.movie_title}>
           <Link to={`/movie/${id}`}>{title}</Link>
         </h2>
         <h3 className={styles.movie_year}>{year}</h3>
         <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
         <ul className={styles.movie_genres}>
           {genres.map((g) => (
             <li key={g}>{g}</li>
           ))}
         </ul>
       </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}
export default MovieDetail;
