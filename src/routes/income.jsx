import React from 'react'
import { Fragment, useState } from 'react';
import { useTracker } from '../context/TrackerContext';
import { GrClose } from "react-icons/gr";
import { currencyFormatter } from '../utils';
import { RiAddFill } from "react-icons/ri";
import AddIncomeForm from '../components/addIncomeForm';
import incomeBannerImage from "../assets/incomeBannerImage.svg";
export default function Income(props) {
  const [showModalAddIncome, setShowModalAddIncome] = useState(false);
  const { incomes, deleteIncome } = useTracker();
  const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
  return (
    <Fragment>

      <div className="main">
        <div className="expenses-container">

          <div className="expense-summary-card">
            <div className="image-banner-container">
              <img src={incomeBannerImage} />
            </div>
            <div className="summary-header">
              <h1 >
                Your earning
                <span>{currencyFormatter.format(totalIncome)}</span>
              </h1>
              <div
                className="add-expense btn"
                onClick={() => {
                  setShowModalAddIncome(true);
                }}
              >
                <RiAddFill size={30} textAnchor={"add expense"} />
                Income
              </div>
            </div>

          </div>
          {incomes.map((e) => {
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
                  <GrClose onClick={() => deleteIncome(e.id)} />
                </div>
              </div>
            );
          })}
        </div>


        <AddIncomeForm
          show={showModalAddIncome}
          onCloseHandle={() => setShowModalAddIncome(false)}
        />
      </div>
    </Fragment>
  )
}
