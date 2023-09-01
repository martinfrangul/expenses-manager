import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-Us', {month: 'long'});
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'})

    return (
        <div className="expense-date">
            <div className="expense-item__month">{month}</div>
            <div className="expense-item__year">{year}</div>
            <div className="expense-item__day">{day}</div>
        </div>
    )

}

export default ExpenseDate