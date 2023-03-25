import { createContext, useContext, useState } from "react"

import { v4 as uudiV4 } from "uuid"
import useLocalStorage from "../hook/localStorage";
const TrackerContext = createContext();
export function useTracker() {
    return useContext(TrackerContext);
}
// income = {
//     id:
//     name:
//     date:

// }

// expense ={
//     categoryID:
//     description:
//     amount:
// }

// category{
//     id:
//     name:
//     total:
// }
export const TrackerProvider = ({ children }) => {
    const defaultCategory = [
        {
            id: "1",
            name: "grocery",

        },
        {
            id: "2",
            name: "rent",

        },
        {
            id: "3",
            name: "eating"

        }
        ,
        {
            id: "4",
            name: "shopping"

        }

    ]
    const [incomes, setIncomes] = useLocalStorage("incomes", []);
    const [expenses, setExpenses] = useLocalStorage("expenses", []);
    const [categories, setcategories] = useLocalStorage("categories", defaultCategory);

    // add one income to incomes
    const addIncome = ({ name, amount, date }) => {
        setIncomes(prevIncomes => {
            return [...prevIncomes,
            {
                id: uudiV4(),
                name: name,
                amount: amount,
                date: date

            }]
        })
    }
    const addExpense = ({ name, categoryId, amount, date, day, month, year }) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses,
            {
                id: uudiV4(),
                categoryId: categoryId,
                name: name,
                amount: amount,
                date: date,
                day: day
            }]
        })

    }
    const deleteExpense = (id) => {
        setExpenses(expenses.filter(e => {
            return e.id !== id
        }))
    }
    const getBalance = () => {
        const totalIncome = incomes.reduce((total, income) => total + income.amount, 0)

        const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0)
        return totalIncome - totalExpense;
    }
    const getArrayByCategory = (categoryId) => {
        const array = expenses.filter(e => { return e.categoryId === categoryId });

        return array;
    }
    const deleteIncome = (id) => {
        setIncomes(incomes.filter(i => {
            return i.id !== id;
        }))
    }
    return (
        <TrackerContext.Provider value={{
            incomes,
            expenses,
            categories,
            addIncome,
            addExpense,
            getBalance,
            deleteExpense,
            getArrayByCategory,
            deleteIncome

        }}>
            {children}
        </TrackerContext.Provider>
    )
}