import { FormEvent } from 'react';
import { AlertCircleIcon, CloseIcon, SearchIcon, SpinnerIcon } from './Icons';

interface OrderSearchProps {
  query: string;
  error: string;
  isLoading: boolean;
  onQueryChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  onClear: () => void;
  onQuickTest: (sampleValue: string) => void;
}

const SAMPLE_SEARCHES = [
  { label: 'กำลังดำเนินการ', value: 'ORD-2587965432159-458' },
  { label: 'รอชำระเงิน', value: 'ORD-2587965432241-082' },
  { label: 'ไม่พบข้อมูล (Empty)', value: 'ORD-9999999999999-000' },
  { label: 'รหัสผิด (Error)', value: 'INV-12345' },
];

export function OrderSearch({
  query,
  error,
  isLoading,
  onQueryChange,
  onSubmit,
  onClear,
  onQuickTest,
}: OrderSearchProps) {
  return (
    <section
      aria-labelledby="order-search-heading"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102a43] via-[#173d5f] to-[#1b4970] p-5 text-white shadow-[0_20px_50px_rgba(16,42,67,0.16)] sm:p-8"
    >
      {/* Decorative geometric rings from Figma design */}
      <div
        className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border-[42px] border-[#49d3b4]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 size-52 rounded-full border-[28px] border-white/5"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <h2 id="order-search-heading" className="text-base font-bold tracking-tight text-white sm:text-lg">
            ค้นหาและตรวจสอบสถานะด้วยรหัสคำสั่งซื้อ
          </h2>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-[#6ce3c8] backdrop-blur-xs">
            <span className="size-1.5 rounded-full bg-[#49d3b4]" aria-hidden="true" />
            อัปเดตสถานะแบบเรียลไทม์
          </span>
        </div>

        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="order-number" className="mb-2.5 block text-sm font-semibold text-slate-100">
            หมายเลขออเดอร์ (Order Numbers) <span className="text-[#6ce3c8]" aria-hidden="true">*</span>
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input
                id="order-number"
                name="orderNumber"
                type="text"
                required
                autoComplete="off"
                spellCheck={false}
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="เช่น ORD-2587965432159-458"
                className={`h-13 w-full rounded-xl border bg-white pl-12 pr-11 font-mono text-sm text-slate-800 shadow-inner outline-none transition placeholder:font-sans placeholder:text-slate-400 focus:ring-4 ${
                  error
                    ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/25'
                    : 'border-transparent focus:border-[#49d3b4] focus:ring-[#49d3b4]/25'
                }`}
                aria-describedby="order-helper"
                aria-invalid={Boolean(error)}
              />
              {query && (
                <button
                  type="button"
                  onClick={onClear}
                  aria-label="ล้างข้อความในช่องค้นหา"
                  className=" absolute right-3 top-1/2 grid size-7 -translate-y-1/2 cursor-pointer place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173d5f]"
                >
                  <CloseIcon className="size-4" />
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-13 min-w-[156px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#49d3b4] px-7 text-sm font-bold text-[#102a43] shadow-[0_8px_24px_rgba(73,211,180,0.24)] transition hover:bg-[#62ddc3] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#49d3b4]/40 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isLoading ? (
                <>
                  <SpinnerIcon className="size-4 animate-spin text-[#102a43]" />
                  <span>กำลังค้นหา...</span>
                </>
              ) : (
                <>
                  <SearchIcon className="size-5" />
                  <span>ค้นหาออเดอร์</span>
                </>
              )}
            </button>
          </div>

          <div
            id="order-helper"
            role={error ? 'alert' : undefined}
            aria-live="polite"
            className={`mt-3 flex items-start gap-2 text-xs leading-5 ${
              error ? 'font-medium text-rose-200' : 'text-slate-200/90'
            }`}
          >
            {error ? (
              <AlertCircleIcon className="mt-0.5 size-4 shrink-0 text-rose-300" />
            ) : (
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#49d3b4]" aria-hidden="true" />
            )}
            <span>
              {error ||
                'คำแนะนำ: กรอกรหัสที่ขึ้นต้นด้วย ORD- ตามด้วยตัวเลขและขีดคั่น (เช่น ORD-2587965432159-458)'}
            </span>
          </div>
        </form>

        {/* Quick-test chips for effortless evaluation */}
        <div className="ux-scroll-row-dark mt-5 flex w-full max-w-full min-w-0 items-center gap-2 overflow-x-auto border-t border-white/10 pt-4 pb-1 text-xs whitespace-nowrap">
          <span className="shrink-0 font-medium text-slate-300">คลิกทดสอบด่วน:</span>
          {SAMPLE_SEARCHES.map((sample) => (
            <button
              key={sample.value}
              type="button"
              onClick={() => onQuickTest(sample.value)}
              className="shrink-0 cursor-pointer rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-slate-100 transition hover:border-[#49d3b4]/60 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49d3b4]"
            >
              {sample.label}: <span className="font-mono text-[#6ce3c8]">{sample.value}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

