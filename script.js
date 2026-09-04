const toast = document.getElementById("toast");
const languageSelect = document.getElementById("languageSelect");

// Le garage ne se contacte pas par téléphone ni par email : tout passe par WhatsApp
// et les réseaux. Aucun champ de coordonnées classique n'est donc exposé.
const PROFILE = {
  brand: "MANDJOU CUSTOM",
  // Nom de la fiche contact : la société seule, aucun nom de personne
  vcardName: "Mandjou",
  instagram: "https://www.instagram.com/mandjou.custom/",
  tiktok: "https://www.tiktok.com/@mandjou641",
  linkedin: "https://www.linkedin.com/in/demba-cisse-b77a42260/",
  whatsapp: "https://wa.me/message/KLKCZ7DA6BYZF1",
};

const translations = {
  fr: {
    top_meta: "Covering · PPF · Vitres · Céramique",
    tagline: "Wrapping, PPF, vitres teintées. votre projet auto sur mesure",
    location: "Aalst, Belgique",
    cta_quote: "Devis gratuit sur WhatsApp",
    ig_desc: "Réalisations & avant/après",
    tt_desc: "Poses filmées en atelier",
    li_desc: "Profil pro",
    save: "Enregistrer",
    share: "Partager",
    mini_note: "Mandjou Custom • Carte digitale",
    share_text: "MANDJOU CUSTOM — Covering, PPF, vitres teintées & céramique",
    copied: "Lien copié !",
    contact_saved: "Contact prêt à enregistrer",
  },
  en: {
    top_meta: "Wrapping · PPF · Tinting · Ceramic",
    tagline: "Wrapping, PPF, window tinting. Your custom car project",
    location: "Aalst, Belgium",
    cta_quote: "Free quote on WhatsApp",
    ig_desc: "Projects & before/after",
    tt_desc: "Fittings filmed in the shop",
    li_desc: "Professional profile",
    save: "Save",
    share: "Share",
    mini_note: "Mandjou Custom • Digital card",
    share_text: "MANDJOU CUSTOM — Wrapping, PPF, tinting & ceramic coating",
    copied: "Link copied!",
    contact_saved: "Contact ready to save",
  },
  es: {
    top_meta: "Rotulado · PPF · Tintado · Cerámico",
    tagline: "Wrapping, PPF, lunas tintadas. Tu proyecto de coche a medida",
    location: "Aalst, Bélgica",
    cta_quote: "Presupuesto gratis por WhatsApp",
    ig_desc: "Trabajos y antes/después",
    tt_desc: "Montajes filmados en el taller",
    li_desc: "Perfil profesional",
    save: "Guardar",
    share: "Compartir",
    mini_note: "Mandjou Custom • Tarjeta digital",
    share_text: "MANDJOU CUSTOM — Vinilado, PPF, tintado y tratamiento cerámico",
    copied: "¡Enlace copiado!",
    contact_saved: "Contacto listo para guardar",
  },
  de: {
    top_meta: "Folierung · PPF · Tönung · Keramik",
    tagline: "Folierung, PPF, Scheibentönung. Dein maßgeschneidertes Autoprojekt",
    location: "Aalst, Belgien",
    cta_quote: "Kostenloses Angebot per WhatsApp",
    ig_desc: "Projekte & Vorher/Nachher",
    tt_desc: "Verklebungen aus der Werkstatt",
    li_desc: "Berufliches Profil",
    save: "Speichern",
    share: "Teilen",
    mini_note: "Mandjou Custom • Digitale Karte",
    share_text: "MANDJOU CUSTOM — Folierung, PPF, Scheibentönung & Keramik",
    copied: "Link kopiert!",
    contact_saved: "Kontakt bereit zum Speichern",
  },
  it: {
    top_meta: "Wrapping · PPF · Oscuramento · Ceramica",
    tagline: "Wrapping, PPF, vetri oscurati. Il tuo progetto auto su misura",
    location: "Aalst, Belgio",
    cta_quote: "Preventivo gratuito su WhatsApp",
    ig_desc: "Lavori e prima/dopo",
    tt_desc: "Applicazioni filmate in officina",
    li_desc: "Profilo professionale",
    save: "Salva",
    share: "Condividi",
    mini_note: "Mandjou Custom • Carta digitale",
    share_text: "MANDJOU CUSTOM — Wrapping, PPF, vetri oscurati e ceramica",
    copied: "Link copiato!",
    contact_saved: "Contatto pronto da salvare",
  },
  ar: {
    top_meta: "تغليف · PPF · تظليل · سيراميك",
    tagline: "تغليف، PPF، تظليل الزجاج. مشروع سيارتك حسب الطلب",
    location: "آلست، بلجيكا",
    cta_quote: "عرض سعر مجاني على واتساب",
    ig_desc: "أعمالنا وصور قبل/بعد",
    tt_desc: "عمليات التركيب داخل الورشة",
    li_desc: "الملف المهني",
    save: "حفظ",
    share: "مشاركة",
    mini_note: "Mandjou Custom • بطاقة رقمية",
    share_text: "MANDJOU CUSTOM — تغليف، PPF، تظليل وسيراميك",
    copied: "تم نسخ الرابط!",
    contact_saved: "جهة الاتصال جاهزة للحفظ",
  },
  pt: {
    top_meta: "Envelopamento · PPF · Vidros · Cerâmica",
    tagline: "Envelopamento, PPF, vidros fumados. O teu projeto auto à medida",
    location: "Aalst, Bélgica",
    cta_quote: "Orçamento grátis no WhatsApp",
    ig_desc: "Trabalhos e antes/depois",
    tt_desc: "Aplicações filmadas na oficina",
    li_desc: "Perfil profissional",
    save: "Guardar",
    share: "Partilhar",
    mini_note: "Mandjou Custom • Cartão digital",
    share_text: "MANDJOU CUSTOM — Envelopamento, PPF, vidros e cerâmica",
    copied: "Link copiado!",
    contact_saved: "Contacto pronto a guardar",
  },
  nl: {
    top_meta: "Wrapping · PPF · Ramen · Keramiek",
    tagline: "Wrapping, PPF, getinte ruiten. Jouw auto-project op maat",
    location: "Aalst, België",
    cta_quote: "Gratis offerte via WhatsApp",
    ig_desc: "Realisaties & voor/na",
    tt_desc: "Plaatsingen gefilmd in het atelier",
    li_desc: "Professioneel profiel",
    save: "Opslaan",
    share: "Delen",
    mini_note: "Mandjou Custom • Digitale kaart",
    share_text: "MANDJOU CUSTOM — Wrapping, PPF, getinte ruiten & keramiek",
    copied: "Link gekopieerd!",
    contact_saved: "Contact klaar om op te slaan",
  },
  ru: {
    top_meta: "Оклейка · PPF · Тонировка · Керамика",
    tagline: "Оклейка, PPF, тонировка. Ваш автопроект на заказ",
    location: "Алст, Бельгия",
    cta_quote: "Бесплатный расчёт в WhatsApp",
    ig_desc: "Работы и фото до/после",
    tt_desc: "Съёмки работ в мастерской",
    li_desc: "Профессиональный профиль",
    save: "Сохранить",
    share: "Поделиться",
    mini_note: "Mandjou Custom • Цифровая карта",
    share_text: "MANDJOU CUSTOM — оклейка, PPF, тонировка и керамика",
    copied: "Ссылка скопирована!",
    contact_saved: "Контакт готов к сохранению",
  },
  zh: {
    top_meta: "改色膜 · PPF · 车窗贴膜 · 镀晶",
    tagline: "改色膜、PPF、车窗贴膜。您的专属爱车方案",
    location: "比利时 阿尔斯特",
    cta_quote: "WhatsApp 免费报价",
    ig_desc: "案例与施工前后对比",
    tt_desc: "车间施工实拍",
    li_desc: "专业档案",
    save: "保存",
    share: "分享",
    mini_note: "Mandjou Custom • 数字名片",
    share_text: "MANDJOU CUSTOM — 改色膜、PPF、车窗贴膜与镀晶",
    copied: "链接已复制！",
    contact_saved: "联系人准备好保存",
  },
  ja: {
    top_meta: "ラッピング · PPF · スモーク · コーティング",
    tagline: "ラッピング、PPF、ウィンドウフィルム。あなただけのカスタムカー",
    location: "ベルギー・アールスト",
    cta_quote: "WhatsAppで無料見積もり",
    ig_desc: "施工事例とビフォーアフター",
    tt_desc: "工房での施工動画",
    li_desc: "ビジネスプロフィール",
    save: "保存",
    share: "共有",
    mini_note: "Mandjou Custom • デジタルカード",
    share_text: "MANDJOU CUSTOM — ラッピング、PPF、スモーク、コーティング",
    copied: "リンクをコピーしました！",
    contact_saved: "連絡先は保存準備完了です",
  },
  tr: {
    top_meta: "Kaplama · PPF · Cam filmi · Seramik",
    tagline: "Kaplama, PPF, cam filmi. Sana özel araç projen",
    location: "Aalst, Belçika",
    cta_quote: "WhatsApp'tan ücretsiz teklif",
    ig_desc: "Çalışmalar ve öncesi/sonrası",
    tt_desc: "Atölyede çekilen uygulamalar",
    li_desc: "Profesyonel profil",
    save: "Kaydet",
    share: "Paylaş",
    mini_note: "Mandjou Custom • Dijital kart",
    share_text: "MANDJOU CUSTOM — Kaplama, PPF, cam filmi ve seramik",
    copied: "Bağlantı kopyalandı!",
    contact_saved: "Kişi kaydedilmeye hazır",
  },
};

let currentLang = "fr";

function applyTranslations(lang) {
  const dict = translations[lang] || translations.fr;
  currentLang = translations[lang] ? lang : "fr";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("opacity-100", "translate-y-0");
  setTimeout(
    () => toast.classList.remove("opacity-100", "translate-y-0"),
    2000,
  );
}

// Partage natif, repli sur la copie du lien
document.getElementById("shareBtn").onclick = async () => {
  const dict = translations[currentLang];
  try {
    if (navigator.share) {
      await navigator.share({
        title: PROFILE.brand,
        text: dict.share_text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast(dict.copied);
    }
  } catch (e) {
    console.log(e);
  }
};

// Téléchargement vCard : fiche entreprise au nom de MANDJOU CUSTOM.
// Aucun nom de personne n'y figure, y compris dans N et NOTE.
document.getElementById("saveBtn").onclick = () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    // N vide + X-ABShowAs:COMPANY : la fiche est une entreprise, sinon Apple
    // range le nom de la marque dans le champ "Prénom".
    "N:;;;;",
    `FN:${PROFILE.vcardName}`,
    `ORG:${PROFILE.vcardName}`,
    "X-ABShowAs:COMPANY",
    "TITLE:Covering, PPF, vitres teintées & traitement céramique",
    // Ville seule : l'adresse précise de l'atelier n'est pas publique
    "ADR;TYPE=WORK:;;;Aalst;;;Belgium",
    // URL étiquetées plutôt que X-SOCIALPROFILE : Apple Contacts n'affiche ce
    // dernier que pour les services qu'il connaît, donc Instagram et TikTok
    // apparaissaient en lignes vides dans la fiche.
    `item1.URL:${PROFILE.instagram}`,
    "item1.X-ABLabel:Instagram",
    `item2.URL:${PROFILE.tiktok}`,
    "item2.X-ABLabel:TikTok",
    `item3.URL:${PROFILE.linkedin}`,
    "item3.X-ABLabel:LinkedIn",
    `NOTE:Contact WhatsApp: ${PROFILE.whatsapp}`,
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mandjou-custom.vcf";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(translations[currentLang].contact_saved);
};

languageSelect.onchange = (e) => applyTranslations(e.target.value);

// Init
applyTranslations("fr");
