import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiAntdesign,
  SiFirebase,
  SiGitlab,
  SiGit,
} from 'react-icons/si';
import { TbAtom, TbLayoutDashboard } from 'react-icons/tb';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Jotai', icon: <TbAtom color="#61DAFB" /> },
  { name: 'Redux Toolkit', icon: <SiRedux color="#764ABC" /> },
  { name: 'FSD', icon: <TbLayoutDashboard color="#E8441F" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
  { name: 'Ant Design', icon: <SiAntdesign color="#0170FE" /> },
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
