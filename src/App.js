import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: 'id', name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id='list-heading'>3 tasks remaining</h2>
      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {tasks.map((task) => {
          return (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
