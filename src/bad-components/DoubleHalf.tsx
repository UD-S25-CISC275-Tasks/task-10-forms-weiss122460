import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";  // Import the custom hook

// Doubler component
function Doubler({ dhValue, setDhValue }: { dhValue: number; setDhValue: React.Dispatch<React.SetStateAction<number>> }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);  // Ensure types align
            }}
        >
            Double
        </Button>
    );
}

// Halver component
function Halver({ dhValue, setDhValue }: { dhValue: number; setDhValue: React.Dispatch<React.SetStateAction<number>> }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);  // Ensure types align
            }}
        >
            Halve
        </Button>
    );
}

// Main component
export function DoubleHalf(): React.JSX.Element {
    const { dhValue, setDhValue } = useDoubleHalfState();  // Use custom hook to get state

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />  {/* Pass state and setter to Doubler */}
            <Halver dhValue={dhValue} setDhValue={setDhValue} />  {/* Pass state and setter to Halver */}
        </div>
    );
}
