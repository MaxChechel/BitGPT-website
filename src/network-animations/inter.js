import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

export default function interAnimation() {
  let mm = gsap.matchMedia();

  const pathSvgs = document.querySelectorAll(
    ".inter-anim_lines .anim-line-pulse"
  );

  pathSvgs.forEach((svg, i) => {
    const tween = gsap.timeline({
      delay: 0,
      //duration: 5,
      repeat: -1,
      repeatDelay: 0,
    });

    tween
      .fromTo(
        svg,
        {
          ease: "none",
          drawSVG: "100% 100%", // Start from the end
          duration: 2,
        },
        { drawSVG: "50% 100%", ease: "sine.in" } // Animate backward
      )
      .to(svg, { drawSVG: "0% 0%", duration: 1 }); // Finish at the beginning
    tween.play();
  });
}
