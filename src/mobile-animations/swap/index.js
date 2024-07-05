import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function swapAnimation() {
  function killAllAnimations() {
    gsap.set(".swap_orbit-img, .orbit-circle, .swap_orbit-wrap, .pulse-line", {
      clearProps: "all",
    });
    gsap.killTweensOf(
      ".swap_orbit-img, .orbit-circle, .swap_orbit-wrap, .pulse-line"
    );
  }

  function initializeAnimations() {
    gsap.registerPlugin(MotionPathPlugin);
    MotionPathPlugin.convertToPath(".orbit-circle, .pulse-path");
    const orbitWraps = document.querySelectorAll(".swap_orbit-wrap");
    orbitWraps.forEach((orbitWrap, i) => {
      const circle = orbitWrap.querySelector(".orbit-circle");
      const items = orbitWrap.querySelectorAll(".swap_orbit-img");
      items.forEach((item) => {
        orbitWrap.appendChild(item);
      });

      items.forEach((item, index) => {
        const position = index / items.length;
        gsap.set(item, {
          motionPath: {
            path: circle,
            align: circle,
            alignOrigin: [0.5, 0.5],
            start: position,
            end: position + 1 / items.length,
            autoRotate: false,
          },
        });
      });

      const tl = gsap.timeline({
        delay: 1.5,
        defaults: {
          duration: 1.5,
          ease: "none",
          transformOrigin: "center",
          repeat: -1,
          repeatRefresh: true,
          repeatDelay: 3,
        },
      });
      tl.to(orbitWrap, {
        rotation: `+=${360 / items.length}`,
      });
      tl.to(
        items,
        {
          duration: 1.5,
          rotation: `-=${360 / items.length}`,
          transformOrigin: "center center",
        },
        0
      );

      const pathSvgs = document.querySelectorAll(".pulse-group");

      pathSvgs.forEach((svg) => {
        const path = svg.querySelector(".pulse-path");
        const line = svg.querySelector(".pulse-line");
        const timeToPlay = 1.5;
        const timeDelay = 3;

        gsap.set(line, {
          xPercent: -50,
          yPercent: -50,
          transformOrigin: "50% 50%",
        });
        gsap.to(".pulse-line", {
          opacity: 1,
          duration: 0,
        });
        const tween = gsap.timeline().to(line, {
          motionPath: {
            path: path,
            align: path,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0,
          },
          delay: 0,
          duration: timeToPlay,
          repeat: -1,
          repeatDelay: timeDelay,
          ease: "none",
          opacity: 0,
        });

        tween.play();
      });
    });
  }

  initializeAnimations();

  window.addEventListener("resize", () => {
    killAllAnimations();
    initializeAnimations();
  });
}
