import React from 'react';
//style object, use cummacase coz its jsx
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};
// const props = {
//     onClick: () => "function",
//     value:"X"
// }

const Square= ({value,onClick}) => (
    //style is a default react prop
    <button style={style} onClick={onClick}>
        {value}
    </button>
);
export default Square;