import gsap from "gsap";

export default function speakAnimation() {
  const waveLines = document.querySelectorAll(
    ".speak-animation .mobile_wave-bar"
  );

  const svgRectQuantity = waveLines.length;
  const totalDuration = svgRectQuantity / 20;

  const mainTl = gsap.timeline({ repeat: -1, repeatDelay: 1, paused: true });
  const tl = gsap.timeline();
  tl.to(".speak-animation .mic_svg", {
    delay: 0.5,
    "--background-color--mic-svg-1": "#0A5CFF",
    "--background-color--mic-svg-2": "#063799",
  })
    .add(() => {
      const tl = gsap.timeline({
        repeat: 2,
        onComplete: () => {
          //gsap.to(".speak-animation .mobile_wave-bar", { clearProps: "all" });
        },
      });
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
      ".speak-animation .mobile_waves",
      {
        opacity: 1,
        width: "100%",
        ease: "power4.out",
        duration: 0.8,
      },
      "<0%"
    )
    .add(() => {
      const colorTl = gsap.timeline();
      colorTl
        .to(".speak-animation .mobile_waves", {
          opacity: "100%",
          duration: 0.4,
        })
        .to(
          ".speak-animation .mobile_wave-bar.is-center",
          {
            duration: 0.4,
            backgroundColor: "#70a0ff",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-2",
          {
            duration: 0.4,
            backgroundColor: "#3d7eff",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-3",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.8)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-4",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.7)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-5",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.6)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-6",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.5)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-7",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.4)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-8",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.3)",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-9",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.2)",
          },
          "<0%"
        );

      const tl = gsap.timeline({ delay: 0.4, repeat: 10, yoyo: true });
      tl.to(".speak-animation .mobile_wave-bar.is-center", {
        duration: 0.2,
        height: "100%",
        ease: "sine.inOut",
      })
        .to(
          ".speak-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "58%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "40%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-4",
          {
            duration: 0.1,
            height: "30%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "20%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".speak-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "65%",
          ease: "sine.inOut",
        })
        .to(
          ".speak-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "58%",
            ease: "sine.inOut",
          },
          "<5%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "40%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-4",
          {
            duration: 0.15,
            height: "28%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-5",
          {
            duration: 0.15,
            height: "20%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".speak-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "75%",
          ease: "sine.inOut",
        })
        .to(
          ".speak-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "48%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "32%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-4",
          {
            duration: 0,
            height: "26%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "20%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".speak-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "24%",
          ease: "sine.inOut",
        })
        .to(
          ".speak-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "32%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "28%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-4",
          {
            duration: 0,
            height: "26%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".speak-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "18%",
            ease: "sine.inOut",
          },
          "<0%"
        );
    }, "<0%")

    .to(".speak-animation .mobile_waves", {
      delay: 4,
      width: "0%",
    })
    .to(".speak_sound-wrap", {
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
      duration: 0,
    })
    .to(".speak-animation .mobile-chat_msg-wrap", {
      delay: 0.2,
      opacity: 1,
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "0%",
      duration: 0.4,
      ease: "linear",
    })
    .to(".speak-animation .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".mobile_loader-content-wrap", { opacity: 0 })
    .to(".mobile_loader-content-wrap", { height: 0, duration: 0 })
    .to(
      ".speak-animation .mobile-chat_chat-outer-wrap",
      {
        height: "auto",
        duration: 0,
      },
      "<30%"
    )
    .to(".speak-animation .mobile-chat_chat-outer-wrap", {
      delay: 0.2,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
    })
    .to(".mobile-chat_message.is-img, .mobile-chat_message-img", {
      opacity: 1,
    })
    .to(".mobile_chat-wrap.is-speak", {
      delay: 2,
      opacity: 0,
    })
    .to(".speak-animation .mic_svg", {
      "--background-color--mic-svg-1": "#292929",
      "--background-color--mic-svg-2": "#1f1f1f",
      duration: 0,
    })
    .set(".speak-animation .mobile_waves", {
      width: "100%",
    })
    .to(".speak-animation .mobile_waves", {
      opacity: "12%",
      duration: 0.5,
    })
    .to(
      ".speak_sound-wrap",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<0%"
    );

  mainTl.add(tl);

  return mainTl;
}
