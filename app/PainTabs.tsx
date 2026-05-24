"use client";

import { useState } from "react";

type PainItem = {
  id: string;
  pain: string;
  solution: string;
  services: string;
};

export function PainTabs({ items }: { items: PainItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="pain-tabs" data-reveal="up">
      <div className="pain-list" role="tablist" aria-label="Business pain points">
        {items.map((item, index) => (
          <button
            aria-controls={`pain-panel-${item.id}`}
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            id={`pain-tab-${item.id}`}
            key={item.id}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
          >
            <span>{item.id}</span>
            {item.pain}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`pain-tab-${current.id}`}
        className="pain-panel"
        id={`pain-panel-${current.id}`}
        role="tabpanel"
      >
        <p className="panel-kicker">Giải pháp của QEAgencygroup</p>
        <h3>{current.pain}</h3>
        <p>{current.solution}</p>
        <div>
          <span>Dịch vụ kết nối</span>
          <strong>{current.services}</strong>
        </div>
      </div>
    </div>
  );
}
