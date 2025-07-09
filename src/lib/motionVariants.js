
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,   
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
