import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
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
