// A $( document ).ready() block.
$(document).ready(function () {
  effect1();
  effect2();
  effect3();
  effect4();
  effect5();
});
function effect1() {
  const splitText = new SplitType(".effect-text ", { types: "chars" });

  var $text = $(".text .char"),
    tl = gsap.timeline({ repeat: -1 });

  tl.staggerFrom(
    $text,
    0.5,
    { y: 50, ease: "elastic.out(1, 0.7)" },
    0.08 // Khoảng thời gian giữa mỗi ký tự
  ).to($text, 0.5, { autoAlpha: 0, ease: "power1.out" }, "+=1.2");
}
function effect2() {
  const splitText2 = new SplitType(".effect-2 h2");
  const $text2 = $(".effect-2 .char"); // SplitType generates 'char' class, not 'chars'
  console.log($text2);

  const tl = gsap.from($text2, {
    y: 50,
    rotation: 10,
    duration: 2,
    stagger: 0.1,
    ease: "power3.inOut",
    repeat: -1, // Infinite loop
    repeatDelay: 0,
  });
}

function effect3() {
  tl3 = gsap.timeline({ repeat: -1 });
  tl3.from(
    ".effect-3 ul li",
    {
      duration: 0.75,
      x: 40,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)",
      stagger: {
        each: 0.75,
        amount: 0.5,
      },
    },
    "+=0.25"
  );
}

function effect4() {
  const childSplit = new SplitType(".effect-4 h2", {
    type: "lines",
    linesClass: "split-child",
  });
  gsap.from(childSplit.lines, {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1,
    repeat: -1, // Infinite loop
    repeatDelay: 0,
  });
}
function effect5() {
  var tmax_optionsGlobal = {
    repeat: -1,
    repeatDelay: 0.65,
    yoyo: true,
  };

  CSSPlugin.useSVGTransformAttr = true;

  var tl = new TimelineMax(tmax_optionsGlobal),
    path = "svg *",
    stagger_val = 0.0125,
    duration = 0.75;

  $.each($(path), function (i, el) {
    tl.set($(this), {
      x: "+=" + getRandom(-500, 500),
      y: "+=" + getRandom(-500, 500),
      rotation: "+=" + getRandom(-720, 720),
      scale: 0,
      opacity: 0,
    });
  });

  var stagger_opts_to = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: Power4.easeInOut,
  };

  tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

  var $svg = $(".effect-5 svg");
  $svg.hover(
    function () {
      tl.timeScale(0.15);
    },
    function () {
      tl.timeScale(1);
    }
  );

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
