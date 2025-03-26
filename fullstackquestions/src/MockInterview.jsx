import React, { useState } from "react";
import "./MockInterview.css";

const questions = [
  {
    question: "What is the MERN stack, and why is it commonly used?",
    answer:
      "MERN stands for MongoDB, Express.js, React, and Node.js. It is commonly used because it allows for full-stack JavaScript development, enabling developers to write both frontend and backend in the same language.",
  },
  {
    question: "What are the key principles of RESTful APIs?",
    answer:
      "RESTful APIs follow principles like being stateless, client-server separation, cacheable, and having a uniform interface that follows standard HTTP methods (GET, POST, PUT, DELETE).",
  },
  {
    question: "What is JSX, and why is it used in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension that allows writing HTML inside JavaScript. It makes React components more readable and expressive.",
  },
  {
    question: "How does Express.js handle HTTP requests?",
    answer:
      "Express.js handles HTTP requests using middleware functions and route handlers. A typical route looks like app.get('/api/example', (req, res) => { res.json({ message: 'Hello World' }); });",
  },
  {
    question: "What is middleware in Express.js, and why is it important?",
    answer:
      "Middleware functions intercept and process requests before they reach the final handler. Examples include logging, authentication, and error handling.",
  },
  {
    question: "Why is unit testing important in full-stack development?",
    answer:
      "Unit testing ensures that individual functions and components work correctly, preventing regressions and improving code quality.",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    answer:
      "useEffect is used to handle side effects in functional components, such as fetching data or subscribing to events. It runs after the component renders and can be controlled with dependencies.",
  },
  {
    question: "How does MongoDB store data, and what is Mongoose?",
    answer:
      "MongoDB stores data as JSON-like documents in collections. Mongoose is an ODM (Object Data Modeling) library that provides a schema-based solution for MongoDB.",
  },
  {
    question: "What is CORS, and why is it important?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web applications from making requests to a different domain. It prevents unauthorized access to APIs.",
  },
  {
    question: "How do you mock API calls in testing?",
    answer:
      "You can use Jest’s jest.mock() or libraries like msw to mock API responses. Example: jest.mock('axios'); axios.get.mockResolvedValue({ data: { message: 'Success' } });",
  },
  {
    question: "What is prop drilling in React, and how can it be avoided?",
    answer:
      "Prop drilling is the process of passing data through multiple layers of components. It can be avoided using Context API or state management libraries like Redux.",
  },
  {
    question: "What are controlled and uncontrolled components in React?",
    answer:
      "Controlled components have their state controlled by React via props, while uncontrolled components manage their own state using the DOM.",
  },
  {
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases use structured tables and schemas, while NoSQL databases use flexible, schema-less storage like JSON documents, key-value pairs, or graphs.",
  },
  {
    question: "What is the virtual DOM, and how does it work in React?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM that React uses to determine changes before updating the actual DOM for improved performance.",
  }
];

const MockInterview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const prevQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  return (
    <div className="mock-interview-container">
      <h1 className="title">FullStackOpen Mock Interview Questions</h1>
      <div className="carousel">
        <button onClick={prevQuestion} className="nav-button">&#9665;</button>
        <div className="question-card">
          <h3 className="question">{questions[currentIndex].question}</h3>
          <p className="answer">{questions[currentIndex].answer}</p>
        </div>
        <button onClick={nextQuestion} className="nav-button">&#9655;</button>
      </div>
    </div>
  );
};

export default MockInterview;

