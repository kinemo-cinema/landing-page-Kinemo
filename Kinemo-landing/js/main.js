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
            contact_tag: "CONTACT",
            contact_title: "Ready to transform your cinema experience?",
            contact_desc: "Talk to our team and discover how Kinemo can elevate your cinema screens.",
            form_success: "Thank you! We will get in touch with you shortly.",
            // Traducciones para la página de Términos y Condiciones
            terms_tag: "LEGAL",
            terms_title: "Terms and Conditions of Use",
            terms_update: "Last updated: October 3, 2026",
            terms_toc_1: "Introduction and Acceptance of Agreement",
            terms_toc_2: "The Kinemo Service We Provide",
            terms_toc_3: "Use of the Service and User Accounts",
            terms_toc_4: "Intellectual Property and Content Rights",
            terms_toc_5: "Customer Support, Information, and Questions",
            terms_toc_6: "Problems and Disputes",
            terms_toc_7: "About These Terms",
            terms_h1: "1. Introduction",
            terms_p1_1: 'Welcome to <strong>Kinemo</strong>. Please read these Terms of Use carefully as they govern your use of (including access to) Kinemo\'s personalized services for immersive experiences, screen control, and hardware management, including all websites and software applications that incorporate or link to these Terms (collectively, the "<strong>Kinemo Service</strong>").',
            terms_p1_2: "Your use of the Kinemo Service is subject to additional terms and conditions provided by us, which are incorporated into these Terms by this reference. If you register for or use the Kinemo Service, you accept these Terms. If you do not agree to these Terms, you must not use the Service or access any content.",
            terms_h2: "2. The Kinemo Service We Provide",
            terms_p2: "We offer a variety of frame-sync tools and unified control plans for cinema operators and entertainment venues. We strive to maintain continuous platform availability, though access may occasionally be interrupted for technical maintenance or system upgrades.",
            terms_h3: "3. Use of the Service and User Accounts",
            terms_p3: "To use certain features, you must create a user account. You are solely responsible for maintaining the security of your login credentials.",
            terms_li3_1: "You must not share your account or allow unauthorized access.",
            terms_li3_2: "Reverse engineering or bypassing platform security protocols is strictly prohibited.",
            terms_h4: "4. Intellectual Property and Content Rights",
            terms_p4: "All design, interfaces, logos, trademarks, and source code of Kinemo are the exclusive property of their creators and are protected by applicable intellectual property laws.",
            terms_h5: "5. Customer Support, Information, and Questions",
            terms_p5: "For any inquiries, technical support, or complaints regarding your account or subscribed plans, you can contact our support team through the official communication channels provided on the platform.",
            terms_h6: "6. Problems and Disputes",
            terms_p6: "Any dispute or claim arising from the use of our services will be resolved in good faith between the involved parties, always aiming for a direct and transparent solution.",
            terms_h7: "7. About These Terms",
            terms_p7: "We may modify these Terms periodically for commercial or legal reasons. We will notify you of any relevant changes by updating the date at the top of this document."
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
            contact_desc: "Habla con nuestro equipo y descubre cómo Kinemo puede elevar tus salas de cine.",
            form_success: "¡Gracias! Nos pondremos en contacto contigo en breve.",
            // Traducciones para la página de Términos y Condiciones
            terms_tag: "LEGAL",
            terms_title: "Términos de uso de Kinemo",
            terms_update: "Última actualización: 3 de octubre de 2026",
            terms_toc_1: "Introducción y Aceptación del Acuerdo",
            terms_toc_2: "El Servicio Kinemo que proporcionamos",
            terms_toc_3: "El uso del Servicio y Cuentas de Usuario",
            terms_toc_4: "Derechos de propiedad intelectual y contenido",
            terms_toc_5: "Atención al cliente, información, preguntas y quejas",
            terms_toc_6: "Problemas y disputas",
            terms_toc_7: "Acerca de estos Términos",
            terms_h1: "1. Introducción",
            terms_p1_1: 'Te damos la bienvenida a <strong>Kinemo</strong>. Por favor, lee atentamente estos Términos de uso (los "<strong>Términos</strong>") ya que rigen el uso de (incluido el acceso a) los servicios personalizados de Kinemo para experiencias inmersivas, control de pantallas y gestión de hardware, incluidos todos nuestros sitios web y aplicaciones de software que incorporan o se vinculan a estos Términos (colectivamente, el "<strong>Servicio Kinemo</strong>").',
            terms_p1_2: "El uso del Servicio Kinemo está sujeto a otros términos y condiciones proporcionados por nosotros, que se incorporan a estos Términos mediante esta referencia. Si se registra para el Servicio Kinemo, o si lo utiliza, acepta estos Términos. Si no está de acuerdo con estos Términos, entonces no debe usar el Servicio ni acceder a ningún contenido.",
            terms_h2: "2. El Servicio Kinemo que proporcionamos",
            terms_p2: "Ofrecemos una variedad de planes y herramientas de sincronización de fotogramas y control unificado para operadores de cine y entretenimiento. Nos esforzamos por mantener la plataforma disponible de forma continua, aunque el acceso puede verse interrumpido por tareas de mantenimiento técnico o actualizaciones del sistema.",
            terms_h3: "3. El uso del Servicio y Cuentas de Usuario",
            terms_p3: "Para utilizar ciertas funciones, es necesario crear una cuenta de usuario. Usted es el único responsable de mantener la seguridad de sus credenciales de acceso.",
            terms_li3_1: "No debe compartir su cuenta ni permitir accesos no autorizados.",
            terms_li3_2: "Queda prohibido realizar ingeniería inversa o vulnerar los protocolos de seguridad de la plataforma.",
            terms_h4: "4. Derechos de propiedad intelectual y contenido",
            terms_p4: "Todo el diseño, interfaces, logotipos, marcas y códigos fuente de Kinemo son propiedad exclusiva de sus creadores y están protegidos por las leyes de propiedad intelectual aplicables.",
            terms_h5: "5. Atención al cliente, información, preguntas y quejas",
            terms_p5: "Para cualquier duda, soporte técnico o reclamación relacionada con su cuenta o planes contratados, puede ponerse en contacto con nuestro equipo de atención a través de los canales oficiales habilitados en la plataforma.",
            terms_h6: "6. Problemas y disputas",
            terms_p6: "Cualquier disputa o reclamación derivada de la utilización de nuestros servicios se resolverá de buena fe entre las partes involucradas, buscando siempre una solución directa y transparente.",
            terms_h7: "7. Acerca de estos Términos",
            terms_p7: "Podemos realizar modificaciones a estos Términos periódicamente por razones comerciales o legales. Le notificaremos cualquier cambio relevante mediante la actualización de la fecha al inicio de este documento."
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