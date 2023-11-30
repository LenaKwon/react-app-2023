import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
   return (
      <BrowserRouter>
         {/* Routes 는 한번에 하나의 route를 렌더링하려고 씀 */}
         <Routes>    
            {/* path는 url 주소 */}
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
