import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

export default function contributeAnimation() {
  let scale = 0.65;
  let mm = gsap.matchMedia();
  mm.add("(max-width: 479px)", () => (scale = 0.85));

  const pathSvgs = document.querySelectorAll(
    ".contribute-a_pulses .line-pulse"
  );

  pathSvgs.forEach((svg, i) => {
    const timeToPlay = Math.floor(Math.random() * 4) + 2;
    const timeDelay = Math.floor(Math.random() * 3) + 1;

    const tween = gsap.timeline({
      delay: timeDelay,
      duration: timeToPlay,
      repeat: -1,
      repeatDelay: 0,
    });
    tween
      .fromTo(
        svg,
        {
          ease: "none",
          drawSVG: 0,
        },
        { drawSVG: "0% 90%", ease: "sine.in" }
      )
      .to(svg, { drawSVG: "100% 100%" });
    tween.play();
  });

  const scaleTl = gsap.timeline();
  scaleTl
    .to(".contribute-a_door:not(.is-right)", {
      x: "-75%",
      duration: 2,
      ease: "circ.out",
    })
    .to(
      ".contribute-a_door.is-right",
      {
        x: "75%",
        duration: 2,
        ease: "circ.out",
      },
      "<0%"
    )
    .to(
      ".contribute-a_pulses-wrap",
      {
        scale: scale,
        duration: 4,
        ease: "power4.out",
      },
      "<40%"
    )
    .to(".contribute-a_pulses .line-pulse", { opacity: 1 }, "<40%");
}
