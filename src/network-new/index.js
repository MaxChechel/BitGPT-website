import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
import circuitBoardAnimation from "../home-animations/circuitBoardAnimation";
import interAnimation from "../network-animations/inter";
import composAnimation from "../network-animations/compos";
import integrateAnimation from "../network-animations/discover";

interAnimation();
composAnimation();
integrateAnimation();
gsap.registerPlugin(ScrollTrigger);

//  Circuit animation for CTA section
circuitBoardAnimation(".section-cta-bg_img .circuit-lines-group path");
//////Hero loader
document.fonts.ready.then(function () {
  const heroParagraph = new SplitType(".network-hero_content-wrap p");
  gsap.set(".network-hero_content-wrap p", { opacity: 1 });
  const heroTl = gsap.timeline();

  heroTl
    .to(".hero-heading .heading-span-line", {
      delay: 0.2,
      duration: 0.5,
      ease: "circ.out",
      y: "0%",
      opacity: 1,
      stagger: { each: 0.025 },
      transformOrigin: "center bottom",
      rotationX: 0,
    })
    .to(
      ".network-hero_content-wrap p .line",
      {
        duration: 0.6,
        ease: "circ.out",
        y: "0%",
        opacity: 1,
        stagger: { each: 0.035 },
      },
      "<15%"
    )
    .to(
      ".scroll-indicator",
      {
        duration: 1.2,
        ease: "power2.out",
        opacity: 1,
      },
      "<75%"
    )
    .to(
      ".section-bg_overlay",
      {
        ease: "circ.out",
        width: "0%",
        duration: 1.6,
      },
      0.3
    );
});

const stickySections = document.querySelectorAll(".network-sticky_section");
const anchors = document.querySelectorAll(
  ".network-sticky_anchor:not(.is-last)"
);
gsap.set(".network-sticky_section:not(:first-child)", { opacity: 0 });
anchors.forEach((anchor, i) => {
  ScrollTrigger.create({
    trigger: anchor,
    start: "top top",
    end: "bottom bottom",
    pinSpacing: false,
    onEnter: () => {
      gsap.to(stickySections, { opacity: 0 });
      gsap.to(stickySections[i + 1], { opacity: 1 });
    },
    onLeaveBack: () => {
      gsap.to(stickySections, { opacity: 0 });
      gsap.to(stickySections[i], { opacity: 1 });
    },
  });
});
//Circuit animation for CTA section
const ctaCircuitTimeline = circuitBoardAnimation(
  ".section-cta-bg_img .circuit-lines-group path"
);
ctaCircuitTimeline.play();
// ScrollTrigger.create({
//   trigger: ".section_network-features",
//   start: "bottom 100%",
//   end: "bottom 0%",
//   invalidateOnRefresh: true,
//   onEnter: () => ctaCircuitTimeline.play(),
//   onLeave: () => ctaCircuitTimeline.pause(),
//   onEnterBack: () => ctaCircuitTimeline.play(),
//   onLeaveBack: () => ctaCircuitTimeline.pause(),
// });
ScrollTrigger.create({
  trigger: ".cta_card",
  start: "top 60%",
  end: "top 50%",
  invalidateOnRefresh: true,
  onEnter: () => {
    const tl = gsap.timeline();
    tl.to(
      ".cta_card h2",
      {
        opacity: 1,
        y: "0%",
        duration: 0.6,
        ease: "circ.out",
      },
      "<10%"
    )
      .to(
        ".cta_card p",
        {
          opacity: 1,
          duration: 0.5,
          y: "0%",
          ease: "circ.out",
        },
        "<15%"
      )
      .to(
        ".cta_card .button",
        {
          duration: 0.8,
          ease: "circ.out",
          opacity: 1,
          y: "0%",
        },
        "<15%"
      )
      .to(
        ".cta_card",
        {
          ease: "power2.out",
          opacity: 1,
          duration: 3,
          "--background-color--hero-gradient-1": "rgba(15, 15, 15, 0)",
        },
        "<0%"
      );
  },
});
