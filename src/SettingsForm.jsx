import { useState } from "react";
import {
  User,
  Bell,
  Palette,
  Shield,
  Check,
  ChevronDown,
} from "lucide-react";

/**
 * SettingsForm
 * A self-contained, dependency-light settings panel.
 * Sections: Profile, Notifications, Appearance, Privacy.
 *
 * Usage:
 *   <SettingsForm onSave={(values) => console.log(values)} />
 */

const SECTIONS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "privacy", label: "Privacy", icon: Shield },
];

const DEFAULT_VALUES = {
  name: "",
  email: "",
  bio: "",
  emailUpdates: true,
  productNews: false,
  securityAlerts: true,
  theme: "system",
  density: "comfortable",
  profileVisibility: "everyone",
  analyticsSharing: true,
};

function Toggle({ checked, onChange, label, description, id }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="min-w-0">
        <label htmlFor={id} className="block text-sm font-medium text-neutral-900 cursor-pointer">
          {label}
        </label>
        {description && (
          <p className="text-sm text-neutral-500 mt-0.5">{description}</p>
        )}
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
          checked ? "bg-neutral-900" : "bg-neutral-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function SegmentedControl({ value, onChange, options, id }) {
  return (
    <div
      role="radiogroup"
      aria-labelledby={id}
      className="inline-flex rounded-lg border border-neutral-200 bg-neutral-50 p-1"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 ${
            value === opt.value
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Select({ value, onChange, options, id }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full rounded-lg border border-neutral-200 bg-white py-2 pl-3 pr-9 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
    </div>
  );
}

function Field({ label, children, htmlFor, hint }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-neutral-900">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
    />
  );
}

function TextArea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
    />
  );
}

export default function SettingsForm({ onSave = () => {} }) {
  const [active, setActive] = useState("profile");
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [saved, setSaved] = useState(false);

  const set = (key) => (val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(values);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white">
      <form onSubmit={handleSave} className="flex flex-col md:flex-row gap-8">
        {/* Sidebar nav */}
        <nav className="md:w-48 shrink-0">
          <ul className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
            {SECTIONS.map(({ id, label, icon: Icon }) => (
              <li key={id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(id)}
                  aria-current={active === id ? "page" : undefined}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                    active === id
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel */}
        <div className="flex-1 min-w-0">
          {active === "profile" && (
            <section className="space-y-5">
              <div>
                <h2 className="text-base font-semibold text-neutral-900">Profile</h2>
                <p className="text-sm text-neutral-500 mt-0.5">
                  This information may be visible to other people.
                </p>
              </div>
              <Field label="Name" htmlFor="name">
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={(e) => set("name")(e.target.value)}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <TextInput
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={values.email}
                  onChange={(e) => set("email")(e.target.value)}
                />
              </Field>
              <Field label="Bio" htmlFor="bio" hint="Up to 160 characters.">
                <TextArea
                  id="bio"
                  rows={3}
                  maxLength={160}
                  placeholder="Tell people a little about yourself."
                  value={values.bio}
                  onChange={(e) => set("bio")(e.target.value)}
                />
              </Field>
            </section>
          )}

          {active === "notifications" && (
            <section className="space-y-1">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-neutral-900">Notifications</h2>
                <p className="text-sm text-neutral-500 mt-0.5">
                  Choose what you want to hear about, and how.
                </p>
              </div>
              <div className="divide-y divide-neutral-100">
                <Toggle
                  id="emailUpdates"
                  label="Email updates"
                  description="Weekly summary of activity on your account."
                  checked={values.emailUpdates}
                  onChange={set("emailUpdates")}
                />
                <Toggle
                  id="productNews"
                  label="Product news"
                  description="New features and occasional tips."
                  checked={values.productNews}
                  onChange={set("productNews")}
                />
                <Toggle
                  id="securityAlerts"
                  label="Security alerts"
                  description="Sign-ins from new devices or locations."
                  checked={values.securityAlerts}
                  onChange={set("securityAlerts")}
                />
              </div>
            </section>
          )}

          {active === "appearance" && (
            <section className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-neutral-900">Appearance</h2>
                <p className="text-sm text-neutral-500 mt-0.5">
                  Customize how the app looks on your device.
                </p>
              </div>
              <div>
                <span id="theme-label" className="block text-sm font-medium text-neutral-900 mb-2">
                  Theme
                </span>
                <SegmentedControl
                  id="theme-label"
                  value={values.theme}
                  onChange={set("theme")}
                  options={[
                    { value: "light", label: "Light" },
                    { value: "dark", label: "Dark" },
                    { value: "system", label: "System" },
                  ]}
                />
              </div>
              <Field label="Layout density" htmlFor="density">
                <Select
                  id="density"
                  value={values.density}
                  onChange={set("density")}
                  options={[
                    { value: "compact", label: "Compact" },
                    { value: "comfortable", label: "Comfortable" },
                    { value: "spacious", label: "Spacious" },
                  ]}
                />
              </Field>
            </section>
          )}

          {active === "privacy" && (
            <section className="space-y-6">
              <div>
                <h2 className="text-base font-semibold text-neutral-900">Privacy</h2>
                <p className="text-sm text-neutral-500 mt-0.5">
                  Control who can see your activity and data.
                </p>
              </div>
              <Field label="Profile visibility" htmlFor="visibility">
                <Select
                  id="visibility"
                  value={values.profileVisibility}
                  onChange={set("profileVisibility")}
                  options={[
                    { value: "everyone", label: "Everyone" },
                    { value: "contacts", label: "Contacts only" },
                    { value: "onlyMe", label: "Only me" },
                  ]}
                />
              </Field>
              <div className="divide-y divide-neutral-100">
                <Toggle
                  id="analyticsSharing"
                  label="Share usage analytics"
                  description="Help us improve by sharing anonymous usage data."
                  checked={values.analyticsSharing}
                  onChange={set("analyticsSharing")}
                />
              </div>
            </section>
          )}

          {/* Footer actions */}
          <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150"
            >
              Save changes
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1 text-sm text-emerald-600">
                <Check className="h-4 w-4" />
                Saved
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
