import {useState, useEffect} from 'react';
import './App.css';
import PaginationComponent from './components/PaginationComponent';
import PaginationSelect from './components/PaginationSelect';

function App() {

  //USESTATE
  const[itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
  const fetchData = async  () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => (data));

    setItens(result)
  }
  fetchData()
  }, []);

  useEffect(()=> {
    setCurrentPage(0)
  }, [itensPerPage]);

  return (
    <div className="App">


      
        <PaginationSelect setItensPerPage={setItensPerPage} itensPerPage={itensPerPage} />
    {currentItens.map(item => {
      return <div className='item'>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span>{item.completed}</span>
      </div>
    })}
     <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
