import { useState } from 'react';
import { Order } from '@/types/order';
import { CheckIcon, ChevronDownIcon, ClockIcon, CopyIcon } from './Icons';
import { StatusBadge } from './StatusBadge';

interface OrderRowProps {
  order: Order;
  copied: boolean;
  onCopy: (id: string) => void;
  defaultExpanded?: boolean;
}

export function OrderRow({ order, copied, onCopy, defaultExpanded = false }: OrderRowProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <article className="border-b border-slate-100 transition-colors last:border-b-0 hover:bg-slate-50/75">
      <div className="grid gap-4 px-5 py-5 md:grid-cols-[1.6fr_1.05fr_0.95fr_auto] md:items-center md:px-7">
        {/* Column 1: Order ID + Copy Button */}
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 md:hidden">
            หมายเลขออเดอร์ (Order ID)
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-mono text-[13px] font-bold tracking-tight text-[#102a43] sm:text-sm">
              {order.id}
            </h3>
            <button
              type="button"
              onClick={() => onCopy(order.id)}
              className={`group relative inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                copied
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200/80 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800'
              }`}
              aria-label={`คัดลอกหมายเลขออเดอร์ ${order.id}`}
            >
              {copied ? (
                <>
                  <CheckIcon className="size-3.5 text-emerald-600" />
                  <span>คัดลอกแล้ว</span>
                </>
              ) : (
                <>
                  <CopyIcon className="size-3.5" />
                  <span className="sr-only sm:not-sr-only">คัดลอก</span>
                </>
              )}
              <span
                role="status"
                aria-live="polite"
                className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[#102a43] px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-white shadow-md transition ${
                  copied ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                }`}
              >
                {copied ? `คัดลอก ${order.id} แล้ว` : ''}
              </span>
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-500">{order.serviceName}</p>
        </div>

        {/* Column 2: Transaction Date & Time */}
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 md:hidden">
            วันและเวลาที่ทำรายการ
          </p>
          <div className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <ClockIcon className="size-3.5 text-slate-400" />
            <time dateTime={order.date}>{order.date}</time>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">ยอดสุทธิ: {order.amount}</p>
        </div>

        {/* Column 3: Status Badge */}
        <div className="flex items-center justify-between md:justify-end">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 md:hidden">
            สถานะปัจจุบัน
          </span>
          <StatusBadge status={order.status} />
        </div>

        {/* Column 4: Expand Timeline Toggle */}
        <div className="flex justify-end border-t border-slate-100 pt-3 md:border-t-0 md:pt-0">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-label={expanded ? `ซ่อนรายละเอียดของ ${order.id}` : `ดูรายละเอียดขั้นตอนของ ${order.id}`}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#148e7a] transition hover:bg-[#dff8f1]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#148e7a]"
          >
            <span className="md:sr-only lg:not-sr-only">{expanded ? 'ซ่อนขั้นตอน' : 'ดูขั้นตอน'}</span>
            <ChevronDownIcon
              className={`size-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Order Progress Timeline */}
      {expanded && (
        <div className="border-t border-slate-100 bg-slate-50/90 px-5 py-4 md:px-7">
          <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-xs font-semibold text-[#102a43]">
              หมายเหตุสถานะ: <span className="font-normal text-slate-600">{order.estimatedNote}</span>
            </p>
            <span className="font-mono text-xs font-semibold text-slate-600">ยอดชำระ: {order.amount}</span>
          </div>
          <ol className="grid gap-3 sm:grid-cols-4" aria-label={`ลำดับขั้นตอนของออเดอร์ ${order.id}`}>
            {order.steps.map((step, index) => (
              <li
                key={step.label}
                className={`relative flex items-start gap-2.5 rounded-xl border p-3 text-xs ${
                  step.current
                    ? 'border-[#148e7a]/40 bg-[#f0fdf9] text-[#102a43] shadow-2xs'
                    : step.done
                      ? 'border-slate-200/80 bg-white text-slate-700'
                      : 'border-slate-200/50 bg-slate-100/60 text-slate-400'
                }`}
              >
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                    step.done
                      ? 'bg-[#148e7a] text-white'
                      : step.current
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {step.done ? '✓' : index + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug">{step.label}</p>
                  {step.time && <p className="mt-0.5 text-[11px] text-slate-500">{step.time}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

