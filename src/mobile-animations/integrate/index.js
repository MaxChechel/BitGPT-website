import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function integrateAnimation() {
  gsap.registerPlugin(MotionPathPlugin);
  MotionPathPlugin.convertToPath(".integrate_orbit-circle");
  const orbitWraps = document.querySelectorAll(
    ".integrate_orbit-wrap:not(.is-outer)"
  );

  for (let i = 0; i < orbitWraps.length; i++) {
    const circle = orbitWraps[i].querySelector(".integrate_orbit-circle");
    const items = orbitWraps[i].querySelectorAll(".integrate_orbit-img");
    items.forEach((item) => {
      orbitWraps[i].appendChild(item);
    });
    //Set initial positions
    gsap.set(items, {
      motionPath: {
        path: circle,
        align: circle,
        alignOrigin: [0.5, 0.5],
        //autoRotate: true,
      },
    });
    // Create a timeline to animate items along the path
    const tl = gsap.timeline({
      repeat: -1,
      ease: "none",
    });

    items.forEach((item, i) => {
      tl.to(
        item,
        {
          motionPath: {
            path: circle,
            align: circle,
            alignOrigin: [0.5, 0.5],
            //autoRotate: true,
            start: i / items.length,
            end: i / items.length + 1,
            immediateRender: true,
          },
          duration: 40,
          ease: "none",
        },
        0
      );
    });
  }
}
