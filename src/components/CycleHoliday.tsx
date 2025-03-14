import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define holidays with associated emojis
enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    IndependenceDay = "🧨",
    NewYear = "🎉",
    Thanksgiving = "🦃"
}

// Define the order for alphabetical cycling
const alphabetOrder: Holiday[] = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.IndependenceDay,
    Holiday.NewYear,
    Holiday.Thanksgiving
];

// Define the order for yearly cycling
const yearOrder: Holiday[] = [
    Holiday.NewYear,       // January 1
    Holiday.IndependenceDay, // July 4
    Holiday.Halloween,      // October 31
    Holiday.Thanksgiving,   // Fourth Thursday of November
    Holiday.Christmas       // December 25
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(Holiday.Christmas);

    // Function to cycle through holidays alphabetically
    const cycleAlphabetically = () => {
        const index = alphabetOrder.indexOf(currentHoliday);
        const nextIndex = (index + 1) % alphabetOrder.length;
        setCurrentHoliday(alphabetOrder[nextIndex]);
    };

    // Function to cycle through holidays by year
    const cycleByYear = () => {
        const index = yearOrder.indexOf(currentHoliday);
        const nextIndex = (index + 1) % yearOrder.length;
        setCurrentHoliday(yearOrder[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
