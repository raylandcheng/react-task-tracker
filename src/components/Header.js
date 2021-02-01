import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="hello" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color:"blue"
// }

export default Header
