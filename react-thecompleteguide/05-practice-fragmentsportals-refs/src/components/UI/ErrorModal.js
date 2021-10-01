/* This file creates a backdrop and a modal and then renders these components in another div different of our root div.
Creates a portal which allows to render children into a DOM node that exists outside the hierarchy of the DOM component */
import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return (
        <Card key="Modal" className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm} >Okay</Button>
            </footer>
        </Card>
    )        
} 

const ErrorModal = props => {
    return ( //You can return an array of elements, using (,). But if you use an array, you must to provide a key property
        /* [
            <div key="backdrop" className={classes.backdrop} onClick={props.onConfirm} />,
            <Card key="Modal" className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm} >Okay</Button>
                </footer>
            </Card>
        ]    */
        /* Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.*/
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={props.onConfirm} />, 
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, 
                    document.getElementById('overlay-root')
                )
            }
        </React.Fragment>
    );
};

export default ErrorModal;