import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);

    mediaQuery.addEventListener('change', handler);

    // Clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]); // Re-run if query changes

  return matches;
};

export default useMediaQuery;