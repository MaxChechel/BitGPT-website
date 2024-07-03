import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
export default function tradeAnimation() {
  const waveLines = document.querySelectorAll(
    ".trade-animation .mobile_waves svg rect"
  );
  const svgRectQuantity = waveLines.length;
  const totalDuration = svgRectQuantity / 20;
  //
  const mainTl = gsap.timeline({ repeat: -1 });
  const tl = gsap.timeline();
  tl.to(".trade-animation .mic_svg", {
    delay: 0.5,
    "--background-color--mic-svg-1": "#0A5CFF",
    "--background-color--mic-svg-2": "#063799",
  })
    .to(
      ".trade-animation .trade_speach-text",
      {
        text: {
          value: "Yo, buy 0.4 BTC using USDC",
        },
        duration: 3,
      },
      1.2
    )
    .add(() => {
      const tl = gsap.timeline({ repeat: 3 });
      tl.to(".trade-animation .mic_overlay", {
        opacity: 1,
        scale: 1,
        duration: 0.1,
      })
        .to(".trade-animation .mic_overlay", {
          opacity: 1,
          scale: 1.5,
          duration: 0.2,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.2,
          duration: 0.1,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.2,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.1,
          duration: 0.2,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.3,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 0.9,
          duration: 0.1,
        });
    }, 1)
    .to(
      ".trade_popup-inner-wrap .mobile_waves-wrap",
      { translateX: "0%", duration: totalDuration, ease: "none" },
      1
    )
    .to(
      ".trade_popup-inner-wrap .mobile_waves",
      {
        translateX: "0%",
        duration: totalDuration,
        ease: "none",
        onComplete: () => {
          gsap.to(".trade-animation .mic_overlay", { opacity: 0, scale: 0 });
        },
      },
      1
    )
    .to(
      ".trade-animation .mobile_waves svg g",
      {
        opacity: 1,
        ease: "none",
        stagger: { each: `${totalDuration / svgRectQuantity}` },
      },
      0
    )
    .add(() => {
      waveLines.forEach((waveLine, index) => {
        const multiplier = index * (svgRectQuantity * 0.0009);
        const tl = gsap.timeline();
        tl.to(waveLine, {
          fill: "#fff",
          duration: totalDuration / svgRectQuantity / 2,
          delay: totalDuration / svgRectQuantity / 2 + multiplier,
        }).to(waveLine, {
          fill: "#5C5F66",
          duration: totalDuration / svgRectQuantity / 2,
        });
      });
    }, 0)
    .to(".trade_popup-inner-wrap", {
      opacity: 0,
      duration: 1,
    })
    .to(
      ".trade_popup-wrap-inner",
      {
        y: "105%",
        duration: 1.2,
        ease: "power4.out",
      },
      "<0%"
    )
    .to(".trade-animation  .mobile-chat_msg-wrap.is-reverse", {
      "grid-template-rows": "1fr",
      duration: 0,
    })
    .to(".trade-animation  .mobile-chat_msg-wrap.is-reverse", {
      opacity: 1,
    })
    .to(".trade-animation  .mobile-chat_msg-wrap", {
      delay: 0.2,
      "grid-template-rows": "1fr",
      opacity: 1,
      marginTop: "1rem",
    })
    .to(".trade-animation  .mobile_loading-text", {
      backgroundPositionX: "100%",
      duration: 1,
      ease: "linear",
    })
    .to(".trade-animation .mobile_loading-text", {
      backgroundPositionX: "0%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".trade-animation .mobile_loading-text", {
      backgroundPositionX: "100%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".trade-animation .mobile_loading-text", {
      "--background-color--loading-text-1": " rgba(255, 255, 255, 1)",
      "--background-color--loading-text-2": " rgba(255, 255, 255, 1)",
    })
    .to(
      ".trade-animation .mobile_loading-text",
      {
        text: { value: "Transaction successful! Here's the tx id:", speed: 0 },
      },
      "<0%"
    )
    .to(".trade-animation .mobile-chat_chat-outer-wrap", {
      opacity: 1,
      height: "auto",
    });

  const initialStylesTl = gsap.timeline();
  initialStylesTl
    .set(".trade-animation .mic_svg", {
      "--background-color--mic-svg-1": "#292929",
      "--background-color--mic-svg-2": "#1f1f1f",
      duration: 0,
    })
    .set(".trade-animation .trade_speach-text", {
      text: {
        value: "",
      },
      duration: 0,
    })
    .set(".trade-animation .mobile_waves-wrap", { x: "-50%" })
    .set(".trade-animation .mobile_waves", {
      x: "100%",
    })
    .to(".trade_popup-inner-wrap", {
      delay: 1,
      opacity: 1,
      duration: 0.2,
    })
    .to(
      ".trade_popup-wrap-inner",
      {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
      },
      "<30%"
    );

  mainTl.add(tl).add(initialStylesTl);
  return mainTl;
}
