// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchItems} = props

  const newRecentMatchItems = {
    competingTeam: recentMatchItems.competing_team,
    competingTeamLogo: recentMatchItems.competing_team_logo,
    matchStatus: recentMatchItems.match_status,
    result: recentMatchItems.result,
  }

  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = newRecentMatchItems

  const customizeColorClass = matchStatus === 'Won' ? 'greenColor' : 'redColor'

  return (
    <li className="list-items-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={customizeColorClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
