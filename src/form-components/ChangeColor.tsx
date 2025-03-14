import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown"
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => { setSelectedColor(color); }} 
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    width: "150px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid black"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
