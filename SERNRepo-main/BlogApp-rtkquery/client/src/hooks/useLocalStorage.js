// useLocalStorage.js

import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // Retrieve the stored value from local storage
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Create a state variable to track the value
    const [value, setValue] = useState(initial);

    // Update the value in local storage whenever it changes
    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
};

export default useLocalStorage;


// USAGE of USELOCALSTORAGE HOOK
// import useLocalStorage from './useLocalStorage';

// Initialize user details (you can modify this)

// Use the custom hook to manage user details
//   const [userDetails, setUserDetails] = useLocalStorage('user', null);

// Update user details when needed
//   const handleLogin = () => {
//     const newUserDetails = {
//       id: 123,
//       username: 'exampleUser',
//       email: 'user@example.com',
//       token: 'yourAuthToken',
//     };
//     setUserDetails(newUserDetails);
//   };