import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default function llmAnimation() {
  gsap.registerPlugin(DrawSVGPlugin);
  const pathSvgs = document.querySelectorAll(".llm-animation .llm_pulse");

  const tween = gsap.timeline({
    repeat: -1,
  });

  tween
    .fromTo(
      pathSvgs,
      {
        drawSVG: "0% 0%",
        opacity: 1,
      },
      {
        drawSVG: "0% 100%",
        ease: "none",
        duration: 0.6,
      }
    )
    .to(pathSvgs, {
      drawSVG: "100% 100%",
      ease: "circ.out",
      duration: 0.7,
    });

  const fanTween = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  fanTween.fromTo(
    ".llm_fan",
    { rotate: 0, ease: "none" },
    { rotate: 360, duration: 0.35, willChange: "transform", ease: "none" }
  );
}
