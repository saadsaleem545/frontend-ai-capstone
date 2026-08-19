import { useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs";
import Disclosure from "./Disclosure";

export default function Playground() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Accessible Component Playground</h1>

      <section style={{ marginTop: "2rem" }}>
        <h2>1. Modal Dialog</h2>

        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open modal
        </button>

        <Modal
          isOpen={isModalOpen}
          title="Example Modal"
          onClose={() => setIsModalOpen(false)}
        >
          <p>
            This modal demonstrates keyboard focus management and Escape-to-close
            behavior.
          </p>

          <input
            type="text"
            placeholder="Test focus inside modal"
            aria-label="Test input"
          />
        </Modal>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>2. Tabs</h2>

        <Tabs
          tabs={[
            {
              id: "profile",
              label: "Profile",
              content: <p>Profile settings content.</p>,
            },
            {
              id: "preferences",
              label: "Preferences",
              content: <p>Preferences settings content.</p>,
            },
            {
              id: "notifications",
              label: "Notifications",
              content: <p>Notification settings content.</p>,
            },
          ]}
        />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>3. Disclosure</h2>

        <Disclosure title="Show accessibility details">
          <p>
            This content can be expanded and collapsed using the disclosure
            button.
          </p>
        </Disclosure>
      </section>
    </main>
  );
}