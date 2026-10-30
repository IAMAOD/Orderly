import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Noto_Sans_Thai } from 'next/font/google';
import { OrderlyLogoMark, OrderlyWordmark } from '@/components/Icons';
import './globals.css';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#102a43',
};

export const metadata: Metadata = {
  title: 'ติดตามออเดอร์ (Order Tracking) | Orderly ศูนย์ตรวจสอบสถานะคำสั่งซื้อ',
  description:
    'ตรวจสอบและติดตามสถานะออเดอร์ของคุณแบบเรียลไทม์ด้วยรหัสคำสั่งซื้อ (ORD-) ดูสถานะอยู่ในคิว กำลังดำเนินการ รอชำระเงิน และประวัติคำสั่งซื้อที่เสร็จสิ้นแล้ว',
  keywords: [
    'ติดตามออเดอร์',
    'Order Tracking',
    'เช็คสถานะคำสั่งซื้อ',
    'ตรวจสอบสถานะออเดอร์',
    'Orderly',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ติดตามออเดอร์ (Order Tracking) | Orderly',
    description:
      'ตรวจสอบสถานะคำสั่งซื้อของคุณได้ง่าย ๆ เพียงกรอกหมายเลขออเดอร์ รองรับทั้ง Desktop และ Mobile',
    type: 'website',
    locale: 'th_TH',
    siteName: 'Orderly Tracking Center',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#f5f8fb] text-slate-900 antialiased">
        {/* Skip link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#49d3b4] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[#102a43] focus:shadow-lg"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        {/* Semantic Header & Navigation */}
        <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#102a43]/95 text-white backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-8 sm:py-3.5 lg:px-10">
            <a
              href="#main-content"
              className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49d3b4] sm:gap-3"
              aria-label="Orderly หน้าหลักศูนย์ติดตามสถานะออเดอร์"
            >
              <OrderlyLogoMark className="size-8 shrink-0 rounded-xl shadow-[0_8px_20px_rgba(73,211,180,0.25)] transition-transform duration-200 group-hover:scale-105 sm:size-9" />
              <div className="min-w-0">
                <OrderlyWordmark className="h-3.5 w-auto text-white sm:h-4" />
                <span className="mt-0.5 block truncate text-[10px] text-slate-300 sm:hidden">
                  ติดตามสถานะออเดอร์
                </span>
              </div>
            </a>

            <nav aria-label="เมนูหลัก" className="flex min-w-0 items-center gap-2.5 sm:gap-6">
              <a
                href="#order-search-heading"
                className="whitespace-nowrap rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-slate-100 transition hover:bg-white/15 hover:text-[#49d3b4] sm:bg-transparent sm:p-0 sm:text-sm sm:text-slate-200"
              >
                ค้นหาออเดอร์
              </a>
              <a
                href="#orders-list-heading"
                className="whitespace-nowrap rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-slate-100 transition hover:bg-white/15 hover:text-[#49d3b4] sm:bg-transparent sm:p-0 sm:text-sm sm:text-slate-200"
              >
                รายการออเดอร์
              </a>
              <a
                href="#status-system-heading"
                className="hidden whitespace-nowrap text-sm font-medium text-slate-200 transition hover:text-[#49d3b4] md:inline"
              >
                คำอธิบายสถานะ
              </a>
              <span className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300 lg:inline-flex">
                <span className="size-2 rounded-full bg-[#49d3b4]" aria-hidden="true" />
                ศูนย์ติดตามสถานะออเดอร์
              </span>
            </nav>
          </div>
        </header>

        <div className="w-full min-w-0 flex-1 overflow-x-hidden">{children}</div>

        {/* Semantic Footer */}
        <footer className="mt-14 border-t border-slate-200/80 bg-white py-6 text-xs text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-8 lg:px-10">
            <p>© 2026 Orderly Tracking System. พัฒนาด้วย Next.js และ Tailwind CSS ตามมาตรฐาน Semantic HTML & WCAG AA</p>
            <p className="text-slate-400">รูปแบบรหัสที่รองรับ: ORD-ตามด้วยตัวเลข (เช่น ORD-2587965432159-458)</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

