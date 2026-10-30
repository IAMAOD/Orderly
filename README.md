# Orderly — ระบบติดตามสถานะออเดอร์ (Order Tracking Page)

โปรเจกต์พัฒนาหน้า **ติดตามออเดอร์ (Order Tracking Page)** ด้วย **Next.js (App Router)**, **TypeScript** และ **Tailwind CSS** โดยต่อยอดจากต้นแบบดีไซน์ **Figma Make** และยกระดับประสบการณ์ใช้งาน (UI/UX, Accessibility, Visual Hierarchy, States, Brand Identity) ด้วยแนวทางจาก **UI/UX Pro Max** และ **Logo Design Skill**

## ลิงก์ผลงานและการออกแบบ (Project & Design Links)
- **Live Demo (Vercel)**: [https://orderly-seven-ashen.vercel.app/](https://orderly-seven-ashen.vercel.app/)
- **Source Code Repository (GitHub)**: [https://github.com/IAMAOD/Orderly](https://github.com/IAMAOD/Orderly)
- **Figma UI Design (Desktop & Mobile)**: [หน้าติดตามสถานะออเดอร์ (Figma Make)](https://www.figma.com/make/xqIVhMVWt8TtVJaCvlUAPi/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B8%AD%E0%B8%AD%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C?p=f&t=TGda4xTxjWQJyAyV-0)
  - URL เต็ม: `https://www.figma.com/make/xqIVhMVWt8TtVJaCvlUAPi/หน้าติดตามสถานะออเดอร์?p=f&t=TGda4xTxjWQJyAyV-0`

---

## 1. สรุปผลงานและฟีเจอร์หลัก (Features & Problem Solving)

### 1.1 ส่วนค้นหาและกรอกข้อมูล (Order Search Input)
- **ช่องกรอกหมายเลขออเดอร์ (`Order Numbers *`)** พร้อมปุ่มค้นหาและปุ่มล้างข้อความ (`Clear`)
- **ตรวจสอบรูปแบบรหัส (Format Validation)**: รองรับรูปแบบ `ORD-` ตามด้วยตัวเลขและขีดคั่น (เช่น `ORD-2587965432159-458`) ด้วย Regular Expression (`/^ORD-\d+(?:-\d+)*$/`) และแปลงตัวพิมพ์ใหญ่ให้อัตโนมัติ
- **Helper Text & Quick Test Chips**: มีข้อความแนะนำรูปแบบการกรอกที่ถูกต้อง พร้อมปุ่มตัวอย่างสำหรับคลิกทดสอบด่วนทั้งกรณีค้นหาเจอ, กรณีไม่พบข้อมูล (Empty State) และกรณีกรอกรหัสผิดรูปแบบ (Error State)

### 1.2 ระบบป้ายสถานะออเดอร์ (Status Badge System)
ออกแบบ Component `<StatusBadge />` และส่วนแสดงคำอธิบายสถานะ `<StatusSystemShowcase />` ที่แยกแยะได้ชัดเจนทั้ง **4 สถานะ** โดยใช้ทั้ง **จุดสี + ไอคอนสื่อความหมาย (Semantic Vector Icons) + ข้อความ** เพื่อไม่ให้ใช้สีเพียงอย่างเดียวในการสื่อสาร (WCAG Accessibility):
1. **อยู่ในคิว (`In Queue / Pending`)** — โทนสีเหลืองอำพัน (`Amber`) พร้อมไอคอนนาฬิกา
2. **กำลังดำเนินการ (`In Progress`)** — โทนสีน้ำเงิน (`Blue`) พร้อมไอคอนสถานะกำลังทำงานและจุด Pulse
3. **เสร็จสิ้น (`Completed`)** — โทนสีเขียวมรกต (`Emerald`) พร้อมไอคอนเครื่องหมายถูก
4. **รอชำระเงิน (`Pending Payment / Action Required`)** — โทนสีม่วงไวโอเล็ต (`Violet`) พร้อมไอคอนบัตรชำระเงิน

### 1.3 ส่วนรายการออเดอร์และแท็บ (Order List & Tabs)
- **แยก Tab การแสดงผลชัดเจน**:
  - **ออเดอร์ปัจจุบัน (`Current Orders`)** พร้อมตัวเลขสรุปจำนวนรายการ
  - **ออเดอร์ที่ผ่านมา (`Order History`)** พร้อมตัวเลขสรุปจำนวนรายการ
- **ข้อมูลในแต่ละรายการออเดอร์ (`<OrderRow />`)**:
  - **รหัสรายการ (`Order ID`)** พร้อมปุ่ม **คัดลอก (`Copy`)** ที่แสดงสถานะ `คัดลอกแล้ว` ทั้งแบบ Tooltip และ `aria-live="polite"` สำหรับ Screen Reader
  - **วันและเวลาที่ทำรายการ** (เช่น `21/08/2026 15:42 น.`) ในแท็ก `<time>`
  - **ป้ายสถานะปัจจุบัน (`Status Badge`)**
  - **ส่วนขยายดูขั้นตอน (`Order Timeline Drawer`)**: สามารถคลิกดูลำดับขั้นตอนย่อยของแต่ละออเดอร์เพิ่มเติมได้

### 1.4 การรองรับการใช้งานทุกขนาดหน้าจอและครบทุกสถานะ (UX/UI, Responsiveness & States)
- **Responsive Design (Mobile & Desktop)**:
  - บน **Mobile (`>= 320px / 375px`)** แสดงผลรูปแบบ Stacked Card พร้อม Label กำกับทุกฟิลด์และปุ่มที่กดง่าย
  - บน **Desktop (`md / lg ขึ้นไป`)** แสดงผลรูปแบบตาราง Grid ที่มี Header กำกับชัดเจน
- **ครบทุก State การทำงาน** (พร้อมแถบ **UX State Simulator** สำหรับผู้ตรวจประเมินกดสลับดูได้ทันที):
  - **Loading State**: แสดงปุ่ม `กำลังค้นหา...` พร้อม Spinner และ Skeleton Shimmer Rows
  - **Empty State**: แสดงภาพประกอบพร้อมข้อความแนะนำเมื่อค้นหาไม่พบ และปุ่มลัดสำหรับล้างตัวกรองหรือลองค้นหารหัสตัวอย่าง
  - **Error State**: แสดงการแจ้งเตือนสีแดง (`role="alert"`, `aria-invalid="true"`) เมื่อกรอกรหัสผิดฟอร์แมต พร้อมปุ่มกดใช้รหัสตัวอย่างที่ถูกต้อง

---

## 2. การปรับแต่ง SEO และโครงสร้าง Semantic HTML (SEO & Semantic Structure)

### 2.1 จุดที่มีการปรับแต่ง SEO และเหตุผล
1. **โครงสร้าง Semantic HTML5 ครบถ้วน (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<time>`, `<footer>`)**
   - **เหตุผล**: ช่วยให้ Search Engine Crawler และเทคโนโลยีช่วยเหลือ (Screen Readers) เข้าใจโครงสร้างและบทบาทของแต่ละส่วนในหน้าเว็บได้อย่างแม่นยำ
2. **การจัดลำดับ Heading (`H1` – `H3`) อย่างเป็นระบบ**
   - `<h1>`: *ติดตามออเดอร์ของคุณ* (หัวข้อหลักเพียงหนึ่งเดียวของหน้า)
   - `<h2>`: หัวข้อระดับส่วนงาน (*ค้นหาและตรวจสอบสถานะด้วยรหัสคำสั่งซื้อ*, *รายการออเดอร์*, *ระบบป้ายสถานะออเดอร์*)
   - `<h3>`: รหัสคำสั่งซื้อแต่ละรายการ (`ORD-...`), ชื่อสถานะย่อย และหัวข้อแจ้งเตือนใน Empty/Error State
   - **เหตุผล**: สร้าง Document Outline ที่ชัดเจน ส่งผลดีต่อการจัดทำดัชนี (Indexing) และการเข้าถึงข้อมูลของผู้ใช้งาน
3. **การกำหนด Page Title, Meta Description, OpenGraph และ JSON-LD Structured Data**
   - ใช้ Next.js Metadata API ใน `src/app/layout.tsx` และเพิ่ม Schema.org (`WebPage`) ใน `src/app/page.tsx`
   - **เหตุผล**: ช่วยให้แสดงผลชื่อหน้าและคำอธิบายบนหน้าผลการค้นหา (SERP) และเมื่อแชร์ลิงก์บนโซเชียลมีเดียได้อย่างชัดเจน น่าเชื่อถือ และเพิ่มอัตราการคลิก (CTR)
4. **การใส่ `alt` Text และขนาดรูปภาพ (`width` / `height`) ที่มีความหมาย**
   - รูปภาพประกอบที่มีความหมาย (`order-tracking-illustration.svg`, `empty-order-illustration.svg`) มีการระบุ `alt` อธิบายชัดเจน ส่วนไอคอนตกแต่งมี `aria-hidden="true"`
   - **เหตุผล**: ช่วยด้าน Image SEO, รองรับผู้พิการทางสายตา และป้องกันปัญหาหน้าเว็บกระตุกขณะโหลด (Cumulative Layout Shift - CLS)
5. **การปรับปรุง Performance เบื้องต้นที่มีผลต่อ Core Web Vitals**
   - ใช้ `next/font/google` โหลดฟอนต์ `Noto Sans Thai` และ `JetBrains Mono` แบบ Self-hosted แทนการใช้ `@import` ใน CSS ที่บล็อกการเรนเดอร์ และใช้ไฟล์ภาพ Vector SVG ขนาดเล็กเพียงไม่กี่กิโลไบต์
   - **เหตุผล**: ลดเวลา First Contentful Paint (FCP) และ Largest Contentful Paint (LCP) ซึ่งเป็นปัจจัยสำคัญในการจัดอันดับ SEO

---

### 2.2 หน้า Order Tracking ควรหรือไม่ควรให้ Search Engine Index และเพราะอะไร?

คำตอบคือ **ควรแยกนโยบายการ Index ออกเป็น 2 ส่วนตามลักษณะของ URL และข้อมูล** ดังนี้:

1. **หน้า Landing / ฟอร์มค้นหาหลัก (`/order-tracking`) -> ควรให้ Index (`index, follow`)**
   - **เหตุผล**: ลูกค้าจำนวนมากมักค้นหาผ่าน Google ด้วยคำค้นหา เช่น *"ติดตามออเดอร์ [ชื่อแบรนด์]"* หรือ *"เช็คสถานะคำสั่งซื้อ"* การเปิดให้ Search Engine Index หน้าฟอร์มค้นหาหลักจะช่วยให้ลูกค้าเข้าถึงหน้าตรวจสอบสถานะได้รวดเร็วขึ้น ลดภาระของทีม Customer Support และสร้างความน่าเชื่อถือให้กับแบรนด์
2. **หน้าผลลัพธ์การค้นหารายออเดอร์ หรือ URL ที่มีพารามิเตอร์รหัสคำสั่งซื้อ (`/order-tracking?id=ORD-...` หรือ `/orders/ORD-...`) -> ไม่ควรให้ Index (`noindex, nofollow`)**
   - **เหตุผลด้านความเป็นส่วนตัวและความปลอดภัย (Data Privacy / PDPA)**: ข้อมูลสถานะคำสั่งซื้อ วันเวลา รายการสินค้า และยอดชำระ เป็นข้อมูลเฉพาะของลูกค้าแต่ละราย ไม่ควรปรากฏบนผลการค้นหาสาธารณะ
   - **เหตุผลด้านคุณภาพ SEO และ Crawl Budget**: หน้าผลลัพธ์ของแต่ละเลข Order ID มีโครงสร้างซ้ำกันเป็นจำนวนมาก (Duplicate / Thin Content) และไม่มีคุณค่าต่อผู้ค้นหาคนอื่น การตั้งค่า `noindex` สำหรับหน้าผลลัพธ์รายบุคคลจะช่วยรักษา Crawl Budget ของเว็บไซต์ให้โฟกัสเฉพาะหน้าหลักที่มีคุณภาพสูง

---

## 3. โครงสร้างโปรเจกต์ (Project Structure)

```text
c:\OrderTracking
├── public/
│   ├── order-tracking-illustration.svg   # ภาพประกอบส่วนหัวพร้อมขนาดและ alt text
│   └── empty-order-illustration.svg      # ภาพประกอบกรณีไม่พบข้อมูล (Empty State)
├── src/
│   ├── app/
│   │   ├── globals.css                   # ตั้งค่า Tailwind CSS และ Reduced Motion
│   │   ├── layout.tsx                    # Root Layout, Fonts, SEO Metadata, Header & Footer
│   │   └── page.tsx                      # หน้าหลัก Order Tracking และ JSON-LD Schema
│   ├── components/
│   │   ├── Icons.tsx                     # ชุด Vector SVG Icons มาตรฐานเดียวกัน
│   │   ├── OrderRow.tsx                  # แถวรายการออเดอร์ ปุ่มคัดลอก และ Timeline ย่อย
│   │   ├── OrderSearch.tsx               # ฟอร์มค้นหาออเดอร์ Validation และปุ่มทดสอบด่วน
│   │   ├── OrderTrackingClient.tsx       # การจัดการ State, Tabs, Filter และ UX State Simulator
│   │   └── StatusBadge.tsx               # ป้ายสถานะ 4 สถานะ และส่วนคำอธิบายระบบป้ายสถานะ
│   ├── data/
│   │   └── orders.ts                     # ข้อมูลรายการออเดอร์จำลอง และตั้งค่าสี/ข้อความของ 4 สถานะ
│   └── types/
│       └── order.ts                      # TypeScript Interfaces สำหรับ Order และ Status
├── design-system/
│   └── orderly-tracking/MASTER.md        # เอกสาร Design System ที่สร้างด้วยสกิล ui-ux-pro-max
└── README.md                             # เอกสารสรุปผลงาน แนวทางแก้ปัญหา SEO และวิธีรันโปรเจกต์
```

---

## 4. วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

1. **ติดตั้ง Dependencies**
   ```bash
   npm install
   ```

2. **รันโหมดพัฒนา (Development Server)**
   ```bash
   npm run dev
   ```
   จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

3. **ทดสอบการ Build สำหรับใช้งานจริง (Production Build)**
   ```bash
   npm run build
   npm run start
   ```

