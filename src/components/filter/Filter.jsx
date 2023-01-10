import { PropTypes } from 'prop-types';
import {Wrapper, Label, Input} from './Filter.styled'

// export const Filter = ({ value, onChange }) => {
//        return (
//         <Wrapper>
//             <Label htmlFor="">Find contacts name
//                 <Input type="text" value={value} onChange={onChange} />
//             </Label>
//         </Wrapper>
//     )
// }

function Filter({ value, onChange }) {
    return (
        <Wrapper>
            <Label htmlFor="">Find contacts name
                <Input type="text" value={value} onChange={onChange} />
            </Label>
        </Wrapper>
    )
}



Filter.proptype ={
    value:PropTypes.array,
    onChange:PropTypes.func,
}
export default Filter;