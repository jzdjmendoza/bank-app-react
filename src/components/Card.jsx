import '../App.css'

function Card(props) {
    const { initialAmount, cardNumber, expDate } = props.userCard
    return (
        <div className="CardWrapper">
            <div className="Balance">$ {initialAmount}</div>
            <div className="CardNumber">{cardNumber}</div>
            <div className="ExpDate">{expDate}</div>
        </div>
    )
}

export default Card;