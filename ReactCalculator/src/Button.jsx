function Button(props){
    const handleClick = (value) => console.log(value);
    
    return(
        <button className="buttons" onClick={() => handleClick(props.buttonName)}>{props.buttonDisplay}</button>
    );
}
export default Button;