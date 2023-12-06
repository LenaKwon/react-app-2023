//제품리스트 중 특정제품 클릭시 제품의 id값을 url로 넘겨 세부페이지에서 
// id 값에 해당하는 제품만 보여주기 위한 parameter 이용.
// useParams는 hooks 중 하나로 parameter 값을 
// url을 통해 넘겨받은 페이지에서 사용할 수 있도록 해주는 것
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../component/MovieDetail"

function Detail(){
    const [loading,setloading]=useState(true);
    const [movie,setMovie]=useState([]);
    // 여기 useParams() 함수 사용시에 id 중괄호로 감싸기
    const {id} = useParams();
    console.log(movie)
    const getMovie = async()=>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setloading(false);
    }
    useEffect(()=>{
       getMovie();
    })
    return (
        <div>
        {loading
         ? "Loading..."
         :  <MovieDetail 
         title= {movie.title}
         description={ movie.description_full}
         rating={movie.rating}
         genres={movie.genres}
         img={movie.large_cover_image}
         bgimg={movie.background_image}/>
        }
        
        </div>
    
    );
}
export default Detail;

//가져온 json 정보를 state로 담고, detail 페이지에 나열하는 작업하기
// [마지막 단계 : 코드 챌린지]
//- Home에서 해줬던 loading을 Detail에 해주기
//- movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
//-> 힌트: json을 state에 넣어보기