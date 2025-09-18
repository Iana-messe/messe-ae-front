"use client";

import Script from "next/script";
import { useEffect } from "react";

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export default function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  // Используем environment variable или переданный trackingId
  const GA_TRACKING_ID = trackingId || process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  useEffect(() => {
    if (!GA_TRACKING_ID) {
      console.warn(
        "Google Analytics tracking ID не найден. Добавьте NEXT_PUBLIC_GA_TRACKING_ID в environment variables."
      );
      return;
    }

    // Инициализация Google Analytics после загрузки скрипта
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [GA_TRACKING_ID]);

  // // Не загружаем Google Analytics в development режиме
  // if (process.env.NODE_ENV !== "production" || !GA_TRACKING_ID) {
  //   return null;
  // }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  );
}
