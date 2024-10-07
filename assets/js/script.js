// A $( document ).ready() block.
$(document).ready(function () {
  effect1();
  effect2();
  effect3();
  effect4();
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
