"use client"
import {useEffect, useState} from 'react';


export default function Customer() {
  const [data, setData] = useState<{name: string} | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/planets/1/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(false);
      }
    };

    fetchData();
  }, []);

  return data && (<>{data.name}</>)
}