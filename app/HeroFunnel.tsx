"use client";

import { useState } from "react";

const funnelMetrics = [
  {
    label: "Chiến lược",
    value: "100%",
    detail: "Roadmap hoạch định chính xác",
  },
  {
    label: "Tài sản số",
    value: ">90",
    detail: "Core Web Vitals cho Web/App",
  },
  {
    label: "Traffic",
    value: "+150%",
    detail: "Lưu lượng đúng tệp mục tiêu",
  },
  {
    label: "Chuyển đổi",
    value: "+35%",
    detail: "Tỷ lệ chuyển đổi toàn phễu",
  },
  {
    label: "ROI",
    value: "X3-X5",
    detail: "Hiệu quả dòng tiền quảng cáo",
  },
];

const services = [
  "Chiến lược",
  "Nội dung",
  "Thiết kế",
  "Video",
  "Công nghệ",
  "Quảng cáo",
  "KOL/KOC",
];

const process = ["Đánh giá", "Xây dựng", "Triển khai", "Đo lường", "Tối ưu"];

const tickerItems = [
  "CASE STUDY: +45% tỷ lệ chuyển đổi lead cho ngành BĐS",
  "DỰ ÁN MỚI: E-commerce Next.js đạt 98 điểm PageSpeed",
  "QUẢNG CÁO: CAC giảm 30% cho đối tác F&B",
];

export function HeroFunnel() {
  const [view, setView] = useState<"services" | "process">("services");

  return (
    <div
      className="hero-panel funnel-panel"
      aria-label="Chỉ số phễu tăng trưởng"
      data-reveal="right"
    >
      <div className="panel-top">
        <span>Chỉ số phễu tăng trưởng</span>
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
          <small>Hợp nhất marketing và công nghệ.</small>
        </button>
        <button
          className={view === "process" ? "is-active" : ""}
          onClick={() => setView("process")}
          type="button"
        >
          <strong>5</strong>
          <span>Bước vận hành tăng trưởng</span>
          <small>Chuẩn hóa từ đo lường đến tối ưu.</small>
        </button>
      </div>

      <div className="insight-panel" aria-live="polite">
        {(view === "services" ? services : process).map((item, index) => (
          <span key={item}>
            {String(index + 1).padStart(2, "0")} {item}
          </span>
        ))}
      </div>

      <div className="ticker-card" aria-label="Case study ticker">
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
