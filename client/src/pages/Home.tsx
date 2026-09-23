import React, { useState } from "react";
import { 
  ShieldCheck, 
  Scale, 
  TrendingDown, 
  Building2, 
  FileCheck2, 
  Users, 
  Award, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  AlertTriangle,
  FileSpreadsheet,
  Lock,
  ChevronRight,
  Calculator,
  MessageCircle,
  Images
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function Home() {
  // Calculadora interativa de economia estimada
  const [debtAmount, setDebtAmount] = useState<number>(350000);
  const [selectedBank, setSelectedBank] = useState<string>("bb");
  
  // Taxas médias baseadas na amostra real do PDF da AE Moderna (1º sem 2026)
  const discountRates: Record<string, number> = {
    bb: 0.67,       // 67% no Banco do Brasil
    santander: 0.81, // 81% no Santander
    bradesco: 0.81,  // 81% no Bradesco
    outro: 0.75     // 75% média geral
  };

  const estimatedDiscountPercent = Math.round((discountRates[selectedBank] || 0.75) * 100);
  const estimatedSavings = debtAmount * (discountRates[selectedBank] || 0.75);
  const estimatedFinalValue = debtAmount - estimatedSavings;

  // Estado do formulário de contato
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formDebt, setFormDebt] = useState("");
  const [formBank, setFormBank] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      toast.error("Por favor, preencha pelo menos nome e telefone de contato.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Solicitação recebida com sucesso! Nossa equipe técnica entrará em contato em breve para uma análise sem compromisso.");
      setFormName("");
      setFormPhone("");
      setFormDebt("");
      setFormBank("");
    }, 900);
  };

  const casesData = [
    {
      banco: "Bradesco",
      processo: "1032933-06.2023.8.26.0001",
      divida: "R$ 392.669,00",
      acordo: "R$ 15.000,00",
      reducao: "96%",
      prazo: "Acordo homologado"
    },
    {
      banco: "Santander",
      processo: "1000858-15.2025.8.26.0268",
      divida: "R$ 157.981,26",
      acordo: "R$ 12.600,00",
      reducao: "92%",
      prazo: "Acordo homologado"
    },
    {
      banco: "Banco do Brasil",
      processo: "40003575820268260564",
      divida: "R$ 437.782,18",
      acordo: "R$ 103.523,90",
      reducao: "76%",
      prazo: "Acordo homologado"
    },
    {
      banco: "Santander",
      processo: "4017447-19.2026.0002",
      divida: "R$ 2.115.769,41",
      acordo: "R$ 1.003.997,27",
      reducao: "53%",
      prazo: "Grande porte empresarial"
    },
    {
      banco: "Banco do Brasil",
      processo: "4003608-52.2025.8.26.0004",
      divida: "R$ 167.595,22",
      acordo: "R$ 43.900,00",
      reducao: "74%",
      prazo: "Redução de passivo"
    },
    {
      banco: "TJSP (Empresarial)",
      processo: "1017845-19.2023.8.26.0003",
      divida: "R$ 1.454.948,00",
      acordo: "R$ 100.000,00",
      reducao: "93%",
      prazo: "14 meses de negociação"
    }
  ];

  const structureImages = [
    {
      src: "/images/ae-moderna/estrutura-ae-moderna_f6830bca.jpg",
      title: "Estrutura para decisões importantes",
      desc: "Ambientes pensados para receber clientes com discrição, conforto e profissionalismo.",
      size: "wide"
    },
    {
      src: "/images/ae-moderna/direcao-juridica_b0b18d6b.jpg",
      title: "Direção jurídica",
      desc: "Experiência técnica à frente de cada estratégia.",
      size: "standard"
    },
    {
      src: "/images/ae-moderna/acordos-homologados.png",
      title: "Acordos homologados",
      desc: "Acordos seguros e personalizados.",
      size: "standard"
    },
    {
      src: "/images/ae-moderna/equipe-reuniao_36342732.jpg",
      title: "Trabalho colaborativo",
      desc: "Alinhamento e responsabilidade em cada caso atendido.",
      size: "standard"
    },
    {
      src: "/images/ae-moderna/atendimento-consultivo_fe6e83c7.jpg",
      title: "Atendimento próximo",
      desc: "Escuta cuidadosa para entender o cenário completo do cliente.",
      size: "standard"
    },
    {
      src: "/images/ae-moderna/sala-reunioes_536de476.jpg",
      title: "Sala de reuniões",
      desc: "Espaço reservado para análises e negociações estratégicas.",
      size: "standard"
    },
    {
      src: "/images/ae-moderna/equipe-escritorio_93cabea2.jpg",
      title: "Rotina de trabalho",
      desc: "Organização e foco para acompanhar cada etapa do processo.",
      size: "standard"
    }
  ];

  const stepsData = [
    {
      num: "01",
      title: "Análise Inicial & Diagnóstico",
      desc: "Avaliamos detalhadamente os contratos bancários, execuções em andamento e extratos para identificar juros abusivos e cobranças indevidas."
    },
    {
      num: "02",
      title: "Defesa Processual Imediata",
      desc: "Apresentação dos Embargos à Execução com pedido de suspensão de atos constritivos e proteção de patrimônio empresarial ou pessoal."
    },
    {
      num: "03",
      title: "Revisão Matemática & Teses",
      desc: "Elaboração de laudo pericial contábil e fundamentação jurídica com base na média de mercado do Banco Central."
    },
    {
      num: "04",
      title: "Negociação Agressiva & Resolução",
      desc: "Condução de mesa de negociação judicial e extrajudicial com a instituição financeira visando acordos com reduções expressivas."
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Bar Institucional */}
      <header className="sticky top-0 z-50 bg-[#0c0618]/90 backdrop-blur-md border-b border-purple-900/40">
        <div className="container mx-auto flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <a href="#hero" className="inline-block transition-transform hover:scale-105 duration-200">
                  <img
                src="/images/ae-moderna/Logo1_89eb9a49.png"
                alt="AE Moderna - Sinônimo de Confiabilidade" 
                className="h-11 sm:h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#solucoes" className="hover:text-purple-400 transition-colors">Soluções</a>
            <a href="#diferenciais" className="hover:text-purple-400 transition-colors">Diferenciais</a>
            <a href="#estrutura" className="hover:text-purple-400 transition-colors">Nossa estrutura</a>
            <a href="#resultados" className="hover:text-purple-400 transition-colors">Casos & Acordos</a>
            <a href="#simulador" className="hover:text-purple-400 transition-colors">Simulador</a>
            <a href="#processo" className="hover:text-purple-400 transition-colors">Como Funciona</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/5511918253811?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20da%20minha%20situa%C3%A7%C3%A3o%20banc%C3%A1ria%20com%20a%20AE%20Moderna." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/40 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-600/20 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-violet-800/15 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs sm:text-sm font-medium shadow-inner">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Especialistas em Renegociação e Defesa Bancária Estratégica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Sua tranquilidade e o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-violet-500">recomeço financeiro</span> são nossa prioridade.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Com 10 anos de experiência e centenas de acordos homologados, atuamos com rigor técnico, revisão pericial e negociação assertiva para reduzir dívidas bancárias e proteger o patrimônio de pessoas e empresas.
              </p>

              {/* Badges de destaque */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
                <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/30 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400">10</span>
                  <span className="text-[11px] sm:text-xs text-slate-400">Anos de Atuação</span>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/30 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400">+200</span>
                  <span className="text-[11px] sm:text-xs text-slate-400">Acordos Homologados</span>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/30 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400">70% a 90%</span>
                  <span className="text-[11px] sm:text-xs text-slate-400">Redução de Passivos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a 
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-lg shadow-purple-900/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Solicitar Análise de Dívida</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#simulador"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-purple-200 border border-purple-700/60 bg-purple-950/30 hover:bg-purple-900/40 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-purple-400" />
                  <span>Simular Redução Estimada</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Atendimento confidencial, seguro e respaldado por equipe técnica especializada.</span>
              </div>
            </div>

            {/* Card de Destaque / Diagnóstico com a imagem e credenciais */}
            <div className="lg:col-span-5">
              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/30 glow-purple">
                <div className="flex items-center justify-between pb-5 border-b border-purple-900/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-purple-200 uppercase tracking-wider">Plantão Técnico Ativo</span>
                  </div>
                  <span className="text-xs text-slate-400">São Paulo — SP</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Direção e Rigor Técnico</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Coordenação estratégica com verificação pública na OAB e atuação combativa em execuções de altos passivos bancários.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Defesa & Proteção Patrimonial</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Blindagem operacional preventiva para evitar constrições, bloqueios de contas PJ/PF e leilão precoce de garantias reais.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Redução Média de 67% a 81%</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Histórico com resultados comprovados em bancos como Banco do Brasil, Bradesco e Santander.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-purple-900/40 text-center">
                  <p className="text-xs text-purple-300 italic">
                    "AE Moderna: Sinônimo de Confiabilidade"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos / Pilares */}
      <section id="quem-somos" className="py-20 bg-[#0d071c] border-y border-purple-950">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Nossa Identidade</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Por que confiar na AE Moderna?</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Combinamos conhecimento aprofundado do sistema financeiro nacional com estratégias jurídicas personalizadas para cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover transition-all duration-300 border border-purple-900/40 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-600/40 flex items-center justify-center text-purple-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Expertise Consolidada</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dez anos de experiência dedicada exclusivamente à renegociação de dívidas bancárias nas esferas judiciais e extrajudiciais, compreendendo as rotinas internas dos bancos.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glass-panel-hover transition-all duration-300 border border-purple-900/40 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-600/40 flex items-center justify-center text-purple-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Alta Efetividade</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Foco cirúrgico na reestruturação e no enquadramento da dívida à capacidade real de pagamento, com histórico de soluções vantajosas para nossos parceiros.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl glass-panel-hover transition-all duration-300 border border-purple-900/40 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-600/40 flex items-center justify-center text-purple-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Compromisso & Ética</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cada caso é tratado de forma exclusiva e transparente, sem promessas milagrosas, fundamentado em cálculos periciais e teses jurídicas sólidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="estrutura" className="py-24 bg-[#0b0618] border-y border-purple-950">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-bold">
                <Images className="w-4 h-4" />
                Por dentro da AE Moderna
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Uma estrutura feita para cuidar de decisões importantes.</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Conheça um pouco do ambiente, das pessoas e da rotina que sustentam nosso atendimento próximo, técnico e confidencial.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors shrink-0"
            >
              <span>Agendar conversa com a equipe</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {structureImages.map((image, index) => (
              <figure
                key={image.src}
                className={`${index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""} group relative overflow-hidden rounded-2xl border border-purple-900/50 bg-purple-950/30`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090313]/95 via-[#090313]/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base font-bold text-white">{image.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300 max-w-sm">{image.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-[11px] text-slate-500">
            Imagens institucionais da AE Moderna. Pessoas e ambientes retratados pertencem ao material fornecido pela empresa.
          </p>
        </div>
      </section>

      {/* Seção Soluções Especializadas */}
      <section id="solucoes" className="py-24 relative">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Nossas Soluções</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Atuação Completa contra Abusos Bancários</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Soluções integradas de defesa técnica, revisão pericial e negociação direta para resguardar sua saúde financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Aprimoramento de Defesas</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Abordagem estratégica para impugnar execuções fiscais e bancárias, identificando nulidades de citação, excesso de execução e vícios contratuais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Proteção Patrimonial</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Medidas preventivas e cautelares para proteger imóveis, veículos, contas operacionais e fluxo de caixa de constrições e bloqueios via SISBAJUD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Renegociação Eficaz</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Utilizamos estratégias eficazes para reduzir o valor de passivos em até 85%, promovendo um recomeço viável e sustentável.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Expurgo de Juros Abusivos</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Revisão matemática para confrontar taxas cobradas com as médias oficiais publicadas pelo Banco Central, expurgando juros capitalizados ilegais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Suspensão de Leilões e Execuções</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Atuação de urgência para impedir arrematações e praceamentos judiciais através de embargos e recursos perante tribunais estaduais e superiores.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120a24] border border-purple-900/50 hover:border-purple-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 border border-purple-700/30">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Financiamentos Empresariais</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ampla atuação em dívidas de capital de giro, cédulas de crédito bancário (CCB), desconto de duplicatas e operações de leasing mercantil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Know-how Abrangente: PF e PJ */}
      <section id="diferenciais" className="py-20 bg-[#0e0720] border-t border-purple-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Pessoa Física</span>
              <h3 className="text-xl font-bold text-white">Dívidas Pessoais & Família</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Empréstimos pessoais, cartões de crédito rotativos, cheque especial e consignados com descontos desproporcionais na renda.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Preservação do mínimo existencial</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Desbloqueio de proventos e salários</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Pessoa Jurídica</span>
              <h3 className="text-xl font-bold text-white">Financiamentos Empresariais</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Capital de giro, mútuos, financiamento de maquinário, frotas, arrendamento mercantil e renegociação em momentos de crise de fluxo.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Manutenção das operações da empresa</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Defesa dos sócios e avalistas</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Estruturação</span>
              <h3 className="text-xl font-bold text-white">Operações Complexas</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Desconto de recebíveis, títulos de crédito executivos, fomento mercantil e readequação de garantias imobiliárias dadas em excesso.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Exibição obrigatória de contratos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Abatimento de taxas e tarifas ilegais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Comprovados & Amostra de Acordos (Tabela real do PDF) */}
      <section id="resultados" className="py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Transparência & Resultados</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Casos Reais e Acordos Homologados</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Abaixo uma amostra demonstrativa de acordos obtidos em processos judiciais no Estado de São Paulo, verificáveis publicamente.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-purple-900/60 bg-[#110924] shadow-2xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-purple-900/80 bg-purple-950/70 text-slate-300 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Instituição Financeira</th>
                  <th className="py-4 px-6 font-semibold">Número do Processo</th>
                  <th className="py-4 px-6 font-semibold">Dívida Cobrada</th>
                  <th className="py-4 px-6 font-semibold text-purple-300">Acordo Conquistado</th>
                  <th className="py-4 px-6 font-semibold text-right">Redução Obtida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-950 text-slate-300">
                {casesData.map((c, idx) => (
                  <tr key={idx} className="hover:bg-purple-900/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      {c.banco}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-purple-300">
                      {c.processo}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {c.divida}
                    </td>
                    <td className="py-4 px-6 font-bold text-white bg-purple-950/20">
                      {c.acordo}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-purple-600/30 text-purple-300 border border-purple-500/30">
                        {c.reducao}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 bg-purple-950/30 p-4 rounded-xl border border-purple-900/40">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Consulte a autenticidade dos processos diretamente no portal do Tribunal de Justiça de São Paulo (TJSP).</span>
            </div>
            <a 
              href="https://esaj.tjsp.jus.br/cpopg/open.do" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold underline shrink-0"
            >
              <span>Acessar portal ESAJ TJSP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Simulador Interativo de Redução */}
      <section id="simulador" className="py-20 bg-gradient-to-b from-[#0b0517] to-[#120826] border-y border-purple-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/30 text-purple-300 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulador de Potencial de Economia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Estime a redução da sua dívida</h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Com base no histórico médio de reduções obtidas pela AE Moderna no 1º semestre de 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Instituição Financeira Envolvida
                  </label>
                  <select 
                    value={selectedBank} 
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full bg-[#1b0d36] border border-purple-700/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="bb">Banco do Brasil (Média histórica: ~67% de redução)</option>
                    <option value="santander">Banco Santander (Média histórica: ~81% de redução)</option>
                    <option value="bradesco">Banco Bradesco (Média histórica: ~81% de redução)</option>
                    <option value="outro">Outros Bancos e Financeiras (Média: ~75% de redução)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Valor Atual da Dívida ou Execução
                    </label>
                    <span className="text-sm font-bold text-purple-300">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(debtAmount)}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="30000" 
                    max="5000000" 
                    step="10000"
                    value={debtAmount}
                    onChange={(e) => setDebtAmount(Number(e.target.value))}
                    className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>R$ 30 mil</span>
                    <span>R$ 2.5 milhões</span>
                    <span>R$ 5 milhões</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 bg-purple-950/40 p-3 rounded-lg border border-purple-900/40">
                  <span className="font-semibold text-purple-300">Aviso legal:</span> A simulação reflete médias estatísticas anteriores e cenários-base. Cada caso demanda análise contratual detalhada e não constitui promessa de resultado vinculante.
                </div>
              </div>

              {/* Resultado visual da simulação */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/80 to-[#180a30] border border-purple-600/40 space-y-5 text-center">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest block">Economia Líquida Estimada</span>
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100 block mt-1">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(estimatedSavings)}
                  </span>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    Até {estimatedDiscountPercent}% de abatimento médio
                  </span>
                </div>

                <div className="pt-4 border-t border-purple-800/40 space-y-2 text-left text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Valor original informado:</span>
                    <span className="font-semibold text-white">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(debtAmount)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Pagamento final estimado:</span>
                    <span className="font-semibold text-emerald-400">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(estimatedFinalValue)}</span>
                  </div>
                </div>

                <a 
                  href="#contato"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-900/50"
                >
                  <span>Revisar meu caso com um especialista</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo de Trabalho (4 Etapas) */}
      <section id="processo" className="py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Fluxo Eficiente</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Como Funciona a Atuação da AE Moderna</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Um processo estruturado em etapas claras para dar agilidade à sua defesa e maximizar a negociação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsData.map((s, idx) => (
              <div key={idx} className="relative glass-panel p-6 rounded-2xl border border-purple-900/50 space-y-4">
                <span className="text-3xl font-black text-purple-500/40 font-display">
                  {s.num}
                </span>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato e Localização */}
      <section id="contato" className="py-24 bg-[#0a0414] border-t border-purple-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Informações da Empresa extraídas das propostas */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Fale Conosco</span>
                <h2 className="text-3xl font-bold text-white">Pronto para retomar o controle das suas finanças?</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Agende um diagnóstico inicial confidencial com nossa equipe técnica especializada.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-purple-950/40 border border-purple-900/40">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Endereço Comercial</h4>
                    <p className="text-slate-300 text-xs mt-1">Rua Verbo Divino, 824 — Chácara Santo Antônio</p>
                    <p className="text-slate-400 text-xs">São Paulo – SP, CEP 04719-904</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-purple-950/40 border border-purple-900/40">
                  <PhoneCall className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Telefones de Atendimento</h4>
                    <p className="text-slate-300 text-xs mt-1">Celular / WhatsApp: (11) 91825-3811</p>
                    <p className="text-slate-400 text-xs">Fixo Escritório: (11) 5183-9336</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-purple-950/40 border border-purple-900/40">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">E-mail Institucional</h4>
                    <p className="text-slate-300 text-xs mt-1">contato@aemoderna.com.br</p>
                    <p className="text-slate-400 text-xs">Portal: aemoderna.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário com envio simulado e toast amigável */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-2">Solicitar Análise de Contratos</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Preencha os dados abaixo. Nós entraremos em contato para avaliar suas opções de defesa e redução.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Seu Nome ou Razão Social *</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: João Silva ou Empresa Ltda" 
                        className="w-full bg-[#180d30] border border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Telefone com DDD / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Ex: (11) 99999-9999" 
                        className="w-full bg-[#180d30] border border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Banco ou Credor Principal</label>
                      <input 
                        type="text" 
                        value={formBank}
                        onChange={(e) => setFormBank(e.target.value)}
                        placeholder="Ex: Banco do Brasil, Bradesco, etc." 
                        className="w-full bg-[#180d30] border border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Valor Aproximado do Passivo</label>
                      <input 
                        type="text" 
                        value={formDebt}
                        onChange={(e) => setFormDebt(e.target.value)}
                        placeholder="Ex: R$ 150.000,00" 
                        className="w-full bg-[#180d30] border border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Já existe processo judicial ou intimação em andamento?</label>
                    <select className="w-full bg-[#180d30] border border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-400">
                      <option value="sim-urgente">Sim, recebi citação / prazo urgente em aberto</option>
                      <option value="sim-sem-prazo">Sim, mas ainda não fui citado ou estou acompanhando</option>
                      <option value="nao">Não, está em cobrança extrajudicial / assessoria</option>
                      <option value="nao-sei">Não tenho certeza, preciso de pesquisa de processos</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-6 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/50 rounded-xl"
                    >
                      {isSubmitting ? "Enviando informações..." : "Enviar para Diagnóstico Técnico Gratuito"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    Garantia de sigilo absoluto conforme a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Institucional */}
      <footer className="bg-[#07030e] border-t border-purple-950 py-12 text-slate-400 text-xs">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/40">
            <div className="flex items-center gap-3">
              <img
                src="/images/ae-moderna/Logo1_89eb9a49.png"
                alt="AE Moderna" 
                className="h-10 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-center md:text-right text-slate-400 max-w-md">
              AE Moderna: Sinônimo de Confiabilidade. 10 anos dedicados à defesa patrimonial e à reestruturação de dívidas bancárias empresariais e pessoais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>© {new Date().getFullYear()} AE Moderna Consultoria e Defesa Bancária. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#hero" className="hover:text-purple-400 transition-colors">Voltar ao topo</a>
              <span>•</span>
              <a href="#contato" className="hover:text-purple-400 transition-colors">São Paulo / SP</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
