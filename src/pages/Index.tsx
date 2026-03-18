import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/08649f27-79b2-4bef-bf78-01ae14f46376/files/f1d13f62-7fcd-4d5e-9d05-2c418db4db90.jpg";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { href: "#about", label: "Обо мне" },
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
        <a href="#hero" style={{ fontFamily: "'Oswald', sans-serif" }} className="text-xl tracking-widest text-white">
          K<span className="text-[#ff6b35]">SOLVING</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white text-sm font-medium hover:opacity-90 transition-opacity">
          Записаться
        </a>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0f] flex flex-col items-center justify-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Oswald', sans-serif" }} className="text-3xl tracking-widest text-white hover:text-[#ff6b35] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white font-medium">
            Записаться
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#7c3aed]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#ff6b35]/15 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/10 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-[#a78bfa] text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
              Бизнес-консультант · Стратег · Маркетолог
            </div>
            <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              СТРОЮ{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#ff6b35] bg-clip-text text-transparent">
                СИСТЕМЫ,
              </span>
              <br />
              КОТОРЫЕ{" "}
              <span className="relative inline-block">
                РАСТУТ
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0 5 Q50 0 100 5" stroke="#ff6b35" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md">
              Помогаю предпринимателям выстраивать бизнес-стратегии, оптимизировать
              процессы и масштабировать маркетинг — без хаоса и потери денег.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#7c3aed]/30">
                Получить консультацию
              </a>
              <a href="#cases" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/50 transition-all hover:scale-105">
                Смотреть кейсы
              </a>
            </div>

            <div className="flex gap-8 mt-14">
              {[
                { num: "120+", label: "Клиентов" },
                { num: "5 лет", label: "Опыта" },
                { num: "3×", label: "Средний рост" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-3xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#ff6b35] bg-clip-text text-transparent">
                    {s.num}
                  </div>
                  <div className="text-sm text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#ff6b35] blur-2xl opacity-40 scale-105" />
              <img src={PHOTO_URL} alt="Ксения Чеканова" className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10" />
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#0a0a0f] border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
                <div className="text-xs text-white/40 mb-1">Следующая консультация</div>
                <div className="text-sm font-semibold text-white">Свободна сейчас</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#ff6b35] text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-sm tracking-widest font-medium uppercase">Обо мне</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
              КСЕНИЯ <span className="text-white/20">ЧЕКАНОВА</span>
              <br />
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">KSolving</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>Я помогаю собственникам бизнеса выйти из операционного хаоса и построить систему, которая работает без постоянного личного участия.</p>
                <p>Специализируюсь на бизнес-стратегиях, выстраивании бизнес-процессов и маркетинге — комплексно и под ключ.</p>
                <p>За 5 лет работы помогла более 120 компаниям трансформировать хаотичный бизнес в управляемую и прибыльную систему.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Target", label: "Бизнес-стратегия", desc: "Чёткий план роста" },
                  { icon: "GitBranch", label: "Бизнес-процессы", desc: "Порядок в операциях" },
                  { icon: "TrendingUp", label: "Маркетинг", desc: "Системный поток клиентов" },
                  { icon: "Zap", label: "Результат", desc: "Рост без хаоса" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-[#7c3aed]/50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#ff6b35]/20 flex items-center justify-center mb-3 group-hover:from-[#7c3aed]/40 group-hover:to-[#ff6b35]/40 transition-colors">
                      <Icon name={item.icon} size={18} className="text-[#a78bfa]" />
                    </div>
                    <div className="font-semibold text-sm text-white mb-1">{item.label}</div>
                    <div className="text-xs text-white/40">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#ff6b35]/10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#7c3aed]" />
            <span className="text-[#a78bfa] text-sm tracking-widest font-medium uppercase">Услуги</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-16 max-w-xl leading-tight">
            ЧЕМ Я{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">МОГУ ПОМОЧЬ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01", icon: "Map", title: "Бизнес-стратегия",
                desc: "Разрабатываю стратегию роста: анализ рынка, конкурентов, точек роста. Создаю дорожную карту развития компании на 6–24 месяца.",
                tags: ["Анализ рынка", "Дорожная карта", "KPI"],
                color: "from-[#7c3aed] to-[#a855f7]",
              },
              {
                num: "02", icon: "Workflow", title: "Бизнес-процессы",
                desc: "Выстраиваю и оптимизирую внутренние процессы: найм, продажи, операции. Внедряю системы, которые работают без вашего участия.",
                tags: ["Регламенты", "Автоматизация", "Найм"],
                color: "from-[#a855f7] to-[#ec4899]",
              },
              {
                num: "03", icon: "Megaphone", title: "Маркетинг",
                desc: "Создаю систему привлечения клиентов: позиционирование, каналы, воронки продаж. От стратегии до реализации.",
                tags: ["Позиционирование", "Воронки", "Реклама"],
                color: "from-[#ff6b35] to-[#f97316]",
              },
            ].map((s) => (
              <div key={s.num} className="relative group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-6xl font-bold text-white/5 absolute top-6 right-6 select-none">{s.num}</div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 opacity-90`}>
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl font-semibold mb-4 text-white">{s.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#ff6b35]" />
            <span className="text-[#ff6b35] text-sm tracking-widest font-medium uppercase">Кейсы</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
            РЕАЛЬНЫЕ{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">РЕЗУЛЬТАТЫ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { company: "Строительная компания", industry: "Строительство", problem: "Хаос в процессах, потеря клиентов, нет системы продаж", result: "Выручка выросла на 240% за 8 месяцев", metric: "+240%", accent: "#7c3aed" },
              { company: "Сеть фитнес-клубов", industry: "Фитнес", problem: "Слабый маркетинг, высокий отток клиентов, нет стратегии", result: "Отток снизился на 60%, база клиентов выросла вдвое", metric: "×2", accent: "#ff6b35" },
              { company: "IT-стартап", industry: "Технологии", problem: "Нет чёткого позиционирования, слабые продажи B2B", result: "Закрыто 3 крупных корпоративных контракта за квартал", metric: "3 контракта", accent: "#ec4899" },
              { company: "Ресторанный холдинг", industry: "HoReCa", problem: "Операционные издержки выходили за рамки бюджета", result: "Себестоимость снижена на 35% без потери качества", metric: "-35%", accent: "#06b6d4" },
            ].map((c, i) => (
              <div key={i} className="relative group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-widest mb-1">{c.industry}</div>
                    <div className="font-semibold text-white text-lg">{c.company}</div>
                  </div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", backgroundImage: "linear-gradient(to right, #a78bfa, #ff6b35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="text-3xl font-bold">
                    {c.metric}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Проблема</div>
                  <p className="text-white/60 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Результат</div>
                  <p className="text-white font-medium text-sm">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[600px] h-[300px] -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#7c3aed]" />
            <span className="text-[#a78bfa] text-sm tracking-widest font-medium uppercase">Отзывы</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
            ЧТО ГОВОРЯТ{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">КЛИЕНТЫ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Алексей М.", company: "CEO, строительная компания", text: "Ксения полностью изменила подход к управлению нашим бизнесом. Впервые за 7 лет я понимаю, куда движется компания и почему." },
              { name: "Марина К.", company: "Владелец сети фитнес-клубов", text: "Результат превзошёл ожидания. Маркетинговая стратегия, которую разработала Ксения, работает как часы. Клиентов стало заметно больше." },
              { name: "Дмитрий Р.", company: "Основатель IT-стартапа", text: "Профессионализм и глубокое понимание бизнеса. Помогла чётко сформулировать ценностное предложение и выйти на крупных корпоративных клиентов." },
            ].map((r, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#7c3aed]/30 transition-colors duration-300">
                <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-5xl text-[#7c3aed]/30 leading-none mb-4 select-none">"</div>
                <p className="text-white/70 leading-relaxed mb-8 text-sm">{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-xs text-white/40 mt-0.5">{r.company}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#ff6b35] text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-[#ff6b35]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-sm tracking-widest font-medium uppercase">Контакты</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              ГОТОВЫ{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">НАЧАТЬ?</span>
            </h2>
            <p className="text-white/50 mb-12 text-lg">
              Оставьте заявку — разберу ваш бизнес и предложу конкретные шаги роста.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]/60 transition-colors text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон или Telegram"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]/60 transition-colors text-sm"
                  />
                </div>
                <textarea
                  placeholder="Расскажите о вашем бизнесе и задаче"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]/60 transition-colors resize-none text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl shadow-[#7c3aed]/20"
                >
                  Отправить заявку
                </button>
              </form>
            ) : (
              <div className="text-center py-16 rounded-3xl border border-white/10 bg-white/[0.03]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#ff6b35] flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-white/50">Свяжусь с вами в течение 24 часов</p>
              </div>
            )}

            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10">
              {[
                { icon: "Mail", label: "Email", value: "ksenia@ksolving.ru" },
                { icon: "MessageCircle", label: "Telegram", value: "@ksolving" },
                { icon: "Instagram", label: "Instagram", value: "@ksolving" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon name={c.icon} size={16} className="text-[#a78bfa]" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs">{c.label}</div>
                    <div className="text-white/70">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-lg tracking-widest text-white/40">
            K<span className="text-[#ff6b35]/60">SOLVING</span>
          </span>
          <span className="text-white/20 text-sm">© 2024 Ксения Чеканова · Все права защищены</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
