import { useState } from "react"

const Button = ({
    handleClick,
}) => {
    const [text, setText] = useState('Click me');
    const [backgroundColor, setColor] = useState('green')
    const handleMouseClick = e => {
        e.preventDefault();
        setText('I am clicked');
        setColor('red');
        handleClick(e);
    }
    const handleMouseLeave = e => {
        e.preventDefault();
        setText('Click me');
        setColor('green')
    }
    return(
        <div className="container">
            <button
                onClick={handleMouseClick}
                onMouseLeave={handleMouseLeave}
                style={{backgroundColor}}
            >
                {text}
            </button>
        </div>

    )
}

export default Button;
