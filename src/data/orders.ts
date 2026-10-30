import { Order, OrderStatus, StatusMetadata } from '@/types/order';

export const ORDERS_DATA: Order[] = [
  {
    id: 'ORD-2587965432159-458',
    date: '21/08/2026 15:42 น.',
    status: 'processing',
    group: 'current',
    serviceName: 'แพ็กเกจบริการด่วนพิเศษ (Express Fulfillment)',
    estimatedNote: 'กำลังดำเนินการตรวจสอบและจัดเตรียมรายการ คาดว่าจะเสร็จสิ้นภายในวันนี้',
    amount: '฿1,450.00',
    steps: [
      { label: 'สร้างคำสั่งซื้อสำเร็จ', time: '21/08/2026 15:42 น.', done: true },
      { label: 'ชำระเงินเรียบร้อยแล้ว', time: '21/08/2026 15:44 น.', done: true },
      { label: 'กำลังดำเนินการจัดเตรียม', time: '21/08/2026 15:50 น.', done: false, current: true },
      { label: 'ดำเนินการเสร็จสิ้น', done: false },
    ],
  },
  {
    id: 'ORD-2587965432198-614',
    date: '21/08/2026 14:18 น.',
    status: 'queue',
    group: 'current',
    serviceName: 'ชุดคำสั่งซื้อมาตรฐาน (Standard Order Pack)',
    estimatedNote: 'อยู่ในลำดับคิวที่ #3 ระบบจะเริ่มดำเนินการตามลำดับอัตโนมัติ',
    amount: '฿890.00',
    steps: [
      { label: 'สร้างคำสั่งซื้อสำเร็จ', time: '21/08/2026 14:18 น.', done: true },
      { label: 'ชำระเงินเรียบร้อยแล้ว', time: '21/08/2026 14:20 น.', done: true },
      { label: 'อยู่ในคิวรอดำเนินการ', time: 'คิวลำดับที่ #3', done: false, current: true },
      { label: 'ดำเนินการเสร็จสิ้น', done: false },
    ],
  },
  {
    id: 'ORD-2587965432241-082',
    date: '20/08/2026 18:05 น.',
    status: 'payment',
    group: 'current',
    serviceName: 'บริการพรีเมียมรายเดือน (Pro Subscription)',
    estimatedNote: 'กรุณาชำระเงินเพื่อยืนยันคำสั่งซื้อและเริ่มเข้าสู่คิวการดำเนินการ',
    amount: '฿2,200.00',
    steps: [
      { label: 'สร้างคำสั่งซื้อสำเร็จ', time: '20/08/2026 18:05 น.', done: true },
      { label: 'รอการชำระเงิน (Action Required)', time: 'กรุณาชำระภายใน 24 ชม.', done: false, current: true },
      { label: 'เข้าสู่คิวและกำลังดำเนินการ', done: false },
      { label: 'ดำเนินการเสร็จสิ้น', done: false },
    ],
  },
  {
    id: 'ORD-2587965431064-720',
    date: '18/08/2026 10:32 น.',
    status: 'completed',
    group: 'history',
    serviceName: 'แพ็กเกจบริการด่วนพิเศษ (Express Fulfillment)',
    estimatedNote: 'ดำเนินการจัดส่งและส่งมอบรายการเสร็จสมบูรณ์แล้ว',
    amount: '฿1,290.00',
    steps: [
      { label: 'สร้างคำสั่งซื้อสำเร็จ', time: '18/08/2026 10:32 น.', done: true },
      { label: 'ชำระเงินเรียบร้อยแล้ว', time: '18/08/2026 10:33 น.', done: true },
      { label: 'ดำเนินการจัดเตรียมสำเร็จ', time: '18/08/2026 11:05 น.', done: true },
      { label: 'เสร็จสิ้นสมบูรณ์', time: '18/08/2026 11:20 น.', done: true, current: true },
    ],
  },
  {
    id: 'ORD-2587965429853-315',
    date: '12/08/2026 09:14 น.',
    status: 'completed',
    group: 'history',
    serviceName: 'ชุดคำสั่งซื้อมาตรฐาน (Standard Order Pack)',
    estimatedNote: 'ดำเนินการจัดส่งและส่งมอบรายการเสร็จสมบูรณ์แล้ว',
    amount: '฿650.00',
    steps: [
      { label: 'สร้างคำสั่งซื้อสำเร็จ', time: '12/08/2026 09:14 น.', done: true },
      { label: 'ชำระเงินเรียบร้อยแล้ว', time: '12/08/2026 09:16 น.', done: true },
      { label: 'ดำเนินการจัดเตรียมสำเร็จ', time: '12/08/2026 09:45 น.', done: true },
      { label: 'เสร็จสิ้นสมบูรณ์', time: '12/08/2026 10:02 น.', done: true, current: true },
    ],
  },
];

export const STATUS_CONFIG: Record<OrderStatus, StatusMetadata> = {
  queue: {
    label: 'อยู่ในคิว',
    englishLabel: 'In Queue / Pending',
    description: 'คำสั่งซื้อได้รับการยืนยันแล้ว และกำลังรอถึงลำดับคิวเพื่อเริ่มดำเนินการ',
    badgeClass: 'bg-amber-50 text-amber-800 ring-amber-300/80 shadow-xs',
    dotClass: 'bg-amber-500',
    cardBorderClass: 'hover:border-amber-300/80',
    iconBgClass: 'bg-amber-100 text-amber-700',
  },
  processing: {
    label: 'กำลังดำเนินการ',
    englishLabel: 'In Progress',
    description: 'เจ้าหน้าที่หรือระบบกำลังดำเนินการจัดการคำสั่งซื้อของคุณอย่างเร่งด่วน',
    badgeClass: 'bg-blue-50 text-blue-800 ring-blue-300/80 shadow-xs',
    dotClass: 'bg-blue-600 animate-pulse motion-reduce:animate-none',
    cardBorderClass: 'hover:border-blue-300/80',
    iconBgClass: 'bg-blue-100 text-blue-700',
  },
  completed: {
    label: 'เสร็จสิ้น',
    englishLabel: 'Completed',
    description: 'คำสั่งซื้อดำเนินการเสร็จสมบูรณ์เรียบร้อยแล้ว สามารถตรวจสอบประวัติย้อนหลังได้',
    badgeClass: 'bg-emerald-50 text-emerald-800 ring-emerald-300/80 shadow-xs',
    dotClass: 'bg-emerald-600',
    cardBorderClass: 'hover:border-emerald-300/80',
    iconBgClass: 'bg-emerald-100 text-emerald-700',
  },
  payment: {
    label: 'รอชำระเงิน',
    englishLabel: 'Pending Payment / Action Required',
    description: 'รอการชำระเงินหรือยืนยันยอดเพื่อนำคำสั่งซื้อเข้าสู่กระบวนการถัดไป',
    badgeClass: 'bg-violet-50 text-violet-800 ring-violet-300/80 shadow-xs',
    dotClass: 'bg-violet-600',
    cardBorderClass: 'hover:border-violet-300/80',
    iconBgClass: 'bg-violet-100 text-violet-700',
  },
};

export const ORDER_ID_REGEX = /^ORD-\d+(?:-\d+)*$/;

