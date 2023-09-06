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
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center pb-[50px]">
      <div className="w-full pt-4 lg:pt-0 pb-16 lg:pb-0 md:w-1/2 h-full relative">
        <h3 className="text-display text-sm lg:text-[50px] lg:leading-[50px]">
          {name}
        </h3>
        <p className="mt-2 text-section text-sm lg:text-lg max-w-[530px]">
          {description}
        </p>
      </div>

      <div
        className="w-full lg:w-1/2 mt-5 lg:mt-0 mx-0 lg:mx-1 relative flex items-center justify-center rounded-3xl bg-cover bg-center p-4 lg:p-0 min-h-[246px] lg:h-[480px]"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgrounds/projects-bg.png)`,
        }}
      >
        <img src={image} alt="project_image" className="max-h-[380px] z-10" />
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
    <div className="container bg-grey rounded-3xl pt-8 lg:pt-[50px]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <p className="text-md lg:text-title text-section font-semibold">
          03 - Nasze Projekty
        </p>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-display text-xl lg:text-xxl font-medium"
        >
          Nasza firma tworzy niestandardowe rozwiązania programowe w celu
          poprawy interakcji użytkowników z Twoimi produktami i zwiększenia
          sprzedaży.
        </motion.p>
      </div>

      <div className={styles.projects}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              className="mt-[32px] lg:mt-[60px]"
              key={`project-slider-${index}`}
            >
              <ProjectCard index={index} {...project} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectSection, "projects");
