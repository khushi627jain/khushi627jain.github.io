import { Heading } from "@chakra-ui/react";




export function Statistics(){
    return(
        <div className="stat">
<div >
  <div className="stat-1">
    <img  src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=khushi627jain&theme=2077"/>
  </div>
  <div className="stat-2">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=khushi627jain&theme=2077" />
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=khushi627jain&theme=2077" />
  </div>
  <div className="stat-3">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=khushi627jain&theme=2077" />
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=khushi627jain&theme=2077&utcOffset=8" />
  </div>
</div>
        </div>
    )
}