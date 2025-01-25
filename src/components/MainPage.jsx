import React, { useState } from 'react';
import Button from './common/Button';
import TodoList from './common/TodoList';
import EditableTextField from './common/EditableTextField';

const MainPage = () => {
    // État pour gérer les listes
    const [lists, setLists] = useState([{ name: 'Today' }]);

    /**
     * Ajoute une nouvelle liste avec un nom par défaut.
     */
    const addNewList = () => {
        const newList = { name: `List ${lists.length + 1}` };
        setLists((prevLists) => [...prevLists, newList]);
    };

    /**
     * Met à jour le nom d'une liste à un index donné.
     * @param {Object} event - L'événement provenant de l'input.
     */
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

    /**
     * Supprime une liste à un index donné.
     * @param {Object} event - L'événement provenant du bouton "Remove".
     */
    const removeList = (event) => {
        const index = Number(event?.target?.dataset?.index);

        if (!isNaN(index)) {
            setLists((prevLists) => prevLists.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            {/* Affiche toutes les listes */}
            {lists.map((list, index) => (
                <section key={`list-${index}`}>
                    <EditableTextField
                        value={list.name}
                        onChange={updateListName}
                        onRemove={removeList}
                        index={index}
                    />
                    <TodoList />
                </section>
            ))}

            {/* Bouton pour ajouter une nouvelle liste */}
            <Button label="Add list" onClick={addNewList} />
        </div>
    );
};

export default MainPage;
