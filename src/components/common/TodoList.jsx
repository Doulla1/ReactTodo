import { useState } from 'react';
import Checkbox from './Checkbox';
import EditableTextField from './EditableTextField';
import Button from './Button';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const handleCheck = (event) => {
		const index = event?.target?.dataset?.index ?? null;

		if (index !== null) {
			const newTodos = [...todos];
			newTodos[index].checked = !newTodos[index].checked;
			setTodos(newTodos);
		}
	};

	const handleChange = (event) => {
		setNewTodo(event?.target?.value ?? newTodo);
	};

	const handleChangeTodoName = (event) => {
		const { value, dataset } = event.target;
		const index = dataset?.index ?? null;

		if (index !== null) {
			const newTodos = [...todos];
			newTodos[index].value = value;
			setTodos(newTodos);
		}
	};

	const handleRemoveTodo = (event) => {
		const index = event?.target?.dataset?.index ?? null;

		if (index !== null) {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		}
	};

	const handleAddNewTodo = (event) => {
		if (event) event.preventDefault();
		const newTodoItem = {
			checked: false,
			value: newTodo,
		};

		if (newTodo) {
			setTodos([...todos, newTodoItem]);
			setNewTodo('');
		}
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleAddNewTodo();
		}
	};

	const renderATodoLine = (todo, index) => {
		const { checked, value } = todo;
		return (
			<li
				key={`todo-line-${index}`}
				className="list-group-item d-flex align-items-center"
			>
				<Checkbox
					checked={checked}
					onChange={handleCheck}
					data-index={index}
				/>
				<EditableTextField
					value={value}
					onChange={handleChangeTodoName}
					onRemove={handleRemoveTodo}
					index={index}
					isEditButtonEnable={true}
				/>
			</li>
		);
	};

	const renderNewAddingLine = () => {
		return (
			<li
				key={'todo-line-add'}
				className="list-group-item d-flex align-items-center"
			>
				<input
					type="text"
					value={newTodo}
					onChange={handleChange}
					onKeyDown={handleEnterKeyDown}
					className="form-control me-2"
				/>
				<Button
					label="Add todo"
					onClick={handleAddNewTodo}
					className="btn btn-primary"
				/>
			</li>
		);
	};

	return (
		<ul className="list-group">
			{todos.map((todo, index) => renderATodoLine(todo, index))}
			{renderNewAddingLine()}
		</ul>
	);
};

export default TodoList;
