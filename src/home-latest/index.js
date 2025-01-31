import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SplitType from "split-type";

import chatAnimation from "../home-animations/chatAnimation";
import agentAnimation from "../home-animations/agentAnimation";

import swapAnimation from "../mobile-animations/swap";
import integrateAnimation from "../mobile-animations/integrate";

import automateAnimation from "../mobile-animations/automate";

import speakAnimation from "../mobile-animations/speak";
import circuitBoardAnimation from "../home-animations/circuitBoardAnimation";
import tradeAnimation from "../mobile-animations/trade";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
//
//Circuit animation for CTA section
const ctaCircuitTimeline = circuitBoardAnimation(
  ".section-cta-bg_img .circuit-lines-group path"
);
ctaCircuitTimeline.play();
// ScrollTrigger.create({
//   trigger: ".section.is-features",
//   start: "bottom 100%",
//   end: "bottom 0%",
//   invalidateOnRefresh: true,
//   onEnter: () => ctaCircuitTimeline.play(),
//   onLeave: () => ctaCircuitTimeline.pause(),
//   onEnterBack: () => ctaCircuitTimeline.play(),
//   onLeaveBack: () => ctaCircuitTimeline.pause(),
// });

//////Hero loader
document.fonts.ready
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
        ".hero_content-wrap .button",
        {
          duration: 0.8,
          ease: "circ.out",
          opacity: 1,
          y: "0%",
        },
        "<10%"
      )
      .to(
        ".mobile-hero_img",
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

    const introParagraph = new SplitType(".home-intro_text"), {
      types: 'words, chars',
      tagName: 'span',
      absolute: false
    };
    gsap.set(".home-intro_text", { opacity: 1 });
    const fadedHeadingTl = gsap.timeline();
    fadedHeadingTl.to(".home-intro_text .char", {
      opacity: 1,
      duration: 1.5,
      stagger: { each: 0.05 },
    });

    ScrollTrigger.create({
      trigger: ".section_home-intro",
      start: "top 60%",
      end: "top 10%",
      animation: fadedHeadingTl,
      scrub: 1.15,
      pinSpacer: false,
    });

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
        })
          .to(
            ".section_mobile .glowing-wrapper",
            {
              duration: 0.5,
              ease: "circ.out",
              opacity: 1,
              y: "0%",
            },
            "<25%"
          )
          .to(
            ".marquee",
            {
              opacity: 1,
              duration: 1,
            },
            "<25%"
          );
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
  })
  .catch(function () {
    console.log("Font failed to load");
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

swapAnimation();
integrateAnimation();

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

///////////////
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

ScrollTrigger.create({
  trigger: "[data-privacy-animation]",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => {
    const tl = gsap.timeline();
    tl.to(".privacy_wrapper", {
      delay: 1,
      scale: 1.5,
      duration: 1.6,
    })
      .to(
        ".privacy_wrapper",
        {
          marginLeft: 0,
          duration: 1.6,
        },
        "<0%"
      )
      .to(
        ".privacy_wrapper .mobile-chat_user-message-wrap, .privacy_wrapper .confirm-text, .privacy_wrapper .mobile-chat_avatar, .privacy_wrapper .chat-confirm-btn:not(.is-primary), .privacy_wrapper .mobile_bottom-wrap",
        {
          opacity: 0.1,
          duration: 1,
        },
        "<0%"
      );
  },
});
