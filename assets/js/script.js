const splitText = new SplitType(".effect-text ", { types: "chars" });

var $text = $(".text .char"),
  tl = gsap.timeline({ repeat: -1 });

tl.staggerFrom(
  $text,
  0.5,
  { y: 50, ease: "elastic.out(1, 0.7)" },
  0.08 // Khoảng thời gian giữa mỗi ký tự
).to($text, 0.5, { autoAlpha: 0, ease: "power1.out" }, "+=1.2");
