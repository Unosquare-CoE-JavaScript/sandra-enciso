function Modal(props) { //props parameter is passed in automatically by React
  return (
    <div className='modal'>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        Cancel
      </button>
      <button className='btn' onClick={props.onClose}> {/* Executes the function onClose which is passed throught the props */}
        Confirm
      </button>
    </div>
  );
}

export default Modal;
