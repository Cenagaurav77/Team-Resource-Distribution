import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Content from "./Components/Content/index.jsx";
import Employees from "./Components/Employees/index.jsx";
import GroupedTeamMembers from "./Components/GroupedTeamMembers/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import NotFound from "./Components/NotFound/index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [team, setTeam] = useState(
    JSON.parse(localStorage.getItem("team")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  function handleTeam(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleCardClick(event) {
    console.log("Card Clicked");
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === team
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: team }
        : employee
    );
    setEmployees(transformedEmployees);
  }

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(team));
  }, [team]);

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Header
            team={team}
            teamMemberCount={
              employees.filter((employee) => employee.teamName === team).length
            }
          />
          <Routes>
            <Route
              path="/"
              element={
                <Employees
                  employees={employees}
                  team={team}
                  handleTeam={handleTeam}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/GroupedTeamMembers"
              element={
                <GroupedTeamMembers
                  employees={employees}
                  team={team}
                  setTeam={setTeam}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
