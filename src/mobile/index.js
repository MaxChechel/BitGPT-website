import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import swapAnimation from "../mobile-animations/swap";
import integrateAnimation from "../mobile-animations/integrate";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

swapAnimation();
integrateAnimation();
