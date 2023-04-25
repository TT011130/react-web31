import Proptypes from "prop-types"
/**
 * @typedef ButtonProps
 * 
 * @property {string} label - text hiển thị
 * @property {() => void} onClick - hàm xử lý sự kiện click
 */

 /**
  * @param {ButtonProps} props
  */

export default function Button({label, onClick}) {
    return <button className="button" onClick={onClick}>
    {label}
    </button>
} 

Button.displayName ="button";

Button.defaultProps={
    children: null, 
    onClick: () => {}
};

Button.propTypes ={
    children: PropTypes.element,
    onClick: PropTypes.func
};