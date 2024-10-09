import ikeaCloneImg from './images/3-projects/screenshot-ikea-clone.png';
import personalWebsiteImg from './images/3-projects/screenshot-personal-website.png';
import fypImg from './images/3-projects/screenshot-fyp.jpg';
import elec3300Img from './images/3-projects/sEMG-based-gesture-recognition.png';

import projectManagement from './images/4-skills/projectManagement.png'
import firmware from './images/4-skills/cpu.png'
import solutionDesign from './images/4-skills/innovation.png'
import systemDeveloper from './images/4-skills/systemDeveloper.png'
import awsLogo from './images/4-skills/certLogo/amazon_web_services_logo.jpeg'
import awsSaaC03CertPdf from './documents/aws-saa-c03-cert.pdf';

import bestbuyLogo from './images/5-experience/best_buy_canada_logo.jpg';
import pclLogo from './images/5-experience/pcl_logo.jpg';
import clLogo from './images/5-experience/cl_logo.jpeg';
import hkElectricLogo from './images/5-experience/hk_electric_logo.jpeg';

export const CoverContent = {
    'Title': 'Software Engineer',
    // 'LittleBio': 'Previously worked in a FinTech Innovation Team in a Financial Institution, my expertise is to adhere to the Software Development Life Cycle to build secure, scalable and efficient applications.'
    // 'LittleBio': "I'm a tech enthusiast and software engineer with a knack for building secure, scalable applications. From coding to problem-solving, I love diving into the dynamic world of software development, bringing ideas to life!"
    'LittleBio': "I develop end-to-end software solutions, handling frontend, backend, database, and deployment within the software development life cycle."
  };

export const AboutMeContent = {
    Title: 'Software Engineer',
    Workplace: 'Canada',
    Bio: <p>I specialize in implementing the <mark class='black bold'>Software Development Life Cycle</mark> for secure, scalable applications, handling <mark class='black bold'>frontend, backend, database and deployment</mark>. With experience in working in a financial institution, I prioritize industry standards, delivering top-notch solutions using cutting-edge tools.<br/><br/><mark class='black bold'>Coding isn't just a job; it's my passion. Teaching a computer to think like humans thrills me.</mark> I'm committed to staying updated with advancements, crafting high-quality, evolving code.</p>,
    AboutMeObject: {
        Birthday: <div class="col-8">31 Dec 1997</div>,
        Age: <div class="col-8">26 Years Old</div>,
        Phone: <a href="tel:+1-437-660-0469" class="col-8">+1 (437) 660-0469</a>,
        Email: <a href="mailto:kinyechong@outlook.com" class="col-8">kinyechong@outlook.com</a>
    }
}

export const ProjectsContent = [
    {
        title: 'IKEA Clone',
        special: 'Full-Stack, Responsive, CI/CD',
        url: 'http://ckyjacky.ca:5001',
        toWebsiteBtnText: 'Go to live site',
        skillInvolved: {
            framework: 'ReactJS, Bootstrap, Spring Boot, MySQL, Jenkins',
            language: 'JavaScript, Java, SQL'
        },
        image: ikeaCloneImg,
        description: 'My IKEA clone project demonstrates my full-stack development skills by seamlessly integrating frontend aesthetics with backend functionality.',
    },
    {
        title: 'Portfolio Website',
        special: 'Scroll Animation, Responsive, CI/CD',
        url: 'This site',
        toWebsiteBtnText: 'Go to live site',
        skillInvolved: {
            framework: 'ReactJS, GSAP, Bootstrap, Jenkins',
            language: 'JavaScript, HTML and CSS'
        },
        image: personalWebsiteImg,
        description: 'This website serves to provide a concise overview of my skills, achievements, and work experience.',
    },
    {
        title: 'sEMG Based Gesture Recognition',
        special: 'Final Year Project Grade: A+, Deep Learning, GUI',
        url: 'https://youtu.be/BvVN7xhin_0',
        toWebsiteBtnText: 'Go to demo video',
        skillInvolved: {
            'Deep Learning': 'PyTorch LSTM, PyQT5',
            'GUI': 'PyQT5, to feed the sEMG signal collected by the microcontroller to the deep learning model and control the virtual character in Unity',
            language: 'Python'
        },
        image: fypImg,
        description: 'In this project, our objective is to craft a prototype of a singular instrumental device with dual functionality: recording sEMG signals for data collection and neural network training, as well as interfacing seamlessly with computers on an individual basis. Our aim is to achieve this within an economically feasible package while upholding performance standards akin to existing solutions. By project completion, we envision translating sEMG input signal patterns into the movement of a virtual character. Ultimately, our goal is to democratize access to motion capture devices and prosthetic implants, thus reducing barriers to entry in these domains.',
    },
    {
        title: 'Auto-following Car',
        special: 'PCB Design + Firmware Design',
        url: 'https://youtu.be/iAUTrvcoG1g',
        toWebsiteBtnText: 'Go to demo site',
        skillInvolved: {
            hardware: 'STM32F103VET6 microcontroller, ultrasonic sensor, motor, infrared transmitter and receiver',
            language: 'C'
        },
        image: elec3300Img,
        description: 'The project involves two key aspects: enabling the cart to autonomously follow us using ultrasonic sensors and implementing obstacle detection and avoidance mechanisms. Ultrasonic sensors placed strategically ensure the cart maintains a constant distance from us, while infrared sensors detect obstacles, prompting the cart to maneuver accordingly. Additionally, a bottom-mounted ultrasonic sensor detects potential emergencies, triggering alerts if necessary. Challenges include motor force limitations and managing interference among multiple sensors.'
    }
]

export const CertificateContent = {
    'AWS Certified Solutions Architect - Associate': {
        logo: awsLogo,
        issuedBy: 'Amazon Web Services (AWS)',
        validity: 'Issued Oct 2024 · Expires Oct 2027',
        link: 'https://www.credly.com/badges/c659357d-e228-4839-a8ed-2939f1f813aa/linked_in_profile',
        document: awsSaaC03CertPdf
    }
}

export const technicalSkillsContent = {
    'AWS Cloud Computing': {
        logo: null,
        content: {
            'Infrastructure Management': null,
            'Identiity & Access Management': null,
            'Serverless Computing': null,
            'Networking & Security': null,
            'Resilient & Scalable Architecture Design': null
        }
    },
    'Full-Stack Development': {
        logo: null,
        content: {
            'React.JS': null,
            'Bootstrap': null,
            'Spring Boot': null,
            'Django': null,
            'NodeJS': null,
            'MySQL': null,
            'PostgreSQL': null
        }
    },
    'CI/CD & DevOps': {
        logo: null,
        content: {
            'Git': null,
            'JIRA': null,
            'Jenkins': null,
            'Docker': null,
            'Linux OS': null
        }
    },
    'Programming': {
        logo: null,
        content: {
            'Python': null,
            'JavaScript': null,
            'HTML & CSS': null,
            'Java': null,
            'SQL': null,
            'Shell Scripting': null,
        }
    }
}

export const SkillsContent = {
    'Developer': {
        logo: systemDeveloper,
        achievements: [
            'Designed and developed a Python PyQt 5 GUI-based Hardware Diagnostic UI to facilitate efficient collaboration among PCB Design Engineer, Firmware Design Engineer, and Test Engineer in optical transceiver manufacturing',
            'Maintained Django Backend Server to handle thousands of messages from 40 WhatsApp Numbers on a daily basis'
        ]
    },
    'Software Project Management': {
        logo: projectManagement,
        achievements: [
            'Defined project scope, objectives, and approach for a blockchain project in close collaboration with business users and vendors',
            'Led cloud migration for WhatsApp Business API, conducting security risk assessments and managing contract follow-up with compliance teams and suppliers',
            'Introduced OCR technology to enhance the customer journey, following a successful tender evaluation process'
        ]
    },
    'Embedded System Design': {
        logo: firmware,
        achievements: [
            'Developed embedded firmware, and bootloaders for high-speed optical transceivers (400 Gbps/800 Gbps) using C/C++',
            'Designed and maintained a Python PyQt 5 GUI-based proprietary Firmware Upload Software'
        ]
    },
    'System Analysis & Solution Design': {
        logo: solutionDesign,
        achievements: [
            'Communicated with vendors, developed a Proof of Concept program, and presented to the business users and finance team how Hyperledger Fabric Blockchain can be used to streamline the Loan Application Process while maintaining the beauty of the existing workflow'
        ]
    }
}

export const ExperienceContent = {
    'Best Buy Canada': {
        logo: bestbuyLogo,
        'CompanyDetail': 'Retail | Toronto, Canada | 53K employees',
        location: 'Toronto, Canada',
        totalDuration: 'Sep 2023 - Present',
        positions: [
            {
                title: 'Computing Solutions Advisor',
                jobType: 'Part-Time',
                duration: 'Sep 2023 - Present',
                durationCount: '6 mos',
                description: [
                    // <li>Offered <mark class='gold'>personalized guidance</mark>, explaining features, specifications, and benefits to customers, empowering them to maximize the potential of their computing devices</li>,
                    // <li>Demonstrated in-depth product knowledge for effective <mark class='gold'>upselling and cross-selling</mark> of computing devices and accessories</li>,
                    <li>Offering personalized guidance, upselling and cross-selling computing devices, accessories and Best Buy services</li>
            ]
            }
        ]
    },
    'PrimeCredit Limited': {
        logo: pclLogo,
        'CompanyDetail': 'Financial Services | Hong Kong | 501-1K employees',
        location: 'Hong Kong',
        totalDuration: 'Jun 2022 - Apr 2023',
        positions: [
            {
                title: 'Software Engineer – FinTech Innovation',
                jobType: 'Full-Time',
                duration: 'Jun 2022 - Apr 2023',
                durationCount: '11 mos',
                description: [
                    // <li>Developed and presented a <mark class='gold'>Proof-of-Concept program</mark> to demonstrate the <mark class='gold'>blockchain</mark>'s potential in optimizing the Loan Application Process across 3 famous financial institution</li>,
                    // <li>Managed the <mark class='gold'>WhatsApp Business API (WABA)</mark> and its <mark class='gold'>Django-based Backend Server</mark>, ensuring its consistent and optimal performance by adding user-requested functions, diagnosing cross-server technical issues, and resolving bugs from WABA version incompatibility and Meta errors</li>,
                    // <li>Led <mark class='gold'>On-Premises to Cloud API migration</mark> for <mark class='gold'>WhatsApp Business API</mark> and its <mark class='gold'>backend server</mark>, guiding vendors and users in project scope, requirements, contracts, and risk assessments for compliance</li>,
                    // <li>Enhanced functionalities within a <mark class='gold'>Java-based Customer Data Platform</mark> using <mark class='gold'>Spring Boot</mark>, contributing to system refinement</li>]
                    <li>Designed, developed and launched a <mark class='gold'>Hyperledger Fabric blockchain solution</mark>, achieving a remarkable reduction in <mark class='gold'>loan application processing time from 1 week to just 15 minutes</mark> across 3 leading financial institutions in Hong Kong</li>,
                    <li>Managed the development, deployment and maintenance of <mark class='gold'>40 WhatsApp Business APIs</mark> and <mark class='gold'>Django-based Backend Server, handling 120k monthly messages with 48% year-over-year growth</mark>, ensuring smooth operation of Document Upload Tool for loan applications</li>,
                    <li>Led <mark class='gold'>end-to-end cloud migration for WhatsApp Document Upload Tool from On-Premises WhatsApp Business API to Cloud-API & Django Server to AWS Lambda</mark>, improving stability, reducing maintenance and upgrade complexity, and paving the way for seamless scalability and integration with 2 new systems</li>,
                    <li>Implemented <mark class='gold'>Strapi, a headless Content Management System (CMS)</mark> for the Spring Boot Customer Data Platform to <mark class='gold'>reduce content management operations from 50 to 30 for over 200+ pieces of content</mark>, enabling streamlined content management and distribution for programmatic advertising and digital marketing across platforms</li>
            ]
            }
        ]
    },
    'Cloud Light Technology Limited': {
        logo: clLogo,
        'CompanyDetail': 'Appliances, Electrical, and Electronics Manufacturing | Hong Kong | 530 employees',
        location: 'Hong Kong',
        duration: 'June 2020 - June 2022',
        durationCount: '2 yrs 1 mo',
        positions: [
            {
                title: 'Firmware Design Engineer',
                jobType: 'Full-Time',
                duration: 'Jul 2021 - June 2022',
                durationCount: '11 mos',
                description: [
                    // <li>Designed, developed and tested <mark class='gold'>C/C++ software, embedded firmware and bootloaders</mark> for cutting-edge <mark class='gold'>400G & 800G optical transceivers</mark></li>,
                    // <li style={{paddingLeft: '10%'}}>PMIC, design and develop drivers for I2C, SRAM, SDRAM, ADCs, Flash, GPIOs, ISR and peripheral ICs like TIA, CDRs</li>,
                    // <li>Developed and upheld the proprietary <mark class='gold'>Firmware Upload Software - PyQt5 GUI</mark></li>,
                    // <li>Collaborated with cross-functional teams, including testing, hardware, and chip vendors, to validate hardware and support technical leads in architecture discussions and design tradeoffs</li>]
                    <li>Designed and developed <mark class='gold'>firmware and bootloaders in C</mark> for the manufacturing of 400G & 800G optical transceivers. This includes integration with PMIC, design and develop drivers for I2C, SRAM, SDRAM, ADCs, Flash, GPIOs, ISR and peripheral ICs like TIA, CDRs</li>,
                    <li>Developed and maintained the proprietary <mark class='gold'>Firmware Upload Software PyQt5 GUI</mark> ensuring the smooth firmware upgrade between the bootloader and switch/ computer <mark class='gold'>for 30+ test engineers and production workers, and 10+ clients</mark></li>,
                    <li>Collaborated with cross-functional teams, including 20+ test engineers, 8 PCB design engineers, and 2 chip vendors, to validate hardware and support technical leads in architecture discussions and design tradeoffs</li>,
                ]
            },
            {
                title: 'Optical Product Engineer',
                jobType: 'Full-Time',
                duration: 'June 2020 - Jul 2021',
                durationCount: '1 yr 3 mos',
                description: [
                    // <li>Developed a Python based <mark class='gold'>Hardware Diagnostic GUI (PyQt5)</mark> and testing software for automated firmware verification, products evaluation and demo</li>,
                    // <li style={{paddingLeft: '10%'}}><mark class='gold'>GUI (mainly PyQt5 and Tkinter)</mark> for different types of projects and automation programmes for firmware verification</li>,
                    // <li>Conducted diverse <mark class='gold'>PCB Flying Probe tests</mark> and failure and data analysis for design and yield improvement</li>,
                    // <li>Collaborated with PCB and Firmware Design Engineers to optimize designs for production and ensure compatibility with chips & components</li>]
                    <li>Developed a <mark class='gold'>Python-based Hardware Diagnostic GUI (PyQt5) and testing software</mark>, empowering <mark class='gold'>30+ test engineers and production workers</mark> to conduct comprehensive firmware verification and product evaluation</li>,
                    <li>Conducted diverse <mark class='gold'>PCB Flying Probe tests</mark> and failure and data analysis for design and yield improvement of 400G & 800G optical transceivers, improving the Bit Error Rate from ^-6 to ^-12, error-free, for PAM-4 and NRZ signal</li>,
                    <li>Collaborated with PCB and Firmware Design Engineers to optimize designs for production and ensure compatibility with chips & components</li>,
                ]
            }
        ]
    },
    'The Hongkong Electric Co., Ltd.': {
        logo: hkElectricLogo,
        'CompanyDetail': 'Utilities | Hong Kong | 1K-5K employees',
        location: 'Hong Kong',
        totalDuration: 'Jul 2019 - Aug 2019',
        positions: [
            {
                title: 'Vacation Trainee (Projects Division)',
                jobType: 'Summer Intern',
                duration: 'Jul 2019 - Aug 2019',
                durationCount: '2 mos',
                description: [
                    <li>Participated in studying the concepts behind some design schematics and operation theories</li>,
                    <li>Control System, Generation Plant Power Supply Distribution, Transmission Substations Design and Network etc</li>,
                    <li>Studied and verified the cybersecurity measures done on the newly built HKE Lamma Unit 10 - NERC-CIP Standard Comparison</li>
                ]
            }
        ]
    }
}