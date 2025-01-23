import { Component } from 'react';
import Button from './Button';

class EditableTextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: props.value,
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
    }

    handleBlur() {
        const { value } = this.props;
        if (value) this.setState({ isEditing: false });
    }

    handleChange(event) {
        const { onChange } = this.props;

        if (onChange) {
            onChange(event);
        } else {
            console.error('onChange is not defined');
        }
    }

    handleEnterKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleBlur();
        }
    }

    handleEdit() {
        this.setState({ isEditing: true });
    }

    handleRemove(event) {
        const { onRemove } = this.props;
        if (onRemove) {
            onRemove(event);
        } else {
            console.error('onRemove is not defined');
        }
    }

    render() {
        const { isEditing } = this.state;
        const { value, isEditButtonEnable, index } = this.props;

        if (isEditing) {
            return (
                <input
                    type="text"
                    value={value}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                    data-index={index}
                />
            );
        }

        return (
            <>
                <span className="editable-text-field" onClick={this.handleEdit}>
                    {value}
                </span>
                {isEditButtonEnable && (
                    <Button label="Edit" onClick={this.handleEdit} />
                )}
                <Button
                    label="Remove"
                    onClick={this.handleRemove}
                    data-index={index}
                />
            </>
        );
    }
}

export default EditableTextField;
