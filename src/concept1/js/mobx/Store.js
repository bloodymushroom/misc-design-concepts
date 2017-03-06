import {observable, action} from 'mobx'

class Store {
  @observable currentView = 'home';
  @observable currentProject = 0;

  @action changeView(view) {
    this.currentView = view;
  }

  @action changeProject(index) {
    this.currentProject = index;
  }

  projects = [
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
      images: [],
      icon: 'http://i.imgur.com/7HlnWla.png',
      stack: [
      ],
      responsibilities: [
      ] 
    },
    {
      name: 'Colorz.io',
      description: 'colorize your website',
      images: [],
      icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/8704-200.png',
      stack: [
      ],
      responsibilities: [
      ] 
    },
    {
      name: 'Callback',
      description: 'your personal recruiter',
      images: [],
      icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/221163-200.png',
      stack: [
      ],
      responsibilities: [
      ] 
    }
  ]
}

const store = new Store();

export default store;