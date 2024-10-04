"use client";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  ingredients: [''];
  instructions: [''];
  
}

const Page: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const result = await response.json();
    setData(result.recipes);
    console.log(result,'result')
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
   <ul className="mt-10">
    {
      data && Array.isArray(data) && data.map((item)=>(
        <li key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.ingredients}</p>
        </li>
      ))
    }
   </ul>
  );
};

export default Page;
