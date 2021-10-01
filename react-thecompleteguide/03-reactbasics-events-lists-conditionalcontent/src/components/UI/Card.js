import './Card.css';

function Card (props){
    const classes = `card ${props.className}`;
    /*
    Children is a reserved key of React and the value of this special chindren prop, will always be the content between the opening and closing tags of your custom component 
    */
    return  <div className={classes}>{props.children}</div>
}

export default Card;