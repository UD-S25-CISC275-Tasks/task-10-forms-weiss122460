import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Initialize state with "short_answer_question"
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");

    // Toggle between "multiple_choice_question" and "short_answer_question"
    const toggleQuestionType = () => {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <p>{questionType === "multiple_choice_question" ? "Multiple Choice" : "Short Answer"}</p>
            <Button onClick={toggleQuestionType}>Change Type</Button>
        </div>
    );
}
