// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const newObj = {
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    date: latestMatch.date,
    firstInnings: latestMatch.first_innings,
    id: latestMatch.id,
    manOfTheMatch: latestMatch.man_of_the_match,
    result: latestMatch.result,
    secondInnings: latestMatch.second_innings,
    umpires: latestMatch.umpires,
    venue: latestMatch.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = newObj

  return (
    <div className="latest-match-container">
      <div className="heading-vanue-container">
        <p className="latest-match-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div className="heading-vanue-container">
        <p>First Innings</p>
        <p className="umpire">{firstInnings}</p>
        <p>Second Innings</p>
        <p className="umpire">{secondInnings}</p>
        <p>Man Of The Match</p>
        <p className="umpire">{manOfTheMatch}</p>
        <p>Umpires</p>
        <p className="umpire">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
