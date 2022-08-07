import './App.css';
import TaskCard from './components/TaskCard';
import tasksData from './list.json';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(tasksData)

  const handleDelete = (taskName) => {
    const filteredTasks = tasks.filter(el => {
      return el.name !== taskName
    })
    setTasks(filteredTasks)
  }

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setTasks(tasksData)
    } else {
      const filtered = tasks.filter(el => el.name.toLocaleLowerCase().includes((searchValue).toLocaleLowerCase()))
      setTasks(filtered)
    }
  }
  return (
    <div className="App">
      <nav>
        <h1>Welcome back.</h1>
        <button>LogIn</button>

      </nav>
      <div className='main-box-pos'>
        <div className='card-container'>
          <Search onSearch={handleSearch} />
          {tasks.map(el => {
            return <TaskCard info={el} onDelete={handleDelete} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
