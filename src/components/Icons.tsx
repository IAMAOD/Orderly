import { OrderStatus } from '@/types/order';

export function SearchIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" strokeLinecap="round" />
    </svg>
  );
}

export function CopyIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export function CheckIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BagIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 224 128 A 96 96 0 1 1 128 32 V 76 A 52 52 0 1 0 180 128 H 224 Z"
      />
      <circle fill="currentColor" cx="188" cy="68" r="28" />
    </svg>
  );
}

export function OrderlyLogoMark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      role="img"
      aria-label="โลโก้ Orderly Orbit Pulse"
    >
      <rect x="0" y="0" width="256" height="256" rx="56" fill="#49D3B4" />
      <path
        fill="#102A43"
        d="M 208 128 A 80 80 0 1 1 128 48 V 86 A 42 42 0 1 0 170 128 H 208 Z"
      />
      <circle fill="#102A43" cx="178" cy="78" r="25" />
    </svg>
  );
}

export function OrderlyWordmark({ className = 'h-5 w-auto' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="315 70 675 116"
      fill="none"
      aria-hidden="true"
    >
      <g id="wordmark" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M 370 78 A 50 50 0 1 1 370 178 A 50 50 0 1 1 370 78 Z M 370 100 A 28 28 0 1 0 370 156 A 28 28 0 1 0 370 100 Z"
        />
        <path
          fillRule="evenodd"
          d="M 440 78 H 480 A 32 32 0 0 1 496 139.7 L 518 161.7 V 178 H 495 L 470 153 H 462 V 178 H 440 V 78 Z M 462 99 V 121 H 479 A 11 11 0 0 0 479 99 H 462 Z"
        />
        <path
          fillRule="evenodd"
          d="M 538 78 H 574 A 50 50 0 0 1 574 178 H 538 V 78 Z M 560 100 V 156 H 573 A 28 28 0 0 0 573 100 H 560 Z"
        />
        <path d="M 642 78 H 708 V 99 H 664 V 117 H 700 V 138 H 664 V 157 H 708 V 178 H 642 V 78 Z" />
        <path
          fillRule="evenodd"
          d="M 728 78 H 768 A 32 32 0 0 1 784 139.7 L 806 161.7 V 178 H 783 L 758 153 H 750 V 178 H 728 V 78 Z M 750 99 V 121 H 767 A 11 11 0 0 0 767 99 H 750 Z"
        />
        <path d="M 826 78 H 848 V 157 H 888 V 178 H 826 V 78 Z" />
        <path d="M 896 78 H 918 L 938 98 L 958 78 H 980 V 88 L 949 119 V 178 H 927 V 119 L 896 88 V 78 Z" />
      </g>
    </svg>
  );
}

export function ClockIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SpinnerIcon({ className = 'size-4 animate-spin motion-reduce:animate-none' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M12 3a9 9 0 0 1 9 9h-3a6 6 0 0 0-6-6V3Z"
      />
    </svg>
  );
}

export function AlertCircleIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StatusIcon({ status, className = 'size-3.5' }: { status: OrderStatus; className?: string }) {
  switch (status) {
    case 'queue':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'processing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" strokeLinecap="round" />
        </svg>
      );
    case 'completed':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'payment':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2.5" />
          <path d="M3 10h18" />
          <path d="M7 14h3" strokeLinecap="round" />
        </svg>
      );
  }
}

