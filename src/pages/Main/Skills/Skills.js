import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiGitlab,
  SiGit,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'HTML5', icon: <AiFillHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <IoLogoCss3 color="#1572B6" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__card" key={skill.name}>
              <div className="skills__icon">{skill.icon}</div>
              <p className="skills__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
