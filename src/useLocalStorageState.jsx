import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    // Load saved data from localStorage when the app first loads
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      // Save to localStorage every time the value changes
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );
  return [value, setValue];
}
