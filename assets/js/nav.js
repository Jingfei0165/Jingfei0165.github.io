(function () {
  var nav = document.getElementById("site-nav");
  if (!nav) return;
  var btn = nav.querySelector("button");
  var visible = nav.querySelector(".visible-links");
  var hiddenList = nav.querySelector(".hidden-links");
  if (!btn || !visible || !hiddenList) return;

  var BREAKPOINT = 768;

  function collapse() {
    Array.prototype.slice.call(visible.children).forEach(function (li) {
      if (!li.classList.contains("persist")) hiddenList.appendChild(li);
    });
    hiddenList.classList.add("hidden");
    btn.setAttribute("count", hiddenList.children.length);
    btn.classList.toggle("hidden", hiddenList.children.length === 0);
  }

  function expand() {
    Array.prototype.slice.call(hiddenList.children).forEach(function (li) {
      visible.appendChild(li);
    });
    hiddenList.classList.add("hidden");
    btn.setAttribute("count", 0);
    btn.classList.add("hidden");
  }

  function layout() {
    if (window.innerWidth < BREAKPOINT) { collapse(); } else { expand(); }
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    hiddenList.classList.toggle("hidden");
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) hiddenList.classList.add("hidden");
  });

  var timer;
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(layout, 120);
  });

  layout();
})();
