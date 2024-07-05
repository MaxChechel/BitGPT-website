import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/all";

import circuitBoardAnimation from "../home-animations/circuitBoardAnimation";
import chatAnimation from "../home-animations/chatAnimation";
import agentAnimation from "../home-animations/agentAnimation";
import llmAnimation from "../home-animations/llmAnimation";
import pulseAnimation from "../home-animations/pulseAnimation";
import fraudAnimation from "../home-animations/fraudAnimation";
import computeAnimation from "../home-animations/computeAnimation";
import contributeAnimation from "../home-animations/contributeAnimation";
import vectorStorageAnimation from "../home-animations/vectorStorageAnimations";
import evaluateAnimation from "../home-animations/evaluateAnimation";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

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
        ".hero_content-wrap p",
        {
          duration: 0.4,
          ease: "circ.out",
          y: "0%",
          opacity: 1,
        },
        "<25%"
      )
      .to(
        ".form.is-hero",
        {
          duration: 0.8,
          ease: "circ.out",
          opacity: 1,
          width: "100%",
        },
        "<25%"
      )
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

    //Mobile section
    const mobileSection = document.querySelector(".section_mobile");

    ScrollTrigger.create({
      trigger: mobileSection,
      start: "top 50%",
      end: "top 40%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".mobile_image-mockup", {
          duration: 2,
          opacity: 1,
          ease: "power2.out",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".mobile_heading",
      start: "top 70%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".mobile_heading .heading-span-line", {
          duration: 0.5,
          ease: "circ.out",
          y: "0%",
          opacity: 1,
          stagger: { each: 0.025 },
          transformOrigin: "center bottom",
          rotationX: 0,
        }).to(
          ".section_mobile .glowing-wrapper",
          {
            duration: 0.5,
            ease: "circ.out",
            opacity: 1,
            y: "0%",
          },
          "<25%"
        );
      },
    });

    //Feature sections

    const sectionFeature = document.querySelectorAll(".feature_component");
    sectionFeature.forEach((section) => {
      const heading = section.querySelector("h3");
      const text = section.querySelectorAll("p");
      const anim = section.querySelector(".feature_image-wrapper");
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "top 50%",
        invalidateOnRefresh: true,
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(heading, {
            opacity: 1,
            y: "0%",
            duration: 0.6,
            ease: "circ.out",
          })
            .to(
              text,
              {
                opacity: 1,
                duration: 0.5,
                y: "0%",
                ease: "circ.out",
                stagger: { each: 0.05 },
              },
              "<15%"
            )
            .to(
              anim,
              {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "circ.out",
              },
              "<50%"
            );
        },
      });
    });

    //Card row
    ScrollTrigger.create({
      trigger: ".card-row_component",
      start: "top 60%",
      end: "top 50%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(".card-row_card:not(.is-wide)", {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "circ.out",
          stagger: { each: 0.05 },
        });
      },
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
      end: "top 240",
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

////CHAT///////
const mainChatTl = chatAnimation();
ScrollTrigger.create({
  trigger: "[data-chat-animation]",
  start: "top 50%",
  end: "bottom 60%",
  invalidateOnRefresh: true,
  onEnter: () => mainChatTl.play(),
  onLeave: () => mainChatTl.pause(),
  onEnterBack: () => mainChatTl.play(),
  onLeaveBack: () => mainChatTl.pause(),
});

//////////////

//////AGENT////////
const mainAgentTl = agentAnimation();
ScrollTrigger.create({
  trigger: "[data-agent-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainAgentTl.play(),
  onLeave: () => mainAgentTl.pause(),
  onEnterBack: () => mainAgentTl.play(),
  onLeaveBack: () => mainAgentTl.pause(),
});
//////////////////

///////LLM/////////
ScrollTrigger.create({
  trigger: "[data-llm-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => {
    llmAnimation();
  },
});

////Enhanced Privacy
const { letterAnimations, tl } = pulseAnimation();

ScrollTrigger.create({
  trigger: ".pulse_letters-wrap",
  start: "top 50%",
  end: "bottom 50%",
  onEnter: () => {
    letterAnimations.forEach((animation) => animation.play());
    tl.play();
  },
  onLeave: () => {
    letterAnimations.forEach((animation) => animation.pause());
    tl.pause();
  },
  onEnterBack: () => {
    letterAnimations.forEach((animation) => animation.play());
    tl.play();
  },
  onLeaveBack: () => {
    letterAnimations.forEach((animation) => animation.pause());
    tl.pause();
  },
});

////Fraud
const mainFraudTl = fraudAnimation();
ScrollTrigger.create({
  trigger: "[data-security-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainFraudTl.play(),
  onLeave: () => mainFraudTl.pause(),
  onEnterBack: () => mainFraudTl.play(),
  onLeaveBack: () => mainFraudTl.pause(),
});
