import {observable, action} from 'mobx'

class Store {
  @observable currentView = 'home';
  @observable currentProject = 0;

  // skills store
  @observable currentSkill = 'Languages';
  @observable showPreview = false;

  @action changeView(view) {
    this.currentView = view;
  }

  @action changeProject(index) {
    this.currentProject = index;
  }

  @action changeSkill(skill) {
    this.currentSkill = skill;
  }

  @action previewShowing(bool) {
    this.showPreview = bool;
  }

  skills = ['Languages', 'Frameworks', 'BackEnd', 'Other'];

  projects = [
    {
      name: 'Colorz.io',
      description: 'colorize your website',
      images: ['http://i.imgur.com/6DFKjJT.png?1',
        'http://i.imgur.com/3PID6Ca.gif',
        'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/bf/464806/90bcd294d466cc04f932d916be1488c4-original.png'
      ],
      icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/8704-200.png',
      stack: ['React', "Node/Express", 'MongoDB'
      ],
      responsibilities: [
        '- Created Google extension with React that interacts with websites for cross-site CSS analysis',
        '- Designed React components used in both the web application and Google extension',
        '- Extended Express/Node API designed for web client to support Google extension interface'
      ] 
    },
    {
      name: 'HRGotchi',
      description: 'a digital class pet',
      images: [
        'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/48/465576/d08083b29d292316e9888e9bbfd6f9e2-original.jpg',
        'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/48/465576/92ef9bd0ee91ff209679a9adaab0f086-original.png',
        'http://i.imgur.com/jJpKesX.gif'
      ],
      icon: 'http://i.imgur.com/QBEd6W0.png',
      stack: [
        'React', 'Node/Express', 'MySQL'
      ],
      responsibilities: [
       '- Managed data flow between web client, Express server, and MySQL to simulate a living pet',
       '- Designed animated and interactive components with React and Bootstrap for game-like interface',
      ]
    },
    {
      name: 'Tinder Clone',
      description: 'your favorite friend finder',
      images: ['http://i.imgur.com/gA3O6A7.png'],
      icon: 'http://i.imgur.com/7HlnWla.png',
      stack: [
        'Angular', 'Node/Express', 'MongoDB'
      ],
      responsibilities: [
        '- Coming soon!'
      ] 
    },
    {
      name: 'Callback',
      description: 'your personal recruiter',
      images: ['http://i.imgur.com/vtx96nd.png',
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/ec/465631/59e0231823d0ca88e5f01c2524f3ab99-original.png',
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/ec/465631/c03af100642502b913f00d55a27b8311-original.gif',
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/ec/465631/ee5e27fdac226ceb0ec2d60258956fd3-original.gif'
      ],
      icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/221163-200.png',
      stack: [
        'React/Native', 'Node/Express', 'MySQL'
      ],
      responsibilities: [
        '- Built mobile platform using React-Native and integrated with Express Server and MySQL', 
        '- Migrated React-Native mobile app to Exponent for cross-platform mobile OS support',
        '- Implemented features for Web Client using React, React-Router and MobX',
        // '- Integrated Google OAuth for mobile client with server side authentication for seamless login',
        // '- Polished front end design using CSS3 and Material UI for consistency across platforms'
      ] 
    }
  ]

  workExperience = [
  {
    company: 'Genentech',
    logo: 'http://i.imgur.com/iFgIDev.png',
    role: 'Case Manager',
    from: 'Oct 2015 - Nov 2016',
    skills: [
      'Salesforce CRM',
      'Data analysis and management',
      'Leadership and collaboration'
    ]
  },
  {
    company: 'Toshiba',
    logo: 'http://i.imgur.com/tAhhLXP.jpg',
    role: 'Developer',
    from: 'Aug 2015 - Dec 2015',
    skills: [
      'MySQL, PHP, HTML on Apache',
      'Semiconductor fabrication'
    ]
  },
  {
    company: 'HackReactor',
    logo: 'http://rebootjeff.github.io/images/hackreactorlogo_SP.png',
    role: 'Software Engineering',
    from: 'Nov 2016 - Jan 2017',
    skills: [
      'Full stack development',
      'Algorithms',
      'System Architecture'
    ]
  },
  {
    company: 'UCLA',
    logo: 'http://i.imgur.com/3agxoSX.png',
    role: 'B.S. \nMaterials Engineering',
    from: '2008 - 2013',
    skills: [
      'Electronic materials',
      'Engineering concepts',
      'Computer science fundamentals'
    ]
  }
  ]
}

const store = new Store();

export default store;