import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditableTextField = ({ value: initialValue, onChange, onRemove, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(initialValue);

	const handleBlur = () => {
		if (value) setIsEditing(false);
	};

	const handleChange = (event) => {
		const newValue = event.target.value;
		setValue(newValue);
		if (onChange) {
			onChange(event);
		} else {
			console.error('onChange is not defined');
		}
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleBlur();
		}
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleRemove = (event) => {
		if (onRemove) {
			onRemove(event);
		} else {
			console.error('onRemove is not defined');
		}
	};

	if (isEditing) {
		return (
			<input
				type="text"
				className="form-control w-100"
				value={value}
				onBlur={handleBlur}
				onChange={handleChange}
				onKeyDown={handleEnterKeyDown}
				data-index={index}
			/>
		);
	}

	return (
		<div className="d-flex align-items-center w-100 mb-4">
			<span
				className="editable-text-field me-2 flex-grow-1"
				onClick={handleEdit}
			>
				{value}
			</span>
			<button
				className="btn btn-danger ms-2"
				onClick={handleRemove}
				data-index={index}
				style={{ cursor: 'pointer' }}
			>
				Supprimer
			</button>
		</div>
	);
};

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
