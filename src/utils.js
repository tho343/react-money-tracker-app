import { useState } from "react";

export const currencyFormatter = new Intl.NumberFormat(undefined, 
    {currency: "usd",
    style: "currency",
minimumFractionDigit:0}
    );
export const dateArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
export const monthArr = ["January", "Febuary", "March", "April", "May", "June", "July","August","September","October","November","December"]

