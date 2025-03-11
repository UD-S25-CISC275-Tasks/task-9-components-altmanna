import React from "react";
import { Button } from "react-bootstrap";
import { DoubleHalfState } from "./DoubleHalfState";

function Doubler({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Doubler
        </Button>
    );
}

function Halver({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = DoubleHalfState();
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
