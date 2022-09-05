import React from "react";
import Tag from '../components/Tag'
//get data 

function Tags({props}) {
    return <div className="tags_container">
     {props.map((tag) => {
        return <Tag key={tag} prop={tag}/> 
     })}
       
    </div>
    ;
}

export default Tags