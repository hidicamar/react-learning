import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
    //const [game, setGame] = useState({
    //    id: 1,
    //    player: {
    //        name: "John",
    //    },
    //});

    //const [pizza, setPizza] = useState({
    //    name: "spicy Pepperoni",
    //    toppings: ["Mushroom"],
    //});

    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 1 },
        ],
    });

    const handleClick = () => {
        // setGame({ ...game, player: { ...game.player, name: "New name" } });
        // setPizza({ ...pizza, toppings: [...pizza.toppings, "Test"] });
        setCart({
            ...cart,
            items: cart.items.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
    };

    const [selectedCategory, setSelectedCategory] = useState("");

    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "abc", amount: 11, category: "Utilities" },
        { id: 3, description: "aad", amount: 12, category: "Utilities" },
        { id: 4, description: "aae", amount: 13, category: "Utilities" },
        { id: 5, description: "aaf", amount: 15, category: "Utilities" },
    ]);

    return (
        <>
            <ExpenseFilter
                onSelectCategory={(category) => setSelectedCategory(category)}
            />

            <ExpenseList
                expenses={expenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((e) => e.id !== id))
                }
            ></ExpenseList>
        </>
    );
}

export default App;
