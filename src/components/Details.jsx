import React from 'react'
import Button from './Button';
import Certificate from './Certificate';
import Internship from './Internship';
import Project from './Project';

import { IoCalendar } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import ThemeToggleButton from './ThemeToggleButton';
import { FaArrowCircleUp } from "react-icons/fa";

import { Ripple, initTWE, } from "tw-elements";
initTWE({ Ripple });

function toTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function Details() {
    return (
        <>
        <div className="p-0 overflow-scroll text-black rounded-lg border border-4 border-black dark:text-white dark:bg-gray-800 dark:border-white" id='top'>
            <ThemeToggleButton/>

            {/* <button className="border border-2 border-black px-2 py-1 m-2 rounded">Download Resume</button> */}
            <div className='flex justify-end m-3 gap-2'>
            <a className='' href='../assets/MASTHAN JAVID VALI SHAIK.pdf' download={true}>
            <button type="button"
                data-twe-ripple-init
                data-twe-ripple-color="black"
                className="inline-block rounded text-black border border-1 border-black dark:text-white dark:border-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-0 transition duration-150 ease-in-out hover:text-black hover:shadow-black focus:bg-white focus:text-black focus:shadow-black focus:outline-none focus:ring-0 active:bg-black active:text-black active:shadow-black motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    <span className='flex gap-1 justify-center items-center'><FaDownload/> Download Resume</span>
                    
                    </button>
            </a>
            </div>
            
            

            {/* profile summary section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Profile my-2 font-bold text-xl">Profile</h1>
                <p className='m-3'>A highly motivated and dedicated fresher with a strong educational background and practical experience in web development, Salesforce, and machine learning. Committed to leveraging academic achievements, technical skills, and enthusiasm to contribute effectively in a professional environment.Seeking an opportunity to apply and further develop skills in a dynamic work setting.</p>
            </div>
            {/* internships section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Experience my-2 font-bold text-xl ">Experience</h1>

                <Internship name={'Web Development with WordPress Internship'} duration={'Jan 2024 - Apr 2024'} organization={"SmartInternz"}
                    items={['Improved website functionality by 90% through plugin integration, database management, and theme customization.', 'Investigated website deployment and hosting, guaranteed up to 75% mitigation of security threats.']}
                />

                <Internship name={'Front-end Web Development Internship'} duration={'May 2023 - Aug 2023'} organization={'SmartInternz'}
                    items={['Executed 85% of design concepts, Attained 90% cross-browser compatibility and responsive design.', 'Coordinated effectively with a development team of 4 members.', 'Employed professional skills such as HTML (86%), CSS (10%), and JavaScript (4%).']}
                />

                <Internship name={'Salesforce Developer Internship'} duration={'Aug 2022 - Oct 2022'} organization={'SmartInternz'}
                    items={['Enhanced knowledge by 65% through engagement with the Salesforce community.', 'Accomplished 7 modules and 2 super-badge modules, acquiring practical skills in Apex programming, Relationship & Process Automation, and Lightning components.']}
                />

            </div>

            {/* Education section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Education my-2 font-bold text-xl">Education</h1>
                <div className="internship_2 p-3 my-1">
                    <span className='flex items-center justify-between'>
                        <h1 className='font-semibold text-lg'>Bachelor of Technology (B.Tech)</h1>
                        <span className='flex justify-center items-center gap-3'>
                            <IoCalendar /><h4 className='font-bold text-md'>2020 - 2024</h4>
                        </span>
                    </span>
                    <h1 className=''> Computer Science and Engineering</h1>
                    <span className='flex items-center justify-between'>
                        <h6 className='text-sm'>KALLAM HARANADHAREDDY INSTITUTE OF TECHNOLOGY</h6>
                        <span className='flex justify-center items-center gap-3'>
                            <h4 className=' text-sm'>7.74 CGPA</h4>
                        </span>
                    </span>
                </div>
            </div>

            {/* Skills section */}
            <div className="m-3 p-3 rounded ">
                <h1 className="Skills my-2 font-bold text-xl ">Skills</h1>
                <div className="p-3 my-1">
                    <Button skill={'c programming'} />
                    <Button skill={'python programming'} />
                    <Button skill={'Html'} />
                    <Button skill={'css'} />
                    <Button skill={'javascript'} />
                    <Button skill={'bootstrap'} />
                    <Button skill={'tailwind-CSS'} />
                    <Button skill={'ECMAScript 6+'} />
                    <Button skill={'wordpress'} />
                    <Button skill={'react js'} />
                    <Button skill={'mongodb'} />
                    <Button skill={'mysql'} />
                    <Button skill={'git'} />
                    <Button skill={'github'} />
                    <Button skill={'salesforce development'} />
                    <Button skill={'machine learning'} />
                    <Button skill={'Microsoft Word'} />
                    <Button skill={'Microsoft Excel'} />
                    <Button skill={'Microsoft PowerPoint'} />
                </div>

            </div>

            {/* Certification section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Certifications my-2 font-bold text-xl">Certifications</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1'>

                <Certificate name={'DBMS Tutorial Module'} duration={'Jun 2024'} organization={'Scaler'} skills={'Python'} url={'https://moonshot.scaler.com/s/sl/agzLEAZdJg?_gl=1*12cmuc4*_gcl_au*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*FPAU*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*_ga*MTQ4MDQ3NDYyMS4xNzE0MzY2NDU2*_ga_53S71ZZG1X*MTcxOTQ2ODc4NS44Ny4xLjE3MTk0Njg4MTQuMC4wLjIwMjEzNjU3NDU.'} />

                <Certificate name={'Python Course for Beginners: Mastering the Essentials '} duration={'Jun 2024'} organization={'Scaler'} skills={'Python'} url={'https://moonshot.scaler.com/s/sl/dCqrwpXYnH?_gl=1*1s6gkd4*_gcl_au*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*FPAU*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*_ga*MTQ4MDQ3NDYyMS4xNzE0MzY2NDU2*_ga_53S71ZZG1X*MTcxOTQ2ODc4NS44Ny4xLjE3MTk0Njg5ODIuMC4wLjIwMjEzNjU3NDU.'} />

                <Certificate name={'C Tutorial'} duration={'May 2024'} organization={'Scaler'} skills={'Python'} url={'https://moonshot.scaler.com/s/sl/kImO5BgPLr?_gl=1*pfbigp*_gcl_au*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*FPAU*NDY5MDgyMDU1LjE3MTQzNjY0NTY.*_ga*MTQ4MDQ3NDYyMS4xNzE0MzY2NDU2*_ga_53S71ZZG1X*MTcxOTQ2ODc4NS44Ny4xLjE3MTk0Njg5ODIuMC4wLjIwMjEzNjU3NDU.'} />

                <Certificate name={'Web Development With WordPress'} duration={'Apr 2024'} organization={'SmartInternz'} skills={'Web Development, WordPress'} url={'https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/details/certifications/1716268524350/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD1QPKkB1wLOp9qRGyNuNrkPCh-ekN97U3A'} />

                <Certificate name={'React.js Essential Training'} duration={'Sep 2023'} organization={'LinkedIn'} skills={'ReactJS'} url={'https://www.linkedin.com/learning/certificates/a61c9c7d63c632dda9ddc64441dc1f86f6dcbb7145fbaf05f187cee234ea39c6'} />

                <Certificate name={'Learning ECMAScript 6+ (ES6+)'} duration={'Sep 2023'} organization={'LinkedIn'} skills={'ECMAScript 6+'} url={'https://www.linkedin.com/learning/certificates/c3fc20503dbc913cbc3ee801dd3f7912bc53881a59def3a5b51ffe23071b2684'} />

                <Certificate name={'SmartInternz Long Term Virtual Internship on Front-End Development'} duration={'Sep 2023'} organization={'SmartInternz'} skills={'Front-End Webdevelopment (includs HTML, CSS, JavaScript and Boostrap)'} url={'https://apsche.smartinternz.com/certificate/student/03fcd68e5673f08be96d2b6bb5be8261'} />

                <Certificate name={'HTML Essential Training'} duration={'Sep 2023'} organization={'LinkedIn'} skills={'HTML'} url={'https://www.linkedin.com/learning/certificates/9b18388cc7162b67975c768ad878e10b10374f2b480ed40aa7823ed242468dc9'} />

                <Certificate name={'JavaScript Essential Training'} duration={'Aug 2023'} organization={'LinkedIn'} skills={'JavaScript'} url={'https://www.linkedin.com/learning/certificates/c0ba01404e2a974edaf99b82c33c35f423936f771bdbecd6a35aea492fffb843'} />

                <Certificate name={'Salesforce Developer Virtual Internship'} duration={'Sep 2022'} organization={'SmartInternz'} skills={'Salesforce Developement'} url={'https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846'} />

                <Certificate name={'MongoDB Certificate'} duration={'Aug 2022'} organization={'CodeTantra'} skills={'MongoDB'} url={'CT0892212KHITCSEMDB'} />
                </div>
            </div>

            {/* Projects section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Projects my-2 font-bold text-xl ">Projects</h1>

                <Project name={'Bone Tumor Identification Using X-Ray Images with Machine Learning'} duration={'Jan 2024 - Apr 2024'} items={['Researched and analyzed advancements in bone tumor identification via X-ray imaging techniques, including AI algorithms and 3D imaging technologies; findings directly contributed to improving diagnostic accuracy by 20%.','Developed and deployed a Convolution Neural Network (CNN) model in a bone tumor detection project, trained algorithm using diverse bone images to achieve 90%+ accuracy in tumor prediction.','Engineered a comprehensive medical imaging system incorporating a fusion of traditional image processing techniques and cutting-edge deep learning algorithms; achieved a 40% increase in bone tumor detection accuracy and reduced false positives by 25%.']} skills={' Machine Learning, Python and Image Processing'} url={'https://github.com/javid4962/Bone_Tumor_Prediction'} />

                <Project name={'Online Learning Platform'} duration={'Oct 2023 - Dec 2023'} items={['Created and deployed an Online Learning Platform which consists of features like User Login, New User Registration, Course selection, Cart Courses and their prices.','Engaged advanced Technologies to achieve more than 85% of cross-browser compatibility and Responsiveness.','Added some new features like AI course suggestion bot to make user Interaction.']} skills={'React.js & Tailwind CSS'} url={'https://github.com/javid4962/LEARNFLOW-Online-Learning-Platform'} />

               

            </div>
        </div>
            <div  className='flex justify-end items-end p-1 text-4xl rounded-full cursor-pointer dark:bg-white dark:text-black dark:border-white fixed bottom-0 right-0 z-10 bg-black text-white dark:bg-white dark:text-black'>
            <button onClick={toTop}><FaArrowCircleUp/></button>
            </div>
        </>
    )
}

export default Details