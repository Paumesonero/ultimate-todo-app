import './App.css';
import TaskCard from './components/TaskCard';
import tasks from './list.json';

function App() {
  return (
    <div className="App">
      <footer>
        <h1>Welcome back.</h1>
        <button>LogIn</button>

      </footer>
      <div className='card-container'>
        {tasks.map(el => {
          return <TaskCard info={el} />
        })}
      </div>
    </div>
  );
}

export default App;
