import React from 'react';

import Work from './Work/Work';
import Skills from './Skills/Skills';
import Volunteer from './Volunteer/Volunteer';
import Education from './Education/Education';

const resume = () => (
    <section id="resume">
        <Work />
        <Skills />
        <Education />
        <Volunteer />
    </section>
);

export default resume;
