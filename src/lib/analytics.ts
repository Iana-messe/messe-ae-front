// GA helper utilities and event configuration for consistent analytics tracking.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ModalDevice = "desktop" | "mobile";

export type ModalButtonType =
  | "hero_desktop"
  | "hero_mobile_primary"
  | "hero_mobile_floating"
  | "header_desktop"
  | "home_projects_desktop"
  | "home_projects_mobile"
  | "projects_page_desktop"
  | "projects_page_mobile"
  | "article_desktop"
  | "footer_desktop"
  | "footer_mobile";

interface ModalButtonEventConfig {
  action: string;
  category: string;
  label: string;
  section: string;
  device: ModalDevice;
}

export const MODAL_BUTTON_EVENTS: Record<ModalButtonType, ModalButtonEventConfig> = {
  hero_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Hero Section - Desktop CTA",
    section: "Hero",
    device: "desktop",
  },
  hero_mobile_primary: {
    action: "open_modal",
    category: "Modal",
    label: "Hero Section - Mobile CTA",
    section: "Hero",
    device: "mobile",
  },
  hero_mobile_floating: {
    action: "open_modal",
    category: "Modal",
    label: "Hero Section - Mobile Floating CTA",
    section: "Hero",
    device: "mobile",
  },
  header_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Header CTA - Desktop",
    section: "Header",
    device: "desktop",
  },
  home_projects_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Home Projects CTA - Desktop",
    section: "Home Projects",
    device: "desktop",
  },
  home_projects_mobile: {
    action: "open_modal",
    category: "Modal",
    label: "Home Projects CTA - Mobile",
    section: "Home Projects",
    device: "mobile",
  },
  projects_page_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Projects Page CTA - Desktop",
    section: "Projects Page",
    device: "desktop",
  },
  projects_page_mobile: {
    action: "open_modal",
    category: "Modal",
    label: "Projects Page CTA - Mobile",
    section: "Projects Page",
    device: "mobile",
  },
  article_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Article CTA - Desktop",
    section: "Article",
    device: "desktop",
  },
  footer_desktop: {
    action: "open_modal",
    category: "Modal",
    label: "Footer CTA - Desktop",
    section: "Footer",
    device: "desktop",
  },
  footer_mobile: {
    action: "open_modal",
    category: "Modal",
    label: "Footer CTA - Mobile",
    section: "Footer",
    device: "mobile",
  },
};

const isGtagReady = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (!isGtagReady()) {
    return;
  }

  window.gtag!("event", eventName, parameters);
};

export const trackPageView = (url: string) => {
  if (!isGtagReady()) {
    return;
  }

  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!trackingId) {
    return;
  }

  window.gtag!("config", trackingId, {
    page_title: document.title,
    page_location: url,
  });
};

export const trackModalOpen = (type: ModalButtonType) => {
  const event = MODAL_BUTTON_EVENTS[type];

  if (!event) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[analytics] Unknown modal button type: ${type}`);
    }
    return;
  }

  trackEvent(event.action, {
    event_category: event.category,
    event_label: event.label,
    modal_section: event.section,
    modal_device: event.device,
    modal_trigger: type,
  });
};
