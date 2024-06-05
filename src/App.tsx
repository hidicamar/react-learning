import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

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

    return (
        <>
        <Form />
            <ExpandableText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur aut non alias iusto, molestiae recusandae
                asperiores, quam animi minus atque illum cumque modi accusamus
                ipsam est! Minima odit explicabo laboriosam earum doloremque
                harum quasi nemo officiis hic, magnam omnis ipsam nostrum
                voluptas recusandae soluta dolores quisquam fugiat aperiam,
                magni consectetur, atque at! Illum, porro quam. Molestiae quae
                laboriosam natus praesentium fugit, facere sit, quasi suscipit
                nemo provident enim quo odio tempora reiciendis dolore quia
                repellendus? Reprehenderit, ad? Nisi mollitia quidem illum
                dolorem voluptatem, cumque totam fuga incidunt nostrum.
                Reiciendis repellendus sunt magnam repellat voluptate, rem
                aliquid numquam inventore velit doloribus.
            </ExpandableText>

            <ul className="divide-y divide-gray-100">
                {cart.items.map((item, index) => (
                    <li className="py-3 bg-slate-300" key={item.id}>
                        {item.title}, {item.quantity}
                    </li>
                ))}
            </ul>
            <Button onClick={handleClick}>Change name</Button>
        </>
    );
}

export default App;
