import profileImg from './assets/profile.jpg';

export const PERSONAL_INFO = {
  name: "Muhammed Shimaz AK",
  role: "Software Developer · Flutter, Angular & Supabase",
  bio: "I’m a UAE-based software developer with 3+ years of professional experience shipping Flutter apps for iOS and Android. At GoParty, I build mobile apps, Angular admin tools, and Supabase backends, using agentic AI workflows throughout development.",
  email: "shimaz.abc.ms@gmail.com",
  phone: "+971 568995188",
  linkedin: "https://www.linkedin.com/in/muhammedshimaz",
  github: "https://github.com/Mshimaz",
  image: profileImg,
};

export const EXPERIENCE = [
  {
    company: "GoParty",
    role: "Software Developer",
    duration: "Jun 2026 – Present",
    location: "UAE",
    description: [
      "Built and released the GoParty Seller and Customer apps for iOS and Android with Flutter, using agentic AI workflows throughout development.",
      "Built an Angular admin portal with role-based access control for managing users, service listings, orders, leads, and WhatsApp and email campaigns.",
      "Designed the PostgreSQL schema in Supabase and wrote backend functions for app features and business workflows.",
      "Integrated the Meta WhatsApp API for one-time codes, event invitations, and marketing. Added AI chatbots for in-app support.",
      "Integrated Network International’s N-Genius payment gateway and Firebase Cloud Messaging for push notifications. Managed releases to Google Play and the App Store."
    ]
  },
  {
    company: "Thoughtplex",
    role: "Flutter Developer · Backend",
    duration: "Aug 2024 – Nov 2025",
    location: "Bangalore, Karnataka, India",
    description: [
      "Developed Flutter apps for iOS and Android, including WebRTC video calls, Elasticsearch search, and chat interfaces built with Riverpod.",
      "Built REST endpoints, authentication, asynchronous request handling, and real-time data pipelines with Firebase Cloud Functions. Used Dio interceptors to centralize token refresh and error handling.",
      "Profiled memory, CPU, and rendering with Xcode Instruments and Android Studio Profiler. Contributed to code reviews, architecture discussions, and mentoring.",
      "Managed GitHub Actions and Codemagic pipelines for automated builds, testing, and app store releases."
    ]
  },
  {
    company: "Featsclub",
    role: "Software Engineer · Flutter & Backend",
    duration: "Oct 2023 – Jul 2024",
    location: "Bangalore, Karnataka, India",
    description: [
      "Designed, built, and shipped a full-stack Flutter platform for iOS and Android with Firebase, REST APIs, Firestore, push notifications, and payments.",
      "Used BLoC, Riverpod, and Clean Architecture, and worked with designers to turn Figma designs into responsive Flutter interfaces.",
      "Automated tests with Flutter Test, Appium, and WebdriverIO. Maintained a crash-free rate of 98% or higher, tracked with Firebase Crashlytics."
    ]
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    duration: "Jan 2021 – Sep 2023",
    location: "Remote",
    description: [
      "Delivered production Flutter apps for international clients using BLoC, Riverpod, REST APIs, Firebase Cloud Functions, and payment integrations.",
      "Built backend APIs and integrated MySQL, Firestore, and MongoDB. Managed releases to Google Play and the App Store."
    ]
  },
  {
    company: "ShareInfo",
    role: "Web Developer",
    duration: "Jul 2022 – Aug 2022",
    location: "Thalassery, Kerala, India",
    description: [
      "Developed user-friendly websites using WordPress.",
      "Optimized website performance and implemented SEO best practices."
    ]
  }
];

export const PROJECTS = [
  {
    title: "GoParty Seller",
    subtitle: "Event Vendor App · iOS & Android",
    description: "Built a Flutter app for UAE event vendors to manage service listings, packages, bookings, and customer orders. Released it on Google Play and the App Store.",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=goparty.seller",
      appstore: "https://apps.apple.com/ae/app/gopartyseller/id6798627121"
    }
  },
  {
    title: "GoParty Customer",
    subtitle: "Event Planning App · iOS & Android",
    description: "Built a Flutter app for planning events, booking vendors, and tracking orders. Integrated N-Genius payments, WhatsApp messaging, push notifications, and AI chat support.",
    technologies: ["Flutter", "Supabase", "Meta WhatsApp API", "N-Genius", "FCM"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.goparty.customer",
      appstore: "https://apps.apple.com/ae/app/goparty-customer/id6799999956"
    }
  },
  {
    title: "Featsclub",
    subtitle: "Talent Organization App · iOS & Android",
    description: "Built and shipped a full-stack talent platform with Flutter and Firebase, including REST APIs, payments, and an automated release pipeline.",
    technologies: ["Flutter", "BLoC / Riverpod", "Firebase", "REST APIs", "CI/CD"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.featsclub",
      appstore: "https://apps.apple.com/us/app/featsclub/id6473748399"
    }
  },
  {
    title: "Electromate Qatar",
    subtitle: "E-commerce App · iOS & Android",
    description: "Integrated the Flutter storefront with a Node.js backend for the Qatar market. Delivered 50% faster data access and 95% uptime.",
    technologies: ["Flutter", "Clean Architecture", "REST APIs", "Node.js", "Firebase"],
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
  {
    category: "Mobile & Web",
    skills: ["Flutter", "Dart", "Angular", "React", "Responsive UI", "Custom widgets", "Figma to Flutter"]
  },
  {
    category: "State & Architecture",
    skills: ["BLoC / Cubit", "Riverpod", "Provider", "Clean Architecture", "MVVM", "SOLID"]
  },
  {
    category: "Backend & Data",
    skills: ["Supabase", "PostgreSQL schema design", "Backend functions", "Node.js", "MySQL", "MongoDB"]
  },
  {
    category: "Integrations",
    skills: ["REST APIs", "Dio", "Meta WhatsApp API", "Network International N-Genius", "AI chatbots", "WebRTC", "Elasticsearch"]
  },
  {
    category: "Firebase",
    skills: ["Authentication", "Firestore", "Cloud Messaging", "Analytics", "Crashlytics", "Cloud Functions", "Remote Config"]
  },
  {
    category: "Testing & Delivery",
    skills: ["Flutter Test", "Appium", "WebdriverIO", "TDD", "Git", "GitHub Actions", "Codemagic", "TestFlight", "App signing & store releases"]
  },
  {
    category: "Tools & Languages",
    skills: ["Agentic AI workflows", "Xcode Instruments", "Android Studio Profiler", "JavaScript", "Python", "HTML5", "CSS3"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Technology in Information Technology",
  university: "APJ Abdul Kalam Technological University",
  location: "Thalassery, Kerala, India",
  graduation: "Jul 2023"
};

export const LANGUAGES = [
  { name: "English", proficiency: "Professional" },
  { name: "Malayalam", proficiency: "Native" },
  { name: "Hindi", proficiency: "Conversational" }
];
