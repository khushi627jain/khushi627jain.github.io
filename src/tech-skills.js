
import {Box, Center, Heading, Image} from "@chakra-ui/react"
import { SiChakraui,SiReact,SiRedux,SiJavascript,SiCss3, SiFirebase, SiExpress, SiMongodb } from "react-icons/si";
import styles from "./style.css"
import { AiFillHtml5 } from "react-icons/ai";
export function TechSkills(){
    return(<div id="skills">
       
        <h1 className="tagName">Tech Stacks </h1>
      
<div className="skills">


<div className="innerSkillBox">
<AiFillHtml5 size={"95px"} />
    <p>HTML</p>

</div>

<div className="innerSkillBox">
   <SiCss3 size="80px"/>
    <p>CSS</p>
</div>


<div className="innerSkillBox">
<i style={{fontSize:"85px"}} class="fab fa-node-js"></i>
    <p>JavaScript</p>
</div>

<div className="innerSkillBox">
    <i style={{fontSize:"85px" , margin:"auto" ,justifyContent:"center",alignItems:"center"  }} class="fab fa-node"></i>
    <p>Node.js</p>
</div>

<div className="innerSkillBox">
<SiReact size="80px" />
    <p>React</p>
</div>

<div className="innerSkillBox">
    <SiExpress  size={"80px"}/>
    <p>Express.js</p>
</div>

<div className="innerSkillBox">
    <SiMongodb size={"80px"} />
    <p>MongoDB</p>
</div>

<div className="innerSkillBox">
<img width="100" height="40" src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-data-structures-data-science-solid-solidglyph-m-oki-orlando.png" alt="external-data-structures-data-science-solid-solidglyph-m-oki-orlando"/>
    <p>DSA</p>
</div>

<div className="innerSkillBox">
<SiChakraui size={"80px"} />
    <p>Chakra-UI</p>
</div>

</div>


</div>
    )
}