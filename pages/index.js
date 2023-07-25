/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import memoji from '../public/memoji.png';
import playwright from '../public/playwright.png';
import pc from '../public/pc.png';
import consulting from '../public/consulting.png';
import article from '../public/clanok.jpg';
import skillmea from '../public/skillmea.jpg';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Michal Drajna - Portfolio</title>
        <meta name="description" content="Michal Drajna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">developedbymichal</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Michal Drajna</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Senior QA Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
            Playwright Enthusiast 🎭 Manual & Automation 🤖 Frontend & Backend | Web Apps & Mobile 📱 Playwright Online Course Creator 🎥
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://www.facebook.com/michaldrajna/">
              <AiFillFacebook />
            </a>
            <a href="https://www.linkedin.com/in/michaldrajna-qa/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/drajnamichal">
              <AiFillGithub />
            </a>
            <AiFillMail />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="emoji" src={memoji} layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
            I provide a comprehensive range of services tailored to meet the diverse needs of my clients. From ensuring seamless software performance to delivering top-notch user experiences, my expertise covers <span className="text-teal-500">automation testing</span>, allowing businesses to enhance efficiency and accuracy while reducing testing time. As a seasoned manual tester, I meticulously scrutinize applications to identify even the slightest flaws, guaranteeing the delivery of high-quality products. My commitment to overall quality assurance ensures that each aspect of the development process adheres to the highest standards. Furthermore, I offer specialized training as a <span className="text-teal-500">Playwright lecturer</span>, equipping individuals with the knowledge and skills to excel in <span className="text-teal-500">modern testing methodologies</span>. As an online teacher for testing, I am dedicated to empowering students worldwide by providing accessible and insightful learning experiences in the realm of software testing.
            I am an expert in all phases of the software testing life cycle, from the initial requirements testing to the final e2e testing.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
            With a passion for excellence and a wealth of industry knowledge, I am dedicated to helping businesses thrive through exceptional testing practices.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="mx-auto">
                <Image className="mx-auto" src={playwright} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Lecturer
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image className="mx-auto" src={pc} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                QA Engineer
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image className="mx-auto" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
          
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center">
            <a href="https://skillmea.sk/online-kurzy/test-automatizacia-playwright">
              <div className="basis-1/3 flex-1">
                <Image src={skillmea} className="rounded-lg object-cover" width={400} height={400} layout="responsive" />
              </div>
            </a>
            <a href="https://skillmea.sk/blog/playwright-vs-selenium-vs-cypress">
              <div className="basis-1/3 flex-1">
                <Image src={article} className="rounded-lg object-cover" width={400} height={400} layout="responsive" />
              </div>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}