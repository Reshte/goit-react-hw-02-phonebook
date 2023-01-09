// import { PropTypes } from 'prop-types';

export const Filter = ({ value, onChange }) => {
       return (
        <div>
            <label htmlFor="">Find contacts name
                <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    )
}

