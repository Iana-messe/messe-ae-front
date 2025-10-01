"use client";

import Script from "next/script";
import { useEffect } from "react";

interface MetaPixelProps {
  pixelId?: string;
}

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  const META_PIXEL_ID = pixelId || process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    if (!META_PIXEL_ID) {
      console.warn(
        "Meta Pixel ID не найден. Добавьте NEXT_PUBLIC_META_PIXEL_ID в environment variables."
      );
      return;
    }

    // Инициализация Meta Pixel после загрузки скрипта
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [META_PIXEL_ID]);

  if (!META_PIXEL_ID) {
    return null;
  }

  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
