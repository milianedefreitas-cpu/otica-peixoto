import { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleArrowUp,
  Glasses,
  Instagram,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

type Category = 'Todos' | 'Acetato' | 'Metais' | 'Solares'
type Visit = 'Empresa' | 'Casa' | 'Consultório'

const whatsappNumber = '5521993226439'
const whatsappHref = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const products = [
  { name: 'Miro', category: 'Acetato' as Category, color: 'Âmbar translúcido', code: 'OP-014', image: '/images/detail.jpeg', tone: 'amber' },
  { name: 'Cora', category: 'Metais' as Category, color: 'Dourado fosco', code: 'OP-022', image: '/images/lifestyle.jpeg', tone: 'gold' },
  { name: 'Nilo', category: 'Solares' as Category, color: 'Tartaruga escura', code: 'OP-031', image: '/images/hero.jpeg', tone: 'brown' },
  { name: 'Lume', category: 'Acetato' as Category, color: 'Cristal areia', code: 'OP-038', image: '/images/lume.jpeg', tone: 'sand' },
  { name: 'Iris', category: 'Metais' as Category, color: 'Cristal grafite', code: 'OP-045', image: '/images/inserir.jpeg', tone: 'sand' },
  { name: 'Vibe', category: 'Acetato' as Category, color: 'Paleta colorida', code: 'OP-052', image: '/images/inserir2.jpeg', tone: 'amber' },
]

const testimonials = [
  {
    quote: 'Fiquei impressionada com o atendimento, a rapidez na entrega e a qualidade dos produtos. Quem fecha seus óculos com a Óticas Peixoto ganha o exame de vista grátis.',
    author: 'Cliente Óticas Peixoto',
    source: 'Reel público no Instagram',
    url: 'https://www.instagram.com/nimedia_social/reel/DZIHchORvSq/',
  },
]

const faqs = [
  ['Como funciona o atendimento itinerante?', 'Você escolhe empresa ou casa. Levamos uma seleção de armações e fazemos a orientação no local. Depois, combinamos exame e lentes conforme sua necessidade.'],
  ['Vocês atendem minha região?', 'Atendemos Jacarepaguá e bairros próximos. Para empresas, combinamos o melhor horário para sua equipe.'],
  ['Preciso saber meu grau antes de agendar?', 'Não. Você pode começar pela curadoria e conversar sobre o exame no atendimento.'],
  ['Como agendo um atendimento?', 'Escolha o local e o que você procura no formulário. Ao continuar, abrimos o WhatsApp para combinarmos o melhor horário.'],
  ['Posso provar as armações antes de decidir?', 'Sim. A seleção do site é uma amostra. Levamos opções pensadas para seu rosto, estilo e rotina para você provar com calma.'],
]

function Shell({ children, title, description }: { children: React.ReactNode; title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} — Óticas Peixoto`
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [title, description])

  return <div className="site-shell"><header className="nav-wrap"><a className="brand" href="/"><span className="brand-mark">∞</span><span className="brand-name">Óticas<br /><i>Peixoto</i></span></a><a className="nav-cta" href={whatsappHref('Olá, Óticas Peixoto. Quero falar com vocês.')} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={15} /></a></header><main className="standalone-page section-pad"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Início</a><span aria-hidden="true">/</span><span>{title}</span></nav><p className="section-kicker">ÓTICAS PEIXOTO</p><h1>{title}</h1><p className="standalone-description">{description}</p>{children}</main><footer className="footer section-pad"><div className="footer-bottom"><span>© {new Date().getFullYear()} Óticas Peixoto</span><a href="/privacidade">Privacidade</a><a href="/">Voltar para a home <ArrowUpRight size={15} /></a></div></footer></div>
}

function BioPage() {
  useEffect(() => {
    document.title = 'Óticas Peixoto — links'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Agende seu atendimento, veja armações e encontre a Óticas Peixoto em Taquara.')
  }, [])

  return (
    <div className="bio-page">
      <header className="bio-header">
        <a className="bio-brand" href="/" aria-label="Óticas Peixoto, início">
          <span className="bio-mark">∞</span>
          <span><strong>Óticas</strong><br /><em>Peixoto</em></span>
        </a>
        <a className="bio-instagram" href="https://instagram.com/otica.peixoto_" target="_blank" rel="noreferrer" aria-label="Instagram Óticas Peixoto"><Instagram size={19} /></a>
      </header>
      <main className="bio-main">
        <p className="bio-eyebrow">ÓPTICA ITINERANTE · TAQUARA, RJ</p>
        <h1>Óculos escolhidos<br /><em>para você.</em></h1>
        <p className="bio-intro">Curadoria de armações, exame computadorizado e atendimento personalizado — em casa, na empresa ou no consultório.</p>
        <div className="bio-links">
          <a className="bio-link bio-link-primary" href={whatsappHref('Olá, Óticas Peixoto. Quero agendar um atendimento.')} target="_blank" rel="noreferrer"><span>Agendar atendimento</span><ArrowUpRight size={18} /></a>
          <a className="bio-link" href="/#curadoria"><span>Ver armações</span><ArrowUpRight size={18} /></a>
          <a className="bio-link" href="/#modelo"><span>Atendimento para empresas</span><ArrowUpRight size={18} /></a>
          <a className="bio-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Odim+Góis,+250,+Taquara,+Rio+de+Janeiro" target="_blank" rel="noreferrer"><span>Como chegar</span><ArrowUpRight size={18} /></a>
        </div>
        <div className="bio-benefit"><strong>Exame de vista gratuito</strong><span>na compra do óculos completo</span></div>
        <div className="bio-meta"><span>Seg–Sex · 09h às 18h</span><span>Respondemos em até 12 horas</span></div>
      </main>
      <footer className="bio-footer"><span>Rua Dr. Odim Góis, 250 — Taquara</span><a href="/">Conheça o site completo <MoveRight size={15} /></a></footer>
    </div>
  )
}

function PrivacyPage() {
  return <Shell title="Privacidade, sem letra miúda." description="Como a Óticas Peixoto usa os dados que você envia pelo site."><div className="standalone-copy"><h2>O que coletamos</h2><p>Ao iniciar um agendamento, podemos receber seu nome, local de atendimento e interesse informado no formulário.</p><h2>Por que usamos</h2><p>Usamos esses dados apenas para responder sua solicitação, combinar horário e orientar o atendimento. Não vendemos seus dados.</p><h2>Contato</h2><p>Para dúvidas sobre privacidade ou para solicitar correção de dados, fale conosco pelo WhatsApp da Óticas Peixoto.</p></div></Shell>
}

function ThankYouPage() {
  return <Shell title="Pedido recebido." description="A conversa pelo WhatsApp é o próximo passo para escolher seu atendimento."><a className="button button-dark standalone-action" href={whatsappHref('Olá, Óticas Peixoto. Enviei um pedido de agendamento pelo site e quero continuar o atendimento.')} target="_blank" rel="noreferrer">Continuar no WhatsApp <ArrowUpRight size={17} /></a></Shell>
}

function NotFoundPage() {
  return <Shell title="Essa página saiu de foco." description="O endereço não existe. Volte para a curadoria e encontre o caminho certo."><a className="button button-dark standalone-action" href="/">Voltar para a home <MoveRight size={17} /></a></Shell>
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (pathname === '/privacidade') return <PrivacyPage />
  if (pathname === '/obrigado') return <ThankYouPage />
  if (pathname === '/bio') return <BioPage />
  if (pathname !== '/' && pathname !== '') return <NotFoundPage />
  return <HomePage />
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState<Category>('Todos')
  const [visit, setVisit] = useState<Visit>('Empresa')
  const [faqOpen, setFaqOpen] = useState(0)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    document.title = 'Óticas Peixoto — óculos escolhidos para você'
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', 'Óticas Peixoto: curadoria de armações, exame computadorizado e lentes em Jacarepaguá e adjacências. Exame de vista gratuito na compra do óculos completo.')
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('js-motion')
    const revealables = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    revealables.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('js-motion')
    }
  }, [])

  const visibleProducts = useMemo(
    () => category === 'Todos' ? products : products.filter((product) => product.category === category),
    [category],
  )

  const scheduleMessage = `Olá, Óticas Peixoto. Quero agendar um atendimento de ${visit.toLowerCase()} em Jacarepaguá. Gostaria de conhecer a curadoria de armações e saber mais sobre o exame.`

  function handleSchedule(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormSent(true)
    window.open(whatsappHref(scheduleMessage), '_blank', 'noopener,noreferrer')
    window.location.assign('/obrigado')
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span>Atendimento em Jacarepaguá e adjacências — em casa ou na empresa</span><a href="#agendar">Agendar atendimento <ArrowUpRight size={13} /></a></div>

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Óticas Peixoto, início">
          <span className="brand-mark">∞</span>
          <span className="brand-name">Óticas<br /><i>Peixoto</i></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#modelo" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#curadoria" onClick={() => setMenuOpen(false)}>Armações</a>
          <a href="#precisao" onClick={() => setMenuOpen(false)}>Seu cuidado</a>
          <a href="#agendar" onClick={() => setMenuOpen(false)}>Agendar</a>
        </nav>
        <a className="nav-cta" href={whatsappHref('Olá, Óticas Peixoto. Quero agendar um atendimento itinerante.')} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="eyebrow-line" /> ÓPTICA ITINERANTE · JACAREPAGUÁ E ADJACÊNCIAS</p>
            <h1 className="reveal reveal-delay-1">Óculos escolhidos<br /><em>para você.</em></h1>
            <p className="hero-description reveal reveal-delay-2">Curadoria de armações, exame computadorizado e lentes para sua rotina — em casa, na empresa ou no consultório. Exame de vista gratuito na compra do óculos completo.</p>
            <div className="hero-actions reveal reveal-delay-3"><a className="button button-dark" href="#agendar">Agendar atendimento <MoveRight size={17} /></a><a className="text-link" href="#curadoria">Ver armações <ChevronRight size={15} /></a></div>
            <div className="hero-note"><span className="note-star">✳</span><span>Escolha com calma.<br />A gente vai até você.</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay-2">
            <div className="hero-image-frame"><img src="/images/hero.jpeg" alt="Bandeja com seleção de armações da curadoria Óticas Peixoto sobre mesa de madeira" loading="eager" /></div>
            <div className="hero-caption"><span>01 / 04</span><span>Seleção Peixoto<br />vol. 01</span></div>
            <div className="hero-stamp"><span>ATENDIMENTO</span><strong>QUE<br />SE MOVE</strong><span>JACAREPAGUÁ · RJ</span></div>
          </div>
        </section>

        <section className="manifesto section-pad" id="modelo">
          <div className="section-kicker">01 — COMO FUNCIONA</div>
          <div className="manifesto-grid">
            <h2 className="reveal">A ótica que<br /><em>vai até você.</em></h2>
            <div className="manifesto-body reveal reveal-delay-1"><p>Você escolhe o lugar. A gente leva uma seleção de armações, orientação de estilo e o cuidado técnico para encontrar seus próximos óculos.</p><a href="#agendar" className="circle-link" aria-label="Agendar atendimento"><CircleArrowUp size={31} /></a></div>
          </div>
          <div className="service-grid">
            <article className="service-card service-feature reveal"><span className="service-number">01</span><div><h3>No seu escritório</h3><p>Atendimento para sua equipe, com seleção de armações sem tirar ninguém da rotina.</p><a href="#agendar">Atender minha equipe <ArrowUpRight size={14} /></a></div><div className="service-scribble">vem<br />com a<br />gente →</div></article>
            <article className="service-card reveal reveal-delay-1"><span className="service-number">02</span><div><h3>Na sua casa</h3><p>Prove com calma, no seu espaço, com orientação para escolher o que combina com você.</p></div></article>
            <article className="service-card reveal reveal-delay-2"><span className="service-number">03</span><div><h3>No consultório</h3><p>Sala 304, Taquara. Um endereço reservado para examinar, provar e decidir.</p></div></article>
          </div>
        </section>

        <section className="curation section-pad" id="curadoria">
          <div className="curation-top"><div className="reveal"><div className="section-kicker">02 — CURADORIA</div><h2>A escolha certa.<br /><em>Para quem você é.</em></h2></div><p className="reveal reveal-delay-1">Uma seleção refinada de formas, materiais e cores pensada para valorizar seus traços e acompanhar seu estilo de vida.</p></div>
          <div className="filter-row" role="group" aria-label="Filtrar armações">{(['Todos', 'Acetato', 'Metais', 'Solares'] as Category[]).map((item) => <button key={item} className={category === item ? 'filter is-active' : 'filter'} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <div className="product-grid">{visibleProducts.map((product, index) => <article className={`product-card product-${index + 1} reveal reveal-delay-${(index % 3) + 1}`} key={product.name}><div className={`product-image tone-${product.tone}`}><img src={product.image} alt={`Armação ${product.name}, ${product.color.toLowerCase()}`} loading="lazy" /><span className="product-index">0{index + 1}</span><button className="product-arrow" aria-label={`Ver detalhes da armação ${product.name}`}><ArrowUpRight size={16} /></button></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.color}</p></div><span>{product.code}</span></div></article>)}</div>
          <div className="catalogue-link"><span>Gostou de uma forma? Levamos opções parecidas até você.</span><a href="#agendar">Agendar prova <MoveRight size={17} /></a></div>
        </section>

        <section className="precision section-pad" id="precisao">
          <div className="precision-image reveal"><img src="/images/detail.jpeg" alt="Close de armação de acetato tartaruga mostrando textura do material" loading="lazy" /><span className="image-label">TEXTURA · ACETATO</span></div>
          <div className="precision-copy reveal reveal-delay-1"><div className="section-kicker">03 — CUIDADO QUE FAZ DIFERENÇA</div><h2>Bonito é o que<br /><em>funciona em você.</em></h2><p>Formato de rosto, rotina, grau e materiais entram na escolha. Porque seus óculos precisam acompanhar sua vida — não só seu reflexo.</p><div className="precision-list"><div><span>01</span><strong>Armação que conversa com seu rosto</strong><p>Orientação para escolher forma, cor e proporção sem receita pronta.</p></div><div><span>02</span><strong>Exame computadorizado</strong><p>Mais segurança para atualizar sua visão com cuidado.</p></div><div><span>03</span><strong>Lentes para o seu dia</strong><p>Uma solução pensada para trabalho, telas, rua e descanso.</p></div></div></div>
        </section>

        <section className="booking section-pad" id="agendar">
          <div className="booking-intro reveal"><div className="section-kicker">04 — AGENDAMENTO</div><h2>Seus óculos<br /><em>começam aqui.</em></h2><p>Escolha onde prefere ser atendido. Em poucos minutos, combinamos o melhor horário pelo WhatsApp.</p><p className="booking-benefit">Exame de vista gratuito na compra do óculos completo.</p><div className="booking-contact"><Phone size={15} /><span>(21) 99322-6439<br /><small>(21) 96459-0046</small></span></div></div>
          <form className="booking-form reveal reveal-delay-1" onSubmit={handleSchedule}><p className="form-title">Escolha seu atendimento</p><div className="visit-options" role="radiogroup" aria-label="Local do atendimento">{(['Empresa', 'Casa', 'Consultório'] as Visit[]).map((item) => <button type="button" key={item} role="radio" aria-checked={visit === item} className={visit === item ? 'visit-option is-selected' : 'visit-option'} onClick={() => setVisit(item)}><span className="radio-dot" aria-hidden="true">{visit === item && <Check size={12} />}</span>{item}</button>)}</div><label>Seu nome<input required name="name" autoComplete="name" placeholder="Como podemos te chamar?" /></label><label>O que você procura?<select name="need" defaultValue="armação"><option value="armação">Uma nova armação</option><option value="lentes">Trocar minhas lentes</option><option value="exame">Exame computadorizado</option><option value="equipe">Atendimento para minha equipe</option></select></label><button className="button button-light" type="submit">{formSent ? 'WhatsApp aberto ✓' : 'Agendar pelo WhatsApp'} <ArrowUpRight size={17} /></button><small className="form-privacy">Você será direcionado ao WhatsApp. Respondemos em até 12 horas.</small></form>
        </section>

        <section className="faq section-pad"><div className="faq-header reveal"><div className="section-kicker">05 — PARA NÃO FICAR NO AR</div><h2>Perguntas<br /><em>frequentes.</em></h2></div><div className="faq-list reveal reveal-delay-1">{faqs.map(([question, answer], index) => <div className={faqOpen === index ? 'faq-item is-open' : 'faq-item'} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}><span>{question}</span><ChevronDown size={19} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="testimonials section-pad" aria-label="O que dizem os clientes"><div className="section-kicker">06 — QUEM JÁ VIU DE PERTO</div><div className="testimonial-grid">{testimonials.map((item) => <figure className="testimonial-card reveal" key={item.url}><blockquote>{item.quote}</blockquote><figcaption><strong>{item.author}</strong><a href={item.url} target="_blank" rel="noreferrer">{item.source} <ArrowUpRight size={13} /></a></figcaption></figure>)}</div></section>

        <section className="closing section-pad"><div className="closing-mark reveal">∞</div><h2 className="reveal reveal-delay-1">Seu olhar merece<br /><em>um pouco mais.</em></h2><a className="button button-dark reveal reveal-delay-2" href="#agendar">Agendar meu atendimento <MoveRight size={17} /></a></section>
      </main>

      <footer className="footer section-pad"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">∞</span><span className="brand-name">Óticas<br /><i>Peixoto</i></span></a><p>Curadoria de armações<br />& óptica de precisão.</p></div><div className="footer-address"><span className="footer-label">ONDE ESTAMOS</span><p><MapPin size={14} /> Rua Dr. Odim Góis, 250<br />Taquara, Rio de Janeiro — RJ</p><p>Seg–Sex · 09h às 18h</p><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Odim+Góis,+250,+Taquara,+Rio+de+Janeiro" target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={14} /></a><iframe className="map-frame" title="Mapa da Óticas Peixoto em Taquara" src="https://www.google.com/maps?q=Rua+Dr.+Odim+G%C3%B3is,+250,+Taquara,+Rio+de+Janeiro&output=embed" loading="lazy" /></div><div className="footer-social"><span className="footer-label">ACOMPANHE</span><a href="https://instagram.com/otica.peixoto_" target="_blank" rel="noreferrer"><Instagram size={16} /> @otica.peixoto_</a></div><div className="footer-legal"><a href="/privacidade">Política de privacidade</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Óticas Peixoto</span><span>Feito para ver melhor.</span><a href="#top" aria-label="Voltar ao topo"><CircleArrowUp size={22} /></a></div></footer>
      <a className="mobile-whatsapp" href={whatsappHref('Olá, Óticas Peixoto. Quero agendar um atendimento itinerante.')} target="_blank" rel="noreferrer"><Sparkles size={15} /> Agendar atendimento</a>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
