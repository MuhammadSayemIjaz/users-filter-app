import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  
  const [filterDocs, setFilterDocs] = useState([]);
  const [status, setStatus] = useState("active");
  const states = ["active", "inactive", "all"];

  useEffect(() => {
    const std = [
      {
        id: 1,
        name: "John",
        rollno: 1234,
        status: "active",
      },
      {
        id: 2,
        name: "Doe",
        rollno: 2345,
        status: "inactive",
      },
      {
        id: 3,
        name: "Oliver",
        rollno: 3456,
        status: "active",
      },
      {
        id: 4,
        name: "Dove",
        rollno: 4567,
        status: "inactive",
      },
      {
        id: 5,
        name: "Doe John",
        rollno: 5678,
        status: "active",
      },
      {
        id: 6,
        name: "Jane Oliver",
        rollno: 6789,
        status: "inactive",
      },
      {
        id: 7,
        name: "Oliver John",
        rollno: 7891,
        status: "active",
      },
      {
        id: 8,
        name: "Doe Dove",
        rollno: 8910,
        status: "inactive",
      },
      {
        id: 9,
        name: "Aslam",
        rollno: 1011,
        status: "active",
      },
      {
        id: 10,
        name: "Faisal",
        rollno: 1112,
        status: "inactive",
      },
    ];
    if (status !== "all") {
      let newArray = std.filter((doc) => {
        return doc.status === status;
      });
      setFilterDocs(newArray);
    }else{
      setFilterDocs(std);
    }
  }, [status]);  
  return (
    <div>
      <h1>Users Details</h1>
      {filterDocs.map((doc , index) => {
        return <p key={index}>{doc.name}</p>
      })}
      <select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
        {
          states.map((opt, index) => {
            return <option key={index} value={opt}>{opt}</option>
          })
        }
      </select>
    </div>
  );
};
export default App;
