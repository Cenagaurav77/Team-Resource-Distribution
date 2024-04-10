import React, { useState } from "react"
import FemaleProfile from '../../Images/femaleProfile.jpg'
import MaleProfile from '../../Images/maleProfile.jpg'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const Employees = ({employees,team,handleTeam,handleCardClick}) => {

      const [count, setCount] = useState(0);
      
      function handleCount(action){
        if(action === 'increment'){
          setCount(count + 1);
        }else if(action === 'decrement'){
          setCount(count - 1);
        }
      }

      return (
        <>
        <div className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={team} onChange={handleTeam}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <div className="card-collection">{
                        employees.map((employee) => (
                            <div key={employee.id} id={employee.id} className={(employee.teamName === team ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleCardClick}>
                                {(employee.gender === 'male') ? <img src={MaleProfile} className="card-img-top" />
                                : <img src={FemaleProfile} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
        <div className="timer">
          <button onClick={() => handleCount('decrement')}>-</button>
          <h4 className="data">{count}</h4>
          <button onClick={() => handleCount('increment')}>+</button>
        </div>
        </>
      )
}

export default Employees