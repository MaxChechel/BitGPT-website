import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import swapAnimation from "../mobile-animations/swap";
import integrateAnimation from "../mobile-animations/integrate";
import mintAnimation from "../mobile-animations/mint";
import privacyAnimation from "../mobile-animations/privacy";
import automateAnimation from "../mobile-animations/automate";
import speakAnimation from "../mobile-animations/speak";
import circuitBoardAnimation from "../home-animations/circuitBoardAnimation";
import tradeAnimation from "../mobile-animations/trade";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

//  Circuit animation for hero section
circuitBoardAnimation(".section-hero-bg_img .circuit-lines-group path");
//  Circuit animation for CTA section
circuitBoardAnimation(".section-cta-bg_img .circuit-lines-group path");

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
        ".mobile-hero_img",
        {
          duration: 2,
          opacity: 1,
          ease: "power2.out",
        },
        "<10%"
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

swapAnimation();
integrateAnimation();

const mainAtomateTl = automateAnimation();
ScrollTrigger.create({
  trigger: "[data-automate-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainAtomateTl.play(),
  onLeave: () => mainAtomateTl.pause(),
  onEnterBack: () => mainAtomateTl.play(),
  onLeaveBack: () => mainAtomateTl.pause(),
});

const mainTradeTl = tradeAnimation();
ScrollTrigger.create({
  trigger: "[data-trade-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainTradeTl.play(),
  onLeave: () => mainTradeTl.pause(),
  onEnterBack: () => mainTradeTl.play(),
  onLeaveBack: () => mainTradeTl.pause(),
});

const mainSpeakTl = speakAnimation();
ScrollTrigger.create({
  trigger: "[data-speak-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainSpeakTl.play(),
  onLeave: () => mainSpeakTl.pause(),
  onEnterBack: () => mainSpeakTl.play(),
  onLeaveBack: () => mainSpeakTl.pause(),
});

const mainMintTl = mintAnimation();
ScrollTrigger.create({
  trigger: "[data-mint-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainMintTl.play(),
  onLeave: () => mainMintTl.pause(),
  onEnterBack: () => mainMintTl.play(),
  onLeaveBack: () => mainMintTl.pause(),
});

ScrollTrigger.create({
  trigger: "[data-privacy-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  markers: true,
  onEnter: () => privacyAnimation(),
});
