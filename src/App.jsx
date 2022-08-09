import './App.css';
import TaskCard from './components/TaskCard';
import tasksData from './list.json';
import Search from './components/Search';
import NewTask from './components/NewTask';
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

  const handleNewTask = (task) => {
    const updatedTasks = [...tasks]
    updatedTasks.push(task)
    setTasks(updatedTasks)
  }

  const handleUrgency = () => {
    const sorted = [...tasks].sort((a, b) => b.urgency - a.urgency);
    setTasks(sorted)
  }
  return (
    <div className="App">
      <nav>
        <h1>Welcome back.</h1>
        <button>LogIn</button>

      </nav>
      <button onClick={handleUrgency} className='urgent-btn'>Most urgent</button>
      <Search onSearch={handleSearch} />
      <div className='main-box-pos'>
        <div className='card-container'>

          {tasks.map(el => {
            return <TaskCard info={el} onDelete={handleDelete} />
          })}
        </div>
        <div className='form-container'>
          <NewTask onAddingTask={handleNewTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
