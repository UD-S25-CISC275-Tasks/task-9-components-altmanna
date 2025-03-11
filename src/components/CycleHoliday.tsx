import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    Thanksgiving = "🦃",
    NewYear = "🎆",
    Valentine = "💖",
}

const ALPHA_ORDER: Record<Holiday, Holiday> = {
    [Holiday.Christmas]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.NewYear,
    [Holiday.NewYear]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Valentine,
    [Holiday.Valentine]: Holiday.Christmas,
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    [Holiday.NewYear]: Holiday.Valentine,
    [Holiday.Valentine]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.NewYear,
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.NewYear);

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(ALPHA_ORDER[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(YEAR_ORDER[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
