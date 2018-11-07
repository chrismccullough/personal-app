const workData = [
    {
        Company: 'Microsoft (via HCL America)',
        Website: 'http://www.microsoft.com',
        Location: 'Redmond, WA',
        Notables: [
            {
                Title: "RDX Demo Hub",
                Description: "Maintained and updated the demo hub for the retail demo experience. The RDX is an interactive application that runs on a device while on a retail store shelf to illustrate the capabilities of Windows and the device."
            },
            {
                Title: "Digital Fact Tag",
                Description: "I architected and developed the digital fact tag from scratch.  The DFT is displayed adjacent to the demo hub and provides pricing and specifications for a particular device."
            },
            {
                Title: "Device Comparison Page",
                Description: "I architected and developed the comparison page from scratch.  It is reached via the digital fact tag and compares the current device to similar devices relative to price and specifications."
            }
        ],
        Roles: [
            {
                Title: 'Technical Architect Frontend',
                StartDate: 'April 2018',
                EndDate: 'October 2018',
                Responsibilities: [
                    { Responsibility: 'Architectural design' },
                    { Responsibility: 'Feature prototyping' },
                    { Responsibility: 'Front End Development' },
                    { Responsibility: 'Code review support' }
                ]
            }
        ]
    },

    {
        Company: 'Nordstrom',
        Website: 'http://www.nordstrom.com',
        Location: 'Seattle, WA',
        Notables: [
            {
                Title: "Nordstrom.com ADA Compliance Updates and Best Practices",
                Description: "Working with a third-party consulting firm, elements of ADA non-compliance were identified throughout the nordstrom.com website that would adversely affect the shopping and purchasing experience for some of our users. I defined mitigation steps and created Jira stories into the backlogs of teams throughout the Nordstrom engineering organization and collaborated with each of them to get the work prioritized on their backlogs and implemented on the site. During the course of this extended project, I also worked worked with the engineering teams to integrate ADA consideration into their engineering and quality assurance lifecycles (unit testing, code reviews, test automation), etc.."
            },
            {
                Title: "Nordstrom Interviewing and Hiring Process Updates",
                Description: "I collaborated with the Nordstrom recruiting and HR teams to redefine our technical interview and hiring processes. Working with a small number of handpicked engineers, we defined the required competencies and skills required,   updated an existing online technical checklist that streamlined the quality and efficiency of our phone screen process. I designed a series of code challenges that could be completed by a prospective applicant using CodePen. The applicant was provided was a set of written requirements and had to design and code a fully functioning elevator panel using HTML, JavaScript and CSS as if they were standing inside the elevator car. The applicants had to provide buttons that could access at least four floors, display buttons that would indicate what floor had been selected, provide a display panel that indicates the current floor and updates as the car moves between floors, and indicates the up/down direction of the elevator car. Based on the recommendations from the phone screen and an initial review of the code challenge, we could decide to conduct an in-person interview with the candidate. During the in-person interview the interviewers could use several pre-defined questions to hone in on the candidates development philosophies, mindset and acumen. Using this process, we made the interview process and ultimate hiring decision significantly more efficient and accurate. This increased engineers' ability to contribute to the interview process with less disruption to their other responsibilities and elevated the quality of engineers that were brought on the Nordstrom engineering team."
            },
            {
                Title: "Nordstrom.com Product Page Migration",
                Description: "Architected and implemented a newer more robust technology platform for the Nordstrom product page. Leading a team of 15+ front-end and back-end engineers, the data structures, APIs, application and front-end tiers were implemented in less than four months. Customer traffic was migrated to the new platform incrementally over the course of two weeks while demand and conversion rates were analyzed. Once the migration was complete the product page was delivering an additional $270,000 in demand per day."
            },
            {
                Title: "Nordstrom Fashion Week Landing Page",
                Description: "I took over the design and development of this project after the project had fallen behind schedule and the previous engineer had left the company. With little time before the beginning of Fashion Week, I designed a JSON data structure consumed by a module-based landing page that was hosted on WordPress. Working with another engineer, we developed an JavaScript-based authoring tool that allowed Nordstrom copy curators to quickly update the content on the Nordstrom Fashion Week."
            }
        ],
        Roles: [
            {
                Title: 'Sr. Software Engineer',
                StartDate: 'April 2016',
                EndDate: 'January 2018',
                Responsibilities: [
                    { Responsibility: 'Architectural design' },
                    { Responsibility: 'Feature prototyping' },
                    { Responsibility: 'Technical interviewing' },
                    { Responsibility: 'Production on-call and deployment support' },
                    { Responsibility: 'Code review support' }
                ]
            },

            {
                Title: 'Web Development Manager',
                StartDate: 'September 2014',
                EndDate: 'April 2016',
                Responsibilities: [
                    { Responsibility: 'Hiring/HR support' },
                    { Responsibility: 'Mentorship' },
                    { Responsibility: 'Performance reviews' },
                    { Responsibility: 'Resource allocation' },
                    { Responsibility: 'Project definition / scoping / estimation' }
                ]
            },

            {
                Title: 'Principle Web Developer',
                StartDate: 'June 2013',
                EndDate: 'September 2014',
                Responsibilities: [
                    { Responsibility: 'Mentorship' },
                    { Responsibility: 'Feature prototyping / estimation' },
                    { Responsibility: 'Define code standards / review process' },
                    { Responsibility: 'Define technical interview process' },
                    { Responsibility: 'Production on-call and deployment support' },
                    { Responsibility: 'Code review support' }
                ]
            },

            {
                Title: 'Sr. Web Developer',
                StartDate: 'February 2013',
                EndDate: 'June 2013',
                Responsibilities: [
                    { Responsibility: 'Managed project resource allocations' },
                    { Responsibility: 'Feature and project scoping/estimation' },
                    { Responsibility: 'Production on-call and deployment support' },
                    { Responsibility: 'Code review support' }
                ]
            },
        ]
    },

    {
        Company: 'Livemocha',
        Website: 'http://www.livemocha.com',
        Location: 'Seattle, WA',
        Notables: [
            {
                Title: "Full Site Migration",
                Description: "I collaborated with a team of engineers to redesign the livemocha.com website using SproutCore while supporting the existing PHP site."
            }
        ],
        Roles: [
            {
                Title: 'Lead Web Developer',
                StartDate: 'May 2011',
                EndDate: 'November 2012',
                Responsibilities: [
                    { Responsibility: 'Worked with program management, UI design and engineering teams to estimate, implement and deploy features and bug fixes' },
                    { Responsibility: 'Production on-call and deployment support' },
                    { Responsibility: 'Worked as part of the engineering team to develop a redesigned version of the site from the ground up using SproutCore' },
                    { Responsibility: 'Code review support' }
                ]
            }
        ]
    },

    {
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Notables: [
            {
                Title: "Infospace Broadband Media Center",
                Description: "I architected and implemented a broadband media center application and worked with another engineer to design the data endpoints that it would consume. The video streaming application aggregated content from multiple sources and would utilize multiple video player instances to stream content allowing one instance to play content while another instance was simultaneously buffering the next piece of content and would then swap roles, providing a seamless streaming experience that was compatible with Windows Media Player and RealNetworks RealPlayer."
            },
            {
                Title: "Infospace Private Label Site Platform Migration",
                Description: "I scoped and led the migration of 500+ private label sites (cobrands) from a proprietary platform to new software and platform technologies based on ASP.net and MVC. I directly managed teams in Bellevue, London and India to plan and execute the migration of Infospace's partner sites with no breakage in backward compatibility."
            },
            {
                Title: "Performance Improvements to the Infospace Portal",
                Description: "In order to satisfy the requests of an important portal customer, the load time of the Infospace user-personalized portal needed to be significantly improved. Leveraging current technology enhancements in HTML, JavaScript, CSS and browsers, I re-wrote the portals, underlying content module framework and content APIs to improve performance and functionality without breaking backward-compatibility to existing consumers. I refactored code to be cleaner, more modular and reusable. I removed nested table structures and separated the concerns of functionality and layout using HTML, JavaScript and CSS. I utilized existing tools and developed some of my own, using C#, to automate browser testing and to analyze browser load times and server response times. I designed and built online dashboards that could be used by the engineering and business teams to monitor the health and performance of the applications and physical hardware."
            },
        ],
        Roles: [
            {
                Title: 'Development Manager',
                StartDate: 'August 2008',
                EndDate: 'October 2009',
                Responsibilities: [
                    { Responsibility: 'Mentorship' },
                    { Responsibility: 'Performance reviews' },
                    { Responsibility: 'Resource allocations' },
                    { Responsibility: 'Conducted team Meetings and facilitated the individual growth of direct reports' }
                ]
            },

            {
                Title: 'Staff Software Engineer',
                StartDate: 'January 2007',
                EndDate: 'August 2008',
                Responsibilities: [
                    { Responsibility: 'Managed engineering resources in Bellevue, the UK and India to complete a major platform migration involving multiple applications and several hundred private-labeled sites' },
                    { Responsibility: 'Maintained and developed multiple high availability web applications using C# and ASP.net' },
                    { Responsibility: 'Production on-call and deployment support' },
                    { Responsibility: 'Code review support' }
                ]
            },

            {
                Title: 'Web Development Manager',
                StartDate: 'April 2006',
                EndDate: 'January 2007',
                Responsibilities: [
                    { Responsibility: "Conducted performance reviews for direct reports" },
                    { Responsibility: "Oversaw the development and growth of the web development staff through cross-training, paired programming and group code reviews" },
                    { Responsibility: "Assumed the role of directly managing the engineering of Infospace's flagship search sites: Dogpile, Metacrawler, Webcrawler and Infospace.com" },
                    { Responsibility: "Worked with product and program management to establish product roadmaps and project schedules" }
                ]
            },

            {
                Title: 'Senior Web Developer',
                StartDate: 'June 2004',
                EndDate: 'April 2006',
                Responsibilities: [
                    { Responsibility: "Architected and implemented a new site architecture that significantly reduced defects and increased productivity" },
                    { Responsibility: "Led engineering groups through the design and implementation of web-based portals for Verizon, AOL, CableVision, RCN, NBC Olympics" },
                    { Responsibility: "Worked directly with Verizon to maximize the performance of their portal by reducing load times from 7-9 seconds to 2-4 seconds without impacting the user interface" }
                ]
            },

            {
                Title: 'Lead Web Developer',
                StartDate: 'January 2004',
                EndDate: 'June 2004',
                Responsibilities: [
                    { Responsibility: "Led groups of developers through site and content projects, provided scope and scheduling estimates and feedback on site and product specifications" },
                    { Responsibility: "Developed an on-demand gaming portal (PlaySite) using ASP and the integration of content feeds" },
                    { Responsibility: "Worked collaboratively with internal product teams and external marketing consultants to redesign the infospace.com flagship site" },
                    { Responsibility: "Produced customer branded browser toolbars for partner sites such as FoxNews and ABCNews" },
                    { Responsibility: "Designed and implemented a Flash-based application that displays recently queried search terms" },
                    { Responsibility: "Managed and maintained a Java/Linux hosted search configuration for Infospace and partner sites" },
                    { Responsibility: "Assisted with the migration of multiple web-based applications and 500+ websites to a new server platform" }
                ]
            },

            {
                Title: 'Web Developer',
                StartDate: 'April 2001',
                EndDate: 'December 2003',
                Responsibilities: [
                    { Responsibility: "Developed and published private-label branded sites which consumed a series of web-based applications, utilizing HTML, CSS, XML and JavaScript for such customers as Verizon, NBC, Nortel, Network Solutions and more" },
                    { Responsibility: "Leveraged Windows Media and RealMedia technologies to develop interactive broadband media experiences featuring live data and streaming media content for deployment to set-top devices such as WebTV, MSTV, and AOLTV" },
                    { Responsibility: "Worked with product and program management to develop a personalized broadband PC portal that aggregated multimedia content feeds" },
                    { Responsibility: "Managed the development efforts to reinvigorate the Dogpile.com search site" }
                ]
            }
        ]
    }

];

module.exports = workData;
