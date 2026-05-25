"use client";

import { useState } from "react";

const funnelMetrics = [
  {
    label: "Strategy",
    value: "100%",
    detail: "Roadmap hoạch định chính xác",
  },
  {
    label: "Assets",
    value: ">90",
    detail: "Core Web Vitals cho Web/App",
  },
  {
    label: "Traffic",
    value: "+150%",
    detail: "Target Traffic đúng tệp",
  },
  {
    label: "Conversion",
    value: "+35%",
    detail: "Conversion Rate toàn phễu",
  },
  {
    label: "ROI",
    value: "X3-X5",
    detail: "ROI cam kết theo dòng tiền ads",
  },
];

const services = [
  "Strategy",
  "Content",
  "Design",
  "Video",
  "Development",
  "Advertising",
  "KOL/KOC",
];

const process = ["Audit", "Assets", "Launch", "Measure", "Optimize"];

const tickerItems = [
  "CASE STUDY: +45% Tỷ lệ chuyển đổi Lead cho ngành BĐS",
  "LATEST WORK: E-commerce Next.js đạt 98 điểm PageSpeed",
  "PAID ADS: CAC giảm 30% cho đối tác F&B",
];

export function HeroFunnel() {
  const [view, setView] = useState<"services" | "process">("services");

  return (
    <div
      className="hero-panel funnel-panel"
      aria-label="Live funnel metrics"
      data-reveal="right"
    >
      <div className="panel-top">
        <span>Live Funnel Metrics</span>
        <strong>Realtime</strong>
      </div>

      <div className="funnel-stack">
        {funnelMetrics.map((item) => (
          <div className="funnel-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.detail}</small>
          </div>
        ))}
      </div>

      <div className="metric-grid">
        <button
          className={view === "services" ? "is-active" : ""}
          onClick={() => setView("services")}
          type="button"
        >
          <strong>07</strong>
          <span>Nhóm năng lực cốt lõi</span>
          <small>Hợp nhất Marketing & Công nghệ.</small>
        </button>
        <button
          className={view === "process" ? "is-active" : ""}
          onClick={() => setView("process")}
          type="button"
        >
          <strong>5</strong>
          <span>Bước vận hành tăng trưởng</span>
          <small>Chuẩn hóa từ Đo lường đến Tối ưu.</small>
        </button>
      </div>

      <div className="insight-panel" aria-live="polite">
        {(view === "services" ? services : process).map((item, index) => (
          <span key={item}>
            {String(index + 1).padStart(2, "0")} {item}
          </span>
        ))}
      </div>

      <div className="ticker-card" aria-label="Live case study ticker">
        <span className="pulse" />
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
