import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";
import circuitBoardAnimation from "../home-animations/circuitBoardAnimation";

import computeAnimation from "../home-animations/computeAnimation";
import contributeAnimation from "../home-animations/contributeAnimation";
import vectorStorageAnimation from "../home-animations/vectorStorageAnimations";
import evaluateAnimation from "../home-animations/evaluateAnimation";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);

//  Circuit animation for hero section

const heroCircuitTimeline = circuitBoardAnimation(
  ".section-hero-bg_img .circuit-lines-group path"
);

ScrollTrigger.create({
  trigger: ".section_hero",
  start: "top 10%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => heroCircuitTimeline.play(),
  onLeave: () => heroCircuitTimeline.pause(),
  onEnterBack: () => heroCircuitTimeline.play(),
  onLeaveBack: () => heroCircuitTimeline.pause(),
});
//  Circuit animation for CTA section
const ctaCircuitTimeline = circuitBoardAnimation(
  ".section-cta-bg_img .circuit-lines-group path"
);

ScrollTrigger.create({
  trigger: ".padding-section-pre-footer",
  start: "bottom 100%",
  end: "bottom 0%",
  invalidateOnRefresh: true,
  onEnter: () => ctaCircuitTimeline.play(),
  onLeave: () => ctaCircuitTimeline.pause(),
  onEnterBack: () => ctaCircuitTimeline.play(),
  onLeaveBack: () => ctaCircuitTimeline.pause(),
});
//////Hero loader
document.fonts
  .load('1em "Plus Jakarta Sans"')
  .then(function () {
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
        ".hero_logo",
        {
          ease: "power2.out",
          opacity: 1,
          duration: 2.8,
        },
        "<25%"
      )
      .to(
        ".section-bg_overlay",
        {
          ease: "power2.out",
          opacity: 1,
          duration: 4,
          "--background-color--hero-gradient-1": "rgba(15, 15, 15, 0)",
        },
        "<0%"
      );

    //Section headers
    const sectionHeaders = document.querySelectorAll(
      ".section-heading_wrapper"
    );
    sectionHeaders.forEach((section) => {
      const tag = section.querySelector(".eyebrow");
      const heading = section.querySelector("h2");
      const text = section.querySelector("p");
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(tag, {
            y: "0%",
            opacity: 1,
            duration: 0.4,
            ease: "circ.out",
          })
            .to(
              heading,
              {
                opacity: 1,
                y: "0%",
                duration: 0.6,
                ease: "circ.out",
              },
              "<10%"
            )
            .to(
              text,
              {
                opacity: 1,
                duration: 0.5,
                y: "0%",
                ease: "circ.out",
              },
              "<15%"
            );
        },
      });
    });

    ////Pre footer cta
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
            ".form",
            {
              duration: 0.8,
              ease: "circ.out",
              opacity: 1,
              width: "100%",
            },
            "<25%"
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
  })
  .catch(function () {
    console.log("Font failed to load");
  });

//Horizontal scroll
const cards = document.querySelectorAll(".horizontal-scroll_card-wrap");
let mm = gsap.matchMedia();
cards.forEach((card, index) => {
  gsap.set(card, {
    top: 80 + index * 16,
    scale: 0.9,
  });
  mm.add("(max-width: 479px)", () => {
    gsap.set(card, {
      top: 220 + index * 8,
      scale: 1,
    });
  });
  const innerCard = card.querySelector(".card-row_card");

  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top top",
      scrub: 1.05,
      invalidateOnRefresh: true,
      onEnter: () => {
        if (innerCard.getAttribute("data-animation-card") === "evaluate")
          evaluateAnimation();
        if (innerCard.getAttribute("data-animation-card") === "contribute")
          contributeAnimation();
        if (innerCard.getAttribute("data-animation-card") === "vector")
          vectorStorageAnimation();
        if (innerCard.getAttribute("data-animation-card") === "compute")
          computeAnimation();
      },
    },
    ease: "none",
    scale: 1,
  });
});
mm.add("(max-width: 479px)", () => {
  gsap.to(".section-heading_wrapper.is-cards", {
    scrollTrigger: {
      trigger: ".section-heading_wrapper.is-cards",
      start: "top 80",
      endTrigger: ".last-card",
      end: "top 210",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onLeaveBack: () => {
        gsap.set(".section-heading_wrapper.is-cards", {
          clearProps: "position",
        });
      },
    },
  });
});

//////////////
