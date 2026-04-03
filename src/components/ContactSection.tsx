import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as fallback
    const subject = encodeURIComponent(`Wiadomość od ${form.name}`);
    const body = encodeURIComponent(`Imię: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:kontakt@netsolution.pl?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t.contactTitle}<br /><span className="text-gradient">{t.contactHighlight}</span>
          </h2>
          <p className="text-muted-foreground">{t.contactSub}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 md:p-8 space-y-4 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">{t.contactName}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contactNamePh}
                required
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">{t.contactEmail}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contactEmailPh}
                required
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">{t.contactPhone}</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t.contactPhonePh}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">{t.contactMessage}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contactMessagePh}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            {t.contactSend}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <p className="text-center text-xs text-muted-foreground mb-3">{t.contactOr}</p>
          <a
            href="mailto:kontakt@netsolution.pl"
            className="glass-card flex items-center gap-4 group hover:border-primary/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Mail size={18} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-display font-medium text-foreground text-sm">netowrk.soultion@gmail.com</div>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};


