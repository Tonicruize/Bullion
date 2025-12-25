import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface TradingViewTickerTapeProps {
  symbols?: { proName: string; title: string }[];
}

export function TradingViewTickerTape({
  symbols = [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100" },
    { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
    { proName: "TVC:UK100", title: "UK 100" },
    { proName: "TVC:DEU40", title: "DAX 40" },
  ]
}: TradingViewTickerTapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": symbols,
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en"
      });
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, [symbols]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export function TradingViewMarketOverview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "100%",
        "height": "500",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              { "s": "FOREXCOM:SPXUSD" },
              { "s": "FOREXCOM:NSXUSD" },
              { "s": "FOREXCOM:DJI" },
              { "s": "INDEX:NKY" },
              { "s": "INDEX:DEU40" },
              { "s": "FOREXCOM:UK100" }
            ]
          },
          {
            "title": "Commodities",
            "symbols": [
              { "s": "CME_MINI:ES1!" },
              { "s": "CME:6E1!" },
              { "s": "COMEX:GC1!" },
              { "s": "NYMEX:CL1!" },
              { "s": "NYMEX:NG1!" },
              { "s": "CBOT:ZC1!" }
            ]
          },
          {
            "title": "Bonds",
            "symbols": [
              { "s": "CME:GE1!" },
              { "s": "CBOT:ZB1!" },
              { "s": "CBOT:UB1!" },
              { "s": "EUREX:FGBL1!" },
              { "s": "EUREX:FBTP1!" },
              { "s": "EUREX:FGBM1!" }
            ]
          }
        ]
      });
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export function TradingViewMiniChart({ symbol = "FX:EURUSD", description = "Euro" }: { symbol?: string, description?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (containerRef.current) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": symbol,
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": "12M",
            "colorTheme": "light",
            "isTransparent": false,
            "autosize": true,
            "largeChartUrl": ""
          });
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(script);
      }
    }, [symbol]);
  
    return (
      <div className="tradingview-widget-container h-[200px] w-full" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
