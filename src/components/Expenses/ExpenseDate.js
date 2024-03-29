import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense__month">{month}</div>
      <div className="expense__year">{year}</div>
      <div className="expense__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
