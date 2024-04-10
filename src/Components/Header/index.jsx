const header = ({team, teamMemberCount}) => {
  return (
    <>
      <header>
        <h1>Team member allocation</h1>
        <h3>{team} has {teamMemberCount} members.</h3>
      </header>
    </>
  );
};

export default header;
