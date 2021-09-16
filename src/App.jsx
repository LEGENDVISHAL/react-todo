import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const App = () => {
	function uniques(arr) {
		var a = [];
		for (var i = 0, l = arr.length; i < l; i++)
			if (a.indexOf(arr[i]) === -1 && arr[i] !== '') a.push(arr[i]);
		return a;
	}
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const makeTask = (e) => {
		setTask(e.target.value);
	};

	const addTask = () => {
		if (task !== '') {
			setTasks((oldTasks) => {
				return uniques([...oldTasks, task]);
			});
		} else {
			alert('Task Should Not Be Empty!');
		}

		setTask('');
	};

	const delTask = (index) => {
		setTasks((oldTasks) => {
			return oldTasks.filter((ts, ind) => {
				return ind !== index;
			});
		});
	};

	return (
		<div className='box' id='box'>
			<h1 className='title'>To Do List</h1>
			<div>
				<input
					className='input'
					type='text'
					placeholder='Add a Task'
					onChange={makeTask}
					value={task}
				/>
				<button className='plus_btn' onClick={addTask}>
					+
				</button>
			</div>
			{tasks.map((t, index) => {
				return (
					<Card key={index} id={index} task={t} onSelect={delTask} />
				);
			})}
		</div>
	);
};

export default App;
