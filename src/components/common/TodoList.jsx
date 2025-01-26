import { Component } from 'react';
import Checkbox from './Checkbox';
import EditableTextField from './EditableTextField';
import Button from './Button';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			newTodo: '',
		};

		this.handleCheck = this.handleCheck.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
		this.handleChangeTodoName = this.handleChangeTodoName.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
		this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
	}

	handleChange(event) {
		const { newTodo } = this.state;

		this.setState({ newTodo: event?.target?.value ?? newTodo });
	}

	handleCheck(event) {
		const index = event?.target?.dataset?.index ?? null;

		if (index !== null) {
			const { todos } = this.state;
			const newTodos = [...todos];
			newTodos[index].checked = !newTodos[index].checked;
			this.setState({ todos: newTodos });
		}
	}

	handleChangeTodoName(event) {
		const { value, dataset } = event.target;
		const index = dataset?.index ?? null;

		if (index !== null) {
			const { todos } = this.state;
			const newTodos = [...todos];
			newTodos[index].value = value;
			this.setState({ todos: newTodos });
		}
	}

	handleRemoveTodo(event) {
		const index = event?.target?.dataset?.index ?? null;

		if (index !== null) {
			const { todos } = this.state;
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			this.setState({ todos: newTodos });
		}
	}

	handleAddNewTodo(event) {
		if (event) event.preventDefault();
		const { todos, newTodo } = this.state;
		const newTodoItem = {
			checked: false,
			value: newTodo,
		};

		if (newTodo)
			this.setState({ todos: [...todos, newTodoItem], newTodo: '' });
	}

	handleEnterKeyDown(event) {
		if (event.key === 'Enter') {
			this.handleAddNewTodo();
		}
	}

	renderATodoLine(todo, index) {
		const { checked, value } = todo;
		return (
			<li key={`todo-line-${index}`} className="list-group-item d-flex align-items-center">
				<Checkbox
					checked={checked}
					onChange={this.handleCheck}
					data-index={index}
				/>
				<EditableTextField
					value={value}
					onChange={this.handleChangeTodoName}
					onRemove={this.handleRemoveTodo}
					index={index}
					isEditButtonEnable={true}
				/>
			</li>
		);
	}

	renderNewAddingLine() {
		const { newTodo } = this.state;

		return (
			<li key={'todo-line-add'} className="list-group-item d-flex align-items-center">
				<input
					type="text"
					value={newTodo}
					onChange={this.handleChange}
					onKeyDown={this.handleEnterKeyDown}
					className="form-control me-2"
				/>
				<Button label="Add todo" onClick={this.handleAddNewTodo} className="btn btn-primary" />
			</li>
		);
	}

	render() {
		const { todos } = this.state;

		return (
			<ul className="list-group">
				{todos.map((todo, index) => this.renderATodoLine(todo, index))}
				{this.renderNewAddingLine()}
			</ul>
		);
	}
}

export default TodoList;
