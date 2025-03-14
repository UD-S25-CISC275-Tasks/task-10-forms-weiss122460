import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {

    const [inProgress, setInProgress] = useState(false);  // Initially quiz is not in progress
    const [attempts, setAttempts] = useState(4);

    // Function to start the quiz
    const startQuiz = () => {
        setInProgress(true);   // Start the quiz
        setAttempts((prevAttempts) => prevAttempts - 1);  // Decrease attempts by 1
    };

    // Function to stop the quiz
    const stopQuiz = () => {
        setInProgress(false);  // Stop the quiz
    };

    // Function to increase attempts (for Mulligan)
    const increaseAttempts = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);  // Increase attempts by 1
    };

    return (
        <div>
            <p>{`Attempts Remaining: ${attempts}`}</p>
            {/* Start Quiz button */}
            <Button 
                onClick={startQuiz} 
                disabled={attempts === 0 || inProgress}  // Disabled when attempts are 0 or quiz is in progress
            >
                Start Quiz
            </Button>
            
            {/* Stop Quiz button */}
            <Button 
                onClick={stopQuiz} 
                disabled={!inProgress}  // Disabled when quiz is not in progress
            >
                Stop Quiz
            </Button>
            <br />
            {/* Mulligan button */}
            <Button 
                onClick={increaseAttempts} 
                disabled={inProgress}  // Disabled when quiz is in progress
            >
                Mulligan
            </Button>
        </div>
    );
}
