import { OrderTrackingClient } from '@/components/OrderTrackingClient';

export default function OrderTrackingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ติดตามออเดอร์ (Order Tracking) | Orderly',
    description:
      'ระบบตรวจสอบและติดตามสถานะออเดอร์แบบเรียลไทม์ รองรับการค้นหาด้วยรหัสคำสั่งซื้อ ORD- และการแสดงผลทุกขนาดหน้าจอ',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OrderTrackingClient />
    </>
  );
}

