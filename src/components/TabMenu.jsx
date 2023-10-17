import  { useState } from "react";
import AnimatedLine from "./AnimatedLine";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS/Tailwind</li>
        <li>C++</li>
        <li>Python</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS in Computer Science 2025, Florida Atlantic University</li>
        <li>AA in Computer Science 2022, Broward College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CodePath web 102</li>
        <li>Codepath web 101</li>
        <li>Intro to front-end development, Coursera</li>
        <li>Programming with JavaScript, Coursera</li>
        <li>Version control, Coursera</li>

      </ul>
    ),
  },
];

const TabMenu = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col">
          <div className="flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.map((item) => (
              <div key={item.id} className={tab === item.id ? "block" : "hidden"}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabMenu;
