// Movie 경로 .하나만 해서 계속 에러났었음. 
// ./  현재위치의 폴더
// ../ 현재위치의 상단폴더(src)에서 component/Movie를 찾아야 함.
import Movie from '../component/Movie';
import { useState, useEffect } from 'react';

function Home(){
    const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);

   //const [selectImg, setImg] = useState();

   // 이건 chaining하는 코드라 async await 코드로 쓰면 더 간단.
   //    useEffect(() => {
   //       fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
   //          .then((response) => response.json())
   //          .then((json) => {
   //             setMovies(json.data.movies);
   //             setLoading(false);
   //          });
   //    }, []);

   // async await 로 쓴 코드
   const getMovies = async () => {
      // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
      // const json = await response.json();
      // 위 코드 한줄로 줄인 코드
      const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
      setMovies(json.data.movies);
      setLoading(false);
   };
   useEffect(() => {
      getMovies();
   }, []);

   console.log(movies);
   return (
      <div>
         <h1>Movie App</h1>
         {loading ? (
            <h1>Loading...</h1>
         ) : (
            <div>
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
                  />
               ))}
            </div>
         )}
      </div>
   );
}
export default Home;