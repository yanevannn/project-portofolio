import gsap from "gsap";

export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".preloader .texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(".preloader", {
      duration: 1.5,
      height: "0vh",
      ease: "Power3.easeOut",
      onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
        document.body.style.overflowY = "scroll";
      },
    });
};
