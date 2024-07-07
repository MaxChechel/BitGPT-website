import gsap from "gsap";

export default function privacyAnimation() {
  const tl = gsap.timeline({});
  tl.to(".privacy_wrapper", {
    scale: 1.8,
    duration: 1.6,
  })
    .to(
      ".privacy-svg-hide, .privacy_img",
      {
        opacity: 0.1,
        duration: 1,
      },
      "<0%"
    )
    .to(
      ".privacy_tooltip",
      {
        opacity: 1,
        duration: 1,
      },
      "<75%"
    )
    .to("#glow feGaussianBlur", {
      attr: { stdDeviation: 1 },
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })
    .add(() => {
      const tl = gsap
        .timeline({ repeat: -1, repeatDelay: 1.5 })
        .to(".privacy_indicator-item-3", {
          opacity: 1,
          duration: 0.5,
          ease: "circ.out",
        })
        .to(".privacy_indicator-item-4", {
          delay: 1,
          opacity: 1,
          duration: 0.5,
          ease: "circ.out",
        })
        .to(".privacy_indicator-item-4", {
          delay: 0.5,
          opacity: 0.2,
          duration: 0.5,
          ease: "circ.out",
        })
        .to(".privacy_indicator-item-3", {
          delay: 1,
          opacity: 0.2,
          duration: 0.5,
          ease: "circ.out",
        });
    });
}
