// import { set } from "cypress/types/lodash";
import React, { useState } from "react";

const Selection = (props) => {
    const { applyColor } = props
    const [style, setStyle] = useState({ background: "" });

    const handleClick = () => {
        applyColor(setStyle)
    }

    return (
        <div className="fix-box"
            style={style}
            onClick={handleClick}>
        </div>
    )
}

export default Selection;