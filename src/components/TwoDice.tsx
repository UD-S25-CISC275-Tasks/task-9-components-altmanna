import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Use lazy initialization to avoid extra calls
    const [leftDie, setLeftDie] = useState<number>(d6);
    const [rightDie, setRightDie] = useState<number>(d6);

    // Roll functions (ensuring only one die updates)
    function rollLeftDie() {
        setLeftDie(d6()); // Update only the left die
    }

    function rollRightDie() {
        setRightDie(d6()); // Update only the right die
    }

    // Determine game outcome
    let result: string | null = null;
    if (leftDie === rightDie) {
        result = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">🎲 {leftDie}</span>
            <span data-testid="right-die">🎲 {rightDie}</span>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            {result && <p>{result}</p>}
        </div>
    );
}
