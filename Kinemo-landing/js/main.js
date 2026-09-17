document.addEventListener("DOMContentLoaded", () => {
    // 1. LÓGICA DEL ACORDEÓN
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".acc-header") || item;
        header.addEventListener("click", () => {
            accordionItems.forEach((i) => {
                i.classList.remove("active");
                const arrow = i.querySelector(".acc-arrow");
                if (arrow) arrow.textContent = "▼";
            });

            item.classList.add("active");
            const currentArrow = item.querySelector(".acc-arrow");
            if (currentArrow) currentArrow.textContent = "▲";
        });
    });

    // 2. DICCIONARIO Y LÓGICA DE IDIOMAS (I18N)
    let currentLang = "en";

    const i18n = {
        en: {
            nav_platform: "Platform",
            nav_about: "About Us",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            btn_signin: "Sign in",
            btn_subscribe: "Subscribe",
            hero_badge: "4D CINEMA TECHNOLOGY",
            hero_title: 'Bring the 4D experience to your cinema screens <span class="highlight">without high costs</span>',
            hero_desc: "Centralize motion seat control, synchronized environmental effects, and real-time analytics without replacing your existing infrastructure.",
            btn_start_now: "Get Started",
            btn_learn_more: "Learn More",
            stat_screens: "Connected screens",
            stat_uptime: "Guaranteed uptime",
            stat_latency: "Sync latency",
            dash_active_rooms: "Active screens",
            dash_sync: "Effects sync",
            dash_alerts: "Alerts today",
            dash_perf: "PERFORMANCE - 12H",
            dash_events: "RECENT EVENTS",
            dash_evt1: "Sync completed",
            dash_evt2: "Motor #4 — warning",
            plat_tag: "PLATFORM",
            plat_title: "Everything you need to manage your immersive theater",
            plat_f1_title: "Effects Synchronization",
            plat_f1_desc: "Proprietary sub-10ms protocol coordinating motion seats, wind, scent, and vibration frame-by-frame with screen content.",
            plat_f2_title: "Simplified Management Software",
            plat_f2_desc: "Unified and intuitive dashboard to operate all theater rooms across your entire complex from a single screen.",
            plat_f3_title: "Maintenance Incident Control",
            plat_f3_desc: "Proactive detection of mechanical and hydraulic issues before they interrupt a movie session.",
            plat_f4_title: "Performance Analytics",
            plat_f4_desc: "Detailed occupancy stats, power consumption insights, and real-time ROI tracking per auditorium.",
            plat_vis_title1: "LIVE SYNCHRONIZATION",
            plat_vis_title2: "RECENT INCIDENTS",
            about_tag: "ABOUT US",
            about_title: "Meet the Team",
            about_subtitle: "The creators behind Kinemo, building next-generation technology for modern cinema spaces.",
            pricing_tag: "PRICING",
            pricing_title: "Simple, transparent pricing",
            pricing_banner: "★ All plans include hardware leasing options with up to 20% savings",
            p_starter_desc: "For 1-3 screen circuits stepping into 4D experiences.",
            p_s_f1: "✓ Up to 3 connected screens",
            p_s_f2: "✓ Basic synchronization",
            p_s_f3: "✓ Unified control dashboard",
            p_s_f4: "✓ Email support (48h)",
            p_s_f5: "✓ Monthly analytics reports",
            p_badge_popular: "MOST POPULAR",
            p_growth_desc: "For expanding cinema operators needing advanced features.",
            p_g_f1: "✓ Up to 12 connected screens",
            p_g_f2: "✓ Advanced frame-sync",
            p_g_f3: "✓ Incident management & telemetry",
            p_g_f4: "✓ Priority support (4h)",
            p_g_f5: "✓ Real-time analytics",
            p_g_f6: "✓ Full Integration API",
            p_ent_desc: "For large cinema chains with multiple national locations.",
            p_e_f1: "✓ Unlimited connected screens",
            p_e_f2: "✓ 99.9% guaranteed SLA",
            p_e_f3: "✓ Integration with custom systems",
            p_e_f4: "✓ Dedicated CSM",
            p_e_f5: "✓ On-site onboarding",
            p_e_f6: "✓ Flexible contracts",
            contact_tag: "GET STARTED",
            contact_title: "Ready to transform your cinema experience?",
            contact_desc: "Deploy Kinemo across your cinema chain today with fast integration, enterprise-grade stability, and immersive 4D synchronization.",
            // Nuevas traducciones para la caja de suscripción (Inglés)
            sub_box_title: "Start Your Subscription",
            sub_box_desc: "Scale your cinema chain instantly with zero deployment friction and full technical backing.",
            sub_btn_now: "Subscribe Now",
            sub_disclaimer: 'By subscribing, you accept our <a href="#">terms & privacy policy</a>.',
            sub_enterprise_link: "Need custom enterprise solutions? Contact sales",
            ft_privacy: "Privacy",
            ft_terms: "Terms",
            ft_contact: "Contact"
        },
        es: {
            nav_platform: "Plataforma",
            nav_about: "Nosotros",
            nav_pricing: "Precios",
            nav_contact: "Contacto",
            btn_signin: "Iniciar sesión",
            btn_subscribe: "Suscribirse",
            hero_badge: "TECNOLOGÍA DE CINE 4D",
            hero_title: 'Lleva la experiencia 4D a tus salas de cine <span class="highlight">sin altos costos</span>',
            hero_desc: "Centralizamos el control de asientos de movimiento, efectos ambientales sincronizados y analíticas en tiempo real sin reemplazar tu infraestructura actual.",
            btn_start_now: "Empezar ahora",
            btn_learn_more: "Conoce más",
            stat_screens: "Salas conectadas",
            stat_uptime: "Uptime garantizado",
            stat_latency: "Latencia de sync",
            dash_active_rooms: "Salas activas",
            dash_sync: "Sync efectos",
            dash_alerts: "Alertas hoy",
            dash_perf: "RENDIMIENTO - 12H",
            dash_events: "EVENTOS RECIENTES",
            dash_evt1: "Sync completada",
            dash_evt2: "Motor #4 — alerta",
            plat_tag: "PLATAFORMA",
            plat_title: "Todo lo que necesitas para gestionar tu sala inmersiva",
            plat_f1_title: "Sincronización de efectos",
            plat_f1_desc: "Protocolo propietario con latencia sub-10ms que coordina asientos de movimiento, viento, aroma y vibración cuadro a cuadro.",
            plat_f2_title: "Software de gestión simplificado",
            plat_f2_desc: "Panel unificado e intuitivo para operar todas las salas de tu complejo desde un solo dispositivo.",
            plat_f3_title: "Gestión de incidencias de mantenimiento",
            plat_f3_desc: "Detección preventiva de fallos mecánicos e hidráulicos antes de que afecten la función.",
            plat_f4_title: "Análisis de rendimiento",
            plat_f4_desc: "Métricas detalladas de ocupación, consumo energético y retorno de inversión por sala.",
            plat_vis_title1: "SINCRONIZACIÓN EN VIVO",
            plat_vis_title2: "ÚLTIMAS INCIDENCIAS",
            about_tag: "NOSOTROS",
            about_title: "Conoce al Equipo",
            about_subtitle: "Los creadores detrás de Kinemo, construyendo tecnología de última generación para salas de cine.",
            pricing_tag: "PRECIOS",
            pricing_title: "Planes sencillos y transparentes",
            pricing_banner: "★ Todos los planes incluyen opciones de arrendamiento de hardware con ahorro de hasta el 20%",
            p_starter_desc: "Para circuitos de 1-3 salas que quieren dar el salto a 4D.",
            p_s_f1: "✓ Hasta 3 salas conectadas",
            p_s_f2: "✓ Sincronización básica",
            p_s_f3: "✓ Panel de control unificado",
            p_s_f4: "✓ Soporte email (48h)",
            p_s_f5: "✓ Reportes mensuales",
            p_badge_popular: "MÁS POPULAR",
            p_growth_desc: "Para operadores en expansión con mantenimiento avanzado.",
            p_g_f1: "✓ Hasta 12 salas conectadas",
            p_g_f2: "✓ Sincronización avanzada",
            p_g_f3: "✓ Gestión de incidencias + telemetría",
            p_g_f4: "✓ Soporte prioritario (4h)",
            p_g_f5: "✓ Analíticas en tiempo real",
            p_g_f6: "✓ API de integración",
            p_ent_desc: "Para grandes cadenas con múltiples ubicaciones.",
            p_e_f1: "✓ Salas ilimitadas",
            p_e_f2: "✓ SLA garantizado 99.9%",
            p_e_f3: "✓ Integración con sistemas propios",
            p_e_f4: "✓ CSM dedicado",
            p_e_f5: "✓ Onboarding in-situ",
            p_e_f6: "✓ Contratos flexibles",
            contact_tag: "CONTACTO",
            contact_title: "¿Listo para transformar tu experiencia en el cine?",
            contact_desc: "Despliega Kinemo en tu cadena de cines hoy mismo con integración rápida, estabilidad de nivel empresarial y sincronización 4D inmersiva.",
            // Nuevas traducciones para la caja de suscripción (Español)
            sub_box_title: "Inicia tu Suscripción",
            sub_box_desc: "Escala tu cadena de cines al instante con cero fricción de despliegue y soporte técnico completo.",
            sub_btn_now: "Suscribirse Ahora",
            sub_disclaimer: 'Al suscribirte, aceptas nuestros <a href="#">términos y política de privacidad</a>.',
            sub_enterprise_link: "¿Necesitas soluciones empresariales personalizadas? Contacta a ventas",
            ft_privacy: "Privacidad",
            ft_terms: "Términos",
            ft_contact: "Contacto"
        }
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (i18n[lang] && i18n[lang][key]) {
                element.innerHTML = i18n[lang][key];
            }
        });

        document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
        const selectedBtn = document.getElementById(`lang-${lang}`);
        if (selectedBtn) selectedBtn.classList.add("active");
    };

    const langEnBtn = document.getElementById("lang-en");
    const langEsBtn = document.getElementById("lang-es");

    if (langEnBtn) langEnBtn.addEventListener("click", () => setLanguage("en"));
    if (langEsBtn) langEsBtn.addEventListener("click", () => setLanguage("es"));

    // 3. ENVÍO DEL FORMULARIO CON TRADUCCIÓN
    const form = document.getElementById("demo-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(i18n[currentLang].form_success);
            form.reset();
        });
    }
});