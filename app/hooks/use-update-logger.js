import {useEffect} from 'react'

export const useUpdateLogger = (value, statement) => {
    useEffect(() => {
        console.log(statement)
        console.log(value)
    }, [value])
}
