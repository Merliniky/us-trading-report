window.BUY_POINTS_REPORT = {
  "meta": {
    "title": "投资买点周报",
    "edition": "2026-W48（感恩节当周，非周五收盘终稿）",
    "generatedAt": "2026-11-26 13:26:00",
    "generatedAtTimeZone": "Asia/Shanghai",
    "generatedAtNote": "报告生成时间为北京时间（Asia/Shanghai，UTC+8）2026-11-26 13:26。",
    "dataAsOfTradingDate": "2026-11-25",
    "dataAsOfNote": "价格与均线一律采用截至当周已完成交易日的收盘价。2026-11-25（周三）是目前最后一个已完成的美股常规交易日，收盘为美东时间16:00，对应北京时间2026-11-26 05:00。2026-11-26（周四）为美国感恩节，纽约证交所与纳斯达克全天休市。2026-11-27（周五，感恩节次日）仍将交易，但提前于美东时间13:00收盘。因此本份报告不是周五收盘后的最终周报；本周周线、11月月线和2026年四季度季线均为暂定值，周五交易后均线、触发结论与排序可能发生变化。",
    "currency": "USD",
    "sources": [
      "Yahoo Finance 日线行情（v8 chart，前复权收盘价计算均线，以消除分红与拆股影响；最新交易日的复权收盘价与未复权收盘价一致）",
      "Yahoo Finance quoteSummary（季度利润、盈利摘要、财务指标与估值字段）",
      "纽约证交所假期与早收日历（确认2026-11-26休市、2026-11-27提前收盘）",
      "SpaceX 上市信息：2026-06-12 于 Nasdaq Global Select Market 及 Nasdaq Texas 上市，代码 SPCX，发行价 135 美元，2026-06-15 IPO 交割（公司投资者关系与纳斯达克公告）；Yahoo 行情的 firstTradeDate 亦为 2026-06-12，且 max 历史中无更早数据"
    ],
    "methodology": {
      "priceSeries": "均线使用前复权收盘价的简单移动平均（SMA）。现价采用2026-11-25收盘价。周线按周五结束的自然周合成，本周未结束时用截至数据截止日的收盘作为该周暂定收盘，本周最低价、最高价取该周已交易日的极值。月线、季线、年线分别取公历月、公历季度（3/6/9/12月）和公历年的最后一个已交易日收盘；当前未结束的11月、2026年四季度与2026年，均用2026-11-25收盘作为暂定收盘。",
      "averages": {
        "sma5w": "5周线：最近5根周线收盘的SMA。",
        "sma26w": "26周线（半年线）：最近26根周线收盘的SMA。",
        "sma5m": "5月线：最近5根月线收盘的SMA。",
        "sma5q": "5季线：最近5根季线收盘的SMA，约15个月。",
        "sma60m": "5年线（主）：最近60根月线收盘的SMA（月线SMA60）。",
        "sma5y": "年线SMA5（对照）：最近5个公历年收盘的SMA，仅作对照，不单独作为长期买点判定依据。"
      },
      "trendDefinitions": {
        "sma5wRising": "当前5周线大于上一周的5周线。",
        "sma26wRising": "当前26周线大于4周前的26周线。",
        "sma5mRising": "当前5月线大于上一月的5月线。",
        "sma5qRising": "当前5季线大于上一季的5季线。",
        "sma60mRising": "当前月线SMA60大于3个月前的月线SMA60。",
        "uptrendForSma5wBuy": "标准定义：收盘价在26周线之上，且26周线向上（相对4周前）。若26周线因上市时间不足无法计算，则退化为：收盘价在5月线之上且5月线向上，并在该标的中注明。"
      },
      "triggerThresholds": {
        "bandPct": 2.0,
        "closeWithinBand": "收盘价距目标均线在±2.0%以内。",
        "weekTagAndHold": "或本周最低价曾进入该均线上方2.0%以内或跌破该均线，且本周收盘不低于该均线下方2.0%，视为接近或触及后站稳。收盘可能仍高于均线2%以上，报告中会写明是「周内接近后站稳」而非「收盘踩线」。",
        "midTermA": "回调到26周线：满足上述阈值，且26周线向上。26周线向下时，即使踩线也不记为中期买点。",
        "midTermB": "上升趋势中的5周线买点：满足上升趋势定义，且价格按上述阈值接近或触及5周线。",
        "longTerm": "长期买点：5月线、5季线或5年线（月线SMA60）之一满足上述阈值，且该均线向上。均线向下时，即使接近也不记为长期买点。样本不足的均线标为「历史不足，暂不给出该长期买点」，不拼接、不编造。"
      },
      "ranking": "用户名单与推荐名单分别排序。先按买点类型分档：中期与长期同时触发排在最前，其次仅长期，再次仅中期，最后是本周没有买点的标的。同一档内，按更接近有效目标均线的程度排序：距离为对触发均线（若未触发则为趋势向上的最近有效均线）的百分比；略低于向上均线优于略高于该均线。若价格远低于均线（中期均线超过5%，长期均线超过8%），即使均线尚未拐头也加罚，不排到前面。若均线向下且趋势转坏，再大幅加罚，排在最后。rankScore = 档位×1000 + proximityScore，越小越靠前。",
      "spacexRule": "SPCX 仅使用 2026-06-12（含）起的公开交易数据。Yahoo 当前 max 历史的首根 K 线即为该日，本报告仍做硬过滤。上市不足半年，25根周线不足以计算26周线，3根季线不足以计算5季线，6根月线不足以计算5年线；5周线与5月线可以计算，但5月线样本偏短（仅6根月线）。"
    },
    "disclaimer": "本报告仅基于公开行情与财务数据做均线与基本面整理，供研究参考，不构成投资建议、要约或对未来收益的保证。历史均线与财报不能预测未来价格。任何买入、持有或卖出决策应由读者自行判断并承担风险。"
  },
  "userList": [
    {
      "name": "麦当劳",
      "ticker": "MCD",
      "yahooSymbol": "MCD",
      "isPrivate": false,
      "lastClose": 283.5,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 271.0,
      "weekHigh": 286.66,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 272.67,
          "prevValue": 265.66,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 3.9718,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 263.25,
          "prevValue": 262.98,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 7.694,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 262.93,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 260.59,
          "prevValue": 257.57,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 8.7899,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 277.82,
          "prevValue": 280.38,
          "prevBasis": "1季前",
          "rising": false,
          "distancePct": 2.0435,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 266.22,
          "prevValue": 264.21,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 6.4905,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 275.94,
          "prevValue": 267.22,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 2.7408,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 3.9718,
        "sma26w": 7.694,
        "sma5m": 8.7899,
        "sma5q": 2.0435,
        "sma60m": 6.4905,
        "sma5y": 2.7408
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 7.69%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": true,
        "type": "sma60m",
        "types": [
          "sma60m"
        ],
        "note": "5月线向上，收盘距该线 8.79%，本周未踩线；价格已接近5季线（week_tag_and_hold），但该均线未向上，不记为长期买点；触及5年线（月线SMA60）且该均线向上（判定方式：week_tag_and_hold）；对照用年线SMA5为 275.94，距该线 2.74%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_and_long",
      "proximityScore": 3.9718,
      "rankScore": 3.9718,
      "rank": 1,
      "summary": "中期与长期均触发。中期：价格在26周线之上且26周线向上，本周最低价271.00美元距5周线272.67美元约-0.61%，收盘283.50美元站稳，记为上升趋势中的5周线买点；收盘距5周线+3.97%，并非收盘踩线，而是周内接近后收高。长期：本周最低价271.00美元距向上的5年线（月线SMA60，266.22美元）约+1.80%，进入±2%接近带后收盘站在均线之上，记为5年线买点；5季线已经走平向下（收盘距其+2.04%），不记为5季线买点。截至2026-09-30的当季营收71.6亿美元、环比+0.8%，净利润24.9亿美元、环比+5.2%；同比营收仅+1.1%。52周高点为341.75美元，当前仍明显低于前高。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      }
    },
    {
      "name": "VOO（标普500 ETF）",
      "ticker": "VOO",
      "yahooSymbol": "VOO",
      "isPrivate": false,
      "lastClose": 658.87,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 639.26,
      "weekHigh": 669.17,
      "weekBars": 3,
      "uptrend": false,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 671.72,
          "prevValue": 679.66,
          "prevBasis": "1周前",
          "rising": false,
          "distancePct": -1.9127,
          "sample": 847,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 690.39,
          "prevValue": 692.69,
          "prevBasis": "4周前",
          "rising": false,
          "distancePct": -4.5653,
          "sample": 847,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 691.65,
          "risingVs1w": false
        },
        "sma5m": {
          "name": "5月线",
          "value": 688.5,
          "prevValue": 693.74,
          "prevBasis": "1月前",
          "rising": false,
          "distancePct": -4.3039,
          "sample": 195,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 652.16,
          "prevValue": 641.47,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 1.0286,
          "sample": 66,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 486.01,
          "prevValue": 470.97,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 35.5658,
          "sample": 195,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 512.96,
          "prevValue": 462.88,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 28.4455,
          "sample": 17,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": -1.9127,
        "sma26w": -4.5653,
        "sma5m": -4.3039,
        "sma5q": 1.0286,
        "sma60m": 35.5658,
        "sma5y": 28.4455
      },
      "midTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "26周线向下，收盘距26周线 -4.57%，不记为半年线买点；价格已接近5周线（close_within_2pct），但未满足上升趋势定义，不记为5周线买点"
      },
      "longTerm": {
        "triggered": true,
        "type": "sma5q",
        "types": [
          "sma5q"
        ],
        "note": "5月线未向上，收盘距该线 -4.30%；触及5季线且该均线向上（判定方式：close_within_2pct）；5年线（月线SMA60）向上，收盘距该线 35.57%，本周未踩线；对照用年线SMA5为 512.96，距该线 28.45%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "long_only",
      "proximityScore": 1.0286,
      "rankScore": 1001.0286,
      "rank": 2,
      "summary": "中期没有买点：26周线向下，收盘658.87美元低于26周线4.57%，也不满足上升趋势中的5周线条件（价格虽距5周线仅-1.91%，但趋势定义不成立）。长期触发5季线买点：5季线652.16美元且向上，收盘距该线+1.03%，落在±2%以内。5月线已向下，不记为5月线买点；5年线向上但收盘仍高出35.57%。VOO是跟踪标普500的低成本宽基工具，用于超长期持有美股市场本身，不按单家公司财报评估。数据源显示追踪市盈率约22.3，股息率约1.07%，52周区间578.46–718.47美元。",
      "history": {
        "firstDateUsed": "2010-09-09",
        "nDaily": 4079,
        "nWeekly": 847,
        "nMonthly": 195,
        "nQuarterly": 66,
        "nYearly": 17
      }
    },
    {
      "name": "可口可乐",
      "ticker": "KO",
      "yahooSymbol": "KO",
      "isPrivate": false,
      "lastClose": 97.59,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 94.6,
      "weekHigh": 98.78,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 96.72,
          "prevValue": 95.74,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 0.9037,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 87.94,
          "prevValue": 85.1,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 10.9761,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 87.19,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 90.59,
          "prevValue": 87.23,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 7.7237,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 81.63,
          "prevValue": 75.03,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 19.5517,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 63.56,
          "prevValue": 61.26,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 53.5424,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 67.4,
          "prevValue": 58.19,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 44.7954,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 0.9037,
        "sma26w": 10.9761,
        "sma5m": 7.7237,
        "sma5q": 19.5517,
        "sma60m": 53.5424,
        "sma5y": 44.7954
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 10.98%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 7.72%，本周未踩线；5季线向上，收盘距该线 19.55%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 53.54%，本周未踩线；对照用年线SMA5为 67.40，距该线 44.80%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 0.9037,
      "rankScore": 2000.9037,
      "rank": 3,
      "summary": "中期触发上升趋势中的5周线买点：收盘97.59美元，距向上的5周线96.72美元仅+0.90%，落在±2%以内；26周线向上，但收盘仍高出10.98%，未到半年线买点。长期均线全部向上，最近的5月线仍高7.72%，本周没有长期买点。截至2026-09-30的当季营收133.5亿美元、环比-0.1%，净利润40.1亿美元、环比-9.4%；同比营收+7.4%、利润+8.3%，毛利率62.3%。收盘接近52周高位100.56美元。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      }
    },
    {
      "name": "伯克希尔哈撒韦B股",
      "ticker": "BRK.B",
      "yahooSymbol": "BRK-B",
      "isPrivate": false,
      "lastClose": 579.32,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 568.35,
      "weekHigh": 581.47,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 571.13,
          "prevValue": 563.7,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 1.4344,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 518.11,
          "prevValue": 502.97,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 11.8147,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 514.08,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 527.07,
          "prevValue": 511.28,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 9.9141,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 511.9,
          "prevValue": 496.59,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 13.1701,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 412.62,
          "prevValue": 399.57,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 40.3992,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 440.16,
          "prevValue": 384.1,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 31.6152,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 1.4344,
        "sma26w": 11.8147,
        "sma5m": 9.9141,
        "sma5q": 13.1701,
        "sma60m": 40.3992,
        "sma5y": 31.6152
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 11.81%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 9.91%，本周未踩线；5季线向上，收盘距该线 13.17%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 40.40%，本周未踩线；对照用年线SMA5为 440.16，距该线 31.62%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 1.4344,
      "rankScore": 2001.4344,
      "rank": 4,
      "summary": "中期触发上升趋势中的5周线买点：收盘579.32美元，距向上的5周线571.13美元+1.43%。26周线向上，但收盘仍高出11.81%，未到半年线买点。长期均线全部向上，最近的5月线仍高9.91%，本周没有长期买点。数据源中部分季度的GAAP净利润缺失或为0，不能按这些空值做环比；改用经营每股收益，最近四个披露期分别为6.25、4.73、5.26和5.94美元。最近十二个月经营现金流约451亿美元，自由现金流约525亿美元。同比营收+11.2%，GAAP利润同比-27.6%，主要受投资资产公允价值波动影响，不宜直接外推。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      }
    },
    {
      "name": "苹果",
      "ticker": "AAPL",
      "yahooSymbol": "AAPL",
      "isPrivate": false,
      "lastClose": 355.58,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 345.13,
      "weekHigh": 356.75,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 348.18,
          "prevValue": 346.55,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 2.126,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 325.09,
          "prevValue": 318.0,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 9.3798,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 323.39,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 331.55,
          "prevValue": 318.21,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 7.2488,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 300.26,
          "prevValue": 279.84,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 18.424,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 211.02,
          "prevValue": 201.23,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 68.5059,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 238.51,
          "prevValue": 202.06,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 49.0846,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 2.126,
        "sma26w": 9.3798,
        "sma5m": 7.2488,
        "sma5q": 18.424,
        "sma60m": 68.5059,
        "sma5y": 49.0846
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 9.38%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 7.25%，本周未踩线；5季线向上，收盘距该线 18.42%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 68.51%，本周未踩线；对照用年线SMA5为 238.51，距该线 49.08%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 2.126,
      "rankScore": 2002.126,
      "rank": 5,
      "summary": "中期触发上升趋势中的5周线买点：本周最低价345.13美元一度略低于5周线348.18美元，收盘355.58美元重新站上并站稳；收盘距5周线+2.13%，略宽于±2%的收盘阈值，按「本周触及后站稳」判定。26周线向上，但收盘仍高出9.38%，未到半年线买点。长期各均线均向上，最近的5月线仍高7.25%，本周没有长期买点。基本面方面，截至2026-09-30的当季营收1144.8亿美元、环比+4.6%，净利润307.1亿美元、环比+3.1%；毛利率48.8%，最近十二个月自由现金流约1057亿美元。股价靠近52周高位（360.83美元）。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      }
    },
    {
      "name": "特斯拉",
      "ticker": "TSLA",
      "yahooSymbol": "TSLA",
      "isPrivate": false,
      "lastClose": 380.14,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 357.64,
      "weekHigh": 393.83,
      "weekBars": 3,
      "uptrend": false,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 374.84,
          "prevValue": 373.26,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 1.4134,
          "sample": 857,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 368.34,
          "prevValue": 377.49,
          "prevBasis": "4周前",
          "rising": false,
          "distancePct": 3.2049,
          "sample": 857,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 370.48,
          "risingVs1w": false
        },
        "sma5m": {
          "name": "5月线",
          "value": 362.78,
          "prevValue": 370.88,
          "prevBasis": "1月前",
          "rising": false,
          "distancePct": 4.7841,
          "sample": 198,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 395.4,
          "prevValue": 408.32,
          "prevBasis": "1季前",
          "rising": false,
          "distancePct": -3.8604,
          "sample": 67,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 292.67,
          "prevValue": 290.61,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 29.8878,
          "sample": 198,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 321.07,
          "prevValue": 315.5,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 18.3971,
          "sample": 17,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 1.4134,
        "sma26w": 3.2049,
        "sma5m": 4.7841,
        "sma5q": -3.8604,
        "sma60m": 29.8878,
        "sma5y": 18.3971
      },
      "midTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "价格已接近26周线（week_tag_and_hold），但26周线未向上，不记为中期买点；价格已接近5周线（close_within_2pct），但未满足上升趋势定义，不记为5周线买点"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "价格已接近5月线（week_tag_and_hold），但该均线未向上，不记为长期买点；5季线未向上，收盘距该线 -3.86%；5年线（月线SMA60）向上，收盘距该线 29.89%，本周未踩线；对照用年线SMA5为 321.07，距该线 18.40%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "none",
      "proximityScore": 1.4134,
      "rankScore": 3001.4134,
      "rank": 6,
      "summary": "本周没有中期或长期买点。收盘380.14美元距5周线374.84美元+1.41%，且5周线向上，但26周线向下，不满足「上升趋势中的5周线买点」；本周也曾接近26周线与5月线，这两条均线同样未向上，不记为买点。5季线向下，收盘低于该线3.86%；5年线向上，但收盘仍高出29.89%。截至2026-09-30的当季营收280.5亿美元、环比-0.7%，净利润7.87亿美元、环比-29.4%；同比营收-0.2%、利润-43.6%。毛利率19.3%，净利率3.1%，最近十二个月自由现金流约50亿美元。滚动市盈率约418，利润波动较大。",
      "history": {
        "firstDateUsed": "2010-06-29",
        "nDaily": 4129,
        "nWeekly": 857,
        "nMonthly": 198,
        "nQuarterly": 67,
        "nYearly": 17
      }
    },
    {
      "name": "SpaceX",
      "ticker": "SPCX",
      "yahooSymbol": "SPCX",
      "isPrivate": false,
      "lastClose": 127.44,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 112.93,
      "weekHigh": 141.87,
      "weekBars": 3,
      "uptrend": false,
      "uptrendDefinition": "fallback_close_above_sma5m_and_sma5m_rising",
      "uptrendNote": "26周线历史不足，上升趋势改用：收盘在5月线之上且5月线向上",
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 132.67,
          "prevValue": 136.68,
          "prevBasis": "1周前",
          "rising": false,
          "distancePct": -3.9392,
          "sample": 25,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": null,
          "prevValue": null,
          "prevBasis": "4周前",
          "rising": null,
          "distancePct": null,
          "sample": 25,
          "required": 26,
          "enoughHistory": false,
          "note": "周线样本仅25根，不足26根，暂不给出26周线"
        },
        "sma5m": {
          "name": "5月线",
          "value": 133.02,
          "prevValue": 141.7,
          "prevBasis": "1月前",
          "rising": false,
          "distancePct": -4.192,
          "sample": 6,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": null,
          "prevValue": null,
          "prevBasis": "1季前",
          "rising": null,
          "distancePct": null,
          "sample": 3,
          "required": 5,
          "enoughHistory": false,
          "note": "季线样本仅3根，不足5根，暂不给出5季线"
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": null,
          "prevValue": null,
          "prevBasis": "3个月前",
          "rising": null,
          "distancePct": null,
          "sample": 6,
          "required": 60,
          "enoughHistory": false,
          "note": "月线样本仅6根，不足60根，暂不给出5年线"
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": null,
          "prevValue": null,
          "prevBasis": "上一年末的年线SMA5",
          "rising": null,
          "distancePct": null,
          "sample": 1,
          "required": 5,
          "enoughHistory": false,
          "note": "年线样本仅1根，不足5根"
        }
      },
      "distanceToMas": {
        "sma5w": -3.9392,
        "sma26w": null,
        "sma5m": -4.192,
        "sma5q": null,
        "sma60m": null,
        "sma5y": null
      },
      "midTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "26周线历史不足，暂不判断半年线买点；未处于上升趋势，收盘距5周线 -3.94%"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线未向上，收盘距该线 -4.19%；5季线历史不足，暂不给出该长期买点；5年线（月线SMA60）历史不足，暂不给出该长期买点；年线SMA5历史不足，仅作对照，未用于买点判定"
      },
      "rankTier": "none",
      "proximityScore": 203.9392,
      "rankScore": 3203.9392,
      "rank": 7,
      "summary": "SpaceX（Space Exploration Technologies Corp.）已于2026-06-12在纳斯达克上市，A类普通股代码SPCX，发行价135美元。本报告只使用2026-06-12（含）之后的公开交易数据，共116个交易日、25根周线、6根月线、3根季线，不混用旧SPCX代码的历史行情。因此26周线、5季线和5年线历史不足，暂不给出这些买点，也不用旧数据硬算。可计算的5周线132.67美元、5月线133.02美元目前均向下；因26周线样本不够，上升趋势改用「收盘在5月线之上且5月线向上」的退化规则，当前亦不满足。收盘127.44美元分别低于5周线3.94%、低于5月线4.19%，本周没有中期或长期买点。已披露的2026年二季度营收78.1亿美元、净亏损5.41亿美元；三季度营收145.8亿美元、净利润44.0亿美元（每股收益0.35美元，高于预期0.16美元）。数据源中2026年一季度与2025年营收为0，视为披露不完整，不用作比较基数。最近十二个月利润率仍为负（-8.6%），自由现金流缺失。收盘低于发行价，本周波动很大（最低112.93美元、最高141.87美元），52周区间104.83–225.64美元。",
      "history": {
        "firstDateUsed": "2026-06-12",
        "nDaily": 116,
        "nWeekly": 25,
        "nMonthly": 6,
        "nQuarterly": 3,
        "nYearly": 1
      },
      "listingNote": {
        "listed": true,
        "listingDate": "2026-06-12",
        "ipoPriceUsd": 135,
        "settlementDate": "2026-06-15",
        "exchange": "Nasdaq Global Select Market / Nasdaq Texas",
        "historyRule": "仅使用2026-06-12（含）之后的SpaceX公开交易数据，严禁与旧SPCX代码的历史行情混用",
        "insufficientAverages": [
          "sma26w",
          "sma5q",
          "sma60m",
          "sma5y"
        ]
      }
    }
  ],
  "recommendedList": [
    {
      "name": "微软",
      "ticker": "MSFT",
      "yahooSymbol": "MSFT",
      "isPrivate": false,
      "lastClose": 489.93,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 477.39,
      "weekHigh": 509.15,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 509.56,
          "prevValue": 516.28,
          "prevBasis": "1周前",
          "rising": false,
          "distancePct": -3.8527,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 469.22,
          "prevValue": 456.56,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 4.4131,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 467.63,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 498.4,
          "prevValue": 474.74,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": -1.6998,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 444.21,
          "prevValue": 448.77,
          "prevBasis": "1季前",
          "rising": false,
          "distancePct": 10.2923,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 375.07,
          "prevValue": 364.77,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 30.6233,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 396.86,
          "prevValue": 363.43,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 23.4508,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": -3.8527,
        "sma26w": 4.4131,
        "sma5m": -1.6998,
        "sma5q": 10.2923,
        "sma60m": 30.6233,
        "sma5y": 23.4508
      },
      "midTerm": {
        "triggered": true,
        "type": "pullback_to_sma26w",
        "types": [
          "pullback_to_sma26w"
        ],
        "note": "回调到26周线（半年线）并站稳（判定方式：week_tag_and_hold），且26周线向上；已处于上升趋势，但收盘距5周线 -3.85%，本周未踩线"
      },
      "longTerm": {
        "triggered": true,
        "type": "sma5m",
        "types": [
          "sma5m"
        ],
        "note": "触及5月线且该均线向上（判定方式：close_within_2pct）；5季线未向上，收盘距该线 10.29%；5年线（月线SMA60）向上，收盘距该线 30.62%，本周未踩线；对照用年线SMA5为 396.86，距该线 23.45%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_and_long",
      "proximityScore": -1.6998,
      "rankScore": -1.6998,
      "rank": 1,
      "summary": "中期与长期均触发，是本周推荐名单里最完整的买点组合。中期：26周线向上，本周最低价477.39美元距26周线469.22美元约+1.74%，进入±2%接近带后收盘489.93美元站稳，记为回调到半年线的买点；收盘距26周线仍+4.41%，并非收盘踩线。长期：5月线498.40美元且向上，收盘低于该线1.70%，落在±2%以内，记为5月线买点。5周线已向下，价格低于5周线3.85%，不构成5周线买点。5季线未向上；5年线向上但距离仍远（+30.62%）。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "Office、Azure与Windows构成软件和云计算的宽护城河，客户粘性高，适合按十年以上的视野持有。截至2026-09-30的当季营收922.8亿美元、环比+2.5%，净利润366.3亿美元、环比+2.4%；同比营收+18.8%、利润+32.3%，增长仍有连续性。毛利率67.7%，净利率41.2%。最近十二个月经营现金流约1959亿美元，但自由现金流仅约30亿美元，差额主要来自人工智能相关资本开支。判断质量时宜同时看经营现金流与利润率，而不是单独看被资本开支压低的自由现金流。"
    },
    {
      "name": "强生",
      "ticker": "JNJ",
      "yahooSymbol": "JNJ",
      "isPrivate": false,
      "lastClose": 273.94,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 267.36,
      "weekHigh": 279.88,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 274.82,
          "prevValue": 272.53,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": -0.3198,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 259.94,
          "prevValue": 251.97,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 5.384,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 257.99,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 265.51,
          "prevValue": 261.02,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 3.1736,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 246.43,
          "prevValue": 227.73,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 11.1635,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 170.02,
          "prevValue": 163.48,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 61.1222,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 183.26,
          "prevValue": 158.27,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 49.4824,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": -0.3198,
        "sma26w": 5.384,
        "sma5m": 3.1736,
        "sma5q": 11.1635,
        "sma60m": 61.1222,
        "sma5y": 49.4824
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 5.38%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": true,
        "type": "sma5m",
        "types": [
          "sma5m"
        ],
        "note": "触及5月线且该均线向上（判定方式：week_tag_and_hold）；5季线向上，收盘距该线 11.16%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 61.12%，本周未踩线；对照用年线SMA5为 183.26，距该线 49.48%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_and_long",
      "proximityScore": -0.3198,
      "rankScore": -0.3198,
      "rank": 2,
      "summary": "中期与长期均触发。中期：处于上升趋势，收盘273.94美元距向上的5周线274.82美元-0.32%，落在±2%以内。长期：5月线265.51美元且向上，本周最低价267.36美元距该线约+0.70%，进入±2%接近带后收盘站稳，记为5月线买点；收盘距5月线+3.17%，并非收盘踩线。5季线与5年线向上，但距离分别为+11.16%和+61.12%，尚未触及。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "制药与医疗器械并重，产品与监管壁垒较深，需求相对不受短期经济周期左右。截至2026-09-30的当季营收254.0亿美元、环比+0.4%；GAAP净利润仅2.1亿美元，较上季55.3亿美元大幅下滑，属于一次性项目干扰——同期经营每股收益2.59美元，仍略高于预期2.52美元，经营质量并未随GAAP利润同步恶化。毛利率67.8%，同比营收+5.9%。最近十二个月自由现金流约185亿美元，经营现金流约262亿美元。"
    },
    {
      "name": "标普全球",
      "ticker": "SPGI",
      "yahooSymbol": "SPGI",
      "isPrivate": false,
      "lastClose": 460.74,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 445.64,
      "weekHigh": 464.2,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 460.86,
          "prevValue": 458.58,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": -0.0266,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 424.8,
          "prevValue": 414.29,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 8.4599,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 422.44,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 432.99,
          "prevValue": 417.57,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 6.4081,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 425.53,
          "prevValue": 424.47,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 8.2735,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 403.16,
          "prevValue": 401.6,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 14.283,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 425.48,
          "prevValue": 418.89,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 8.2873,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": -0.0266,
        "sma26w": 8.4599,
        "sma5m": 6.4081,
        "sma5q": 8.2735,
        "sma60m": 14.283,
        "sma5y": 8.2873
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 8.46%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 6.41%，本周未踩线；5季线向上，收盘距该线 8.27%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 14.28%，本周未踩线；对照用年线SMA5为 425.48，距该线 8.29%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": -0.0266,
      "rankScore": 1999.9734,
      "rank": 3,
      "summary": "中期触发上升趋势中的5周线买点：收盘460.74美元，几乎踩在向上的5周线460.86美元上，距离约-0.03%。26周线向上，收盘仍高出8.46%，未到半年线买点。长期均线全部向上，最近的5月线高6.41%，本周没有长期买点。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "信用评级、金融数据与指数业务处于寡头格局，客户转换成本高，属于金融基础设施而非典型周期股；评级收入仍会随发行窗口起伏。截至2026-09-30的当季营收36.8亿美元、环比-11.3%，净利润12.4亿美元、环比仍+1.9%；同比营收+6.8%、利润+10.1%。毛利率71.0%。最近十二个月自由现金流约60亿美元，与经营现金流大致相当。"
    },
    {
      "name": "Visa",
      "ticker": "V",
      "yahooSymbol": "V",
      "isPrivate": false,
      "lastClose": 424.39,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 404.01,
      "weekHigh": 426.67,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 417.34,
          "prevValue": 413.9,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 1.6885,
          "sample": 976,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 372.47,
          "prevValue": 357.87,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 13.9383,
          "sample": 976,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 368.66,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 387.87,
          "prevValue": 371.35,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 9.4168,
          "sample": 225,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 354.67,
          "prevValue": 337.4,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 19.6578,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 278.61,
          "prevValue": 268.75,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 52.3249,
          "sample": 225,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 307.96,
          "prevValue": 264.81,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 37.8063,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 1.6885,
        "sma26w": 13.9383,
        "sma5m": 9.4168,
        "sma5q": 19.6578,
        "sma60m": 52.3249,
        "sma5y": 37.8063
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 13.94%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 9.42%，本周未踩线；5季线向上，收盘距该线 19.66%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 52.32%，本周未踩线；对照用年线SMA5为 307.96，距该线 37.81%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 1.6885,
      "rankScore": 2001.6885,
      "rank": 4,
      "summary": "中期触发上升趋势中的5周线买点：收盘424.39美元，距向上的5周线417.34美元+1.69%。26周线向上，但收盘仍高出13.94%，未到半年线买点。长期均线全部向上，最近的5月线仍高9.42%，本周没有长期买点。",
      "history": {
        "firstDateUsed": "2008-03-19",
        "nDaily": 4703,
        "nWeekly": 976,
        "nMonthly": 225,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "全球银行卡网络是典型的双边市场，品牌、商户覆盖与合规门槛构成宽护城河，业务偏轻资产，受单一行业景气的影响小于典型周期股。截至2026-09-30的当季营收121.4亿美元、环比+4.3%，净利润60.0亿美元、环比+6.6%；同比营收+13.2%、利润+21.9%。毛利率约97.7%，净利率51.2%。最近十二个月自由现金流约210亿美元，与经营现金流约237亿美元接近，现金流质量高。"
    },
    {
      "name": "废物管理（Waste Management）",
      "ticker": "WM",
      "yahooSymbol": "WM",
      "isPrivate": false,
      "lastClose": 247.29,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 235.25,
      "weekHigh": 249.92,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 240.09,
          "prevValue": 238.51,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 2.998,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 225.41,
          "prevValue": 221.18,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 9.7058,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 223.96,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 225.63,
          "prevValue": 220.56,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 9.5979,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 223.57,
          "prevValue": 217.55,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 10.6108,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 188.92,
          "prevValue": 184.76,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 30.8944,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 196.03,
          "prevValue": 177.53,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 26.1466,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 2.998,
        "sma26w": 9.7058,
        "sma5m": 9.5979,
        "sma5q": 10.6108,
        "sma60m": 30.8944,
        "sma5y": 26.1466
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 9.71%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 9.60%，本周未踩线；5季线向上，收盘距该线 10.61%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 30.89%，本周未踩线；对照用年线SMA5为 196.03，距该线 26.15%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 2.998,
      "rankScore": 2002.998,
      "rank": 5,
      "summary": "中期触发上升趋势中的5周线买点：本周最低价235.25美元一度低于5周线240.09美元，收盘247.29美元重新站上；收盘距5周线+3.00%，按周内触及后站稳判定。26周线向上，但收盘仍高出9.71%。长期均线全部向上，最近的5月线仍高9.60%，本周没有长期买点。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "垃圾收集与处理依赖区域特许和路权，本地进入壁垒高，服务具有必需品属性，穿越经济周期的能力较强。截至2026-09-30的当季营收68.5亿美元、环比+2.4%，净利润8.20亿美元、环比+4.5%；同比营收+6.3%、利润+37.6%。毛利率40.4%。最近十二个月经营现金流约66亿美元，自由现金流约25亿美元。负债率高于本组其他公司（权益乘数口径的债务权益比约2.37），是该商业模式里比较常见的特征，需要一并考虑。"
    },
    {
      "name": "宝洁",
      "ticker": "PG",
      "yahooSymbol": "PG",
      "isPrivate": false,
      "lastClose": 173.23,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 167.49,
      "weekHigh": 174.56,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 167.87,
          "prevValue": 165.43,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 3.1905,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 151.07,
          "prevValue": 146.84,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 14.67,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 149.85,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 153.37,
          "prevValue": 147.64,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 12.952,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 148.56,
          "prevValue": 143.57,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 16.6091,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 144.96,
          "prevValue": 143.22,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 19.5055,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 148.63,
          "prevValue": 142.74,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 16.553,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 3.1905,
        "sma26w": 14.67,
        "sma5m": 12.952,
        "sma5q": 16.6091,
        "sma60m": 19.5055,
        "sma5y": 16.553
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 14.67%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 12.95%，本周未踩线；5季线向上，收盘距该线 16.61%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 19.51%，本周未踩线；对照用年线SMA5为 148.63，距该线 16.55%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 3.1905,
      "rankScore": 2003.1905,
      "rank": 6,
      "summary": "中期触发上升趋势中的5周线买点：本周最低价167.49美元略低于5周线167.87美元，收盘173.23美元站稳；收盘距5周线+3.19%，按周内触及后站稳判定。26周线向上，但收盘仍高出14.67%。长期均线全部向上，最近的5月线仍高12.95%，本周没有长期买点。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "全球日用消费品品牌组合，需求相对稳定，定价权较好，是比较典型的防御型长持标的。截至2026-09-30的当季营收232.8亿美元、环比+9.8%，净利润47.3亿美元、环比+55.4%；前一季利润基数偏低，环比不宜单独解读，同比营收+4.0%、利润+0.8%，增长平稳。毛利率50.6%。最近十二个月自由现金流约126亿美元，经营现金流约199亿美元。"
    },
    {
      "name": "开市客（Costco）",
      "ticker": "COST",
      "yahooSymbol": "COST",
      "isPrivate": false,
      "lastClose": 1086.81,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 1067.92,
      "weekHigh": 1101.5,
      "weekBars": 3,
      "uptrend": true,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 1048.84,
          "prevValue": 1026.37,
          "prevBasis": "1周前",
          "rising": true,
          "distancePct": 3.6198,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 942.98,
          "prevValue": 929.91,
          "prevBasis": "4周前",
          "rising": true,
          "distancePct": 15.2523,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 936.85,
          "risingVs1w": true
        },
        "sma5m": {
          "name": "5月线",
          "value": 959.37,
          "prevValue": 923.43,
          "prevBasis": "1月前",
          "rising": true,
          "distancePct": 13.2838,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 935.36,
          "prevValue": 896.75,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": 16.1919,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 722.49,
          "prevValue": 695.96,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 50.4257,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 771.4,
          "prevValue": 658.72,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 40.8872,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": 3.6198,
        "sma26w": 15.2523,
        "sma5m": 13.2838,
        "sma5q": 16.1919,
        "sma60m": 50.4257,
        "sma5y": 40.8872
      },
      "midTerm": {
        "triggered": true,
        "type": "sma5w_in_uptrend",
        "types": [
          "sma5w_in_uptrend"
        ],
        "note": "26周线向上，但收盘距26周线 15.25%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线向上，收盘距该线 13.28%，本周未踩线；5季线向上，收盘距该线 16.19%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 50.43%，本周未踩线；对照用年线SMA5为 771.40，距该线 40.89%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "mid_only",
      "proximityScore": 3.6198,
      "rankScore": 2003.6198,
      "rank": 7,
      "summary": "中期触发上升趋势中的5周线买点：本周最低价1067.92美元距5周线1048.84美元约+1.82%，进入±2%接近带后收盘1086.81美元站稳；收盘距5周线+3.62%，属于周内接近而非收盘踩线。26周线向上，但收盘仍高出15.25%。长期均线全部向上且距离更远（5月线+13.28%），本周没有长期买点。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "会员制仓储零售依靠价格纪律与高续费率形成护城河，盈利不依赖高加价，而依赖会员费与周转。截至2026-08-31前后的最近一季营收957.2亿美元、净利润30.0亿美元，环比增幅很大，主要因为开市客部分财季约为16周、其余约12周，不能把约36%的环比直接读成需求跳升；更有参考意义的是同比营收+11.1%、利润+15.0%。毛利率约12.8%、净利率约3.0%，符合其模式。最近十二个月经营现金流约158亿美元，自由现金流约68亿美元。"
    },
    {
      "name": "Alphabet",
      "ticker": "GOOGL",
      "yahooSymbol": "GOOGL",
      "isPrivate": false,
      "lastClose": 273.1,
      "lastCloseDate": "2026-11-25",
      "currency": "USD",
      "weekLow": 262.73,
      "weekHigh": 285.14,
      "weekBars": 3,
      "uptrend": false,
      "uptrendDefinition": "close_above_sma26w_and_sma26w_rising_vs_4w",
      "uptrendNote": null,
      "mas": {
        "sma5w": {
          "name": "5周线",
          "value": 279.76,
          "prevValue": 289.18,
          "prevBasis": "1周前",
          "rising": false,
          "distancePct": -2.3792,
          "sample": 987,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma26w": {
          "name": "26周线（半年线）",
          "value": 334.11,
          "prevValue": 351.04,
          "prevBasis": "4周前",
          "rising": false,
          "distancePct": -18.2616,
          "sample": 987,
          "required": 26,
          "enoughHistory": true,
          "note": null,
          "prevValue1w": 338.22,
          "risingVs1w": false
        },
        "sma5m": {
          "name": "5月线",
          "value": 318.41,
          "prevValue": 335.22,
          "prevBasis": "1月前",
          "rising": false,
          "distancePct": -14.2303,
          "sample": 227,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma5q": {
          "name": "5季线",
          "value": 314.78,
          "prevValue": 308.66,
          "prevBasis": "1季前",
          "rising": true,
          "distancePct": -13.2419,
          "sample": 76,
          "required": 5,
          "enoughHistory": true,
          "note": null
        },
        "sma60m": {
          "name": "5年线（月线SMA60）",
          "value": 185.08,
          "prevValue": 177.12,
          "prevBasis": "3个月前",
          "rising": true,
          "distancePct": 47.5593,
          "sample": 227,
          "required": 60,
          "enoughHistory": true,
          "note": null
        },
        "sma5y": {
          "name": "年线SMA5（对照）",
          "value": 199.89,
          "prevValue": 173.97,
          "prevBasis": "上一年末的年线SMA5",
          "rising": true,
          "distancePct": 36.6239,
          "sample": 19,
          "required": 5,
          "enoughHistory": true,
          "note": null
        }
      },
      "distanceToMas": {
        "sma5w": -2.3792,
        "sma26w": -18.2616,
        "sma5m": -14.2303,
        "sma5q": -13.2419,
        "sma60m": 47.5593,
        "sma5y": 36.6239
      },
      "midTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "26周线向下，收盘距26周线 -18.26%，不记为半年线买点；未处于上升趋势，收盘距5周线 -2.38%"
      },
      "longTerm": {
        "triggered": false,
        "type": null,
        "types": [],
        "note": "5月线未向上，收盘距该线 -14.23%；5季线向上，收盘距该线 -13.24%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 47.56%，本周未踩线；对照用年线SMA5为 199.89，距该线 36.62%（向上），买点判定以月线SMA60为准"
      },
      "rankTier": "none",
      "proximityScore": 47.5593,
      "rankScore": 3047.5593,
      "rank": 8,
      "summary": "本周没有中期或长期买点。26周线与5月线均向下，收盘273.10美元分别低于两者18.26%和14.23%，属于中期趋势尚未修复，而不是靠近买点。5季线仍向上，但收盘已低于该线13.24%，尚未进入±2%触发带。5年线向上，收盘仍高出47.56%。在推荐名单中，它是距离有效买点最远的一个。",
      "history": {
        "firstDateUsed": "2008-01-02",
        "nDaily": 4756,
        "nWeekly": 987,
        "nMonthly": 227,
        "nQuarterly": 76,
        "nYearly": 19
      },
      "rationale": "搜索、YouTube与云是仍然很宽的现金流护城河，广告与云业务能穿越多年周期，但短期利润会受一次性项目和资本开支扰动。截至2026-09-30的当季营收1275.8亿美元、环比+6.5%，同比营收+24.7%，毛利率60.9%。GAAP净利润波动很大：2026年二季度为1121亿美元，三季度回落至262亿美元；三季度每股收益2.12美元，低于预期3.01美元。衡量质量时更宜看营收、经营利润率和经营现金流。最近十二个月经营现金流约1796亿美元，自由现金流为负约12亿美元，同样受到资本开支影响。"
    }
  ],
  "midTermTriggers": [
    {
      "list": "userList",
      "name": "麦当劳",
      "ticker": "MCD",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 283.5,
      "note": "26周线向上，但收盘距26周线 7.69%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "userList",
      "name": "可口可乐",
      "ticker": "KO",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 97.59,
      "note": "26周线向上，但收盘距26周线 10.98%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "userList",
      "name": "伯克希尔哈撒韦B股",
      "ticker": "BRK.B",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 579.32,
      "note": "26周线向上，但收盘距26周线 11.81%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "userList",
      "name": "苹果",
      "ticker": "AAPL",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 355.58,
      "note": "26周线向上，但收盘距26周线 9.38%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "微软",
      "ticker": "MSFT",
      "type": "pullback_to_sma26w",
      "types": [
        "pullback_to_sma26w"
      ],
      "lastClose": 489.93,
      "note": "回调到26周线（半年线）并站稳（判定方式：week_tag_and_hold），且26周线向上；已处于上升趋势，但收盘距5周线 -3.85%，本周未踩线"
    },
    {
      "list": "recommendedList",
      "name": "强生",
      "ticker": "JNJ",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 273.94,
      "note": "26周线向上，但收盘距26周线 5.38%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "标普全球",
      "ticker": "SPGI",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 460.74,
      "note": "26周线向上，但收盘距26周线 8.46%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "Visa",
      "ticker": "V",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 424.39,
      "note": "26周线向上，但收盘距26周线 13.94%，本周未踩线；处于上升趋势中的5周线买点（判定方式：close_within_2pct；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "废物管理（Waste Management）",
      "ticker": "WM",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 247.29,
      "note": "26周线向上，但收盘距26周线 9.71%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "宝洁",
      "ticker": "PG",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 173.23,
      "note": "26周线向上，但收盘距26周线 14.67%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    },
    {
      "list": "recommendedList",
      "name": "开市客（Costco）",
      "ticker": "COST",
      "type": "sma5w_in_uptrend",
      "types": [
        "sma5w_in_uptrend"
      ],
      "lastClose": 1086.81,
      "note": "26周线向上，但收盘距26周线 15.25%，本周未踩线；处于上升趋势中的5周线买点（判定方式：week_tag_and_hold；上升趋势定义：close_above_sma26w_and_sma26w_rising_vs_4w）"
    }
  ],
  "longTermTriggers": [
    {
      "list": "userList",
      "name": "麦当劳",
      "ticker": "MCD",
      "type": "sma60m",
      "types": [
        "sma60m"
      ],
      "lastClose": 283.5,
      "note": "5月线向上，收盘距该线 8.79%，本周未踩线；价格已接近5季线（week_tag_and_hold），但该均线未向上，不记为长期买点；触及5年线（月线SMA60）且该均线向上（判定方式：week_tag_and_hold）；对照用年线SMA5为 275.94，距该线 2.74%（向上），买点判定以月线SMA60为准"
    },
    {
      "list": "userList",
      "name": "VOO（标普500 ETF）",
      "ticker": "VOO",
      "type": "sma5q",
      "types": [
        "sma5q"
      ],
      "lastClose": 658.87,
      "note": "5月线未向上，收盘距该线 -4.30%；触及5季线且该均线向上（判定方式：close_within_2pct）；5年线（月线SMA60）向上，收盘距该线 35.57%，本周未踩线；对照用年线SMA5为 512.96，距该线 28.45%（向上），买点判定以月线SMA60为准"
    },
    {
      "list": "recommendedList",
      "name": "微软",
      "ticker": "MSFT",
      "type": "sma5m",
      "types": [
        "sma5m"
      ],
      "lastClose": 489.93,
      "note": "触及5月线且该均线向上（判定方式：close_within_2pct）；5季线未向上，收盘距该线 10.29%；5年线（月线SMA60）向上，收盘距该线 30.62%，本周未踩线；对照用年线SMA5为 396.86，距该线 23.45%（向上），买点判定以月线SMA60为准"
    },
    {
      "list": "recommendedList",
      "name": "强生",
      "ticker": "JNJ",
      "type": "sma5m",
      "types": [
        "sma5m"
      ],
      "lastClose": 273.94,
      "note": "触及5月线且该均线向上（判定方式：week_tag_and_hold）；5季线向上，收盘距该线 11.16%，本周未踩线；5年线（月线SMA60）向上，收盘距该线 61.12%，本周未踩线；对照用年线SMA5为 183.26，距该线 49.48%（向上），买点判定以月线SMA60为准"
    }
  ],
  "noBuyPointThisWeek": {
    "overall": false,
    "userList": false,
    "recommendedList": false
  }
};
