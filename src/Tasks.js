import React, { useState } from 'react'
import uuid from 'uuid/v4'

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, {taskText, id: uuid() }]);
  }

  const completeTask = completedTask => () =>{
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(tasks => tasks.id !== completedTask.id))
  }

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
  }

  console.log('tasks', tasks)

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {
          tasks.map(task => {
            const { id, taskText } = task;
            return (
              <div key={id} onClick={completeTask(task)}>
                {taskText}
              </div>
            )
        })
        }
      </div>
      <h3>Completed Tasks</h3>
      <div className='completed-list'>
        {
          completedTasks.map(task => {
            const { id, taskText} = task;
            return (
              <div key={id}>
                {taskText}{' '}
                <span className='delete-task' onClick={deleteTask(task)}>x</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tasks;