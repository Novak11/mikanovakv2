// More dramatic, dynamic animations for the dark theme

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -150 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// New dramatic animations
export const blurIn = {
  initial: { opacity: 0, filter: "blur(20px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(20px)" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 10, scale: 0.9 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const popIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  transition: {
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1], // bounce effect
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 60px rgba(139, 92, 246, 0.4)",
      "0 0 20px rgba(6, 182, 212, 0.3)",
    ],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
};
