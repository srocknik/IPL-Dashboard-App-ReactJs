// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchId: '',
    isRunning: true,
    latestMatch: '',
    recentMatch: [],
    bannerUrl: '',
  }

  componentDidMount() {
    this.getMatchId()
  }

  getMatchId = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const bannerTeamUrl = data.team_banner_url

    this.setState({
      matchId: id,
      isRunning: false,
      latestMatch: latestMatchDetails,
      bannerUrl: bannerTeamUrl,
      recentMatch: recentMatches,
    })
  }

  render() {
    const {matchId, bannerUrl, latestMatch, recentMatch, isRunning} = this.state

    return (
      <div>
        {isRunning ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-bg-container">
            <img src={bannerUrl} alt="team banner" className="team-banner" />
            <div className="latest-match-heading-container">
              <p className="latest-match-heading-container">Latest Match</p>
            </div>
            <LatestMatch latestMatch={latestMatch} />
            <ul className="recent-match-list-container">
              {recentMatch.map(each => (
                <MatchCard recentMatchItems={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
