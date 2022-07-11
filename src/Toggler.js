import React, {useState} from "react";


function Toggler() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="Toggler">
            <button className="Toggler-btn" onClick={() => setIsToggled(!isToggled)}>
                {isToggled ? "Hide" : "Show"}
            </button>
            {isToggled && <p> um, i guess.. idk </p>}
        </div>
    );
}

export default Toggler;
