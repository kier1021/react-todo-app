const Button = ({ onClick, text }) => {
    return (
        <div>
            <button
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    text: 'Button',
}

export default Button