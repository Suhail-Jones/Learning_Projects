function Button(props){  
    return(
        <button className={`buttons ${props.extraClass || ""}`} onClick={() => props.onPress(props.buttonName)}>{props.buttonDisplay}</button>
    );
}
export default Button;