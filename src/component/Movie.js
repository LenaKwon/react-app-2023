import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

// 자꾸 실수하는 부분: return (); 과 함수인자({}) 안에 중괄호 넣는것
// 우리가 props로 가져오는 것은 객체이기 때문에 객체안의 요소를 가져올때는 {}중괄호 안에 요소의이름을 쓴다.
function Movie({ id, coverImg, title,rating }) {
   return (
      // movie_item 과 movie_img className이 Movie_movie_item__6g31L로 뜸..왜? 
      // 그래서 여기에 css가 적용이 안됨.
      <div className={styles.movie_item}>
         <div className={styles.movie_img}>
            <img
               src={coverImg}
               alt={title}
            />
            {/* 그리고 이 밑에 두개의 클래스가 생성이 안됨 '텍스트'로 바꾸니 나타남*/}
            <div className={styles.movie_imgBox}>
               <div className={styles.movie_imgWrap}>
                  <p className={styles.movie_imgRating}>{rating}/10</p>
                  {/* <a className={styles.movie_imgBtn} href={`/movie/${id}`} >Detail</a> */}
                  <Link
                     to={`/movie/${id}`}
                     className={styles.movie_imgBtn}>
                     Detail
                  </Link>
               </div>
            </div>
         </div>
         <h2 className={styles.movie_title}>{title}</h2>
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
