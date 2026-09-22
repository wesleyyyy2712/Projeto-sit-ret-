import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Languages,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Monitor,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  discount: string;
  description: string;
  accent: string;
  tag: string;
};

const products: Product[] = [
  { id: "chams-emulador", name: "Chams Emulador", category: "Produtos Emulador", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "NOVO", description: "Catálogo Chams para emulador. Vídeo e informações serão adicionados quando você enviar os materiais.", accent: "purple", tag: "CHAMS" },
  { id: "holograma", name: "Holograma Arma Android", category: "Produtos Android", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "NOVO", description: "Holograma Arma Android da RET CHEATS. Vídeo demonstrativo e detalhes enviados diretamente pelo atendimento.", accent: "hologram", tag: "ANDROID" },
  { id: "painel-hs", name: "Painel Android HS", category: "Produtos Android", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "DESTAQUE", description: "Painel Android HS da RET CHEATS. Os detalhes, vídeo e disponibilidade serão adicionados conforme você enviar os materiais.", accent: "green", tag: "PAINEL" },
  { id: "painel-os", name: "Painel OS", category: "Produtos Android", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "ATUALIZADO", description: "Painel OS para catálogo RET CHEATS. Esta área fica pronta para receber o vídeo e as informações do produto.", accent: "red", tag: "EXCLUSIVO" },
  { id: "holograma-ios", name: "Holograma Arma iOS", category: "Produtos iOS ", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "NOVO", description: "Holograma Arma iOS. Vídeo e detalhes serão adicionados quando você enviar o material.", accent: "hologram", tag: "IOS" },
  { id: "line-box-vida", name: " Line Box + Vida ", category: "Produtos iOS ", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "NOVO", description: "Catálogo unificado Line Box + Vida iOS. Vídeo, valor e disponibilidade serão adicionados quando você enviar os materiais.", accent: "green", tag: "LINE BOX" },
  { id: "antena-ios", name: " Antena", category: "Produtos iOS ", price: "R$ 00,00", oldPrice: "R$ 00,00", discount: "NOVO", description: "Catálogo Antena iOS. Vídeo, valor e disponibilidade serão adicionados quando você enviar os materiais.", accent: "red", tag: "ANTENA" },
];

const categories = ["Todos", "Produtos Android", "Produtos Emulador", "Produtos iOS "];
const languages = { pt: { label: "Português", flag: "🇧🇷" }, en: { label: "English", flag: "🇺🇸" }, es: { label: "Español", flag: "🇪🇸" } } as const;
const copy = {
  pt: { home: "Início", products: "Produtos", categories: "Categorias", how: "Como funciona", account: "Minha Conta", welcome: "BEM-VINDO À RET CHEATS", title: "Bem-vindo à", promo: "{t.promo}", intro: "{t.intro}", catalog: "Acessar catálogo", buy: "Como comprar", categoryTitle: "Categorias em destaque", catalogTitle: "Produtos em destaque", all: "Ver todos", official: "CATÁLOGO OFICIAL", safe: "Compra segura", support: "Suporte direto", details: "Ver detalhes" },
  en: { home: "Home", products: "Products", categories: "Categories", how: "How it works", account: "My Account", welcome: "WELCOME TO RET CHEATS", title: "Welcome to", promo: "ATTENTION, STORE PROMOTION!", intro: "Choose your favorite products and talk to our team for prices, availability and access.", catalog: "Access catalog", buy: "How to buy", categoryTitle: "Featured categories", catalogTitle: "Featured products", all: "View all", official: "OFFICIAL CATALOG", safe: "Secure purchase", support: "Direct support", details: "View details" },
  es: { home: "Inicio", products: "Productos", categories: "Categorías", how: "Cómo funciona", account: "Mi cuenta", welcome: "BIENVENIDO A RET CHEATS", title: "Bienvenido a", promo: "¡ATENCIÓN, PROMOCIÓN EN LA TIENDA!", intro: "Elige tus productos favoritos y habla con nuestro equipo para recibir precios, disponibilidad y acceso.", catalog: "Ver catálogo", buy: "Cómo comprar", categoryTitle: "Categorías destacadas", catalogTitle: "Productos destacados", all: "Ver todos", official: "CATÁLOGO OFICIAL", safe: "Compra segura", support: "Soporte directo", details: "Ver detalles" }
} as const;

function whatsappUrl(product: Product) {
  const message = `Oi, boa noite! Estou interessado no ${product.name}. Pode me passar mais informações, valor e disponibilidade?`;
  return `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Informação");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<keyof typeof copy>("pt");
  const t = copy[language];
  const visibleProducts = activeCategory === "Informação" || activeCategory === "Todos" ? products : products.filter((product) => product.category === activeCategory);

  const contact = (product: Product) => {
    toast("WhatsApp preparado", { description: "Troque o número do atendimento para abrir o PV correto." });
    window.open(whatsappUrl(product), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="ret-app">
      <div className="top-promo"><Sparkles size={14} /> OFERTA ESPECIAL <span>•</span> atendimento direto pelo WhatsApp <Sparkles size={14} /></div>
      <header className="ret-header">
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}><Menu size={23} /></button>
        <a href="#inicio" className="ret-logo"><span className="ret-avatar"><img src="/ret-cheats-avatar.png" alt="RET CHEATS" /></span><strong>RET CHEATS<small>LOJA OFICIAL</small></strong></a>
        <nav className={menuOpen ? "ret-nav is-open" : "ret-nav"}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>{t.home}</a><a href="#catalogo" onClick={() => setMenuOpen(false)}>{t.products}</a><a href="#categorias" onClick={() => setMenuOpen(false)}>{t.categories}</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>{t.how}</a>
        </nav>
        <div className="header-tools"><button aria-label="Pesquisar" onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}><Search size={20} /></button><button aria-label="Carrinho" onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}><ShoppingCart size={20} /></button><div className="language-picker"><button aria-label="Escolher idioma" onClick={() => document.querySelector(".language-picker")?.classList.toggle("is-open")}><Languages size={18} /><span>{languages[language].flag}</span></button><div className="language-menu">{(Object.keys(languages) as Array<keyof typeof languages>).map((code) => <button key={code} className={language === code ? "selected" : ""} onClick={() => { setLanguage(code); document.querySelector(".language-picker")?.classList.remove("is-open"); }}>{languages[code].flag} {languages[code].label}</button>)}</div></div><button className="account-button" onClick={() => toast("Atendimento RET CHEATS", { description: "Fale conosco pelo WhatsApp para receber ajuda." })}><CircleUserRound size={20} /><span>{t.account}</span></button></div>
      </header>

      <main id="inicio">
        <section className="ret-hero welcome-hero">
          <div className="hero-glow" />
          <div className="hero-quick-pills"><span className="quick-muted"><Zap size={14} /> Entrega automática</span><span className="quick-green"><ShieldCheck size={14} /> Compra segura</span><span className="quick-blue"><Check size={14} /> Loja verificada</span></div>
          <div className="welcome-avatar"><img src="/ret-cheats-avatar.png" alt="Arte RET CHEATS" /></div>
          <div className="hero-text welcome-copy"><span className="hero-overline">{t.welcome}</span><h1>{t.title} <em>RET CHEATS</em></h1><p className="promo-line"><span>⚠️</span> {t.promo} <span>⚠️</span></p><p className="promo-copy">{t.intro}</p><button className="hero-button" onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}>{t.catalog} <ArrowRight size={17} /></button><button className="hero-outline" onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}>{t.buy}</button></div>
          <div className="hero-figure welcome-figure"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-symbol">RC</div><span className="figure-label">RET CHEATS / CATÁLOGO OFICIAL</span></div>
        </section>

        <section className="benefits"><div><Zap size={21} /><span><strong>Entrega rápida</strong><small>orientação pelo WhatsApp</small></span></div><div><ShieldCheck size={21} /><span><strong>Compra segura</strong><small>atendimento protegido</small></span></div><div><MessageCircle size={21} /><span><strong>Suporte direto</strong><small>resposta da nossa equipe</small></span></div></section>

        <section className="featured-categories" id="categorias"><div className="section-heading"><div><span className="section-label">ESCOLHA SUA CATEGORIA</span><h2>{t.categoryTitle}</h2></div><div className="carousel-actions"><button aria-label="Anterior"><ChevronLeft size={17} /></button><button aria-label="Próximo"><ChevronRight size={17} /></button></div></div><div className="category-strip"><button className="category-feature feature-red" onClick={() => { setActiveCategory("Produtos Android"); document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }); }}><span><Smartphone className="category-feature-icon" size={17} />PRODUTOS<br /><em>ANDROID</em></span><b>→</b></button><button className="category-feature feature-green" onClick={() => { setActiveCategory("Produtos Emulador"); document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }); }}><span><Monitor className="category-feature-icon" size={17} />PRODUTOS<br /><em>EMULADOR</em></span><b>→</b></button><button className="category-feature feature-blue" onClick={() => { setActiveCategory("Produtos iOS "); document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }); }}><span>Produtos<br /><em>iOS </em></span><b>→</b></button></div></section>

        <section className="catalog" id="catalogo"><div className="catalog-title"><div><span className="section-label">{t.official}</span><h2>{t.catalogTitle}</h2></div><button onClick={() => setActiveCategory("Todos")}>{t.all} <ArrowRight size={14} /></button></div><div className="categories">{["Informação", ...categories].map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="info-panel"><div className="info-art"><img src="/retzada-cheats.png" alt="RETZADA Cheats" /></div></div>
                        <div className="product-grid">{visibleProducts.map((product) => <article className="ret-product" key={product.id} onClick={() => setSelectedProduct(product)}><div className={`product-image ${product.accent}`}>{product.id === "holograma" ? <><video className="product-video" src="/holograma-arma-android.mp4" autoPlay loop muted playsInline preload="auto" onLoadedData={(event) => { event.currentTarget.play().catch(() => undefined); }} aria-label="Vídeo do Holograma Arma Android" /><span className="product-icon"><Smartphone size={17} /></span><span className="product-badge">{product.discount}</span></> : <><div className="art-glow" /><span className="product-icon">{product.category === "Produtos Emulador" ? <Monitor size={17} /> : product.category === "Produtos Android" ? <Smartphone size={17} /> : <span className="apple-card-icon"></span>}</span><span className="product-badge">{product.discount}</span><div className="product-art"><small>RET CHEATS</small><b>{product.tag}</b><i>CATÁLOGO</i></div></>}</div><div className="product-card-content"><span className="category-name">{product.category}</span><h3>{product.name}</h3><div className="price-line"><span className="old-price">{product.oldPrice}</span><span className="discount-pill">OFERTA</span></div><strong className="product-price">{product.price}</strong><div className="payment-row"><small className="pix-label">À vista no PIX</small><div className="payment-icons" aria-label="Formas de pagamento"><span><Zap size={13} /></span></div></div><button className="whatsapp-product" onClick={(event) => { event.stopPropagation(); contact(product); }}><ShoppingCart size={18} /> Comprar agora</button></div></article>)}</div></section>

        <section className="how-section" id="como-funciona"><div><span className="section-label">COMO FUNCIONA</span><h2>Você escolhe.<br /><em>A gente responde.</em></h2><p>Veja o catálogo, escolha o produto que combina com você e fale direto com a nossa equipe.</p></div><div className="how-cards"><div><b>01</b><strong>Escolha o produto</strong><span>Encontre o painel ou perfil ideal.</span></div><div><b>02</b><strong>Veja os detalhes</strong><span>Receba informações e disponibilidade.</span></div><div><b>03</b><strong>Chame no WhatsApp</strong><span>A mensagem já vai pronta para o PV.</span></div></div></section>
      </main>

      <footer className="ret-footer"><div className="footer-identity"><span className="ret-avatar">RC</span><div><strong>RET CHEATS <span className="verified">✓</span></strong><p>Conteúdos exclusivos, novidades atualizadas e os melhores produtos para Android.</p></div></div><div className="footer-columns"><div><b>Navegação</b><a href="#inicio">Início</a><a href="#categorias">Categorias</a><a href="#catalogo">Catálogo</a></div><div><b>Atendimento</b><a href="#como-funciona">Como funciona</a><a href="#catalogo">Produtos</a><a href="#catalogo">Chamar no WhatsApp</a></div></div><div className="copyright">Copyright © RET CHEATS — Todos os direitos reservados</div></footer>

      {selectedProduct && <div className="detail-backdrop" onClick={() => setSelectedProduct(null)}><div className="detail-modal" onClick={(event) => event.stopPropagation()}><button className="close-detail" onClick={() => setSelectedProduct(null)}><X size={21} /></button><div className={`detail-media ${selectedProduct.accent}`}>{selectedProduct.id === "holograma" ? <video className="detail-video" src="/holograma-arma-android.mp4" autoPlay loop muted playsInline preload="auto" onLoadedData={(event) => { event.currentTarget.play().catch(() => undefined); }} aria-label="Vídeo do Holograma Arma Android" /> : <div className="detail-art"><span>RET CHEATS</span><strong>{selectedProduct.tag}</strong></div>}</div><div className="detail-copy"><span className="section-label">{selectedProduct.category}</span><h2>{selectedProduct.name}</h2><div className="detail-price"><span>{selectedProduct.oldPrice}</span><strong>{selectedProduct.price}</strong></div><p className="detail-description">{selectedProduct.description}</p><div className="detail-benefits"><div><ShieldCheck size={20} /><span><b>Atendimento seguro</b><small>Fale diretamente com a equipe</small></span></div><div><Zap size={20} /><span><b>Resposta rápida</b><small>Receba os detalhes do produto</small></span></div></div><button className="whatsapp-detail" onClick={() => contact(selectedProduct)}><MessageCircle size={20} /> Chamar no WhatsApp <ArrowRight size={17} /></button><small className="detail-note">Mensagem pronta para o atendimento</small></div></div></div>}
    </div>
  );
}
