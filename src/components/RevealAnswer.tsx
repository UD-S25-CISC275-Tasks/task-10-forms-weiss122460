import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {/* Added braces to the arrow function to avoid the warning */}
            <Button onClick={() => { setVisible(!visible); }}>Reveal Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
