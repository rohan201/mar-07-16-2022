import { useMemo } from "react";

export const City = (props: {name: string, temperature: number }) => {
    return useMemo(() => (<div>
        <h1>{props.name}</h1>
        <h2>{props.temperature}</h2>
    </div>), [props.temperature]);    
}