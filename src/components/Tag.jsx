import React from "react";

function Tag({prop}) {
    console.log(prop);
    return <p className="tag">{prop}</p>
}

export default Tag