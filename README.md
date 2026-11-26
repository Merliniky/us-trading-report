# 美股盘后复盘（模拟盘）

网页：https://merliniky.github.io/us-trading-report/

Alpaca 模拟交易账户（paper trading，非真实资金）的每日盘后复盘：账户概况、净值曲线、当前持仓/占比/盈亏、
板块敞口、已平仓与减仓的已实现盈亏、当日操作和简短点评。时间均为北京时间。

美股页（根目录 `index.html`、`data.json`）和 A 股页（`ashare/`）由仓库外的程序生成，每个交易日收盘后更新。投资买点是同站的第三个页面，放在 `buy-points/`，不随日报重写。均为个人记录，不构成投资建议。

## 导航

- 美股盘后复盘：<https://merliniky.github.io/us-trading-report/>
- A 股模拟盘：<https://merliniky.github.io/us-trading-report/ashare/>
- 投资买点：<https://merliniky.github.io/us-trading-report/buy-points/>

仓库里没有日报生成脚本或模板。2026-11-03 加上 `#sitetabs` 之后，美股提交只替换 `index.html` 里的 `const D=...` 数据；A 股提交目前只更新 `ashare/data.json` 和 `ashare/img/`。以现在的生成方式，HTML 外壳会留下来，但生成器在仓库外，以后若整页重写，写死在正文里的第三个链接会被盖掉。

第三个 tab 因此不写进日报正文，而由共享脚本 `assets/sitetabs.js` 在加载时填进已有的 `<nav id="sitetabs">`。美股页和 A 股页只增加这一行脚本，不改复盘业务内容，也不改嵌入数据。

日报和 A 股生成器必须保留：

1. `<nav id="sitetabs">`。里面可以仍只有「美股」和「A股」，脚本会补上「投资买点」。
2. 紧跟导航的脚本。根目录 `index.html` 引用 `assets/sitetabs.js`，`ashare/index.html` 引用 `../assets/sitetabs.js`。
3. 不要删除或覆盖 `assets/sitetabs.js` 和 `buy-points/`。

## 如何更新投资买点

页面在 GitHub Pages 上读取 `buy-points/report.json`。用浏览器直接打开本地文件（`file://`）时，同目录的 `buy-points/report.js` 是同一份数据的镜像，用来避开本地文件请求被拦截；两边要一起换。

买点按各公司自己的周线、月线、季线、年线图选定，写在每条记录的 `buyPoints` 里，包括深度、本周是否触发，以及触发类型 `close_within_2pct`（收盘踩线）或 `week_tag_and_hold`（周内接近后站稳）。5 周线不是买点。选定均线合成图放在 `buy-points/charts/`，文件名与 JSON 里的 `*_selected.png` 一致。

1. 用新一周的 JSON 覆盖 `buy-points/report.json`。字段仍是各股自己的 `buyPoints` 时，不用改 `buy-points/index.html`。
2. 把同一份文件存档为 `buy-points/reports/report-YYYY-MM-DD.json`。
3. 若有新的选定均线图，放进 `buy-points/charts/`。
4. 重新生成本地镜像：

```bash
python3 -c 'from pathlib import Path; raw=Path("buy-points/report.json").read_text(encoding="utf-8").rstrip(); Path("buy-points/report.js").write_text("window.BUY_POINTS_REPORT = "+raw+";\n", encoding="utf-8")'
```

当前页面是 2026-11-26 这一期的看图版本，价格截止 2026-11-25 收盘（北京时间），存档在 `buy-points/reports/report-2026-11-26.json`。
