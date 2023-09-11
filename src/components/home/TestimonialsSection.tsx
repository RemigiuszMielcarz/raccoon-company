import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../contstants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Arrow from "../icons/Arrow";
import { ReactComponent as Stars } from "../../images/icons/stars.svg";
import styles from "../../scss/testimonials.module.scss";
import Divider from "../Divider";

type TestimonialsCardProps = {
  description: string;
  author: { name: string; position: string };
};

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  description,
  author,
}) => {
  return (
    <div className="h-full bg-grey flex flex-col gap-4 lg:gap-10 rounded-[30px] text-display p-4 lg:p-5 mb-[200px]">
      <div className="flex items-end gap-[10px]">
        <Stars />
        <p className="font-bold text-title">5.0</p>
      </div>
      <em className="text-md lg:text-lg">{description}</em>
      <div>
        <p className="text-md lg:text-sm font-bold">{author.name}</p>
        <p className="text-md lg:text-sm">{author.position}</p>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const statsData = [
    { number: "12", description: "zweryfikowanych opinii" },
    { number: "5.0", description: "średnia ocena" },
  ];

  return (
    <div className="mt-8 lg:mt-15 flex justify-between mb-4 lg:mb-5">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
        {statsData.map((stat, index) => (
          <div key={index} className="flex items-end font-bold gap-4">
            <p className="text-secondary text-xxxl leading-[50px]">
              {stat.number}
            </p>
            <p className="text-display text-m lg:pb-1">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
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
    variableWidth: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container pt-8 lg:pt-[50px]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <p className="text-md lg:text-title text-section font-semibold">
          04 - Recenzje
        </p>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 lg:mt-5 text-display text-xl lg:text-xxxl font-medium"
        >
          Zadowolony klient jest najlepszym wskaźnikiem udanej współpracy i
          podejścia do projektu.
        </motion.p>
      </div>

      <Stats />

      <Divider variant={"grey"} />

      <div className={`${styles.testimonials} mt-8 lg:mt-15`}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div key={index}>
              <TestimonialsCard key={index} {...testimonial} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(TestimonialsSection, "testimonials");
