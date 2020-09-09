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

//hamburger menu animation

export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right, top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const handleCity = (city, cityBackground) => {
  gsap.to(cityBackground, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(cityBackground, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(cityBackground, {
    duration: 0.4,
    skewY: 1,
    transformOrigin: "right top",
  });
};

export const handleCityReturn = (cityBackground) => {
  gsap.to(cityBackground, {
    duration: 0.4,
    opacity: 0,
  });
};

export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.1,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
};

export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.2,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
};
