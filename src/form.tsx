import { useState, ChangeEvent, FormEvent } from 'react';
import './form.css';

interface FormData {
  auditorName: string;
  mobileNumber: string;
  date: string;
  place:string;
  answers: boolean[] ;
  descriptions: string[];
}

function UserForm() {
  const [formData, setFormData] = useState<FormData>({
    auditorName: '',
    mobileNumber: '',
    date: '',
    place: '',
    answers: [true, true, true, true, true], // Initial answers for the questions
    descriptions: ['', '', '', '', ''], // Initial descriptions for the answers
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAnswerChange(index: number, value: boolean) {
    const newAnswers = [...formData.answers!];
    newAnswers[index] = value;
    setFormData({ ...formData, answers: newAnswers });
  }

  function handleDescriptionChange(index: number, value: string) {
    const newDescriptions = [...formData.descriptions];
    newDescriptions[index] = value;
    setFormData({ ...formData, descriptions: newDescriptions });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  }

  return (
    <div id="back">
    <br></br>
    <h1 className='title'>Weekly Audit Form </h1>
    <br></br>
    <form className="user-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="auditorname">Auditor Name:</label>
        <input
          type="text"
          id="auditorname"
          name="auditorName"
          value={formData.auditorName}
          onChange={handleChange}
          required
          />
      </div>
      <div className="form-group label-right">
        <label htmlFor="place">Place / Area of audit:</label>
      </div>
      <div className="form-group input-right">
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
          />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="number">Mobile Number:</label><br></br>
      <input
        type="tel"
        id="number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        required
        />
    </div>
    <div className="form-group">
      <label htmlFor="date">Date:</label>
      <br></br>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        />
    </div>



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
          <tr>
            <td>Are the rooms/restrooms clean and free from dust?</td>
            <td>
              <input
                type="radio"
                name="question1"
                checked={formData.answers![0]}
                onChange={() => handleAnswerChange(0, true)}
                />
            </td>
            <td>
              <input
                type="radio"
                name="question1"
                checked={!formData.answers![0]}
                onChange={() => handleAnswerChange(0, false)}
                />
            </td>
            <td>
              <textarea
                className="description-input"
                rows={4}
                cols={50}
                value={formData.descriptions![0]}
                onChange={(e) => handleDescriptionChange(0, e.target.value)}
                placeholder="Enter description..."
                />
            </td>
          </tr>
          <tr>
            <td>Any damages observed in the furniture?</td>
            <td>
              <input
                type="radio"
                name="question2"
                checked={formData.answers![1]}
                onChange={() => handleAnswerChange(1, true)}
                />
            </td>
            <td>
              <input
                type="radio"
                name="question2"
                checked={!formData.answers![1]}
                onChange={() => handleAnswerChange(1, false)}
                />
            </td>
            <td>
              <textarea
                className="description-input"
                rows={4}
                cols={50}
                value={formData.descriptions[1]}
                onChange={(e) => handleDescriptionChange(1, e.target.value)}
                placeholder="Enter description..."
                />
            </td>
          </tr>
          <tr>
            <td>Are the doors and handles in good condition?</td>
            <td>
              <input
                type="radio"
                name="question3"
                checked={formData.answers![2]}
                onChange={() => handleAnswerChange(2, true)}
                />
            </td>
            <td>
              <input
                type="radio"
                name="question3"
                checked={!formData.answers![2]}
                onChange={() => handleAnswerChange(2, false)}
                />
            </td>
            <td>
              <textarea
                className="description-input"
                rows={4}
                cols={50}
                value={formData.descriptions[2]}
                onChange={(e) => handleDescriptionChange(2, e.target.value)}
                placeholder="Enter description..."
                />
            </td>
          </tr>
          <tr>
            <td>Identify the complaints of the following</td>
            <td>
              <input
                type="radio"
                name="question4"
                checked={formData.answers![3]}
                onChange={() => handleAnswerChange(3, true)}
                />
            </td>
            <td>
              <input
                type="radio"
                name="question4"
                checked={!formData.answers![3]}
                onChange={() => handleAnswerChange(3, false)}
                />
            </td>
            <td>
              <textarea
                className="description-input"
                rows={4}
                cols={50}
                value={formData.descriptions[3]}
                onChange={(e) => handleDescriptionChange(3, e.target.value)}
                placeholder="Enter description..."
                />
            </td>
          </tr>
          <tr>
            <td>Any suggestions for improvement?</td>
            <td>
              <input
                type="radio"
                name="question5"
                checked={formData.answers![4]}
                onChange={() => handleAnswerChange(4, true)}
                />
            </td>
            <td>
              <input
                type="radio"
                name="question5"
                checked={!formData.answers![4]}
                onChange={() => handleAnswerChange(4, false)}
                />
            </td>
            <td>
              <textarea
                className="description-input"
                rows={4}
                cols={50}
                value={formData.descriptions[4]}
                onChange={(e) => handleDescriptionChange(4, e.target.value)}
                placeholder="Enter description..."
                />
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <div className="submit-button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
</div>
  );
}

export default UserForm;
