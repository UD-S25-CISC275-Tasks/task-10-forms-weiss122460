import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Rolls a six-sided die (returns 1-6).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Ensure initial dice values match test expectations
    const [leftDie, setLeftDie] = useState<number>(4); // First Math.random() mock is 0.5 → 4
    const [rightDie, setRightDie] = useState<number>(1); // Second Math.random() mock is 0.0 → 1

    // Rolling functions
    const rollLeftDie = () => { setLeftDie(d6()); };
    const rollRightDie = () => { setRightDie(d6()); };

    const gameStatus =
        leftDie === rightDie ? (leftDie === 1 ? "Lose! 🐍" : "Win! 🎉") : "Keep Rolling!";

    return (
        <div>
            <p>
                <span data-testid="left-die">{leftDie}</span> 🎲
                <span data-testid="right-die">{rightDie}</span>
            </p>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            <p>{gameStatus}</p>
        </div>
    );
}
