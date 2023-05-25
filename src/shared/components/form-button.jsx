/* eslint-disable react/prop-types */

const FormButton = (props) => {
    return (
        <button type={props.type}
            className="bg-white/75 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
            {props.text}
        </button>
    );
};

export default FormButton;