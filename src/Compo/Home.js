import React, { useState } from 'react'

const Home = () => {

  const [formData, setFormData] = useState({ name: "", lastName: "", city: "" });
    const [submittedData, setSubmittedData] = useState([]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData([...submittedData, formData]);
      setFormData({ name: "", lastName: "", city: "" });
    };
  

  return (
    
      <div >
        <h2>User Form</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
         
            required
          />
          <button
            type="submit"
           
          >
            Submit
          </button>
        </form>
  
        {submittedData.length > 0 && (
          <div className="mt-6">
            <h3 >Submitted Data</h3>
            <table>
              <thead>
                <tr >
                  <th>Name</th>
                  <th >Last Name</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td >{data.name}</td>
                    <td >{data.lastName}</td>
                    <td >{data.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );

  
}

export default Home