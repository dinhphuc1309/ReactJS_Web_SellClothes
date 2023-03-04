import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const hadler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(hadler);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
