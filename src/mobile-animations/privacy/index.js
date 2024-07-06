import gsap from "gsap";

export default function privacyAnimation() {
  const tl = gsap.timeline({});
  tl.to(".privacy_wrapper", {
    scale: 1.8,
    duration: 1.6,
  })
    .to(
      ".privacy-svg-hide",
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
    .to(".privacy_indicator-item", {
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
      ease: "circ.out",
    });
}
