import React, { Fragment, useState } from "react";
import { useTracker } from "../context/TrackerContext";
import { currencyFormatter } from "../utils";
import { GrClose } from "react-icons/gr";
import { RiAddFill } from "react-icons/ri";
import AddExpenseForm from "../components/addExpenseForm";
import CategoryItem from "../components/category-item";
import expenseBannerImage from "../assets/expenseBannerImage.svg";
export default function Expenses() {
  const { expenses, deleteExpense } = useTracker();
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const [showModalAddExpense, setShowModalAddExpense] = useState(false);

  return (
    <Fragment>

      <div className="main">
        <div className="expenses-container">

          <div className="expense-summary-card">
            <div className="image-banner-container">
              <img src={expenseBannerImage} />
            </div>
            <div className="summary-header">
              <h1>
                Your spending:
                <span>{currencyFormatter.format(totalExpense)}</span>
              </h1>
              <div
                className="add-expense btn"
                onClick={() => {
                  setShowModalAddExpense(true);
                }}
              >
                <RiAddFill size={30} textAnchor={"add expense"} />
                Expense
              </div>
            </div>

          </div>
          <div className="expense-items-container">
            {expenses.map((e) => {
              return (
                <div key={e.id} className="expense-item">
                  <div className="left">
                    <div className="amount">
                      {currencyFormatter.format(e.amount)}
                    </div>
                    <div>{e.name}</div>
                  </div>

                  <div className="right">
                    <div className="date">{e.date}</div>
                    <GrClose onClick={() => deleteExpense(e.id)} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        <CategoryItem />

        <AddExpenseForm
          show={showModalAddExpense}
          onCloseHandle={() => setShowModalAddExpense(false)}
        />
      </div>
    </Fragment>
  );
}
