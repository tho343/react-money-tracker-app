import React, { Fragment, useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import { useTracker } from '../context/TrackerContext';
export default function Modal(props) {
    const dateArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    const nameRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();
    const categoryIdRef = useRef();
    const { addIncome, addExpense, categories } = useTracker();
    const { show, onCloseHandle, name } = props;
    const handleSubmitIncome = (e) => {
        e.preventDefault();
        addIncome({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value
        })

    }
    const handleSubmitExpense = (e) => {
        e.preventDefault();
        const dateInput = new Date(dateRef.current.value);
        addExpense({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateInput.toISOString().split("T")[0],
            categoryId: categoryIdRef.current.value,
            day: dateArr[dateInput.getDay()]
        })
    }
    return (
        <div className={show ? "modal-overlay open-modal" : "modal-overlay"}>
            <div className="modal-container">
                <div className="form-container card">
                    <form onSubmit={name === "income" ? handleSubmitIncome : handleSubmitExpense}>

                        <h1>Add {name}</h1>
                        <label >name</label>
                        <input type="text" ref={nameRef} required></input>
                        <label >amount</label>
                        <input type="number" ref={amountRef} name="amount" min={0} step={0.01} required></input>
                        <label >Date</label>
                        <input type="date" name="date" ref={dateRef} required></input>
                        {name === "expense" && (
                            <Fragment>
                                <label>Category</label>
                                <select ref={categoryIdRef}>
                                    {categories.map(category => {
                                        return <option key={category.id} value={category.id}>{category.name}</option>
                                    })}
                                </select>
                            </Fragment>

                        )}
                        <button type="submit" onClick={onCloseHandle}>submit</button>

                    </form>
                    <button className="close-btn" onClick={onCloseHandle} >
                        <GrClose className='close-icon' />
                    </button>
                </div>


            </div>
        </div>
    )
}
