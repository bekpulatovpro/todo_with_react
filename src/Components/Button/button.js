
import "./button.css"

function Button({text='jhbbihbpib',variant="primary"}){
    return(


        <button className={`button ${variant}`}>{text}</button>
    )
    
}


export default Button;