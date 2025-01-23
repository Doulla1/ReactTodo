import { Component } from 'react';

class Checkbox extends Component {
    render() {
        const { checked, onChange } = this.props;

        return (
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                {...this.props}
            />
        );
    }
}

export default Checkbox;
