import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function swapAnimation() {
  gsap.registerPlugin(MotionPathPlugin);
  MotionPathPlugin.convertToPath(".orbit-circle, .pulse-path");
  const orbitWraps = document.querySelectorAll(".swap_orbit-wrap");

  for (let i = 0; i < orbitWraps.length; i++) {
    const circle = orbitWraps[i].querySelector(".orbit-circle");
    const items = orbitWraps[i].querySelectorAll(".swap_orbit-img");
    items.forEach((item) => {
      orbitWraps[i].appendChild(item);
    });

    // Set initial positions of items
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

    // function rotate() {
    //   gsap.to(orbitWraps[i], {
    //     rotation: `-=${360 / items.length}`,
    //     transformOrigin: "center",
    //     duration: 2,
    //     ease: "none",
    //   });
    //   //   gsap.to(items, {
    //   //     rotation: `-=180`,
    //   //     transformOrigin: "center",
    //   //     duration: 2,
    //   //     ease: "none",
    //   //   });
    //   rotation = gsap.delayedCall(3, rotate);
    // }

    // rotation = gsap.delayedCall(1, rotate);
    setTimeout(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: "none",
          rotation: "+=90",
          transformOrigin: "center",
          repeat: -1,
          repeatRefresh: true,
          repeatDelay: 3,
        },
      });
      tl.to(orbitWraps[i], {});
      tl.to(
        items,
        { duration: 1.5, rotation: "-=90", transformOrigin: "center center" },
        0
      );
    }, 1500);
  }

  const pathSvgs = document.querySelectorAll(".pulse-group");

  pathSvgs.forEach((svg, i) => {
    const path = svg.querySelector(".pulse-path");
    const line = svg.querySelector(".pulse-line");
    const timeToPlay = 1.5;
    const timeDelay = 3;

    // Set the transform origin and offsets before animating
    gsap.set(line, {
      xPercent: -50, // Center horizontally
      yPercent: -50, // Center vertically
      transformOrigin: "50% 50%", // Set the transform origin to the center
    });
    gsap.to(".pulse-line", {
      opacity: 1,
      duration: 0,
    });
    const tween = gsap.to(line, {
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
}
