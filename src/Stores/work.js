const workData = [
    {
        id: 1,
        Company: 'Nordstrom',
        Website: 'http://www.nordstrom.com',
        Location: 'Seattle, WA',
        Title: 'Sr. Software Engineer',
        StartDate: 'April 2016',
        EndDate: 'January 2018',
        Responsibilities: [
            { id: 1, Responsibility: 'Architectural design' },
            { id: 2, Responsibility: 'Feature prototyping' },
            { id: 3, Responsibility: 'Technical interviewing' },
            { id: 4, Responsibility: 'Production on-call and deployment support' },
            { id: 5, Responsibility: 'Code review support' }
        ]
    },

    {
        id: 2,
        Company: 'Nordstrom',
        Website: 'http://www.nordstrom.com',
        Location: 'Seattle, WA',
        Title: 'Web Development Manager',
        StartDate: 'September 2014',
        EndDate: 'April 2016',
        Responsibilities: [
            { id: 1, Responsibility: 'Hiring/HR support' },
            { id: 2, Responsibility: 'Mentorship' },
            { id: 3, Responsibility: 'Performance reviews' },
            { id: 4, Responsibility: 'Resource allocation' },
            { id: 5, Responsibility: 'Project definition / scoping / estimation' }
        ]
    },

    {
        id: 3,
        Company: 'Nordstrom',
        Website: 'http://www.nordstrom.com',
        Location: 'Seattle, WA',
        Title: 'Principle Web Developer',
        StartDate: 'June 2013',
        EndDate: 'September 2014',
        Responsibilities: [
            { id: 1, Responsibility: 'Mentorship' },
            { id: 2, Responsibility: 'Feature prototyping / estimation' },
            { id: 3, Responsibility: 'Define code standards / review process' },
            { id: 4, Responsibility: 'Define technical interview process' },
            { id: 5, Responsibility: 'Production on-call and deployment support' },
            { id: 6, Responsibility: 'Code review support' }
        ]
    },

    {
        id: 4,
        Company: 'Nordstrom',
        Website: 'http://www.nordstrom.com',
        Location: 'Seattle, WA',
        Title: 'Sr. Web Developer',
        StartDate: 'February 2013',
        EndDate: 'June 2013',
        Responsibilities: [
            { id: 1, Responsibility: 'Managed project resource allocations' },
            { id: 2, Responsibility: 'Feature and project scoping/estimation' },
            { id: 3, Responsibility: 'Production on-call and deployment support' },
            { id: 4, Responsibility: 'Code review support' }
        ]
    },

    {
        id: 5,
        Company: 'Livemocha',
        Website: 'http://www.livemocha.com',
        Location: 'Seattle, WA',
        Title: 'Lead Web Developer',
        StartDate: 'May 2011',
        EndDate: 'November 2012',
        Responsibilities: [
            { id: 1, Responsibility: 'Worked with program management, UI design and engineering teams to estimate, implement and deploy features and bug fixes' },
            { id: 2, Responsibility: 'Production on-call and deployment support' },
            { id: 3, Responsibility: 'Worked as part of the engineering team to develop a redesigned version of the site from the ground up using SproutCore' },
            { id: 4, Responsibility: 'Code review support' }
        ]
    },

    {
        id: 6,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Development Manager',
        StartDate: 'August 2008',
        EndDate: 'October 2009',
        Responsibilities: [
            { id: 1, Responsibility: 'Mentorship' },
            { id: 2, Responsibility: 'Performance reviews' },
            { id: 3, Responsibility: 'Resource allocations' },
            { id: 4, Responsibility: 'Conducted team Meetings and facilitated the individual growth of direct reports' }
        ]
    },

    {
        id: 7,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Staff Software Engineer',
        StartDate: 'January 2007',
        EndDate: 'August 2008',
        Responsibilities: [
            { id: 1, Responsibility: 'Managed engineering resources in Bellevue, the UK and India to complete a major platform migration involving multiple applications and several hundred private-labeled sites' },
            { id: 2, Responsibility: 'Maintained and developed multiple high availability web applications using C# and ASP.net' },
            { id: 3, Responsibility: 'Production on-call and deployment support' },
            { id: 4, Responsibility: 'Code review support' }
        ]
    },

    {
        id: 8,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Web Development Manager',
        StartDate: 'April 2006',
        EndDate: 'January 2007',
        Responsibilities: [
            { id: 1, Responsibility: "Conducted performance reviews for direct reports" },
            { id: 2, Responsibility: "Oversaw the development and growth of the web development staff through cross-training, paired programming and group code reviews" },
            { id: 3, Responsibility: "Assumed the role of directly managing the engineering of Infospace's flagship search sites: Dogpile, Metacrawler, Webcrawler and Infospace.com" },
            { id: 4, Responsibility: "Worked with product and program management to establish product roadmaps and project schedules" }
        ]
    },

    {
        id: 9,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Senior Web Developer',
        StartDate: 'June 2004',
        EndDate: 'April 2006',
        Responsibilities: [
            { id: 1, Responsibility: "Architected and implemented a new site architecture that significantly reduced defects and increased productivity" },
            { id: 2, Responsibility: "Led engineering groups through the design and implementation of web-based portals for Verizon, AOL, CableVision, RCN, NBC Olympics" },
            { id: 3, Responsibility: "Worked directly with Verizon to maximize the performance of their portal by reducing load times from 7-9 seconds to 2-4 seconds without impacting the user interface" }
        ]
    },

    {
        id: 10,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Lead Web Developer',
        StartDate: 'January 2004',
        EndDate: 'June 2004',
        Responsibilities: [
            { id: 1, Responsibility: "Led groups of developers through site and content projects, provided scope and scheduling estimates and feedback on site and product specifications" },
            { id: 2, Responsibility: "Developed an on-demand gaming portal (PlaySite) using ASP and the integration of content feeds" },
            { id: 3, Responsibility: "Worked collaboratively with internal product teams and external marketing consultants to redesign the infospace.com flagship site" },
            { id: 4, Responsibility: "Produced customer branded browser toolbars for partner sites such as FoxNews and ABCNews" },
            { id: 5, Responsibility: "Designed and implemented a Flash-based application that displays recently queried search terms" },
            { id: 6, Responsibility: "Managed and maintained a Java/Linux hosted search configuration for Infospace and partner sites" },
            { id: 7, Responsibility: "Assisted with the migration of multiple web-based applications and 500+ websites to a new server platform" }
        ]
    },

    {
        id: 11,
        Company: 'Infospace',
        Website: 'http://www.infospace.com',
        Location: 'Bellevue, WA',
        Title: 'Web Developer',
        StartDate: 'April 2001',
        EndDate: 'December 2003',
        Responsibilities: [
            { id: 1, Responsibility: "Developed and published private-label branded sites which consumed a series of web-based applications, utilizing HTML, CSS, XML and JavaScript for such customers as Verizon, NBC, Nortel, Network Solutions and more" },
            { id: 2, Responsibility: "Leveraged Windows Media and RealMedia technologies to develop interactive broadband media experiences featuring live data and streaming media content for deployment to set-top devices such as WebTV, MSTV, and AOLTV" },
            { id: 3, Responsibility: "Worked with product and program management to develop a personalized broadband PC portal that aggregated multimedia content feeds" },
            { id: 4, Responsibility: "Managed the development efforts to reinvigorate the Dogpile.com search site" }
        ]
    }
];

module.exports = workData;
