import { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
