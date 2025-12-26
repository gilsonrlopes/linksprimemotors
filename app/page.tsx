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
  Zap,         // Para Motos (Potência)
  Mountain,    // Para UTVs (Off-road)
  ShieldCheck  // Para Consignação (Segurança)
} from 'lucide-react';

export default function PrimeMotorsBio() {
  
  const whatsappNumber = "5541999999999"; // Substitua pelo número real
  const instagramUrl = "https://www.instagram.com/"; 
  const facebookUrl = "https://www.facebook.com/";
  const siteUrl = "https://www.primemotors.com.br";
  // Endereço Atualizado: Petrolina - PE
  const enderecoGoogleMaps = "https://www.google.com/maps/search/?api=1&query=Av.+Nilo+Coelho,+2002+-+Gercino+Coelho,+Petrolina+-+PE,+56306-000";
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
       console.log('GTM Inicializado (Mock)');
    }
  }, []);

  const trackClick = (linkName, localDoBotao = 'web') => {
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
      image: "/uvt.png", 
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
      link: `https://wa.me/${whatsappNumber}?text=Olá, gostaria de saber mais sobre as embarcações (Lanchas/Jets).`
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
      link: `https://wa.me/${whatsappNumber}?text=Gostaria de colocar meu veículo à venda com vocês (consignação).`
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
        
        .gold-border-mask {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 1px;
          background: #18181b; 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        /* Efeito Dourado Sutil na Borda */
        .gold-border-mask::before {
          content: '';
          position: absolute;
          top: -50%; 
          left: -50%; 
          width: 200%; 
          height: 200%;
          background: conic-gradient(
            transparent, 
            transparent, 
            rgba(251, 191, 36, 0.1) 20%, 
            rgba(255, 255, 255, 0.4) 35%, 
            rgba(251, 191, 36, 0.1) 50%, 
            transparent 70%
          );
          animation: borderRotate 6s linear infinite;
          z-index: 0;
          opacity: 0.5;
          transition: opacity 0.4s ease-in-out;
        }
        
        .gold-border-mask:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.8);
        }

        .gold-border-mask:hover::before {
          opacity: 1;
          animation-duration: 3s;
        }
        
        .inner-content {
          position: relative;
          width: 100%;
          background: rgba(18, 18, 20, 0.95);
          border-radius: 23px;
          z-index: 1;
          min-height: 220px;
          overflow: hidden;
        }

        .card-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          z-index: 0;
          transition: all 0.7s ease;
          filter: grayscale(100%) contrast(120%);
        }

        .gold-border-mask:hover .card-bg-image {
          opacity: 0.35;
          transform: scale(1.05);
          filter: grayscale(0%) contrast(110%);
        }

        .glass-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
          z-index: 1;
        }
      `}} />

      {/* Background Premium Animated */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" style={{animation: 'float 8s ease-in-out infinite'}} />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[100px]" style={{animation: 'float 10s ease-in-out infinite', animationDelay: '2s'}} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.15]" />
      </div>

      <div className="max-w-md mx-auto relative z-10 flex flex-col min-h-screen">
        
        {/* HEADER FIXO:
            Ajustei o padding (py-4) para ficar um pouco mais compacto, 
            ajudando a ganhar espaço na tela para os cards.
        */}
        <header className="fixed top-0 left-0 right-0 mx-auto max-w-md z-50 px-6 py-4 flex flex-col items-center text-center bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
          
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-800 mb-3 shadow-2xl animate-fade-in-down">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Showroom Petrolina</span>
          </div>

          {/* LOGO */}
          <div className="relative mb-3 w-full max-w-[180px] flex justify-center">
             <div className="absolute inset-0 bg-amber-500/10 blur-[40px] rounded-full opacity-50"></div>
             <img 
               src="/LogoTransparente.png" 
               alt="Prime Motors" 
               className="w-full h-auto relative z-10 drop-shadow-2xl"
             />
          </div>

          <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 max-w-[280px] leading-relaxed">
            Terra • Água • Ar
          </p>

          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Premium</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Lifestyle</span>
          </div>
        </header>

        {/* ESPAÇADOR: Reduzi para 290px para acompanhar o cabeçalho mais compacto */}
        <div className="pt-[290px]"></div>

        {/* Cards Empilhados */}
        <div className="px-5 pb-48 flex-grow"> 
          {cards.map((card, index) => (
            <div 
              key={card.id}
              className="sticky transition-all duration-500"
              style={{
                // AJUSTE CRÍTICO:
                // Base Top: 280px (logo abaixo do header)
                // Incremento: index * 10 (muito mais apertado, pilha compacta)
                // Resultado: O último card não será empurrado para o final da tela,
                // ele ficará empilhado logo acima dos outros, bem no centro da visão.
                top: `${280 + (index * 10)}px`,
                zIndex: index + 10,
                marginBottom: '20px' 
              }}
            >
              <div className="gold-border-mask group cursor-pointer shadow-2xl">
                <div className="inner-content p-6 relative flex flex-col justify-between min-h-[200px]">
                  
                  {/* Imagem de Fundo */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="card-bg-image"
                  />
                  
                  {/* Overlay */}
                  <div className="glass-overlay"></div>
                  
                  {/* Conteúdo Superior */}
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:bg-black/60 transition-colors">
                      <card.Icon size={20} className={card.iconColor} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-[9px] font-bold uppercase tracking-widest">
                      {card.stat}
                    </span>
                  </div>

                  {/* Textos */}
                  <div className="relative z-10 mt-auto mb-6">
                    <h2 className="text-lg font-bold text-white mb-2 tracking-wide drop-shadow-md">
                      {card.title}
                    </h2>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light line-clamp-2 group-hover:text-white transition-colors">
                      {card.subtitle}
                    </p>
                  </div>
                  
                  {/* Botão */}
                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick(card.title, 'card')}
                    className="relative z-10 w-full bg-zinc-50 border border-zinc-200 text-zinc-900 hover:text-black hover:border-amber-200 hover:bg-gradient-to-r hover:from-yellow-100 hover:via-yellow-300 hover:to-yellow-100 transition-all duration-500 py-3 px-5 rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-between group/btn shadow-md hover:shadow-[0_0_25px_rgba(253,224,71,0.4)]"
                  >
                    <span>{card.button}</span>
                    <ArrowRight size={14} className="text-zinc-600 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Social */}
        <div className="px-6 pb-12 pt-0 relative z-50 bg-gradient-to-t from-black via-black to-transparent">
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a href={`https://wa.me/${whatsappNumber}`} className="social-btn group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-all shadow-lg">
                <MessageCircle size={20} strokeWidth={1.5} />
              </div>
            </a>
            <a href={instagramUrl} className="social-btn group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-pink-400 group-hover:border-pink-500/50 transition-all shadow-lg">
                <Instagram size={20} strokeWidth={1.5} />
              </div>
            </a>
            <a href={facebookUrl} className="social-btn group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all shadow-lg">
                <Facebook size={20} strokeWidth={1.5} />
              </div>
            </a>
            <a href={enderecoGoogleMaps} className="social-btn group">
              <div className="w-12 h-12 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-red-400 group-hover:border-red-500/50 transition-all shadow-lg">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
            </a>
          </div>
          <div className="text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <p className="text-[9px] uppercase tracking-[0.3em] mb-2 text-zinc-500">
              © Prime Motors 2025
            </p>
            <div className="h-0.5 w-8 bg-zinc-800 mx-auto rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
}