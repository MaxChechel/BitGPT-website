import gsap from "gsap";

export default function mintAnimation() {
  const mainTl = gsap.timeline({ repeat: -1, paused: true });
  const circles = document.querySelectorAll(".mint_image-load-dots circle");
  const circlesTl = gsap.timeline();

  let imgWidthInit = "100%";
  let imgWidth = "45%";
  let mm = gsap.matchMedia();
  mm.add("(max-width: 479px)", () => {
    imgWidth = "11rem";
    imgWidthInit = "14rem";
  });

  circlesTl.add(() => {
    circles.forEach((circle, index) => {
      const tl = gsap.timeline({ repeat: 5 });
      tl.to(circle, {
        opacity: 0.5,
        delay: gsap.utils.random(0, 0.1, 0.02),
        duration: gsap.utils.random(0, 0.2, 0.05),
        stagger: { each: 0.005, from: "random" },
      }).to(circle, {
        opacity: 0,
        delay: gsap.utils.random(0, 0.2, 0.02),
        duration: 0.1,
        stagger: { each: 0.01, from: "random" },
      });
    });
  }, 1);
  const mintTl = gsap.timeline();
  mintTl
    .to(".mint_image", {
      opacity: 1,
      duration: 3,
      delay: 0.5,
    })
    .to(
      ".mint_image-load-dots",
      {
        opacity: 0,
        duration: 1,
      },
      "<50%"
    )
    .to(".mint_image-wrapper", {
      width: imgWidth,
      duration: 0.6,
      ease: "power2.out",
    })
    .to(".mint_bottom-wrap", {
      marginTop: "0.75rem",
      opacity: 1,
      "grid-template-rows": "1fr",
    })
    .to(".mint_cta .message", {
      delay: 0.5,
      scale: 0.98,
      backgroundColor: "#3a3c42",
      duration: 0.2,
    })
    .to(".mint_cta .message", {
      scale: 1,
      duration: 0.1,
      backgroundColor: "#27292e",
    })
    .to(".mint_animation .mesage_buttons-wrap", {
      opacity: 0,
    })
    .to(".mint_scanner", {
      opacity: 1,
      duration: 0.1,
    })
    .to(".mint_bottom-inner", {
      opacity: 1,
      duration: 0.2,
    })
    .to(".mint_scanner", {
      top: "105%",
      duration: 3,
    })
    .add(() => {
      const tl = gsap
        .timeline()
        .to(".mint_animation .mobile_loading-text", {
          backgroundPositionX: "100%",
          duration: 1,
          ease: "linear",
        })
        .to(".mint_animation .mobile_loading-text", {
          backgroundPositionX: "0%",
          duration: 0.6,
          ease: "linear",
        })
        .to(".mint_animation .mobile_loading-text", {
          backgroundPositionX: "100%",
          duration: 1,
          ease: "linear",
        });
    }, "<0%")
    .to(".mint_success", {
      opacity: 1,
      duration: 0.4,
    })
    .to(
      ".mint_animation .mobile_loading-text",
      {
        opacity: 0,
        duration: 0.4,
      },
      "<0%"
    )
    .to(
      ".mint_bottom-wrap",
      {
        delay: 1.5,
        marginTop: "0rem",
        opacity: 0,
        "grid-template-rows": "0fr",
      },
      "<0%"
    )
    .to(".mint_image-wrapper", {
      width: imgWidthInit,
      duration: 1,
      ease: "power2.out",
    })

    .to(".mint_image", {
      opacity: 0,
      duration: 1,
    });

  mainTl.add(circlesTl).add(mintTl);
  return mainTl;
}
