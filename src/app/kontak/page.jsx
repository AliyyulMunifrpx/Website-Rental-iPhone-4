import React from "react";
import MainLayout from "../../components/layouts/main-layout.jsx";
import CtaSection from "../../components/home/cta-section.jsx";
import { store } from "../../data/store.js";
import ContactForm from "../../components/kontak/page.jsx";

export const metadata = {
  title: "Hubungi Kami",
  description: `Punya pertanyaan seputar sewa iPhone? Hubungi tim ${store.name} melalui WhatsApp, email, atau kunjungi lokasi kami di ${store.city}.`,
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactForm />
      <CtaSection />
    </MainLayout>
  );
}
