const content = document.querySelector(".content");
let currentPos = window.pageYOffset;

function distort() {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.15;

  content.style.transform = "skewY(" + speed + "deg)";
  currentPos = newPos;

  requestAnimationFrame(distort);
}

distort();

$(document).ready(() => {
  $(".nav_icon").click(() => {
    $(".nav_container").toggle();
  });

  $(".project-heading1").click(() => {
    $(".project-info1").toggle();
    $("#button1").click(() => {
      $(".project-info1").toggle();
    });
  });

  $(".project-heading2").click(() => {
    $(".project-info2").toggle();
    $("#button2").click(() => {
      $(".project-info2").toggle();
    });
  });

  $(".project-heading3").click(() => {
    $(".project-info3").toggle();
    $("#button3").click(() => {
      $(".project-info3").toggle();
    });
  });

  $(".project-heading4").click(() => {
    $(".project-info4").toggle();
    $("#button4").click(() => {
      $(".project-info4").toggle();
    });
  });
  $(".project-heading5").click(() => {
    $(".project-info5").toggle();
    $("#button5").click(() => {
      $(".project-info5").toggle();
    });
  });

  $("#button2").click(() => {
    $(".project-info2").toggle();
  });

  $("#button3").click(() => {
    $(".project-info3").toggle();
  });

  $("#button4").click(() => {
    $(".project-info4").toggle();
  });
  $("#button5").click(() => {
    $(".project-info5").toggle();
  });
});

function func() {
  alert("Not yet Finished");
}
