import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

export const FramerDiv = m.div;
export const FramerSection = m.section;
export const FramerH1 = m.h1;
export const FramerH2 = m.h2;
export const FramerMain = m.main;
export const FramerParagraph = m.p;

export const FramerWrapper = ({ children }: React.PropsWithChildren) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
