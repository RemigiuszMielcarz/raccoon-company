import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../contstants";
import { fadeIn, staggerContainer } from "../../utils/motion";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  isLast: boolean;
  isFirst: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  isLast,
  isFirst,
}) => {
  const cardMargin = isFirst
    ? "mb-4 lg:mb-0"
    : isLast
    ? "mt-4 lg:mt-0"
    : "my-4 lg:my-0";
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={cardMargin}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl"
      >
        <div className="relative w-full">
          <img
            src={image}
            alt="project_image"
            className="max-w-full h-[380px] rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <p className="text-sm">Nasze ostatnie ruchy</p>
        <h2 className="text-6xl">Projekty.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Nasza firma tworzy niestandardowe rozwiązania programowe w celu
          poprawy interakcji użytkowników z Twoimi produktami i zwiększenia
          sprzedaży.
        </motion.p>
      </div>

      <motion.div className="mt-20 flex-col lg:grid lg:grid-cols-2 flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(ProjectSection, "");
