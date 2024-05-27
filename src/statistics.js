import { Heading } from "@chakra-ui/react";

import './style.css'; 


export function Statistics(){
    return(
        <div className="stat">
<div >
<div className="stat-3">
  <img data-aos="fade-right" data-aos-duration="1000" id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=khushi627jain&show_icons=true&theme=dracula" />
  <img data-aos="fade-left" data-aos-duration="1000" id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=khushi627jain&theme=dracula" />
  </div>
  <div className="stat-2">
    <img data-aos="fade-up" data-aos-duration="1000" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=khushi627jain&layout=compact&theme=dracula" />
  </div>
 
</div>
        </div>
    )
}