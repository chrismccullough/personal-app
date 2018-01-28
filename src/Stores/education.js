const educationData = [
    {
        id: 1,
        School: 'Western Washington University',
        Website: 'http://www.wwu.edu',
        Location: 'Bellingham, WA',
        StartDate: '1994',
        EndDate: '1997',
        Studies: [
            { id: 1, Study: 'Art' },
            { id: 2, Study: 'Art History' },
            { id: 3, Study: 'Philosophy' }
        ]
    },

    {
        id: 2,
        School: 'Lake Chelan High School',
        Website: 'https://www.chelanschools.org',
        Location: 'Chelan, WA',
        StartDate: '1990',
        EndDate: '1993',
        Studies: [
            { id: 1, Study: 'General Studies' }
        ]
    }
];

module.exports = educationData;
