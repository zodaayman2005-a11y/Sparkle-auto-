"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Modal({
  label,
  onClose,
  children,
  kind = "media",
}: {
  label: string;
  onClose: () => void;
  children: ReactNode;
  kind?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const before = document.body.style.overflow;
    el?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      el?.close();
      document.body.style.overflow = before;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={`modal ${kind}`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-head">
        <strong>{label}</strong>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label={/[\u0600-\u06ff]/.test(label) ? "إغلاق" : "Close"}
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}

