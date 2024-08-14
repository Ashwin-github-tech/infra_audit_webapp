import React, { useState } from 'react';

interface FormData {
  id: number;
  text: string;
}

const DynamicTableForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [questionInput, setQuestionInput] = useState<string>('');

  const addQuestion = () => {
    if (!questionInput.trim()) {
      alert('Please enter a question.');
      return;
    }

    setFormData(prevData => [
      ...prevData,
      { id: prevData.length + 1, text: questionInput }
    ]);
    setQuestionInput(''); 
  };

  return (
    <form className="user-form">
      <div className="form-group">
        <h2>Add Questions</h2>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={questionInput}
          onChange={e => setQuestionInput(e.target.value)}
        />
        <button type="button" onClick={addQuestion}>Add Question</button>
      </div>

      <div>
        <h2>Questions Form</h2>
        <table className="question-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Yes</th>
              <th>No</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {formData.map(question => (
              <tr key={question.id}>
                <td>{question.text}</td>
                <td>
                  <input type="radio" name={`question${question.id}`} />
                </td>
                <td>
                  <input type="radio" name={`question${question.id}`} />
                </td>
                <td>
                  <textarea
                    className="description-input"
                    rows={4}
                    cols={50}
                    placeholder="Enter description..."
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="submit-button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default DynamicTableForm;
