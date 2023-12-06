// Movie 경로 .하나만 해서 계속 에러났었음.
// ./  현재위치의 폴더
// ../ 현재위치의 상단폴더(src)에서 component/Movie를 찾아야 함.
import Movie from '../component/Movie';
import { useState, useEffect } from 'react';
import styles from './Home.modules.css';

function Home() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);

   const getMovies = async () => {
      const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
      setMovies(json.data.movies);
      setLoading(false);
   };
   useEffect(() => {
      getMovies();
   }, []);
   console.log(movies);
   return (
      <div className={styles.wrap}>
         {/* 이 아래코드는{}로 감싸져 있어서 className을 'text'로 해야 적용됨 */}
         {loading ? (
            <div className='loader'>
               <span>Loading...</span>
            </div>
         ) : (
            <div>
               <div className='header'>
                  <h1>
                     <a href='https://lenakwon.github.io/react-app-2023/'>Movie</a>
                  </h1>
               </div>
               <div className='movie_box'>
                  <div className='movie_list'>
                     {movies.map((movie) => (
                        // 안에 쓴 html 코드를 묶어 컴포넌트를 만들어 필요한 props 보내기
                        <Movie
                           // key는 map 안에서 component를 render할때만 씀.꼭 써줄것
                           key={movie.id}
                           //dynamic url주소를 만들기 위해 id를 prop으로 보냄
                           id={movie.id}
                           title={movie.title}
                           coverImg={movie.medium_cover_image}
                           summary={movie.summary}
                           genres={movie.genres}
                           rating={movie.rating}
                        />
                     ))}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
export default Home;
