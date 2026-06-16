import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiChakraui,
  SiCloudflare,
  SiGithub,
  SiPostman,
  SiJira,
  SiSentry,
  SiVercel,
  SiNetlify,
  SiRazorpay
} from "react-icons/si";

import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";

import { FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const skills = [
  // Most Valuable / Most Searched

  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "React Native", icon: "📱" },

  // Backend & Architecture

  { name: "Express.js", icon: <SiExpress /> },
  { name: "REST APIs", icon: "⚡" },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Queue Systems", icon: "🔄" },
  { name: "Cron Jobs", icon: "⏰" },
  { name: "Redis Redlock", icon: "🔒" },

  // Databases

  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  // Frontend Ecosystem

  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <DiHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },
  { name: "Chakra UI", icon: <SiChakraui /> },

  // Cloud & Monitoring

  { name: "Cloudflare", icon: <SiCloudflare /> },
  { name: "Sentry", icon: <SiSentry /> },

  // Languages

  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },

  // Payments & Business Integrations

  { name: "Razorpay", icon: <SiRazorpay /> },
  { name: "Cashfree", icon: "💳" },
  { name: "Paytm", icon: "💰" },
  { name: "ONDC", icon: "🌐" },
  { name: "Digio KYC", icon: "🪪" },

  // Developer Tools

  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> }
];

function Techstack() {
  return (
    <div
      id="Skills"
      style={{
        margin: "auto",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <br />
      <br />
      <br />

      <h1
        data-aos="fade-down"
        data-aos-duration="1500"
        className="tagName"
        style={{
          marginBottom: "20px"
        }}
      >
        Skills
      </h1>

      <Row
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{
          justifyContent: "center",
          paddingBottom: "30px"
        }}
      >
        {skills.map((skill, index) => (
          <Col
            key={index}
            xs={4}
            sm={3}
            md={2}
            lg={2}
            className="skills-card"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div
              style={{
                textAlign: "center",
                cursor: "pointer"
              }}
            >
              <div
                className="skills-card-img"
                style={{
                  fontSize: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "6px"
                }}
              >
                {skill.icon}
              </div>

              <p className="skills-card-name">{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
