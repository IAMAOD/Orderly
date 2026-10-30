import { STATUS_CONFIG } from '@/data/orders';
import { OrderStatus } from '@/types/order';
import { StatusIcon } from './Icons';

interface StatusBadgeProps {
  status: OrderStatus;
  showIcon?: boolean;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, showIcon = true, size = 'md' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const sizeClass = size === 'sm' ? 'px-2.5 py-1 text-[11px] gap-1.5' : 'px-3.5 py-1.5 text-xs gap-2';

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full font-semibold ring-1 ring-inset transition-colors ${sizeClass} ${config.badgeClass}`}
      title={`${config.label} (${config.englishLabel})`}
    >
      <span className={`size-1.5 shrink-0 rounded-full ${config.dotClass}`} aria-hidden="true" />
      {showIcon && <StatusIcon status={status} className="size-3.5 shrink-0" />}
      <span>{config.label}</span>
    </span>
  );
}

export function StatusSystemShowcase({
  selectedStatus,
  onSelectStatus,
}: {
  selectedStatus: OrderStatus | 'all';
  onSelectStatus: (status: OrderStatus | 'all') => void;
}) {
  const statuses: OrderStatus[] = ['queue', 'processing', 'completed', 'payment'];

  return (
    <section aria-labelledby="status-system-heading" className="mt-12">
      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 id="status-system-heading" className="text-lg font-bold tracking-tight text-[#102a43]">
            ระบบป้ายสถานะออเดอร์ (Status Badge System)
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            แยกแยะสถานะชัดเจนด้วยสัญลักษณ์ไอคอนและคู่สีที่ผ่านเกณฑ์ความคมชัด (WCAG AA Contrast) คลิกเพื่อกรองตามสถานะ
          </p>
        </div>
        {selectedStatus !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectStatus('all')}
            className="cursor-pointer self-start text-xs font-semibold text-[#148e7a] hover:underline sm:self-auto"
          >
            แสดงทุกสถานะ
          </button>
        )}
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {statuses.map((status) => {
          const config = STATUS_CONFIG[status];
          const isSelected = selectedStatus === status;
          return (
            <button
              key={status}
              type="button"
              onClick={() => onSelectStatus(isSelected ? 'all' : status)}
              aria-pressed={isSelected}
              className={`group flex cursor-pointer flex-col items-start justify-between rounded-2xl border p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                isSelected
                  ? 'border-[#148e7a] bg-[#f0fdf9] shadow-md ring-1 ring-[#148e7a]'
                  : `border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(16,42,67,0.04)] hover:-translate-y-0.5 hover:shadow-md ${config.cardBorderClass}`
              }`}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <StatusBadge status={status} />
                <span className={`grid size-7 place-items-center rounded-lg ${config.iconBgClass}`}>
                  <StatusIcon status={status} className="size-4" />
                </span>
              </div>
              <div className="mt-3.5">
                <h3 className="text-xs font-bold tracking-wide text-slate-800">{config.englishLabel}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{config.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

