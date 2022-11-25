const containerMatchVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const childMatchVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const currentMatchVariants = {
  animateV: {
    scale: [1, 1.3, 1, 1.3, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      type: 'spring',
      stiffness: 120,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

export { childMatchVariants, containerMatchVariants, currentMatchVariants };
