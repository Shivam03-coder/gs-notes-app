"use client"
import { useEffect, useState } from "react";

/**
 * Custom hook to check if a component is mounted.
 * @returns {boolean} `true` if the component is mounted, otherwise `false`.
 */
const useMount = () => {
  const [isMounted, setIsMounted] = useState(false); // Corrected naming convention for readability

  useEffect(() => {
    setIsMounted(true); // Set the state to true when the component mounts
    return () => setIsMounted(false); // Clean up by setting it to false on unmount
  }, []);

  return isMounted;
};

export default useMount;
