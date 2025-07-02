// components/ui/MotionImg.tsx
import { motion } from "framer-motion";
import type { ImgHTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";

export const MotionImg = motion.img as React.FC<
  ImgHTMLAttributes<HTMLImageElement> & MotionProps
>;
