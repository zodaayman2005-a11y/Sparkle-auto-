"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type Option = { value: string; label: string };

export function FormSelect({ id, name, labelId, placeholder, options, value, onChange, errorId }: {
  id: string;
  name: string;
  labelId: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  errorId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const search = useRef({ text: "", time: 0 });
  const selected = options.findIndex(option => option.value === value);
  const listId = `${id}-options`;

  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  useEffect(() => {
    if (open) root.current?.querySelector(`[id="${listId}-${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, listId]);

  function choose(index: number) {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  function keyboard(event: KeyboardEvent<HTMLButtonElement>) {
    const key = event.key;
    if (key === "Escape") {
      if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false); }
      return;
    }
    if (key === "Tab") { setOpen(false); return; }
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      if (open) choose(active);
      else { setActive(Math.max(selected, 0)); setOpen(true); }
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) {
      event.preventDefault();
      if (!open) { setOpen(true); setActive(key === "End" ? options.length - 1 : key === "Home" ? 0 : Math.max(selected, 0)); }
      else setActive(index => key === "Home" ? 0 : key === "End" ? options.length - 1 : (index + (key === "ArrowDown" ? 1 : -1) + options.length) % options.length);
      return;
    }
    if (key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = Date.now();
      search.current = { text: now - search.current.time > 700 ? key : search.current.text + key, time: now };
      const text = search.current.text.toLocaleLowerCase();
      const match = options.findIndex(option => option.label.toLocaleLowerCase().startsWith(text));
      if (match >= 0) { setOpen(true); setActive(match); }
    }
  }

  return <div className="form-select" ref={root} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  }}>
    <button ref={trigger} id={id} name={name} type="button" role="combobox"
      aria-labelledby={`${labelId} ${id}-value`} aria-haspopup="listbox" aria-expanded={open}
      aria-controls={listId} aria-activedescendant={open ? `${listId}-${active}` : undefined}
      aria-required="true" aria-invalid={!!errorId} aria-describedby={errorId}
      className="form-select-trigger" data-placeholder={selected < 0}
      onKeyDown={keyboard} onClick={() => { setActive(Math.max(selected, 0)); setOpen(!open); }}>
      <span id={`${id}-value`}>{selected < 0 ? placeholder : options[selected].label}</span>
      <svg className="form-select-chevron" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>
    </button>
    {open && <div className="form-select-menu" id={listId} role="listbox" aria-labelledby={labelId}>
      {options.map((option, index) => <div key={option.value} id={`${listId}-${index}`} role="option"
        aria-selected={index === selected} data-active={index === active} className="form-select-option"
        onPointerMove={() => setActive(index)} onMouseDown={event => event.preventDefault()}
        onClick={() => choose(index)}>
        <span>{option.label}</span><span className="form-select-check" aria-hidden="true">{index === selected ? "✓" : ""}</span>
      </div>)}
    </div>}
  </div>;
}
