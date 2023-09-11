import PropTypes from "prop-types";
import "./style.css";

function Button( prop ) {
	var a = Request("a")
	console.log(process.env);
	return <button>test</button>
};

Button.propTypes = { text: PropTypes.string.isRequired};
export default Button;
