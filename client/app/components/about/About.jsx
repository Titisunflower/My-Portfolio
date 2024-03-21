'use client';
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5 / CSS3</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>ReactJs</li>
        <li>UI/UX design</li>
      </ul>
    ),
  },
  {
    title:  "Education",
    id : "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Kigali</li>
        <li>SheCanCode BootCamp</li>
        <li>AlX Africa</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id : "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development Program</li>
      </ul>
    ),
  },
]

const About = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id.toLowerCase());
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className=""
          src="/images/me.JPG"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am A Frontend Developer with passion for creating interactive and
            responsive web applications. I have experience working with
            Javascript, React, Redux, Node.js, HTML, CSS and git. I am a quick
            learner and I always looking to expand my knowledge and skill set. I
            am a team player and I am excited to work with others to create
            amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;