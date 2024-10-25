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
document.fonts.ready.then(function () {});

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
