import { Box, Center, Image, Text } from "@chakra-ui/react";

export default function About(){
    return(
        <Center  >
            <Box   m="auto" alignItems={"center"} justifyContent={"center"} id="about" className="about section">
              <h1 data-aos="fade-down" data-aos-duration="1000" className="tagName">
              {/* Discovemnnnring Me/ */}
              About mem
              </h1>
              <Box data-aos="fade-right" data-aos-duration="1000" 
              display={["grid","grid","grid","grid","flex"]} gap="20px" w="90%"
               m="auto" alignItems={"center"} justifyContent={"center"}
                >
                <Box>
                    {/* <Image
                     w={["3000px","3000px","800px","900px","5000px"]}
                     borderRadius={"10px"} 
                     src="https://camo.githubusercontent.com/3997f3b27a68e19c31e2d1c378d77303735faa42e7d18a8018f7510d66aaa83e/68747470733a2f2f7777772e77696e677374656368736f6c7574696f6e732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f66756c6c2d737461636b2d646576656c6f706d656e742e676966"/> */}
                </Box>
                <Box data-aos="fade-left" data-aos-duration="1000">
                    <Text 
                   
                    fontSize={["3vw", "3.5vw", "3vw", "2vw", "1.3vw"]}
                    color={"#333f48"} mb="10px" >Coding Is My Passion</Text>
               <Text
                // w={["100%"]}
                 m="auto" textAlign={"left"}
                fontSize={["4vw", "3.5vw", "3vw", "2.3vw", "1.5vw"]}
               
                 id="user-detail-intro">
               Passionate about coding, I consider it not just a profession but an integral part of who I am. 
               It is igniting a fire within me to continuously explore, create, and innovate.
                Coding is where I find solace and excitement .
                Skilled in JavaScript, Node JS, Express, MongoDB,React JS with proficiency in problem-solving.
                I developed passion for coding when I printed my first "Hello world" 😃, that hello world just hits different.
                Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.

               </Text>
                </Box>
              </Box>
        </Box>
        </Center>
        
    )
}