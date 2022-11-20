import React from "react";

export default function NewsList({ news }) {
    return(
        <div>
            {news.map(p => (
            <div key={p}>{p}</div>
                ))}
        </div>
    )
}