import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "라이프가든 | Life Garden - 화훼, 청년, 교육을 통한 비영리단체",
  description: "라이프가든은 화훼, 청년, 교육의 가치를 통합하여 개인의 성장과 사회 발전에 기여하는 비영리단체입니다. 위드아카데미, 플레이아카데미를 통해 배움이 즐거움이 되는 교육을 제공합니다.",
  keywords: "라이프가든, Life Garden, 비영리단체, 위드아카데미, 플레이아카데미, 화훼, 교육, 청년, 양유승, 식물원, 성경교육, 광주",
  authors: [{ name: "라이프가든" }],
  creator: "라이프가든",
  publisher: "라이프가든",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lifegarden.co.kr'),
  alternates: {
    canonical: 'https://lifegarden.co.kr',
  },
  openGraph: {
    title: "라이프가든 | Life Garden - 화훼, 청년, 교육을 통한 비영리단체",
    description: "라이프가든은 화훼, 청년, 교육의 가치를 통합하여 개인의 성장과 사회 발전에 기여하는 비영리단체입니다. 위드아카데미, 플레이아카데미를 통해 배움이 즐거움이 되는 교육을 제공합니다.",
    url: 'https://lifegarden.co.kr',
    siteName: '라이프가든',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '라이프가든 - Life Garden',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "라이프가든 | Life Garden - 화훼, 청년, 교육을 통한 비영리단체",
    description: "라이프가든은 화훼, 청년, 교육의 가치를 통합하여 개인의 성장과 사회 발전에 기여하는 비영리단체입니다.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://lifegarden.co.kr" />
        <meta name="google-site-verification" content="google-site-verification-code" />
        <meta name="naver-site-verification" content="naver-site-verification-code" />


        {/* Open Graph 이미지 */}
        <meta property="og:image" content="https://lifegarden.co.kr/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="라이프가든 - Life Garden" />

        {/* Twitter 카드 이미지 */}
        <meta name="twitter:image" content="https://lifegarden.co.kr/og-image.jpg" />
        <meta name="twitter:image:alt" content="라이프가든 - Life Garden" />

        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "라이프가든",
              "alternateName": "Life Garden",
              "url": "https://lifegarden.co.kr",
              "logo": "https://lifegarden.co.kr/favicon.png",
              "image": "https://lifegarden.co.kr/og-image.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "contact@lifegarden.co.kr"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "광주",
                "addressCountry": "KR"
              },
              "sameAs": [],
              "founder": {
                "@type": "Person",
                "name": "양유승"
              },
              "description": "라이프가든은 화훼, 청년, 교육의 가치를 통합하여 개인의 성장과 사회 발전에 기여하는 비영리단체입니다.",
              "keywords": "라이프가든, Life Garden, 비영리단체, 위드아카데미, 플레이아카데미, 화훼, 교육, 청년, 양유승, 식물원, 성경교육, 광주"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
