import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../contstants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Arrow from "../icons/Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../scss/projects.module.scss";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center pb-[50px]">
      <div className="w-full md:w-1/2 h-full relative">
        <h3 className="text-display text-lg lg:text-[50px] lg:leading-[50px]">
          {name}
        </h3>
        <p className="mt-2 text-section text-sm lg:text-lg max-w-[530px]">
          {description}
        </p>
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
      </div>

      <div
        className="w-full lg:w-1/2 mt-5 lg:mt-0 mx-0 lg:mx-1 relative flex items-center justify-center rounded-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/bg.png)`,
          height: "480px",
        }}
      >
        <img
          src={image}
          alt="project_image"
          className="max-w-full h-[380px] z-10"
        />
      </div>
    </div>
  );
};

const ProjectSection = () => {
  function PrevArrow(props: {
    style?: React.CSSProperties;
    onClick?: MouseEventHandler;
  }) {
    const { style, onClick } = props;
    return (
      <div style={style} onClick={onClick} className="slick-arrow-prev">
        <Arrow className="rotate-180" />
      </div>
    );
  }

  function NextArrow(props: {
    style?: React.CSSProperties;
    onClick?: MouseEventHandler;
  }) {
    const { style, onClick } = props;
    return (
      <div style={style} onClick={onClick} className="slick-arrow-next">
        <Arrow />
      </div>
    );
  }

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow style={styles} />,
    nextArrow: <NextArrow style={styles} />,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="container bg-grey rounded-3xl pt-[50px]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <p className="text-tile text-section font-semibold">
          03 - Nasze Projekty
        </p>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-display text-lg lg:text-[48px] leading-[60px] font-semibold"
        >
          Nasza firma tworzy niestandardowe rozwiązania programowe w celu
          poprawy interakcji użytkowników z Twoimi produktami i zwiększenia
          sprzedaży.
        </motion.p>
      </div>

      <div className={styles.projects}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div className="mt-[60px]" key={`project-slider-${index}`}>
              <ProjectCard index={index} {...project} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionWrapper(ProjectSection, "projects");
