import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
export default function automateAnimation() {
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.to(".automate-animation .mobile-chat_msg-wrap.is-reverse", {
    opacity: 1,
  })
    .to(".automate-animation .mobile-chat_msg-wrap:not(.is-reverse)", {
      "grid-template-rows": "1fr",
      delay: 0.4,
      opacity: 1,
      marginTop: "1rem",
    })
    .add(() => {
      const tl = gsap
        .timeline({ repeat: 5, yoyo: true })
        .to(".automate-animation .mobile-chat_msg-wrap .mobile_loading-text", {
          backgroundPositionX: "100%",
          duration: 1,
          ease: "linear",
        })
        .to(".automate-animation .mobile-chat_msg-wrap .mobile_loading-text", {
          backgroundPositionX: "0%",
          duration: 0.6,
          ease: "linear",
        })
        .to(".automate-animation .mobile-chat_msg-wrap .mobile_loading-text", {
          backgroundPositionX: "100%",
          duration: 1,
          ease: "linear",
        });
    })
    .to(".automate-animation .mobile-chat_msg-wrap .mobile_loading-text", {
      delay: 1.5,
      text: { value: "Confirming transaction...", speed: 0 },
    })
    .to(".automate-animation .mobile-chat_msg-wrap .mobile_loading-text", {
      delay: 1.5,
      text: { value: "Swap complete! Initializing staking..", speed: 0 },
    })
    .to(".automate-animation .mobile_loading-text", {
      delay: 0.5,
      "--background-color--loading-text-1": " rgba(255, 255, 255, 1)",
      "--background-color--loading-text-2": " rgba(255, 255, 255, 1)",
    })
    .to(
      ".automate-animation .mobile_loading-text",
      {
        text: { value: "Transaction successful! Here's the tx id:", speed: 0 },
      },
      "<0%"
    )
    .to(".automate-animation .mobile-chat_chat-outer-wrap", {
      opacity: 1,
      height: "auto",
    })
    .to(".automate-animation .mobile-chat_msg-wrap", {
      delay: 2,
      opacity: 0,
    })
    .to(".automate-animation .mobile-chat_msg-wrap:not(.is-reverse)", {
      "grid-template-rows": "0fr",
      opacity: 0,
      marginTop: "0rem",
      duration: 0,
    });
}