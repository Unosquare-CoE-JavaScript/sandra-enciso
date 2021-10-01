import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

/* The <TransitionGroup> component manages a set of transition components (<Transition> and <CSSTransition>) in a list.
Like with the transition components, <TransitionGroup> is a state machine for managing the mounting and unmounting of components over time. */

/* CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. 
The first class is applied and then a second *-active class in order to activate the CSS transition.
 After the transition, matching *-done class names are applied to persist the transition state. */

import "./List.css";

/* this component shows a list of components and animate the transition of when an element is deleted */
class List extends Component {
  state = {
    items: [1, 2, 3]
  };

  addItemHandler = () => { //Function that adds a new item
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1)
      };
    });
  };

  removeItemHandler = selIndex => { // Function that remove an item
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex)
      };
    });
  };

  render() { //Every component of the list is wrapped into an CSSTransition and these are wrapped in a transition group
    const listItems = this.state.items.map((item, index) => (
      <CSSTransition key={index} classNames="fade" timeout={300}>
        <li
          className="ListItem"
          onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
