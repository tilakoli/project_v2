import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from "../UpdatedElements/Card";

const HorizontalScrollWrapper = ({ cardData }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 0", "0 0"],
  });

  const x = useTransform(scrollYProgress, [0, 2], ["80%", "-100%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[130vh] flex items-center  w-auto "
    >
      <h1 className="p-8 w-[10%] hidden md:block">My Projects</h1>
      <div className="sticky top-0 flex items-center h-auto overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
          where is card
          {cardData?.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollWrapper;
