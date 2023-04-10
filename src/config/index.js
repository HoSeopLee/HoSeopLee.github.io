module.exports = {
  siteTitle: 'HoSeopLee | Software Engineer',
  siteDescription: '안녕하세요 초보 개발자 이호섭입니다.',
  siteKeywords:
    'software engineer, front-end engineer, web developer, HTML & (S)CSS,JavaScript (ES6+), React, Node(Express)',
  siteUrl: 'https://note.hoseop.co.kr/',
  siteLanguage: 'Korean',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'LeeHoSeop',
  location: 'Korea, Busan',
  email: 'llss2ssll@gmail.com',
  github: 'https://github.com/HoSeopLee',
  twitterHandle: '@bchiang7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://gitlab.com/HoSeopLee',
    },
    // {
    //   name: 'Linkedin',
    //   // url: 'https://www.linkedin.com/in/bchiang7',
    // },
    // {
    //   name: 'Codepen',
    //   // url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/1994.hoseop',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100003049775604',
    },
    {
      name: 'Twitter',
      // url: 'https://twitter.com/bchiang7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
