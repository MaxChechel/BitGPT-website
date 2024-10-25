import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

export default function composAnimation() {
  let mm = gsap.matchMedia();

  const pathSvgs = document.querySelectorAll(
    ".compos-anim_pulses .anim-line-pulse"
  );

  pathSvgs.forEach((svg, i) => {
    const tween = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    tween
      .fromTo(
        svg,
        {
          ease: "none",
          drawSVG: 0,
          duration: 2,
        },
        { drawSVG: "0% 50%", ease: "sine.in" }
      )
      .to(svg, { drawSVG: "100% 100%", duration: 1 });
    tween.play();
  });
}
