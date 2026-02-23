import { createPortal } from "react-dom"

type ModalProps = {
    title: string;
    content: string;
    isVisible?: boolean;
}

export const Modal = ({ title, content, isVisible = false }: ModalProps) => {
    if (!isVisible) return null;

    return createPortal(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>,
        document.getElementById("modals")!
    )
}