
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <h1 className={`text-white text-4xl md:text-6xl ${styles.heroHeadText}`}>
          Hi, I'm <span className="text-[#915EFF]">Aviral</span>
        </h1>
        <p className={`mt-4 text-white-100 text-xl md:text-2xl ${styles.heroSubText}`}>
          Machine Learning Engineer, Linux Enthusiast, Fitness Freak & An Overall Nerd...
          {/* I Develop ML Models, Automation Software & Web Apps<br /> */}
        </p>
      </div>
    </section>


    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    //       <div className="w-1 sm:h-80 h-40 violet-gradient" />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm <span className="text-[#915EFF]">Aviral</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         I Develop ML Models, <br className="sm:block hidden" /> Automation
    //         Software & Web Apps
    //         <br className="sm:block hidden" />
    //         <br className="sm:block hidden" />

    //         btw i use arch
    //       </p>
    //     </div>
    //   </div>

    //   <ComputersCanvas />

    //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
    //         <motion.div
    //           animate={{
    //             y: [0, 24, 0],
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className="w-3 h-3 rounded-full bg-white mb-1"
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>
  );
};

export default Hero;
