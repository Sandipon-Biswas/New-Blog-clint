import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Registation from './pages/Registation';
import UserBlogs from './pages/UserBlogs';
function App() {
  return (
    <div className="App">
              
<BrowserRouter>
<Header/>
      <Routes>
        <Route path="/myblog" element={<UserBlogs/>} />
        <Route path="/" element={<Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registation/>} />
      </Routes>

  </BrowserRouter>
    </div>
  );
}

export default App;
