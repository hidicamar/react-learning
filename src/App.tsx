import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
    const cities = ["New york", "Amsterdam", "Berlin"];

    const [alertVisibility, setAlertVisibility] = useState(false);

    const handleListItemSelection = (item: string) => {
        console.log(item);
    };

    return (
        <>
            {alertVisibility && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    test allert
                </Alert>
            )}

            <Button
                variant="secondary"
                onClick={() => setAlertVisibility(true)}
            >
                Alert
            </Button>

            <ListGroup
                items={cities}
                heading="My list"
                onSelectItem={handleListItemSelection}
            ></ListGroup>
        </>
    );
}

export default App;
