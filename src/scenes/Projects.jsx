import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";



const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          1. Article Summarizer Application using OPENAI GPT model. React, TailwindCss, and Javascript was used in this project. 
        </p>
        <p className="mt-10 mb-10">
          2. Crypto Currency website that shows the worth of several different currencies vs crypto currency. Crypto Currency API was used for this project, and HTML, Javascript. 
        </p>
        <p className="mt-10 mb-10">
          3. PromptPedia is a website where one can share, discover and create different ChatGPT prompts using TailwindCss, javascript and MONGODB. 
        </p>
        <p className="mt-10 mb-10">
          4. A Fullstack Application integrating MONGO, EXPRESS, REACT, and NODEJS, in which a product is sold via online payments. PayPal Sandbox will be used to simulate the payments.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {/* <Project title="Project 1" />
          <Project title="Project 2" /> */}

          {/* ROW 2 */}
          {/* <Project title="Project 3"   /> */}
          {/* <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" /> 
          <Project title="Project 7" /> */}

          <a
          className="hover:opacity-50 transition duration-500"
          href="https://famous-sopapillas-772b26.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Landing page" src="../assets/project-1.jpg" />
         
        </a>

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://paradosso-debug.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Restaurant-App" src="../assets/project-5.jpg" />
        </a>

          <a
          className="hover:opacity-50 transition duration-500"
          href="https://promptpedia-9lel1c3je-paradosso-debug.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="PromptPedia page" src="../assets/project-2.jpg" />
        </a>

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://courageous-puce-dibbler.cyclic.app/"
          target="_blank"
          rel="noreferrer"
        >
          
          <img alt="Ecommerce-App" src="../assets/project-4.jpg" />
        </a>
        
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;