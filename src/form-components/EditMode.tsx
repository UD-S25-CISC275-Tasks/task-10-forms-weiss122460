import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check 
                type="switch" 
                id="edit-mode-switch"
                label="Edit Mode"
                className="form-switch" 
                checked={isEditMode}
                onChange={() => { setIsEditMode(!isEditMode); }} 
            />

            {isEditMode ? (
                <div>
                    <Form.Group controlId="nameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {setName(e.target.value); }}
                        />
                    </Form.Group>
                    <Form.Check 
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={() => { setIsStudent(!isStudent); }}
                    />
                </div>
            ) : (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            )}
        </div>
    );
}
