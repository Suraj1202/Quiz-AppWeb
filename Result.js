import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = ({ token, onLogout }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quiz', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Error fetching quiz', error);
        // Handle error, e.g., show an error message
      }
    };

    fetchQuiz();
  }, [token]);

  return (
    <div>
      <h1>Quiz</h1>
      <button onClick={onLogout}>Logout</button>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
