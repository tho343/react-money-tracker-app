import React from "react";
import { currencyFormatter } from "../utils";
import { useTracker } from "../context/TrackerContext";
import shopping from "../assets/shopping.svg"
import eating from "../assets/eating.svg"
import grocery from "../assets/grocery.svg"
import rent from "../assets/rent.svg"
export default function CategoryItem() {
    const { categories, getArrayByCategory } = useTracker();
    const calTotal = (categoryId) => {
        return getArrayByCategory(categoryId).reduce(
            (total, expense) => total + expense.amount,
            0
        );
    };

    return (
        <div className="categories-container ">
            {categories.map((category) => (

                <div className="category-item  " key={category.id}>
                    <div className="expense-img-container"><img src={require(`../assets/${category.name}.svg`)} /></div>
                    <div className="category-item-info ">
                        <div className="category-name">{category.name}</div>
                        <div className="category-amount">{currencyFormatter.format(calTotal(category.id))}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
