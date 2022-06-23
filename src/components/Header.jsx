import '../App.css'

const Header = (props) => {
    const { firstName, lastName } = props.user

    return (
        <div className="Header">
            <div className="Header-logo">My Wallet</div>
            <div className="Header-user">Hi, {firstName} {lastName}!</div>
        </div>
    )
}

export default Header;