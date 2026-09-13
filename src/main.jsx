import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronDown, Clock3, Facebook, Hotel, Instagram, MapPin, Menu, MessageCircle, Plane, ShieldCheck, Star, Ticket, X } from 'lucide-react';
import './styles.css';

const services = [
  { icon: Ticket, title: 'Billetterie', text: 'Réservez vos billets d’avion et bénéficiez d’un accompagnement personnalisé.' },
  { icon: Hotel, title: 'Hôtels & séjours', text: 'Trouvez l’hébergement et la formule adaptés à votre budget et votre destination.' },
  { icon: Plane, title: 'Voyages organisés', text: 'Des séjours soigneusement préparés pour voyager en toute sérénité.' },
  { icon: ShieldCheck, title: 'Omra', text: 'Un accompagnement pour préparer votre voyage spirituel avec attention.' },
];

const destinations = [
  ['Paris', 'France', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80'],
  ['Istanbul', 'Turquie', 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80'],
  ['Dubai', 'Émirats arabes unis', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80'],
  ['Makkah', 'Arabie saoudite', 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80'],
];

function App() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => { e.preventDefault(); setSent(true); };
  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <div className="app">
    <header className="nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => go('home')} aria-label="Accueil">
          <img src="/logo.svg" alt="Bouffée d'air Voyages" />
          <span><b>Bouffée d'air</b><small>VOYAGES</small></span>
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => go('home')}>Accueil</button>
          <button onClick={() => go('services')}>Services</button>
          <button onClick={() => go('destinations')}>Destinations</button>
          <button onClick={() => go('about')}>À propos</button>
          <button onClick={() => go('contact')}>Contact</button>
        </nav>
        <div className="nav-actions">
          <a className="whatsapp mini" href="https://wa.me/213352641077" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
          <button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="eyebrow"><span></span> Votre voyage commence ici</div>
          <h1>Voyagez plus loin.<br/><em>Vivez plus fort.</em></h1>
          <p>Votre agence de voyages à Béjaïa pour vos billets, séjours, hôtels et voyages organisés. Un service de proximité, humain et à votre écoute.</p>
          <div className="hero-buttons">
            <button className="primary" onClick={() => setFormOpen(true)}>Planifier mon voyage <ArrowRight size={18}/></button>
            <button className="secondary" onClick={() => go('services')}>Découvrir nos services</button>
          </div>
          <div className="trust"><div><Star fill="currentColor" size={16}/><b>4.9/5</b><span>Avis clients</span></div><div><MapPin size={16}/><b>Béjaïa</b><span>Algérie</span></div><div><Clock3 size={16}/><b>À votre écoute</b><span>En agence</span></div></div>
        </div>
        <div className="hero-art"><div className="hero-orb"></div><div className="floating-card"><Plane size={20}/><div><b>Prêt à partir ?</b><small>Demandez votre devis</small></div></div></div>
      </section>

      <section id="services" className="section light">
        <div className="section-head"><div><span className="kicker">NOS SERVICES</span><h2>Tout pour préparer votre voyage</h2></div><p>De la réservation au départ, nous vous accompagnons pour rendre votre voyage plus simple.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text}) => <article className="service" key={title}><div className="icon"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p><button onClick={() => setFormOpen(true)}>En savoir plus <ArrowRight size={16}/></button></article>)}</div>
      </section>

      <section id="destinations" className="section destinations">
        <div className="section-head"><div><span className="kicker">INSPIRATION</span><h2>Des destinations qui donnent envie</h2></div><button className="outline" onClick={() => setFormOpen(true)}>Demander une offre <ArrowRight size={17}/></button></div>
        <div className="destination-grid">{destinations.map(([name,country,img]) => <article className="destination" key={name}><img src={img} alt={`${name}, ${country}`} /><div className="destination-overlay"><span>{country}</span><h3>{name}</h3><button onClick={() => setFormOpen(true)}>Préparer ce voyage <ArrowRight size={15}/></button></div></article>)}</div>
      </section>

      <section id="about" className="about section">
        <div className="about-visual"><div className="about-logo"><img src="/logo.svg" alt="Bouffée d'air"/></div><div className="about-stamp">BÉJAÏA<br/><small>ALGÉRIE</small></div></div>
        <div className="about-copy"><span className="kicker">BOUFFÉE D'AIR VOYAGES</span><h2>Une agence proche de vous, pour des voyages qui vous ressemblent.</h2><p>Nous mettons l’écoute, le conseil et la simplicité au cœur de chaque demande. Que vous partiez pour le travail, les vacances ou l’Omra, notre équipe vous aide à trouver une solution adaptée.</p><ul><li><Check size={18}/> Conseil personnalisé</li><li><Check size={18}/> Réservation et assistance</li><li><Check size={18}/> Solutions adaptées à votre projet</li></ul><button className="primary" onClick={() => go('contact')}>Parler à l’agence <ArrowRight size={18}/></button></div>
      </section>

      <section className="cta"><div><span className="kicker">VOTRE PROCHAIN DÉPART</span><h2>Une idée de voyage ?<br/><em>Parlons-en.</em></h2><p>Décrivez-nous votre projet et nous revenons vers vous avec une proposition adaptée.</p></div><button className="white-btn" onClick={() => setFormOpen(true)}>Demander un devis <ArrowRight size={18}/></button></section>

      <section id="contact" className="contact section">
        <div><span className="kicker">CONTACT</span><h2>Retrouvez-nous à Béjaïa</h2><p>Pour toute réservation ou demande d’information, contactez directement l’agence.</p><div className="contact-list"><a href="tel:+213352641077"><Ticket size={19}/><span><b>Téléphone</b><small>035 26 41 07 70</small></span></a><a href="https://wa.me/213352641077" target="_blank" rel="noreferrer"><MessageCircle size={19}/><span><b>WhatsApp</b><small>Nous écrire directement</small></span></a><div><MapPin size={19}/><span><b>Adresse</b><small>Béjaïa, Algérie</small></span></div></div></div>
        <div className="map-card"><div className="map-grid"></div><div className="pin"><MapPin size={30}/></div><span>Bouffée d'air Voyages</span><small>Béjaïa</small></div>
      </section>
    </main>

    <footer><div className="footer-brand"><img src="/logo.svg" alt=""/><div><b>Bouffée d'air Voyages</b><span>Béjaïa · Algérie</span></div></div><div className="social"><a href="#" aria-label="Facebook"><Facebook size={19}/></a><a href="#" aria-label="Instagram"><Instagram size={19}/></a></div><p>© {new Date().getFullYear()} Bouffée d'air Voyages. Tous droits réservés.</p></footer>

    {formOpen && <div className="modal-backdrop" onMouseDown={() => setFormOpen(false)}><div className="modal" onMouseDown={e => e.stopPropagation()}><button className="close" onClick={() => setFormOpen(false)}><X/></button>{sent ? <div className="success"><Check size={40}/><h3>Demande enregistrée</h3><p>Merci. L’agence pourra vous recontacter pour préciser votre projet.</p><button className="primary" onClick={() => {setSent(false);setFormOpen(false)}}>Fermer</button></div> : <><span className="kicker">DEMANDE DE VOYAGE</span><h2>Parlez-nous de votre projet</h2><form onSubmit={submit}><label>Nom complet<input required placeholder="Votre nom"/></label><label>Téléphone<input required type="tel" placeholder="05 XX XX XX XX"/></label><label>Destination<select defaultValue=""><option value="" disabled>Choisir une destination</option>{destinations.map(d => <option key={d[0]}>{d[0]}</option>)}<option>Autre</option></select></label><label>Message<textarea placeholder="Dates, nombre de voyageurs, besoins..."></textarea></label><button className="primary" type="submit">Envoyer ma demande <ArrowRight size={18}/></button></form></>}</div></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
