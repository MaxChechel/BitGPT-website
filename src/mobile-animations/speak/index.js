import gsap from "gsap";

export default function speakAnimation() {
  const waveLines = document.querySelectorAll(
    ".speak-animation .mobile_waves svg rect"
  );
  const svgRectQuantity = waveLines.length;
  const totalDuration = svgRectQuantity / 20;

  const mainTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const tl = gsap.timeline();
  tl.to(".speak-animation .mic_svg", {
    delay: 0.5,
    "--background-color--mic-svg-1": "#0A5CFF",
    "--background-color--mic-svg-2": "#063799",
  })
    .add(() => {
      const tl = gsap.timeline({ repeat: 3 });
      tl.to(".speak-animation .mic_overlay", {
        opacity: 1,
        scale: 1.5,
        duration: 0.4,
      })
        .to(".speak-animation .mic_overlay", {
          scale: 1.2,
          duration: 0.1,
        })
        .to(".speak-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.2,
        })
        .to(".speak-animation .mic_overlay", {
          scale: 1.1,
          duration: 0.2,
        })
        .to(".speak-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.3,
        })
        .to(".speak-animation .mic_overlay", {
          scale: 0.9,
          duration: 0.1,
        });
    }, 0.5)
    .to(
      ".speak-animation .mobile_waves-wrap",
      { x: "0%", duration: totalDuration, ease: "none" },
      1
    )
    .to(
      ".speak-animation .mobile_waves",
      {
        x: "0%",
        duration: totalDuration,
        ease: "none",
        onComplete: () => {
          gsap.to(".speak-animation .mic_overlay", { opacity: 0 });
        },
      },
      1
    )
    .to(
      ".speak-animation .mobile_waves svg g",
      {
        opacity: 1,
        ease: "none",
        stagger: { each: `${totalDuration / svgRectQuantity}` },
      },
      0.5
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
    }, 0.5)
    .to(".speak_sound-wrap", {
      delay: 0.8,
      opacity: 0,
      duration: 0.5,
    })
    .to(".speak-animation .mobile-chat_msg-wrap.is-reverse", {
      gridTemplateRows: "1fr",
      duration: 0,
    })
    .to(".speak-animation .mobile-chat_msg-wrap.is-reverse", {
      opacity: 1,
    })
    .to(".speak-animation .mobile-chat_msg-wrap", {
      gridTemplateRows: "1fr",
      delay: 0.2,
      opacity: 1,
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 1,
      ease: "linear",
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "0%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 1,
      ease: "linear",
    })
    .to(".mobile_loader-content-wrap", { opacity: 0, height: 0 })
    .to(
      ".speak-animation .mobile-chat_chat-outer-wrap",
      {
        opacity: 1,
        height: "auto",
        duration: 0.8,
        ease: "power4.out",
      },
      "<30%"
    )
    .to(".mobile-chat_message.is-img, .mobile-chat_message-img", {
      opacity: 1,
    })
    .to(".mobile_chat-wrap.is-speak", {
      delay: 1,
      opacity: 0,
    })
    .to(".speak-animation .mic_svg", {
      "--background-color--mic-svg-1": "#292929",
      "--background-color--mic-svg-2": "#1f1f1f",
      duration: 0,
    })
    .set(".speak-animation .mobile_waves-wrap", { x: "-50%" })
    .set(".speak-animation .mobile_waves", {
      x: "100%",
    })
    .to(".speak_sound-wrap", {
      opacity: 1,
      duration: 0.5,
    });

  mainTl.add(tl);
}
