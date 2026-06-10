// Studio do Sono - Main JavaScript
// Shared interactive components

// ========== SVG ICONS (inline) ==========
const ICONS = {
  menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronLeft: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  arrowUpRight: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  checkCircle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  star: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  phone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  messageCircle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  share2: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
  globe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  mail: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  send: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  facebook: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  heart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  bookmark: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
  moreHorizontal: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
  package: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>',
  armchair: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h.5a1.5 1.5 0 0 0 0-3H20a2 2 0 0 0-2 2v1"/><path d="M7 18a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2h-.5a1.5 1.5 0 0 1 0-3H4a2 2 0 0 1 2 2v1"/><path d="M6 18h12"/><path d="M6 18v-6a6 6 0 0 1 12 0v6"/></svg>',
  bed: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  tag: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>',
  palette: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.27-.38-.62-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"/></svg>',
  component: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 3v18"/><path d="M3 9h18"/></svg>',
  whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2.056c-5.5 0-9.98 4.479-9.98 9.98 0 1.76.452 3.475 1.312 4.985L2.05 21.942l4.897-1.282c1.474.779 3.14 1.192 4.86 1.192h.004c5.498 0 9.978-4.48 9.978-9.981 0-2.667-1.037-5.174-2.92-7.062a9.92 9.92 0 00-7.05-2.93zM12.03 20.17c-1.488 0-2.936-.398-4.208-1.152l-.3-.178-3.125.82.834-3.047-.196-.312c-.828-1.315-1.266-2.837-1.266-4.405 0-4.57 3.722-8.293 8.293-8.293 2.215 0 4.298.863 5.865 2.43a8.232 8.232 0 012.43 5.865c-.001 4.571-3.724 8.294-8.295 8.294h-.002z"/></svg>'
};

// ========== HERO SLIDER ==========
function initHero() {
  const heroSection = document.querySelector('[data-hero]');
  if (!heroSection) return;

  const slides = [
    {
      title: 'Conheça o verdadeiro<br>prazer de dormir bem.',
      subtitle: 'Com as melhores marcas internacionais, presentes nos maiores hotéis do mundo.',
      cta: 'Descubra nossos produtos',
      ctaLink: 'produtos/',
    },
    {
      title: 'Colchões King Koil<br>com até 30% off.',
      subtitle: 'Aproveite condições especiais em toda a linha King Koil. Oferta por tempo limitado.',
      cta: 'Ver ofertas',
      ctaLink: 'produtos/colchoes/king-koil/',
    },
    {
      title: 'Poltronas que<br>transformam ambientes.',
      subtitle: 'Descubra a nova coleção de poltronas automatizadas com tecnologia de massagem.',
      cta: 'Conheça a coleção',
      ctaLink: 'produtos/poltronas/',
    },
  ];

  let current = 0;
  let isTransitioning = false;
  let interval;

  const bgImages = heroSection.querySelectorAll('[data-hero-bg]');
  const titleEl = heroSection.querySelector('[data-hero-title]');
  const subtitleEl = heroSection.querySelector('[data-hero-subtitle]');
  const ctaEl = heroSection.querySelector('[data-hero-cta]');
  const dots = heroSection.querySelectorAll('[data-hero-dot]');
  const prevBtn = heroSection.querySelector('[data-hero-prev]');
  const nextBtn = heroSection.querySelector('[data-hero-next]');

  function goTo(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    current = index;
    const s = slides[current];

    bgImages.forEach((img, i) => {
      img.style.opacity = i === current ? '1' : '0';
    });

    titleEl.innerHTML = s.title;
    subtitleEl.textContent = s.subtitle;
    ctaEl.textContent = s.cta;
    ctaEl.href = s.ctaLink;

    dots.forEach((d, i) => {
      if (i === current) {
        d.className = 'w-8 h-2 rounded-full bg-[#507386] transition-all duration-500 cursor-pointer';
      } else {
        d.className = 'w-2 h-2 rounded-full bg-[#507386]/30 hover:bg-[#507386]/50 transition-all duration-500 cursor-pointer';
      }
    });

    setTimeout(() => isTransitioning = false, 700);
  }

  function next() { goTo((current + 1) % slides.length); }
  function prev() { goTo((current - 1 + slides.length) % slides.length); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  interval = setInterval(next, 6000);
  heroSection.addEventListener('mouseenter', () => clearInterval(interval));
  heroSection.addEventListener('mouseleave', () => { interval = setInterval(next, 6000); });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuBtn = document.querySelector('[data-mobile-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    menuBtn.innerHTML = isOpen ? ICONS.menu : ICONS.x;
  });

  // Close menu on link clicks
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      menuBtn.innerHTML = ICONS.menu;
    });
  });
}

// ========== PRODUCT SEARCH ==========
function initProductSearch() {
  const containers = document.querySelectorAll('[data-search-container]');
  containers.forEach(container => {
    const input = container.querySelector('input');
    const results = container.querySelector('[data-search-results]');
    const clearBtn = container.querySelector('[data-search-clear]');
    if (!input || !results) return;

    const allItems = [];
    DATA.catalog.forEach(cat => {
      allItems.push({ title: cat.name, subtitle: 'Categoria', image: cat.brands[0]?.image || DATA.products[0].img, url: 'produtos/' + cat.slug + '/', type: 'category' });
      cat.brands.forEach(brand => {
        allItems.push({ title: brand.name, subtitle: 'Marca - ' + cat.name, image: brand.image, url: 'produtos/' + cat.slug + '/' + brand.slug + '/', type: 'brand' });
        brand.catalog.forEach(prod => {
          allItems.push({ title: prod.name, subtitle: 'Produto - ' + brand.name, image: prod.image, url: 'produtos/' + cat.slug + '/' + brand.slug + '/' + prod.slug + '/', type: 'product' });
        });
      });
    });

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (q.length > 0) {
        const filtered = allItems.filter(item =>
          item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
        ).slice(0, 5);
        if (filtered.length > 0) {
          results.style.display = 'block';
          results.innerHTML = '<span style="padding:8px 16px;display:block;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">Resultados</span>' +
            filtered.map(r => `
              <button onclick="window.location.href='${r.url}'" style="display:flex;align-items:center;gap:12px;padding:12px 16px;width:100%;text-align:left;background:none;border:none;cursor:pointer;font-family:inherit;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='none'">
                ${r.image ? '<div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#f3f4f6"><img src="'+r.image+'" alt="" style="width:100%;height:100%;object-fit:cover"></div>' : ''}
                <div style="overflow:hidden">
                  <div style="font-size:14px;font-weight:700;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.title}</div>
                  <div style="font-size:12px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.subtitle}</div>
                </div>
              </button>
            `).join('');
        } else {
          results.style.display = 'block';
          results.innerHTML = '<div style="padding:24px;text-align:center;color:#6b7280;font-size:14px">Nenhum resultado encontrado para "' + input.value + '"</div>';
        }
      } else {
        results.style.display = 'none';
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length > 0) results.style.display = 'block';
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        results.style.display = 'none';
      });
    }

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) results.style.display = 'none';
    });
  });
}

// ========== PRODUCTS CAROUSEL ==========
function initProductsCarousel() {
  const scrollContainer = document.querySelector('[data-products-scroll]');
  const leftBtn = document.querySelector('[data-products-left]');
  const rightBtn = document.querySelector('[data-products-right]');
  if (!scrollContainer) return;

  function scroll(dir) {
    scrollContainer.scrollBy({ left: dir * 350, behavior: 'smooth' });
  }

  if (leftBtn) leftBtn.addEventListener('click', () => scroll(-1));
  if (rightBtn) rightBtn.addEventListener('click', () => scroll(1));

  let interval = setInterval(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scroll(1);
    }
  }, 3500);

  scrollContainer.addEventListener('mouseenter', () => clearInterval(interval));
  scrollContainer.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll(1);
      }
    }, 3500);
  });
}

// ========== TESTIMONIALS CAROUSEL ==========
function initTestimonialsCarousel() {
  const scrollContainer = document.querySelector('[data-testimonials-scroll]');
  const leftBtn = document.querySelector('[data-testimonials-left]');
  const rightBtn = document.querySelector('[data-testimonials-right]');
  if (!scrollContainer) return;

  function scroll(dir) {
    scrollContainer.scrollBy({ left: dir * 400, behavior: 'smooth' });
  }

  if (leftBtn) leftBtn.addEventListener('click', () => scroll(-1));
  if (rightBtn) rightBtn.addEventListener('click', () => scroll(1));

  let interval = setInterval(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scroll(1);
    }
  }, 4500);
}

// ========== FAQ ACCORDION ==========
function initFAQ() {
  document.querySelectorAll('[data-faq-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const iconContainer = btn.querySelector('[data-faq-icon]');
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      iconContainer.innerHTML = isOpen ? ICONS.plus : ICONS.minus;
    });
  });
}

// ========== BRAND DESIGN SYSTEM TABS ==========
function initDesignSystemTabs() {
  const tabs = document.querySelectorAll('[data-ds-tab]');
  const contents = document.querySelectorAll('[data-ds-content]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('bg-white', 'text-[#507386]', 'shadow-sm'); t.classList.add('text-gray-500'); });
      tab.classList.add('bg-white', 'text-[#507386]', 'shadow-sm');
      tab.classList.remove('text-gray-500');
      const target = tab.dataset.dsTab;
      contents.forEach(c => { c.style.display = c.dataset.dsContent === target ? 'block' : 'none'; });
    });
  });
}

// ========== PRODUCT DETAIL (hash-based on brand pages) ==========
function initProductDetail() {
  const detailContainer = document.querySelector('[data-product-detail]');
  if (!detailContainer) return;

  function loadProductFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      detailContainer.style.display = 'none';
      return;
    }
    const brandSlug = detailContainer.dataset.brand;
    const catSlug = detailContainer.dataset.category;
    const cat = DATA.catalog.find(c => c.slug === catSlug);
    const brand = cat?.brands.find(b => b.slug === brandSlug);
    const product = brand?.catalog.find(p => p.slug === hash);
    if (!product) return;

    detailContainer.style.display = 'block';
    detailContainer.innerHTML = `
      <div style="background:#fff;min-height:70vh;padding-bottom:96px">
        <div style="background:#F4EFEB;padding:64px 16px">
          <div style="max-width:1280px;margin:0 auto">
            <a href="${catSlug}/${brandSlug}/" style="display:inline-flex;align-items:center;gap:8px;color:#507386;text-decoration:none;font-weight:500;margin-bottom:32px" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${ICONS.arrowLeft} Voltar para ${brand.name}</a>
            <div style="display:flex;flex-direction:column;gap:48px;align-items:flex-start;margin-top:16px">
              <div style="width:100%;max-width:50%;aspect-ratio:1;border-radius:40px;overflow:hidden;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1);background:#fff;border:1px solid #f3f4f6;display:flex;align-items:center;justify-content:center;padding:32px;margin:0 auto">
                <img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px">
              </div>
              <div style="width:100%;display:flex;flex-direction:column;gap:24px;padding:24px 0">
                <div>
                  <span style="color:#507386;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;font-size:14px">${brand.name}</span>
                  <h1 style="font-size:48px;font-weight:900;color:#111827;line-height:1.2;margin-top:8px">${product.name}</h1>
                </div>
                <p style="font-size:20px;color:#4b5563;line-height:1.6;max-width:512px">${product.desc}</p>
                ${product.features && product.features.length > 0 ? `
                  <div style="margin-top:16px;display:flex;flex-direction:column;gap:16px">
                    <h3 style="font-size:18px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.05em">Principais Caracteristicas</h3>
                    <ul style="display:flex;flex-direction:column;gap:16px;list-style:none;padding:0">
                      ${product.features.map(f => `
                        <li style="display:flex;align-items:flex-start;gap:12px">
                          ${ICONS.checkCircle.replace(/w-24|h-24/g, 'w-6 h-6').replace('currentColor','#507386')}
                          <span style="color:#374151;font-weight:500;font-size:18px">${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                <div style="margin-top:40px;padding:24px;background:rgba(80,115,134,0.05);border-radius:32px;border:1px solid rgba(80,115,134,0.1);display:flex;flex-direction:column;gap:24px;box-shadow:0 1px 3px rgba(0,0,0,0.05)">
                  <div>
                    <h4 style="font-size:20px;font-weight:700;color:#111827">Gostou deste produto?</h4>
                    <p style="color:#4b5563;margin-top:8px">Nossos especialistas estao prontos para tirar todas as suas duvidas e oferecer o melhor orcamento.</p>
                  </div>
                  <a href="../../lojas/" style="display:inline-flex;align-items:center;justify-content:center;gap:12px;background:#5bc565;color:#fff;padding:16px 32px;border-radius:12px;font-size:18px;font-weight:700;text-decoration:none;width:100%;max-width:400px;transition:background 0.2s" onmouseover="this.style.background='#4CAF50'" onmouseout="this.style.background='#5bc565'">${ICONS.messageCircle} Falar com atendente ou solicitar orcamento</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    detailContainer.scrollIntoView({ behavior: 'smooth' });
  }

  loadProductFromHash();
  window.addEventListener('hashchange', loadProductFromHash);
}

// ========== CONTACT FORM ==========
function initContactForms() {
  document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  });
}

// ========== SCROLL TO HASH ==========
function initScrollToHash() {
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

// ========== SHARE BUTTON (links page) ==========
function initShare() {
  const btn = document.querySelector('[data-share-btn]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: 'Studio do Sono', text: 'Conheca a Studio do Sono - Especialistas em Bem-Estar', url: window.location.origin }).catch(() => {});
    }
  });
}

// ========== INIT ALL ==========
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initMobileMenu();
  initProductSearch();
  initProductsCarousel();
  initTestimonialsCarousel();
  initFAQ();
  initDesignSystemTabs();
  initProductDetail();
  initContactForms();
  initScrollToHash();
  initShare();
});
