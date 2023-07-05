// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="match-card-list-container">
        <img src={teamImageUrl} alt={name} className="match-card-logo-img" />
        <p className="match-card-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
