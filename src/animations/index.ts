import { Variants } from 'framer-motion'

export const opacityVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const userContainerVariants: Variants = {
  initial: {
    x: 400,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: 400,
  },
}
