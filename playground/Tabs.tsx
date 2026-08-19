import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextTab = activeTab;

    if (event.key === "ArrowRight") {
      nextTab = (activeTab + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextTab = (activeTab - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextTab = 0;
    } else if (event.key === "End") {
      nextTab = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(nextTab);

    const nextButton = document.getElementById(`tab-${tabs[nextTab].id}`);
    nextButton?.focus();
  };

  const active = tabs[activeTab];

  return (
    <div>
      <div role="tablist" aria-label="Settings sections">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        tabIndex={0}
      >
        {active.content}
      </div>
    </div>
  );
}