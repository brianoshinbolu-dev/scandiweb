import './App.css';
import ProductsList from './Pages/ProductsList/ProductsList.jsx';
import Add from './Pages/ProductAdd/Add.jsx';
import { 
  BrowserRouter,
  Routes,
  Route }
  from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='/' element={<ProductsList/>} />
            <Route path='/add' element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
     {/**<ProductsList />**/}
    </div>
  );
}

export default App;
