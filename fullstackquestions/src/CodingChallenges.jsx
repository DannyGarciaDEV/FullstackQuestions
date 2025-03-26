import React, { useState } from "react";
import "./CodingChallenges.css";

const codingChallenges = [
    {
      question: "Write a function to handle form submissions in React.",
      initialCode: `function handleSubmit(event) {
    // Write your code here
  }`,
      solution: `function handleSubmit(event) {
    event.preventDefault();
    // You can access form values here and do the necessary operations
    const formData = new FormData(event.target);
    const name = formData.get('name');
    console.log('Form submitted with:', name);
  }`,
    },
    {
      question: "Write a function that fetches data from an API and displays it in a React component.",
      initialCode: `function fetchData() {
    // Write your code here
  }`,
      solution: `import React, { useState, useEffect } from 'react';
  
  function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        {data.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
  `,
    },
    {
      question: "Write an Express.js route that accepts a POST request and saves data to MongoDB using Mongoose.",
      initialCode: `const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  
  app.use(express.json());
  
  app.post('/save-data', (req, res) => {
    // Write your code here
  });
  `,
      solution: `const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  const Data = require('./models/data'); // Mongoose model
  
  app.use(express.json());
  
  app.post('/save-data', async (req, res) => {
    const { title, content } = req.body;
    
    const newData = new Data({
      title,
      content,
    });
  
    try {
      await newData.save();
      res.status(201).json(newData);
    } catch (err) {
      res.status(400).json({ error: 'Error saving data' });
    }
  });
  
  mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  `,
    },
    {
      question: "Write a function in React that uses the useState hook to handle input value changes in a form.",
      initialCode: `function handleInputChange(event) {
    // Write your code here
  }`,
      solution: `import React, { useState } from 'react';
  
  function InputForm() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <p>Current value: {inputValue}</p>
      </div>
    );
  }
  `,
    },
    {
      question: "Write a function in Express.js to handle error responses in an API.",
      initialCode: `app.get('/example', (req, res) => {
    // Write your code here
  });`,
      solution: `app.get('/example', (req, res) => {
    try {
      // Simulate an operation that can fail
      throw new Error('Something went wrong');
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });`,
    },
    {
      question: "Write a React function component that conditionally renders content based on a boolean state.",
      initialCode: `function ConditionalRendering() {
    // Write your code here
  }`,
      solution: `import React, { useState } from 'react';
  
  function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <div>
        {isLoggedIn ? (
          <p>Welcome back!</p>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        )}
      </div>
    );
  }
  `,
    },
    {
      question: "Write an Express.js route that retrieves data from MongoDB and sends it as a response.",
      initialCode: `app.get('/get-data', (req, res) => {
    // Write your code here
  });`,
      solution: `const Data = require('./models/data'); // Mongoose model
  
  app.get('/get-data', async (req, res) => {
    try {
      const data = await Data.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  });
  `,
    },
    {
      question: "Write a function that uses the useEffect hook to fetch data on component mount in React.",
      initialCode: `function fetchDataOnMount() {
    // Write your code here
  }`,
      solution: `import React, { useState, useEffect } from 'react';
  
  function FetchDataComponent() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []); // Empty array ensures this runs only once on mount
  
    return (
      <div>
        {data ? (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  `,
    },
    {
      question: "Write a function in Express.js that validates incoming request data using middleware.",
      initialCode: `const express = require('express');
  const app = express();
  
  app.use(express.json());
  
  app.post('/validate', (req, res) => {
    // Write your code here
  });
  `,
      solution: `const express = require('express');
  const app = express();
  
  app.use(express.json());
  
  // Middleware to validate request data
  const validateData = (req, res, next) => {
    const { name, age } = req.body;
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required' });
    }
    next();
  };
  
  app.post('/validate', validateData, (req, res) => {
    res.status(200).json({ message: 'Data validated successfully' });
  });
  `,
    },
  ];

  const CodingChallenges = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [solutionVisible, setSolutionVisible] = useState(false);
  
    const nextChallenge = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % codingChallenges.length);
      setSolutionVisible(false); // Reset solution visibility when navigating
    };
  
    const prevChallenge = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + codingChallenges.length) % codingChallenges.length);
      setSolutionVisible(false); // Reset solution visibility when navigating
    };
  
    const toggleSolution = () => {
      setSolutionVisible(!solutionVisible);
    };
  
    return (
        <div className="coding-challenges-container">
          <h1>FullStackOpen Coding Challenges</h1>
          <div className="carousel">
            <button onClick={prevChallenge} className="nav-button">&#9665;</button>
            <div className="challenge-card">
              <h3>{codingChallenges[currentIndex].question}</h3>
              <textarea
                className="initial-code"
                value={codingChallenges[currentIndex].initialCode}
                onChange={(e) => handleCodeChange(e.target.value)} // Function to handle text changes
              />
              <button onClick={toggleSolution} className="toggle-button">
                {solutionVisible ? 'Hide Solution' : 'Show Solution'}
              </button>
              {solutionVisible && (
                <pre className="solution">{codingChallenges[currentIndex].solution}</pre>
              )}
            </div>
            <button onClick={nextChallenge} className="nav-button">&#9655;</button>
          </div>
        </div>
      );
  };
  
  export default CodingChallenges;