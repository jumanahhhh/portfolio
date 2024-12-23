import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../style";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { Wrap } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      icon={
        <div className="w-[100%] object-contain">
          <img src={experience.icon}></img>
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
        <p
          className="text-secondary font-semibold text-[16px]"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className="mt-5 space-y-2 list-disc ml-5">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What Have I Done So Far?</p>
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Work Experience.
        </h1>
      </motion.div>

      <div>
        <VerticalTimeline className="mt-5 flex flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Wrap(Experience, "experience");
