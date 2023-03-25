import React from "react";
import { useState } from "react";
import 'chart.css';
import { monthArr } from "../utils"
import { useTracker } from "../context/TrackerContext";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LabelList } from "recharts";
const data = [{ name: 'Mon', amount: 200.50 },
{ name: 'Tue', amount: 100 },
{ name: 'Tue', amount: 100 },
{ name: 'Tue', amount: 100 },
{ name: 'Tue', amount: 100 },
{ name: 'Tue', amount: 100 },
{ name: 'Tue', amount: 100 }
];

export default function ChartCard() {
    // const [currentWeekData, setCurrentWeekData] = useState();
    const today = new Date();

    const todayProps = today.toISOString().split("-");
    const { expenses } = useTracker();
    const currentMonthDataArr = expenses.filter(e => { return todayProps[1] === e.date.split("-")[1] });
    const currentWeekDataArr = [];
    const setUpData = () => {

        for (let i = 0; i < 7; i++) {

            const dateToFind = parseInt(todayProps[2]) - i - 1;
            const objectToFind = currentMonthDataArr.filter(e => dateToFind.toString() === e.date.split("-")[2]);
            const amount = objectToFind.reduce((total, expense) => total + expense.amount, 0);

            currentWeekDataArr.push({
                amount: amount,
                name: `${dateToFind}th`
            })

        }


    }
    setUpData();


    // console.log(currentWeekDataArr);
    return (
        <div className="chart-card-container card">
            <div className="stats-header">
                <h1>Spending - Last 7 days</h1>
                <p>{`${monthArr[today.getMonth()]} - ${today.getFullYear()}`}</p>

                <ResponsiveContainer width="100%" height="60%">
                    <BarChart data={currentWeekDataArr} >
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickLine={false} axisLine={false} domain={[0, 500]} hide />
                        <Bar className="data-bar" dataKey="amount" barSize={30} radius={5} fill="hsl(10, 79%, 65%)"
                        >
                            <LabelList dataKey="amount" position="top" />
                        </ Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div >
    );
}
