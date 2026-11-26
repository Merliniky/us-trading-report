/* Site tabs for the GitHub Pages report.
 * The US after-close page and the A-share page are regenerated outside this
 * repo. Generators must keep <nav id="sitetabs"> and the script tag that
 * loads this file. This script fills 美股 / A股 / 投资买点 so the third tab
 * is not baked into the generated body. See README.
 */
(function () {
  try {
    var nav = document.getElementById("sitetabs");
    var script = document.currentScript;
    if (!nav || !script || !script.src) return;

    var root = new URL("../", script.src);
    var here = new URL(location.href);

    function norm(url) {
      var path = url.pathname.replace(/\/index\.html$/i, "/");
      if (path.charAt(path.length - 1) !== "/") path += "/";
      try { path = decodeURIComponent(path); } catch (e) {}
      return path;
    }

    function under(rel) {
      var target = norm(new URL(rel, root));
      var path = norm(here);
      return path === target || path.indexOf(target) === 0;
    }

    var active = "us";
    if (under("buy-points/")) active = "buy";
    else if (under("ashare/")) active = "ashare";

    var tabs = [
      ["us", "美股", new URL("index.html", root).href],
      ["ashare", "A股", new URL("ashare/index.html", root).href],
      ["buy", "投资买点", new URL("buy-points/index.html", root).href]
    ];
    var off = "display:inline-block;padding:3px 12px;border-radius:6px;font-size:13px;text-decoration:none;background:var(--card);color:var(--fg);border:1px solid var(--line)";
    var on = "display:inline-block;padding:3px 12px;border-radius:6px;font-size:13px;text-decoration:none;background:var(--acc);color:#fff;border:1px solid var(--acc)";

    nav.setAttribute("aria-label", "站点分页");
    nav.innerHTML = tabs.map(function (tab) {
      var style = tab[0] === active ? on : off;
      return '<a href="' + tab[2] + '" data-tab="' + tab[0] + '" style="' + style + '">' + tab[1] + "</a>";
    }).join(" ");
  } catch (e) {}
})();
