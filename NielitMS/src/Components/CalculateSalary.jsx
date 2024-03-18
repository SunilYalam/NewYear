import { useState } from "react";
import "./Style.css";

const CalculateSalary = () => {

  const [formData, setFormData] = useState({
    name: '',
    level: '1',
    basicSalary: '',
    da: '',
    ta: '',
    hra: '',
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const calculateSalary = () => {
    const { name, level, basicSalary, da, ta, hra } = formData;
    let totalSalary;

    if (basicSalary !== '' && da !== '' && ta !== '' && hra !== '') {
      totalSalary =
        parseFloat(basicSalary) +
        (parseFloat(basicSalary) * parseFloat(da)) / 100 +
        (parseFloat(basicSalary) * parseFloat(ta)) / 100 +
        (parseFloat(basicSalary) * parseFloat(hra)) / 100;

      setResult(
        <div>
          <h3>Salary Details for {name}</h3>
          <p>Level of CPC: {level}</p>
          <p>Basic Salary: {basicSalary}</p>
          <p>DA: {da}%</p>
          <p>TA: {ta}%</p>
          <p>HRA: {hra}%</p>
          <p>Total Salary: {totalSalary}</p>
        </div>
      );
    } else {
      setResult('Please enter all the values to calculate the salary.');
    }
  };

  return (
    <>
      <div className='ms-system'>
        <h2>Salary Management System</h2>
        <form id="salaryForm">
          <label htmlFor='name'>Employee Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter Employee Name'
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor='level'>Level of CPC:</label>
          <select
            id='level'
            required
            value={formData.level}
            onChange={handleInputChange}
          >
            <option value="1">Level (1)-PB-1 (5200-20200) G.P. 1800</option>
            <option value="2">Level (2)-PB-1 (5200-20200) G.P. 1900</option>
            <option value="3">Level (3)-PB-1 (5200-20200) G.P. 2000</option>
            <option value="4">Level (4)-PB-1 (5200-20200) G.P. 2400</option>
            <option value="5">Level (5)-PB-1 (5200-20200) G.P. 2800</option>
            <option value="6">Level (6)-PB-2 (9300-34800) G.P. 4200</option>
            <option value="7">Level (7)-PB-2 (9300-34800) G.P. 4600</option>
            <option value="8">Level (8)-PB-2 (9300-34800) G.P. 4800</option>
            <option value="9">Level (9)-PB-2 (9300-34800) G.P. 5400</option>
            <option value="10">Level (10)-PB-3 (15600-39100) G.P. 5400</option>
            <option value="11">Level (11)-PB-3 (15600-39100) G.P. 6600</option>
            <option value="12">Level (12)-PB-3 (15600-39100) G.P. 7600</option>
            <option value="13">Level (13)-PB-4 (37400-67000) G.P. 8700</option>
            <option value="14">Level (13)-PB-4 (37400-67000) G.P. 8900</option>
            <option value="15">Level (14)-PB-4 (37400-67000) G.P. 10000</option>
            <option value="16">Level (15)- 67000-79000</option>
            <option value="17">Level (16)- 75000-80000</option>
            <option value="18">Level (17)- 80000</option>
            <option value="19">Level (17)- 90000</option>
            {/* Add more options as needed */}
          </select>

          <label htmlFor='basicSalary'>Select Basic Salary:</label>
          <input
            type='number'
            id='basicSalary'
            placeholder='Enter Basic Salary '
            required
            value={formData.basicSalary}
            onChange={handleInputChange}
          />

          <label htmlFor='da'>Enter DA %:</label>
          <input
            type='number'
            id='da'
            placeholder='Enter DA'
            required
            value={formData.da}
            onChange={handleInputChange}
          />

          <label htmlFor='ta'>Enter TA %:</label>
          <input
            type='number'
            id='ta'
            placeholder='Enter TA'
            required
            value={formData.ta}
            onChange={handleInputChange}
          />

          <label htmlFor='hra'>Enter HRA%:</label>
          <input
            type='number'
            id='hra'
            placeholder='Enter HRA'
            required
            value={formData.hra}
            onChange={handleInputChange}
          />

          <button type='button' onClick={calculateSalary}>
            Calculate Salary
          </button>
          <div className='' id='result'>
            {result}
          </div>
        </form>
      </div>
    </>
  )
}

export default CalculateSalary;