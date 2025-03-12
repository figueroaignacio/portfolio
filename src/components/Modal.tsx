// React
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export function ModalOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return isOpen && typeof document !== "undefined"
    ? createPortal(
        <div
          className={`fixed inset-0 backdrop-blur-md z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={onClose}
        />,
        document.body
      )
    : null;
}

export function ModalContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return isOpen && typeof document !== "undefined"
    ? createPortal(
        <div
          className={`fixed inset-0 flex items-center justify-center z-40 transition-transform duration-300 ${
            isOpen
              ? "scale-100 opacity-100 visible"
              : "scale-90 opacity-0 invisible"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-card border-[1px] border-border p-6 rounded-lg max-w-sm w-full mx-4 shadow-lg">
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}

export function ModalTrigger({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl hover:bg-primary-foreground duration-100 border-[1px] border-border ${className}`}
    >
      {children}
    </button>
  );
}
