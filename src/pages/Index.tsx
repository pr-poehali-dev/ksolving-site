import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL = "https://cdn.poehali.dev/projects/08649f27-79b2-4bef-bf78-01ae14f46376/bucket/d2d9ff5b-46e0-441e-89a3-c776c5f1268a.jpg";
const LOGO_BEIGE = "https://cdn.poehali.dev/projects/08649f27-79b2-4bef-bf78-01ae14f46376/bucket/24f03622-665c-47a3-a220-e7b62172bf7f.jpg";
const LOGO_GREEN = "https://cdn.poehali.dev/projects/08649f27-79b2-4bef-bf78-01ae14f46376/bucket/01e6b291-ae27-4ce6-9304-018c04a38edb.jpg";

const C = {
  green: "#2C3E35",
  greenLight: "#3a5147",
  greenMid: "#4a6358",
  beige: "#E8E2D9",
  beigeLight: "#F2EDE8",
  beigeDark: "#D4CCC0",
  text: "#2C3E35",
  textMuted: "#6b7c74",
};

const serif = { fontFamily: "'Cormorant Garamond', serif" };
const sans = { fontFamily: "'Raleway', sans-serif" };

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
    <div style={{ background: C.beigeLight, color: C.green, ...sans }} className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav style={{ background: `${C.beigeLight}ee`, borderBottom: `1px solid ${C.beigeDark}` }} className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between backdrop-blur-sm">
        <a href="#hero">
          <img src={LOGO_BEIGE} alt="KSolving" className="h-8 object-contain" />
        </a>
        <div className="hidden md:flex gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ color: C.textMuted, ...sans }} className="text-sm tracking-widest uppercase hover:opacity-100 transition-opacity font-medium" >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" style={{ background: C.green, color: C.beige, ...sans }} className="hidden md:block px-6 py-2.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity">
          Записаться
        </a>
        <button className="md:hidden" style={{ color: C.green }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ background: C.beigeLight }} className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: C.green, ...serif }} className="text-4xl font-light tracking-widest">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ background: C.green, color: C.beige }} className="mt-4 px-10 py-3 text-sm tracking-widest uppercase font-medium">
            Записаться
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" style={{ background: C.green }} className="relative min-h-screen flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ background: `radial-gradient(ellipse at 70% 50%, ${C.greenMid}80 0%, transparent 65%)` }} className="absolute inset-0" />
          <div style={{ color: C.beige, opacity: 0.04, ...serif }} className="absolute top-20 right-10 text-[20rem] font-bold leading-none select-none pointer-events-none hidden lg:block">
            KS
          </div>
        </div>

        <div className="container mx-auto px-8 pb-0 grid md:grid-cols-2 gap-0 items-end">
          {/* Text */}
          <div className="order-2 md:order-1 pb-20 md:pb-28">
            <div style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-[0.3em] uppercase mb-8 opacity-60">
              Бизнес-консультант · Стратег · Маркетолог
            </div>
            <h1 style={{ color: C.beige, ...serif }} className="text-6xl md:text-8xl font-light leading-[0.9] mb-8">
              Строю<br />
              <em className="not-italic font-semibold">системы,</em><br />
              <span style={{ color: C.beigeDark }} className="text-5xl md:text-6xl font-light">которые растут</span>
            </h1>
            <p style={{ color: C.beigeDark, ...sans }} className="text-base leading-relaxed mb-10 max-w-md font-light opacity-80">
              Помогаю предпринимателям выстраивать бизнес-стратегии, оптимизировать процессы и масштабировать маркетинг — осознанно и системно.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{ background: C.beige, color: C.green, ...sans }} className="px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity">
                Получить консультацию
              </a>
              <a href="#cases" style={{ border: `1px solid ${C.beigeDark}50`, color: C.beige, ...sans }} className="px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-[#E8E2D9] transition-colors">
                Кейсы
              </a>
            </div>

            <div className="flex gap-12 mt-16">
              {[
                { num: "120+", label: "Клиентов" },
                { num: "5 лет", label: "Опыта" },
                { num: "3×", label: "Средний рост" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: C.beige, ...serif }} className="text-4xl font-light">{s.num}</div>
                  <div style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-widest uppercase mt-1 opacity-60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 relative flex justify-end items-end">
            <div className="relative w-full max-w-sm md:max-w-md">
              <img
                src={PHOTO_URL}
                alt="Ксения Чеканова"
                className="w-full object-cover object-top"
                style={{ maxHeight: "90vh", minHeight: "500px" }}
              />
              <div style={{ background: `${C.beige}15`, border: `1px solid ${C.beige}20` }} className="absolute bottom-8 left-0 -translate-x-6 rounded-none px-6 py-4 backdrop-blur-sm">
                <div style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-widest uppercase opacity-60 mb-1">Консультация</div>
                <div style={{ color: C.beige, ...serif }} className="text-lg font-light">Свободна сейчас</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ background: C.beige, height: "2px", opacity: 0.3 }} />

      {/* ABOUT */}
      <section id="about" style={{ background: C.beigeLight }} className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div style={{ width: 40, height: 1, background: C.greenMid }} />
              <span style={{ color: C.textMuted, ...sans }} className="text-xs tracking-[0.3em] uppercase">Обо мне</span>
            </div>

            <div className="grid md:grid-cols-5 gap-16 items-start">
              <div className="md:col-span-3">
                <h2 style={{ color: C.green, ...serif }} className="text-5xl md:text-7xl font-light leading-tight mb-8">
                  Ксения<br />
                  <em className="not-italic font-semibold">Чеканова</em>
                </h2>
                <div className="space-y-5" style={{ color: C.textMuted, ...sans }}>
                  <p className="text-base leading-relaxed font-light">
                    Я помогаю собственникам бизнеса выйти из операционного хаоса и построить систему, которая работает без постоянного личного участия.
                  </p>
                  <p className="text-base leading-relaxed font-light">
                    Специализируюсь на бизнес-стратегиях, выстраивании бизнес-процессов и маркетинге — комплексно и под ключ.
                  </p>
                  <p className="text-base leading-relaxed font-light">
                    За 5 лет работы помогла более 120 компаниям трансформировать хаотичный бизнес в управляемую и прибыльную систему.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 gap-4">
                {[
                  { icon: "Target", label: "Бизнес-стратегия", desc: "Чёткий план роста на 6–24 месяца" },
                  { icon: "GitBranch", label: "Бизнес-процессы", desc: "Порядок и системность в операциях" },
                  { icon: "TrendingUp", label: "Маркетинг", desc: "Системный поток клиентов" },
                  { icon: "Zap", label: "Результат", desc: "Рост без хаоса и выгорания" },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: `1px solid ${C.beigeDark}` }} className="py-4 flex items-center gap-4 group hover:opacity-100 transition-opacity cursor-default">
                    <div style={{ color: C.greenMid }}>
                      <Icon name={item.icon} size={16} />
                    </div>
                    <div>
                      <div style={{ color: C.green, ...sans }} className="text-sm font-medium tracking-wide">{item.label}</div>
                      <div style={{ color: C.textMuted, ...sans }} className="text-xs mt-0.5 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: C.green }} className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <div style={{ width: 40, height: 1, background: C.beigeDark }} />
            <span style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-[0.3em] uppercase opacity-60">Услуги</span>
          </div>
          <h2 style={{ color: C.beige, ...serif }} className="text-5xl md:text-6xl font-light mb-16 leading-tight">
            Чем я могу<br /><em className="not-italic font-semibold">помочь</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: `${C.beigeDark}20` }}>
            {[
              {
                num: "I", icon: "Map", title: "Бизнес-стратегия",
                desc: "Разрабатываю стратегию роста: анализ рынка, конкурентов, точек роста. Создаю дорожную карту развития компании на 6–24 месяца.",
                tags: ["Анализ рынка", "Дорожная карта", "KPI"],
              },
              {
                num: "II", icon: "Workflow", title: "Бизнес-процессы",
                desc: "Выстраиваю и оптимизирую внутренние процессы: найм, продажи, операции. Внедряю системы, которые работают без вашего участия.",
                tags: ["Регламенты", "Автоматизация", "Найм"],
              },
              {
                num: "III", icon: "Megaphone", title: "Маркетинг",
                desc: "Создаю систему привлечения клиентов: позиционирование, каналы, воронки продаж. От стратегии до реализации.",
                tags: ["Позиционирование", "Воронки", "Реклама"],
              },
            ].map((s) => (
              <div key={s.num} style={{ background: C.green }} className="p-10 group hover:bg-[#3a5147] transition-colors duration-300">
                <div style={{ color: C.beigeDark, ...serif, opacity: 0.2 }} className="text-5xl font-light mb-8">{s.num}</div>
                <div style={{ color: C.beigeDark }} className="mb-5">
                  <Icon name={s.icon} size={20} />
                </div>
                <h3 style={{ color: C.beige, ...serif }} className="text-2xl font-light mb-4">{s.title}</h3>
                <p style={{ color: C.beigeDark, ...sans }} className="text-sm leading-relaxed mb-6 font-light opacity-70">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} style={{ border: `1px solid ${C.beigeDark}30`, color: C.beigeDark, ...sans }} className="px-3 py-1 text-xs tracking-wider opacity-60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" style={{ background: C.beigeLight }} className="py-28">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <div style={{ width: 40, height: 1, background: C.greenMid }} />
            <span style={{ color: C.textMuted, ...sans }} className="text-xs tracking-[0.3em] uppercase">Кейсы</span>
          </div>
          <h2 style={{ color: C.green, ...serif }} className="text-5xl md:text-6xl font-light mb-16 leading-tight">
            Реальные<br /><em className="not-italic font-semibold">результаты</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { company: "Строительная компания", industry: "Строительство", problem: "Хаос в процессах, потеря клиентов, нет системы продаж", result: "Выручка выросла на 240% за 8 месяцев", metric: "+240%" },
              { company: "Сеть фитнес-клубов", industry: "Фитнес", problem: "Слабый маркетинг, высокий отток клиентов, нет стратегии", result: "Отток снизился на 60%, база клиентов выросла вдвое", metric: "×2" },
              { company: "IT-стартап", industry: "Технологии", problem: "Нет чёткого позиционирования, слабые продажи B2B", result: "Закрыто 3 крупных корпоративных контракта за квартал", metric: "3 контракта" },
              { company: "Ресторанный холдинг", industry: "HoReCa", problem: "Операционные издержки выходили за рамки бюджета", result: "Себестоимость снижена на 35% без потери качества", metric: "−35%" },
            ].map((c, i) => (
              <div key={i} style={{ background: C.beige, borderBottom: `3px solid ${C.green}` }} className="p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div style={{ color: C.textMuted, ...sans }} className="text-xs tracking-[0.25em] uppercase mb-2 opacity-60">{c.industry}</div>
                    <div style={{ color: C.green, ...serif }} className="text-xl font-light">{c.company}</div>
                  </div>
                  <div style={{ color: C.green, ...serif }} className="text-4xl font-semibold">{c.metric}</div>
                </div>
                <div style={{ borderTop: `1px solid ${C.beigeDark}` }} className="pt-5 grid grid-cols-2 gap-6">
                  <div>
                    <div style={{ color: C.textMuted, ...sans }} className="text-xs tracking-widest uppercase mb-2 opacity-50">Проблема</div>
                    <p style={{ color: C.textMuted, ...sans }} className="text-sm leading-relaxed font-light">{c.problem}</p>
                  </div>
                  <div>
                    <div style={{ color: C.textMuted, ...sans }} className="text-xs tracking-widest uppercase mb-2 opacity-50">Результат</div>
                    <p style={{ color: C.green, ...sans }} className="text-sm leading-relaxed font-medium">{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ background: C.green }} className="py-28">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <div style={{ width: 40, height: 1, background: C.beigeDark, opacity: 0.5 }} />
            <span style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-[0.3em] uppercase opacity-60">Отзывы</span>
          </div>
          <h2 style={{ color: C.beige, ...serif }} className="text-5xl md:text-6xl font-light mb-16 leading-tight">
            Что говорят<br /><em className="not-italic font-semibold">клиенты</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Алексей М.", company: "CEO, строительная компания", text: "Ксения полностью изменила подход к управлению нашим бизнесом. Впервые за 7 лет я понимаю, куда движется компания и почему." },
              { name: "Марина К.", company: "Владелец сети фитнес-клубов", text: "Результат превзошёл ожидания. Маркетинговая стратегия, которую разработала Ксения, работает как часы. Клиентов стало заметно больше." },
              { name: "Дмитрий Р.", company: "Основатель IT-стартапа", text: "Профессионализм и глубокое понимание бизнеса. Помогла чётко сформулировать ценностное предложение и выйти на крупных корпоративных клиентов." },
            ].map((r, i) => (
              <div key={i} style={{ border: `1px solid ${C.beigeDark}20` }} className="p-8 hover:border-[#E8E2D9]/40 transition-colors duration-300">
                <div style={{ color: C.beigeDark, ...serif, opacity: 0.2 }} className="text-7xl font-light leading-none mb-6 select-none">"</div>
                <p style={{ color: C.beigeDark, ...sans }} className="text-sm leading-relaxed mb-8 font-light opacity-80">{r.text}</p>
                <div style={{ borderTop: `1px solid ${C.beigeDark}15` }} className="pt-5 flex items-center justify-between">
                  <div>
                    <div style={{ color: C.beige, ...serif }} className="text-base font-light">{r.name}</div>
                    <div style={{ color: C.beigeDark, ...sans }} className="text-xs mt-0.5 opacity-50">{r.company}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: C.beigeDark, opacity: 0.5 }} className="text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: C.beigeLight }} className="py-28">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div style={{ width: 40, height: 1, background: C.greenMid }} />
              <span style={{ color: C.textMuted, ...sans }} className="text-xs tracking-[0.3em] uppercase">Контакты</span>
            </div>
            <h2 style={{ color: C.green, ...serif }} className="text-5xl md:text-6xl font-light mb-4 leading-tight">
              Готовы<br /><em className="not-italic font-semibold">начать?</em>
            </h2>
            <p style={{ color: C.textMuted, ...sans }} className="text-base mb-12 font-light leading-relaxed">
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
                    style={{ background: C.beige, border: `1px solid ${C.beigeDark}`, color: C.green, ...sans }}
                    className="w-full px-5 py-4 text-sm font-light placeholder-[#6b7c74]/50 focus:outline-none focus:border-[#2C3E35] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон или Telegram"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    style={{ background: C.beige, border: `1px solid ${C.beigeDark}`, color: C.green, ...sans }}
                    className="w-full px-5 py-4 text-sm font-light placeholder-[#6b7c74]/50 focus:outline-none focus:border-[#2C3E35] transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Расскажите о вашем бизнесе и задаче"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{ background: C.beige, border: `1px solid ${C.beigeDark}`, color: C.green, ...sans }}
                  className="w-full px-5 py-4 text-sm font-light placeholder-[#6b7c74]/50 focus:outline-none focus:border-[#2C3E35] transition-colors resize-none"
                />
                <button
                  type="submit"
                  style={{ background: C.green, color: C.beige, ...sans }}
                  className="w-full py-5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </button>
              </form>
            ) : (
              <div style={{ background: C.beige, border: `1px solid ${C.beigeDark}` }} className="text-center py-16">
                <div style={{ background: C.green }} className="w-14 h-14 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={22} className="text-[#E8E2D9]" />
                </div>
                <h3 style={{ color: C.green, ...serif }} className="text-2xl font-light mb-2">Заявка отправлена</h3>
                <p style={{ color: C.textMuted, ...sans }} className="text-sm font-light">Свяжусь с вами в течение 24 часов</p>
              </div>
            )}

            <div className="flex flex-wrap gap-8 mt-12 pt-10" style={{ borderTop: `1px solid ${C.beigeDark}` }}>
              {[
                { icon: "Mail", label: "Email", value: "ksenia@ksolving.ru" },
                { icon: "MessageCircle", label: "Telegram", value: "@ksolving" },
                { icon: "Instagram", label: "Instagram", value: "@ksolving" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div style={{ color: C.greenMid }}>
                    <Icon name={c.icon} size={16} />
                  </div>
                  <div>
                    <div style={{ color: C.textMuted, ...sans }} className="text-xs tracking-widest uppercase opacity-50">{c.label}</div>
                    <div style={{ color: C.green, ...sans }} className="text-sm font-light mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.green, borderTop: `1px solid ${C.greenMid}` }} className="py-8">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_GREEN} alt="KSolving" className="h-6 object-contain" />
          <span style={{ color: C.beigeDark, ...sans }} className="text-xs tracking-widest opacity-40">
            © 2024 Ксения Чеканова · Все права защищены
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
