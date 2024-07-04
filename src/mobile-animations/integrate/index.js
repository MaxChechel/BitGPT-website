import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function integrateAnimation() {
  gsap.registerPlugin(MotionPathPlugin);

  const initializeAnimation = () => {
    MotionPathPlugin.convertToPath(".integrate_orbit-circle");
    const orbitWraps = document.querySelectorAll(
      ".integrate_orbit-wrap:not(.is-outer)"
    );

    orbitWraps.forEach((orbitWrap) => {
      const circle = orbitWrap.querySelector(".integrate_orbit-circle");
      const items = orbitWrap.querySelectorAll(".integrate_orbit-img");

      // Clear any previous animation instances
      gsap.killTweensOf(items);

      items.forEach((item) => {
        orbitWrap.appendChild(item);
      });

      // Set initial positions
      gsap.set(items, {
        motionPath: {
          path: circle,
          align: circle,
          alignOrigin: [0.5, 0.5],
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
    });
  };

  // Initialize animation on load
  initializeAnimation();

  // Reinitialize animation on window resize
  window.addEventListener("resize", () => {
    initializeAnimation();
  });
}
