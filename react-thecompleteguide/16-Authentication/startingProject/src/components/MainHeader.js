import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                        {/* <Link to='/welcome'>Welcome</Link> */} {/*prevent the browser default and render other page*/}
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                        {/* <Link to='/products'>Products</Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;