import classes from './Card.module.css';

function Card(props) { /* children prop is a prop which every component receives by default. 
    And children always hold the content which is passed between the opening and closing component tag */
    return <div className={classes.card}>{props.children}</div>; /* Where we can wrap all our content into Card component */
}

export default Card;