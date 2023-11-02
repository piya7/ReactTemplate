import Layout from './Web/includes/Layout';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Web/Home/Home';
 import AllMenu from './Web/Pages/Menu/AllMenu';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllMenu" element={<AllMenu/>}/>
       </Routes>
      </Layout>
   </BrowserRouter>

  );
}

export default App;
