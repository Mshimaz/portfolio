import profileImg from './assets/profile.jpg';

export const PERSONAL_INFO = {
  name: "Muhammed Shimaz AK",
  role: "Software Engineer & AI Enthusiast",
  bio: "Passionate Software Engineer specializing in building scalable applications, cross-platform solutions, and exploring the frontiers of AI. Experienced in full-stack development, real-time systems, and creating intuitive user experiences.",
  email: "shimaz.abc.ms@gmail.com",
  phone: "+91 7907507369",
  phone2: "+971 568995188",
  linkedin: "https://www.linkedin.com/in/muhammedshimaz",
  github: "https://github.com/Mshimaz",
  image: profileImg,
};

export const EXPERIENCE = [
  {
    company: "Thoughtplex",
    role: "Flutter Developer",
    duration: "Aug 2024 - Sep 2025",
    location: "Bangalore, Karnataka",
    description: [
      "Developed high-quality video call features using WebRTC.",
      "Integrated Elasticsearch for advanced data search functionality.",
      "Designed fully functional chat interfaces using Riverpod for state management."
    ]
  },
  {
    company: "Featsclub",
    role: "Software Engineer",
    duration: "Oct 2023 - Jul 2024",
    location: "Bangalore, Karnataka",
    description: [
      "Automated testing with Appium WebdriverIO, reducing manual testing time by 50%.",
      "Developed cutting-edge web applications utilizing Flutter.",
      "Implemented real-time alerting in Google Cloud Console."
    ]
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    duration: "Jan 2021 - Sep 2023",
    location: "Remote",
    description: [
      "Designed user-friendly UI/UX resulting in 40% increased engagement.",
      "Implemented REST API integrations and optimized data retrieval.",
      "Created push notification systems using Firebase."
    ]
  },
  {
    company: "ShareInfo",
    role: "Web Developer",
    duration: "Jul 2022 - Aug 2022",
    location: "Thalassery, Kerala",
    description: [
      "Developed user-friendly websites using WordPress.",
      "Optimized website performance and implemented SEO best practices."
    ]
  }
];

export const PROJECTS = [
  {
    title: "Featsclub",
    subtitle: "Talent Organization App",
    description: "A comprehensive platform for talent organization. Handled backend integration and troubleshooting.",
    technologies: ["Flutter", "REST API", "Android", "iOS"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.featsclub",
      appstore: "https://apps.apple.com/us/app/featsclub/id6473748399"
    }
  },
  {
    title: "Electromate",
    subtitle: "E-commerce App",
    description: "E-commerce application for Qatar market. Seamless integration between back end and front end systems.",
    technologies: ["Flutter", "REST API", "E-commerce"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.electromateqatar.app",
      appstore: "https://apps.apple.com/in/app/electromate-qatar/id6443866721"
    }
  },
  {
    title: "Bus Speed Tracker",
    subtitle: "College Project",
    description: "Ticketing system with GPS speed monitoring and Firebase ML Kit for text extraction.",
    technologies: ["Flutter", "Firebase ML", "Google Maps API", "Firestore"],
    links: {}
  },
  {
    title: "Attendance System",
    subtitle: "Face Recognition",
    description: "AI-powered attendance tracking using Python and facial recognition algorithms.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    links: {}
  }
];

export const SKILLS = [
  "Flutter (Dart)", "Python", "Firebase", "React", "HTML/CSS",
  "JavaScript", "MongoDB", "Git", "REST API",
  "Appium", "WebdriverIO", "Problem Solving", "UI/UX Design"
];
