// Small "home" button shown in the bottom-left corner of every game.
// To use it in a new game, add this line just before </body>:
//   <script src="../../home-button.js"></script>
(function () {
  var a = document.createElement("a");
  a.id = "home-btn";
  a.href = "../../index.html";
  a.setAttribute("aria-label", "Back to all apps");
  a.title = "Back to all apps";
  a.innerHTML =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>';
  a.style.cssText = [
    "position:fixed",
    "left:calc(10px + env(safe-area-inset-left, 0px))",
    "bottom:calc(10px + env(safe-area-inset-bottom, 0px))",
    "z-index:2147483647",
    "width:38px",
    "height:38px",
    "border-radius:50%",
    "display:flex",
    "align-items:center",
    "justify-content:center",
    "background:rgba(0,0,0,.45)",
    "color:#fff",
    "box-shadow:0 2px 6px rgba(0,0,0,.3)",
    "opacity:.75",
    "text-decoration:none",
    "-webkit-tap-highlight-color:transparent",
  ].join(";");
  a.onmouseenter = function () { a.style.opacity = "1"; };
  a.onmouseleave = function () { a.style.opacity = ".75"; };
  // Keep game keyboard/pointer handlers from reacting to this button
  a.addEventListener("pointerdown", function (e) { e.stopPropagation(); });
  document.body.appendChild(a);
})();
