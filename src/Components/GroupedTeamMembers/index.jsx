import { useState } from "react";

const GroupedTeamMembers = ({employees, team, setTeam}) => {

const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

function groupTeamMembers(){
    var teams = [];
    var teamAMembers = employees.filter( (employee) => employee.teamName === 'TeamA'  );
    var teamA = {teamN:'TeamA', members: teamAMembers, collapsed: team === 'TeamA'?false:true};
    teams.push(teamA);
    
    var teamBMembers = employees.filter( (employee) =>  employee.teamName === 'TeamB'  );
    var teamB = {teamN:'TeamB', members: teamBMembers, collapsed: team === 'TeamB'?false:true};
    teams.push(teamB);

    var teamCMembers = employees.filter( (employee) =>  employee.teamName === 'TeamC');
    var teamC = {teamN:'TeamC', members:teamCMembers, collapsed: team === 'TeamC' ? false : true};
    teams.push(teamC);

    var teamDMembers = employees.filter( (employee) =>  employee.teamName === 'TeamD');
    var teamD = { teamN: 'TeamD', members:teamDMembers, collapsed: team === 'TeamD' ? false: true};
    teams.push(teamD);

    return teams

}

function handleTeamClick(event){
    var transformedGroupData = groupedEmployees.map( (groupedData) => 
        groupedData.teamN === event.currentTarget.id ? {...groupedData, collapsed: !groupedData.collapsed} : groupedData); 
        setGroupedEmployees(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <>
        <main className="container">
        {
            groupedEmployees.map( (item) => {
                return (
                    <div key={item.teamN} className="card mt-2" style={{cursor:"pointer"}} >
                        <h4 id={item.teamN} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                            Team Name: {item.teamN}
                        </h4>
                    <div id={"collapse_" + item.teamN} className={item.collapsed === true ? "collapse" : ""}>
                        <hr/>
                        {
                            item.members.map( member => {
                                return(
                                    <div className="mt-2">
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark">Full Name: {member.fullName}</span>
                                        </h5> 
                                        <p>Designation: {member.designation}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    </div>
                )
            })
        }
        </main>
        
        </>    )
}

export default GroupedTeamMembers;