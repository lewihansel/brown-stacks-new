const { default: gsap } = require("gsap/gsap-core");
const { ScrollTrigger } = require("gsap/all");
const { ScrollToPlugin } = require("gsap/all");

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//project list animation (with scroll trigger)
export const projectReveal = (content) => {
  const desktopView = content.children[0];
  const mobileViewBack = desktopView.nextSibling;
  const mobileViewFront = mobileViewBack.nextSibling;
  const title = content.nextSibling.children[0];
  const description = title.nextSibling;
  const link = description.nextSibling;

  gsap
    .timeline({
      delay: 0.2,
      scrollTrigger: {
        trigger: content.parentElement,
        start: "20% bottom",
      },
    })
    .to(content.parentElement, 0, {
      opacity: 1,
      ease: "power3.easeOut",
    })
    .from(title, 0.5, {
      y: -10,
      opacity: 0,
      ease: "power3.easeOut",
    })
    .from(
      description,
      0.5,
      {
        x: 50,
        opacity: 0,
        ease: "power3.easeOut",
      },
      0.2
    )
    .from(
      link,
      0.5,
      {
        y: -50,
        opacity: 0,
        ease: "power3.easeOut",
      },
      0.3
    )

    .from(
      desktopView,
      0.5,
      {
        opacity: 0,
        y: 50,
        ease: "power3.easeOut",
      },
      0.8
    )
    .from(
      mobileViewBack,
      0.6,
      {
        opacity: 0,
        y: -50,
        ease: "power3.easeOut",
      },
      0.5
    )
    .from(
      mobileViewFront,
      0.8,
      {
        opacity: 0,
        y: 50,
        ease: "power3.easeOut",
      },
      0.7
    );
};

export const scrollToTopBtn = () => {
  gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3" });
};

export const desktopHomeAnimation = (node, btn) => {
  //hero text ref
  const heroLineFirst = node.children[0];
  const heroLineSecond = heroLineFirst.nextSibling;
  const heroLineThird = heroLineSecond.nextSibling;

  //hero text animation
  gsap
    .timeline({ delay: 0.6 })
    .staggerFrom(
      [heroLineFirst.children, heroLineSecond.children, heroLineThird.children],
      0.7,
      {
        y: 40,
        ease: "power3.easeOut",
      },
      0.15
    )
    .from(
      btn,
      0.5,
      {
        x: -20,
        opacity: 0,
        ease: "power3.easeOut",
      },
      0.5
    );
};

export const mobileHomeAnimation = (node, btn) => {
  //hero text ref
  const heroLineFirst = node.children[0];
  const heroLineSecond = heroLineFirst.nextSibling;
  const heroLineThird = heroLineSecond.nextSibling;
  const heroLineFourth = heroLineThird.nextSibling;
  const heroLineFifth = heroLineFourth.nextSibling;
  const heroLineSixth = heroLineFifth.nextSibling;

  //hero text animation
  gsap
    .timeline({ delay: 0.6 })
    .staggerFrom(
      [
        heroLineFirst.children,
        heroLineSecond.children,
        heroLineThird.children,
        heroLineFourth.children,
        heroLineFifth.children,
        heroLineSixth.children,
      ],
      0.7,
      {
        y: 40,
        ease: "power3.easeOut",
      },
      0.15
    )
    .from(
      btn,
      0.5,
      {
        x: -20,
        opacity: 0,
        ease: "power3.easeOut",
      },
      1
    );
};
