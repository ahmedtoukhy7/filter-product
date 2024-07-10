import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import Filter from './components/Filter/Filter';
import { DataContextProvider } from './Context/dataContext';



function App() {
  return <>
  <DataContextProvider>
   <div className='container'>

    <h1 className='text-center mt-5 fw-bold text-danger'> Products</h1>
   
  
 
  <Filter/>
 
 
  <Table/>



   </div>
    </DataContextProvider>

  
  </>
}

export default App;
