const portfolioData = {
  name: "James Mwaura",
  title: "Electrical Engineering Student · SPU",
  profilePhoto: "student-portrait.png",
  bio: "Hi, I'm James — an electrical engineering student at Seattle Pacific University with a strong passion for circuit design, power systems, and signal processing. I enjoy hands-on engineering projects and applying theoretical knowledge to real-world challenges.",
  email: "mwauraj@spu.edu",
  phone: "",
  linkedin: "https://linkedin.com",
  github: "https://github.com/MwauraJames197",
  resume: "student-resume.pdf",
  contactText: "Feel free to reach out for project collaborations, internship inquiries, or just to connect.",

  projects: [
    {
      title: "Sallen-Key Bandpass Filter",
      description: "Bandpass Sallen-Key circuit tuned to pass 17 kHz frequencies, combined with a peak detector and comparator. Verified with frequency response analysis showing -0.23 dB at 17.21 kHz.",
      image: "IMG_7612.jpg",
      details: ["IMG_7530.jpg", "IMG_7614.jpg"],
      repo: "https://github.com/MwauraJames197"
    },
    {
      title: "Gravity Light Monitoring System",
      description: "Arduino Nano R4 system that measures voltage, current, and power using INA219 sensors and displays live data on an OLED screen.",
      image: "gravity-light.jpg",
      details: [],
      repo: ""
    },
    {
      title: "Pico W RC Fire Truck",
      description: "Robotic RC fire truck controlled using a PS4 controller and Raspberry Pi Pico W, with motor control and sensor testing.",
      image: "firetruck.jpg",
      details: [],
      repo: ""
    }
  ],

  education: [
    {
      school: "Seattle Pacific University",
      degree: "B.S. Electrical Engineering",
      date: "Expected June 2027"
    }
  ],

  employment: [
    {
      title: "Open to internship and co-op opportunities",
      place: "Electrical Engineering / Embedded Systems / Power Systems",
      date: "Current"
    }
  ],

  skills: [
    "C++", "JavaScript", "Multisim", "MATLAB", "Circuit Design", "Signal Processing",
    "Power Systems", "Breadboarding", "Oscilloscopes", "Filter Design", "Arduino", "Raspberry Pi Pico"
  ]
};
