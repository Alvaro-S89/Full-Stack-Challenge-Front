import './signboard.css';

const Signboard = (props) => {
    return (
        <svg viewBox="0 0 1320 300">

        {/* Symbol */}
        <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                {props.text}
            </text>
        </symbol>  

        {/* Duplicate symbols */}
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>

        </svg>
    );
}

export default Signboard