const header = {
  // homepage: 'https://splitrabbit.github.io/',
  title: 'JW.',
}

const about = {
  name: 'Jeffrey Wang',
  role: 'Data Engineer',
  description:
    'I am an aspiring Full Stack Web Engineer currently working in Data Analytics/Engineering. I was born and raised in Brooklyn, New York and have been here my entire life.',
}

const timelineData = [
  {
    text: 'Completion of Columbia\'s Full-Stack Web Development Bootcamp',
    date: 'August 03 2022',
    category: {
        tag: 'medium',
        color: '#018f69'
    }
  },
  {
    text: 'Promotion/Transition to Data Analyst At Fi/BarkingLabs',
    date: 'January 03 2022',
    category: {
        tag: 'medium',
        color: '#018f69'
    }
  },
  {
    text: 'Graduated Baruch College with a Bachelor of Business Administration',
    date: 'January 01 2022',
    category: {
        tag: 'medium',
        color: '#018f69'
    }
  },
  {
    text: 'Hired as Operations Associate At Fi/BarkingLabs',
    date: 'July 22 2020',
    category: {
        tag: 'medium',
        color: '#018f69'
    }
  },


]

const social = {
  linkedin: 'https://www.linkedin.com/in/jeffrey-wang-139375207/',
  github: 'https://github.com/SplitRabbit',
  resume: 'https://github.com/SplitRabbit',
  email: 'jeffreykunwang@gmail.com',
  phone: '+17184199384'
}

const projects = [
  {
    name: 'Slytherin-Social',
    description:
      'A MERN stack application meant to demonstrate our ability to build a sophisticated and functional full-stack application.',
    stack: ['MongoDB', 'Express', 'React','NoSQL'],
    sourceCode: 'https://github.com/slytherin-CU-VIRT-BO/slytherin-social-app',
    livePreview: 'https://slytherin-social.herokuapp.com/',
  },
  {
    name: 'Brooklyn Badminton (In Progress)',
    description:
      'A MERN stack application for information around this sports center',
    stack: ['React'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Weather API',
    description:
      'Weather Reporting and forecasting. This weather reporting interface fetches api responses for the requested cities and pulls up the current weather as well as the 5 day forecast for the next 5 days. Search history will be saved in local storage and will display on the screen as a search history. You can then click on those histories and click them to research for the weather for that specific city.',
    stack: ['Javascript,HTML'],
    sourceCode: 'https://github.com/SplitRabbit/Weather',
    livePreview: 'https://splitrabbit.github.io/Weather/',
  },
  {
    name: 'Social Network API',
    description:
      'Backend Development for MongoDB for a basic social network.',
    stack: ['Javascript'],
    sourceCode: 'https://github.com/SplitRabbit/social-network-api',
    livePreview: '',
  },
  {
    name: 'Coding Quiz',
    description:
      'A frontend application with hardcoded questions to test your knowledge on basic coding.',
    stack: ['Javascript,HTML,CSS'],
    sourceCode: 'https://github.com/SplitRabbit/Quiz-Form',
    livePreview: 'https://splitrabbit.github.io/Quiz-Form/',
  }
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Jest',
  'Python',
  'NoSql',
  'MongoDB',
  'Python',
  'SQL',
  'Node'
]

export { header, about, projects, skills, social, timelineData}
