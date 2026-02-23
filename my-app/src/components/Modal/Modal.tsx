import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom"

type ModalProps = {
    title?: string;
    content?: string;
    isVisible?: boolean;
}

export const Modal = ({ title, content, isVisible = false, children }: PropsWithChildren<ModalProps>) => {
    if (!isVisible) return null;

    return createPortal(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow">
            {title && <h2>{title}</h2>}
            {content && <p>{content}</p>}
            {children}
        </div>,
        document.getElementById("modals")!
    )
}