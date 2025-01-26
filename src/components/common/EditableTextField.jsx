import { Component } from 'react';
import PropTypes from 'prop-types';

// Composant EditableTextField : permet d'afficher un champ texte qui peut être modifié ou supprimé.
class EditableTextField extends Component {
	constructor(props) {
		super(props);

		// Initialisation de l'état local
		this.state = {
			isEditing: false,
			value: props.value,
		};

		// Liaison explicite des méthodes au contexte de la classe
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
	}

	// Gère la sortie du mode édition lorsque l'utilisateur clique en dehors du champ
	handleBlur() {
		const { value } = this.props;
		if (value) this.setState({ isEditing: false });
	}

	// Gère le changement de valeur dans le champ texte
	handleChange(event) {
		const { onChange } = this.props;

		if (onChange) {
			onChange(event);
		} else {
			console.error('onChange is not defined');
		}
	}

	// Gère l'appui sur la touche "Entrée" pour quitter le mode édition
	handleEnterKeyDown(event) {
		if (event.key === 'Enter') {
			this.handleBlur();
		}
	}

	// Passe en mode édition lorsqu'on clique sur le texte
	handleEdit() {
		this.setState({ isEditing: true });
	}

	// Gère la suppression du champ (ou d'un élément lié)
	handleRemove(event) {
		const { onRemove } = this.props;
		if (onRemove) {
			onRemove(event);
		} else {
			console.error('onRemove is not defined');
		}
	}

	// Méthode render : contrôle ce qui est affiché
	render() {
		const { isEditing } = this.state;
		const { value, index } = this.props;

		// Si on est en mode édition, afficher un champ texte
		if (isEditing) {
			return (
				<input
					type="text"
					className="form-control w-100"
					value={value}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
					onKeyDown={this.handleEnterKeyDown}
					data-index={index}
				/>
			);
		}

		// Sinon, afficher le texte et les boutons associés
		return (
			<div className="d-flex align-items-center w-100 mb-4">
				<span className="editable-text-field me-2 flex-grow-1" onClick={this.handleEdit}>
					{value}
				</span>
				<button
					className="btn btn-danger ms-2"
					onClick={this.handleRemove}
					data-index={index}
					style={{ cursor: 'pointer' }}
				>
					Supprimer
				</button>
			</div>
		);
	}
}

EditableTextField.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	index: PropTypes.number,
};

EditableTextField.defaultProps = {
	index: 0,
};

export default EditableTextField;
