'use client';

import React, { useEffect } from 'react';
import { 
  Instagram, 
  Facebook,
  MessageCircle, 
  ArrowRight,
  Car,       
  Anchor,    
  MapPin,
  Zap,         
  Mountain,    
  ShieldCheck  
} from 'lucide-react';

export default function PrimeMotorsBio() {
  
  const whatsappNumber = "5541999999999"; 
  const instagramUrl = "https://www.instagram.com/"; 
  const facebookUrl = "https://www.facebook.com/";
  const enderecoGoogleMaps = "https://www.google.com/maps/search/?api=1&query=Av.+Nilo+Coelho,+2002+-+Gercino+Coelho,+Petrolina+-+PE,+56306-000";
  
  useEffect(( ) => {
    if (typeof window !== 'undefined') {
       console.log('GTM Inicializado (Mock)');
    }
  }, []);

  const trackClick = (linkName: string, localDoBotao: string = 'web') => {
    console.log(`[Tracking] Clique: ${linkName} | Local: ${localDoBotao}`);
  };

  const cards = [
    {
      id: 1,
      title: "Carros Premium",
      subtitle: "Sedans de luxo, SUVs blindados e superesportivos. A excelência que você merece na garagem.",
      Icon: Car,
      iconColor: "text-white", 
      button: "Ver Estoque de Carros",
      stat: "Motors",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      link: `https://wa.me/${whatsappNumber}?text=Olá, tenho interesse nos carros premium.`
    },
    {
      id: 2,
      title: "Motos High Performance",
      subtitle: "Liberdade sobre duas rodas. Modelos exclusivos das marcas mais desejadas do mundo.",
      Icon: Zap,
      iconColor: "text-white", 
      button: "Ver Motos",
      stat: "Bikes",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
      link: `https://wa.me/${whatsappNumber}?text=Olá, gostaria de ver as motos disponíveis.`
    },
    {
      id: 3,
      title: "UTVs & Off-Road",
      subtitle: "Aventura sem limites. UTVs preparados para qualquer terreno com o máximo de performance.",
      Icon: Mountain,
      iconColor: "text-white", 
      button: "Ver UTVs",
      stat: "Off-Road",
      image: "https://images.unsplash.com/photo-1535050804459-0562e2474f83?w=800&q=80", 
      link: `https://wa.me/${whatsappNumber}?text=Olá, tenho interesse nos UTVs.`
    },
    {
      id: 4,
      title: "Prime Náutica",
      subtitle: "Lanchas, Iates e Jet Skis. Navegue com sofisticação e estilo.",
      Icon: Anchor,
      iconColor: "text-white", 
      button: "Consultar Embarcações",
      stat: "Náutica",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      link: `https://wa.me/${whatsappNumber}?text=Olá, gostaria de saber mais sobre as embarcações (Lanchas/Jets ).`
    },
    {
      id: 5,
      title: "Gestão de Venda (Consignação)",
      subtitle: "Deixe seu veículo conosco. Cuidamos de todo o processo de venda com segurança, sigilo e valorização.",
      Icon: ShieldCheck,
      iconColor: "text-white", 
      button: "Quero Consignar meu Veículo",
      stat: "Blindagem",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      link: `https://wa.me/${whatsappNumber}?text=Gostaria de colocar meu veículo à venda com vocês (consignação ).`
    },
    {
      id: 6,
      title: "Prime Experience",
      subtitle: "Visite nosso complexo na Av. Nilo Coelho, Petrolina. Um ambiente projetado para conectar você ao extraordinário.",
      Icon: MapPin,
      iconColor: "text-white", 
      button: "Traçar Rota",
      stat: "Lifestyle",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      link: enderecoGoogleMaps
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-amber-900/30 selection:text-amber-200 text-zinc-100 relative">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes borderRotate {
          from { transform: rotate(0deg ); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        
        .gold-border-mask {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 1px;
          background: #18181b; 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gold-border-mask::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: conic-gradient(transparent, transparent, rgba(251, 191, 36, 0.1) 20%, rgba(255, 255, 255, 0.4) 35%, rgba(251, 191, 36, 0.1) 50%, transparent 70%);
          animation: borderRotate 6s linear infinite;
          z-index: 0;
          opacity: 0.5;
        }
        
        .gold-border-mask:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.8);
        }

        .inner-content {
          position: relative;
          width: 100%;
          background: rgba(18, 18, 20, 0.95);
          border-radius: 23px;
          z-index: 1;
          min-height: 260px;
          overflow: hidden;
        }

        .card-bg-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.35;
          z-index: 0;
          transition: all 0.7s ease;
          filter: grayscale(0%) contrast(110%);
        }

        .glass-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
          z-index: 1;
        }
      `}} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" style={{animation: 'float 8s ease-in-out infinite'}} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png' )] opacity-[0.15]" />
      </div>

      <div className="max-w-md mx-auto relative z-10 flex flex-col min-h-screen">
        
        <header className="fixed top-0 left-0 right-0 mx-auto max-w-md z-50 px-6 py-4 flex flex-col items-center text-center bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-800 mb-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Showroom Petrolina</span>
          </div>

          <div className="relative mb-3 w-full max-w-[180px] flex justify-center">
             <div className="absolute inset-0 bg-amber-500/10 blur-[40px] rounded-full opacity-50"></div>
             <img src="/LogoTransparente.png" alt="Prime Motors" className="w-full h-auto relative z-10 drop-shadow-2xl" />
          </div>

          <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.3em] mb-3">Terra • Água • Ar</p>

          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Premium</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Lifestyle</span>
          </div>
        </header>

        {/* ESPAÇADOR: Aumentado para evitar que o primeiro card comece "dentro" do header */}
        <div className="pt-[230px]"></div>

        {/* Container de Cards com Padding Bottom para o último card encaixar */}
        <div className="px-5 pb-20 flex-grow space-y-4"> 
          {cards.map((card, index) => (
            <div 
              key={card.id}
              className="sticky transition-all duration-500"
              style={{
                // TOP: Ajustado para 210px para alinhar com o fim do header fixo
                top: `${210 + (index * 8)}px`,
                zIndex: index + 10,
              }}
            >
              <div className="gold-border-mask group cursor-pointer shadow-2xl">
                <div className="inner-content p-6 relative flex flex-col justify-between">
                  <img src={card.image} alt={card.title} className="card-bg-image" />
                  <div className="glass-overlay"></div>
                  
                  <div className="relative z-10 flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                      <card.Icon size={20} className={card.iconColor} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-[9px] font-bold uppercase tracking-widest">
                      {card.stat}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto mb-6">
                    <h2 className="text-xl font-bold text-white mb-2 tracking-wide">{card.title}</h2>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light">{card.subtitle}</p>
                  </div>
                  
                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick(card.title, 'card')}
                    className="relative z-10 w-full bg-zinc-50 text-zinc-900 hover:bg-white transition-all duration-300 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-between group/btn"
                  >
                    <span>{card.button}</span>
                    <ArrowRight size={16} className="text-zinc-600 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="px-6 pb-12 pt-6 relative z-50 bg-black border-t border-white/5">
          <div className="flex justify-center gap-4 mb-8">
            {/* Ícones Sociais Simplificados para o exemplo */}
            {[MessageCircle, Instagram, Facebook, MapPin].map((Icon, i) => (
              <div key={i} className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-200 hover:text-amber-400 transition-colors cursor-pointer">
                <Icon size={20} strokeWidth={1.5} />
              </div>
            ))}
          </div>
          <div className="text-center opacity-80">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-2 text-white font-bold">© Prime Motors 2026</p>
            <div className="h-0.5 w-8 bg-zinc-700 mx-auto rounded-full"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
