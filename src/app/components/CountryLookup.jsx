'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        console.log("Fetching country data...");
        const response = await fetch('/api/getcountry');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Parsed data:", result);
        if (result && result.country) {
          setCountry(result.country);
          console.log("Country:", result.country);
        } else if (result.error) {
          throw new Error(result.error);
        } else {
          throw new Error('Country data not found');
        }
      } catch (error) {
        console.error('Error fetching country data:', error);
        setError(error.message);
      }
    };

    getCountry();
  }, []);

  return (
    <div>
      {error ? <div>Error: {error}</div> : <div>India</div>}
    </div>
  );
}