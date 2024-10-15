import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
export default function tradeAnimation() {
  const waveLines = document.querySelectorAll(
    ".trade-animation .mobile_wave-bar"
  );

  //
  const mainTl = gsap.timeline({ repeat: -1, paused: true });
  const tl = gsap.timeline();
  tl.to(".trade-animation .mic_svg", {
    delay: 0.5,
    "--background-color--mic-svg-1": "#0A5CFF",
    "--background-color--mic-svg-2": "#063799",
  })

    .to(
      ".trade-animation .mobile_waves",
      {
        opacity: "1",
        width: "100%",
        ease: "power4.out",
        duration: 0.5,
      },
      "<0%"
    )
    .to(
      ".trade-animation .trade_speach-text",
      {
        text: {
          value: "Hey, buy 0.4 BTC using USDC",
        },
        duration: 3,
      },
      1.2
    )
    .add(() => {
      const tl = gsap.timeline({
        repeat: 3,
        onComplete: () => {
          gsap.to(".trade-animation .mobile_wave-bar", { clearProps: "all" });
        },
      });
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
    .add(() => {
      const colorTl = gsap.timeline();
      colorTl
        .to(".trade-animation .mobile_waves", {
          opacity: 1,
          duration: 0.4,
        })
        .to(".trade-animation .mobile_wave-bar.is-center", {
          duration: 0.4,
          backgroundColor: "#70a0ff",
        })
        .to(
          ".trade-animation .mobile_wave-bar.is-2",
          {
            duration: 0.4,
            backgroundColor: "#3d7eff",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-3",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.8)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-4",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.7)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-5",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.6)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-6",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.5)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-7",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.4)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-8",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.3)",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-9",
          {
            duration: 0.4,
            backgroundColor: "rgba(10, 92, 255, 0.2)",
          },
          "<0%"
        );

      const tl = gsap.timeline({
        delay: 0.4,
        repeat: 5,
        yoyo: true,
        onComplete: () => {
          const tl = gsap
            .timeline()
            .to(".trade-animation .mobile_wave-bar", {
              duration: 0.1,
              height: "10%",
              ease: "sine.inOut",
            })
            .to(".trade-animation .mobile_waves", {
              width: "0%",
            })
            .to(".trade-animation .mobile_wave-bar.is-center", {
              duration: 0,
              height: "24%",
            })
            .to(".trade-animation .mobile_wave-bar.is-2", {
              duration: 0,
              height: "32%",
            })
            .to(".trade-animation .mobile_wave-bar.is-3", {
              duration: 0,
              height: "28%",
            })
            .to(".trade-animation .mobile_wave-bar.is-4", {
              duration: 0,
              height: "26%",
            })
            .to(".trade-animation .mobile_wave-bar.is-5", {
              duration: 0,
              height: "18%",
            })
            .to(".trade-animation .mobile_waves", {
              opacity: "12%",
            });
        },
      });
      tl.to(".trade-animation .mobile_wave-bar.is-center", {
        duration: 0.1,
        height: "100%",
        ease: "sine.inOut",
      })
        .to(
          ".trade-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "68%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "50%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-4",
          {
            duration: 0.1,
            height: "38%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "28%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".trade-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "65%",
          ease: "sine.inOut",
        })
        .to(
          ".trade-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "58%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "40%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-4",
          {
            duration: 0.1,
            height: "28%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "20%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".trade-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "75%",
          ease: "sine.inOut",
        })
        .to(
          ".trade-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "48%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "32%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-4",
          {
            duration: 0.1,
            height: "26%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "20%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(".trade-animation .mobile_wave-bar.is-center", {
          duration: 0.1,
          height: "24%",
          ease: "sine.inOut",
        })
        .to(
          ".trade-animation .mobile_wave-bar.is-2",
          {
            duration: 0.1,
            height: "32%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-3",
          {
            duration: 0.1,
            height: "28%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-4",
          {
            duration: 0.1,
            height: "26%",
            ease: "sine.inOut",
          },
          "<0%"
        )
        .to(
          ".trade-animation .mobile_wave-bar.is-5",
          {
            duration: 0.1,
            height: "18%",
            ease: "sine.inOut",
          },
          "<0%"
        );
    }, "<0%")
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
    .to(
      ".trade-animation  .mobile-chat_chat-confirm-wrap",
      {
        opacity: 1,
        height: "auto",
      },
      "<0%"
    )
    .to(".trade-animation .chat-confirm-btn.is-primary", {
      delay: 1,
      scale: 0.98,
      duration: 0.25,
    })
    .to(".trade-animation .chat-confirm-btn.is-primary", {
      scale: 1,
      duration: 0.1,
    })
    .to(".trade-animation  .mobile-chat_chat-confirm-wrap", {
      opacity: 0,
      height: 0,
      duration: 0.6,
    })
    .to(
      ".trade-animation  .overflow-hidden.is-height-0",
      {
        height: "auto",
        duration: 0.6,
      },
      "<0%"
    )
    .to(
      ".trade-animation  .mobile-chat_loading-text-wrap",
      {
        opacity: 1,
      },
      "<0%"
    )
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
    })

    .to(".trade-animation .mobile_chat-wrap", {
      delay: 2,
      opacity: 0,
    })
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
    .set(".trade-animation .mobile_waves", {
      width: "100%",
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

  const initialStylesTl = gsap.timeline();
  initialStylesTl;
  // .set(".trade-animation .mic_svg", {
  //   "--background-color--mic-svg-1": "#292929",
  //   "--background-color--mic-svg-2": "#1f1f1f",
  //   duration: 0,
  // })
  // .set(".trade-animation .mobile_waves", {
  //   opacity: "12%",
  //   duration: 0,
  //   clearProps: "all",
  // })
  // .set(".trade-animation .trade_speach-text", {
  //   text: {
  //     value: "",
  //   },
  //   duration: 0,
  // })
  // .set(".trade-animation .mobile_waves", {
  //   width: "100%",
  // })

  // .to(".trade_popup-inner-wrap", {
  //   delay: 1,
  //   opacity: 1,
  //   duration: 0.2,
  // })

  // .to(
  //   ".trade_popup-wrap-inner",
  //   {
  //     y: "0%",
  //     duration: 1.2,
  //     ease: "power4.out",
  //   },
  //   "<30%"
  // )
  // .to(
  //   ".trade-animation .mobile_waves",
  //   {
  //     opacity: "12%",
  //     duration: 0,
  //   },
  //   "<0%"
  // );

  mainTl.add(tl);
  return mainTl;
}
