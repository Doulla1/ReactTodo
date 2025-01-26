import React, { useState } from 'react';
import Button from './common/Button';
import TodoList from './common/TodoList';
import EditableTextField from './common/EditableTextField';

const MainPage = () => {
	// Déclaration de la liste des tâches
	const [lists, setLists] = useState([{ name: 'Today' }]);
	// Ajout de TodoList dans la liste des tâches
	const addNewList = () => {
		const newList = { name: `List ${lists.length + 1}` };
		// Ajout de la nouvelle liste
		setLists((prevLists) => [...prevLists, newList]);
	};
	// Mise à jour du nom de la liste des tâches
	const updateListName = (event) => {
		const { value, dataset } = event.target;
		const index = Number(dataset?.index);

		if (!isNaN(index)) {
			setLists((prevLists) => {
				const updatedLists = [...prevLists];
				updatedLists[index] = { ...updatedLists[index], name: value };
				return updatedLists;
			});
		}
	};
	// Suppression de TodoList dans la liste des tâches
	const removeList = (event) => {
		const index = Number(event?.target?.dataset?.index);

		if (!isNaN(index)) {
			setLists((prevLists) => prevLists.filter((_, i) => i !== index));
		}
	};
	
	return (
		<div className="container mt-4">
			{lists.map((list, index) => (
				<section key={`list-${index}`} className="mb-3">
					<div className="card">
						<div className="card-body">
							<EditableTextField
								value={list.name}
								onChange={updateListName}
								onRemove={removeList}
								index={index}
							/>
							<TodoList />
						</div>
					</div>
				</section>
			))}

			<Button label="Add list" onClick={addNewList} className="btn btn-primary" />
		</div>
	);
};

export default MainPage;
