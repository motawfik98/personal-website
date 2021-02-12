const profile = {
  fullName: 'Mohamed Tawfik',
  description: 'Software Developer',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.jpeg',
  about: {
    title: `HEY THERE! 
    I'M Mohamed Tawfik`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.`,
    findMeOn: [
      {
        iconName: 'twitter',
        text: '@motawfik1998',
        url: 'https://twitter.com/motawfik1998',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'motawfik1998@gmail.com',
        url: 'mailto://motawfik1998@gmail.com',
        hoverColor: '#546e7a'
      },
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/motawfik1998',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'github',
      url: 'https://github.com/motawfik98',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:motawfik1998@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Remote Tutor',
    img: '/assets/remotetutor.png',
    description: 'Remote tutor platform aimed to connect teachers with students by offering online quizzes and assignments with automatic grading, with uploading video recordings for the students to watch.',
    categories: ['Go', 'VueJS', 'MySQL'],
    siteUrl: 'https://remotetutoreg.com',
  },
  {
    title: 'Minigram',
    img: '/assets/minigram.png',
    description: 'Android app that allows users to register, share, and like photos with each other.',
    categories: ['Android', 'Kotlin', 'Firebase', 'MVVM'],
    appUrl: 'https://play.google.com/store/apps/details?id=com.motawfik.minigram',
    sourceCodeUrl: 'https://github.com/android-minigram'
  },
  {
    title: 'Voice Events',
    img: '/assets/voiceevents.png',
    description: 'Android app that uses speech recognition to allow users to create new calendar events',
    categories: ['Android', 'Kotlin'],
    appUrl: 'https://play.google.com/store/apps/details?id=com.motawfik.voicereminders',
    sourceCodeUrl: 'https://github.com/motawfik98/android-voice-reminders'
  },
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
