import { Component } from 'react';
import Button from './common/Button';
import TodoList from './common/TodoList';
import EditableTextField from './common/EditableTextField';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.lists = [];

		this.state = {
			count: 0,
		};

		this.handleEvent1 = this.handleEvent1.bind(this);
		this.handleEvent2 = this.handleEvent2.bind(this);
		this.handleEvent3 = this.handleEvent3.bind(this);
	}

	componentDidMount() {
		this.lists.push({
			name: 'Today',
		});
		this.forceUpdate();
	}

	componentDidUpdate(_, prevState) {
		const { count } = this.state;

		if (prevState.count !== count) {
			this.forceUpdate();
			console.log('re render');
		}
	}

	updateCount() {
		const { count } = this.state;
		this.setState({
			count: count + 1,
		});
	}

	handleEvent1() {
		var { lists } = this;
		var newList = {
			name: 'List' + lists.length + 1,
		};

		lists.push(newList);
		this.lists = lists;
		this.updateCount();
	}

	handleEvent2(event) {
		var { value, dataset } = event.target;
		var index = dataset?.index ?? null;

		if (index !== null) {
			const { lists } = this;
			lists[index].name = value;
		}
		this.updateCount();
	}

	handleEvent3(event) {
		var index = event?.target?.dataset?.index ?? null;

		if (index !== null) {
			const { lists } = this;
			lists.splice(index, 1);
			this.lists = lists;
			this.updateCount();
		}
	}

	render() {
		var { lists } = this;

		return (
			<div>
				{lists.map((list, index) => (
					<section key={'list-' + index}>
						<EditableTextField
							value={list.name}
							onChange={this.handleEvent2}
							onRemove={this.handleEvent3}
							index={index}
						/>
						<TodoList />
					</section>
				))}
				<Button label='Add list' onClick={this.handleEvent1} />
			</div>
		);
	}
}

export default MainPage;
