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

// project details page

export const projectDetailsReveal = (node) => {
  const backgroundImage = node.children[0].children[0];
  const overlay = backgroundImage.nextSibling;
  const content = node.children[1].children[0].children[0];

  gsap
    .timeline({ delay: 0.8 })
    .to(window, 0.3, { scrollTo: "#content-start" })
    .from(backgroundImage, 0.5, {
      y: -50,
      ease: "power3.easeOut",
      opacity: 0,
      scale: 1.1,
    })
    .from(overlay, 3, { opacity: 0, y: 200, ease: "power3.easeOut" }, 0.1)
    .from(content, 1, { opacity: 0, y: 300, ease: "power3.easeOut" }, 2.5);
};

export const scrollToTopBtn = () => {
  gsap.to(window, { duration: 0.3, scrollTo: 0, ease: "power3" });
};

export const homeAnimation = (node, btn) => {
  //hero text ref
  const heroLines = gsap.utils.toArray(node.children);
  const heroLinesChild = [];

  heroLines.map((line) => heroLinesChild.push(line.children));

  //hero text animation
  gsap
    .timeline({ delay: 0.6 })
    .staggerFrom(
      heroLinesChild,
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

//contact page animation
export const contactReveal = (node1, node2) => {
  const photo = node1;
  const title = node2.children[0].children;
  const description = node2.children[1];
  const contactLink1 = gsap.utils.toArray(
    description.nextSibling.children[0].children
  );
  const contactLink2 = gsap.utils.toArray(
    description.nextSibling.children[1].children
  );

  gsap
    .timeline({ delay: 0.8 })
    .from(title, {
      duration: 1,
      y: 60,
      opacity: 0,
      skewY: -2,
      stagger: 0.1,
      ease: "power3.out",
    })
    .from(
      description,
      {
        duration: 0.7,
        opacity: 0,
        x: 50,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      [...contactLink1, ...contactLink2],
      {
        duration: 0.6,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(2.5)",
      },
      "-=0.6"
    )
    .from(
      photo,
      {
        duration: 0.5,
        y: -100,
        opacity: 0,
        ease: "power3.out",
      },
      1
    );
};

// about page animation
export const textRevealSwipe = (node1, node2, photo) => {
  const firstText = node1.children[0].children[0];
  const firstBox = firstText.nextSibling;
  const secondText = node1.children[1].children[0];
  const secondBox = secondText.nextSibling;
  const thirdText = node1.children[2].children[0];
  const thirdBox = thirdText.nextSibling;

  const firstRowText = node2.children[0];

  let tl = new gsap.timeline({ delay: 0.8 });

  tl.to([firstBox, secondBox, thirdBox], {
    duration: 0.6,
    css: {
      left: "0",
    },
    stagger: 0.06,
    ease: "power4.out",
  })
    .to([firstText, secondText, thirdText], {
      duration: 0,
      css: {
        opacity: "1",
      },
    })
    .to(
      [firstBox, secondBox, thirdBox],
      {
        duration: 0.8,
        css: {
          left: "100%",
        },
        stagger: 0.1,
        ease: "power4.in",
      },
      "+=0.1"
    )
    .from(
      photo,
      { duration: 0.8, opacity: 0, y: 200, ease: "power3.out" },
      "-=0.2"
    )
    .from(firstRowText, {
      duration: 0.6,
      opacity: 0,
      y: 200,
      ease: "power3.out",
    })
    .addLabel("headerAnimFinish");
};

export const scrollReveal = (node) => {
  const text = node.children[0];
  const images = gsap.utils.toArray(text.nextSibling.children);

  gsap
    .timeline(
      {
        scrollTrigger: {
          trigger: node,
          start: "30% bottom",
        },
      },
      "headerAnimFinish"
    )
    .from(text, {
      duration: 0.6,
      opacity: 0,
      y: 200,
      ease: "power3.out",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: text.nextSibling,
        start: "50% bottom",
      },
    })
    .from(images, {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "bounce.out",
      stagger: 0.2,
    });
};
