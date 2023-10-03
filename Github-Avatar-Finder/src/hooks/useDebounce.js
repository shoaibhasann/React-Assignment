import React, { useEffect, useState } from 'react'

function useDebounce(inputValue, delay) {

    const [debouncedValue, setDebouncedValue] = useState(inputValue);


    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, delay);

        return () => {
            clearTimeout(timerId);
        }

    }, [inputValue, delay]);

  return debouncedValue;
}

export default useDebounce