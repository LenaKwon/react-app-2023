import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

// 자꾸 실수하는 부분: return (); 과 함수인자({}) 안에 중괄호 넣는것
// 우리가 props로 가져오는 것은 객체이기 때문에 객체안의 요소를 가져올때는 {}중괄호 안에 요소의이름을 쓴다.
function Movie({ id, coverImg, title, year, summary, genres }) {
   return (
     <div className={styles.movie}>
      
       <img src={coverImg} alt={title} className={styles.movie_img} />
       <div>
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
       </div>
     </div>
   );
 }
         // {/* 링크를 사용할 때 보통 사용하는 a 태그는 페이지를 새로고침하기 때문에
         // react router의 Link 컴포넌트를 사용해서 표현한다. 속도측면에서 빠름 */}
         // {/* <a href="/movie"><h1>{title}</h1></a> */}
         // {/* <Link to="/movie/:id"><h1>{title}</h1></Link> */}
         // {/* 여기서의 객체인자로 받아오는 id는 {id}로 표시해야함 */}
         
   


   

Movie.propTypes = {
   id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   coverImg: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
