import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511990212279?text=Ol%C3%A1%2C%20cheguei%20pelo%20site%20da%20CCN%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
