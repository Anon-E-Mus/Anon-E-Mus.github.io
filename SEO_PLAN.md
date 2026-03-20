# SEO Master Plan - Raudra Cosmos
## Comprehensive SEO Strategy for Ranking in 2026

**Created:** March 20, 2026
**Status:** Planning Phase
**Target Keywords:** 70+ keywords across multiple categories

---

## Executive Summary

This document outlines a complete SEO strategy for Raudra Cosmos, a mythological card RPG gacha game. The plan addresses technical SEO, on-page optimization, content strategy, and off-page SEO specifically tailored for GitHub Pages deployment with custom domain.

**Current State Assessment:**
- Single-page website with good visual design
- Basic meta tags present (description, keywords)
- Missing: Open Graph tags, Twitter Cards, structured data, sitemap
- No dedicated content pages for keyword targeting
- Good semantic HTML structure

---

## Phase 1: Technical SEO Foundation (Week 1)

### 1.1 Essential Meta Tags to Add

**File to modify:** `index.html` (in `<head>` section)

#### Open Graph Tags (Social Media Sharing)
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://raudracosmos.com/">
<meta property="og:title" content="Raudra Cosmos | Mythological Card RPG Gacha Game">
<meta property="og:description" content="Collect 250+ deities from 7 legendary pantheons in this strategic card RPG. Free-to-play gacha game with Hindu, Norse, Egyptian, Greek gods and more. Coming 2026.">
<meta property="og:image" content="https://raudracosmos.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Raudra Cosmos">
```

#### Twitter Card Tags
```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://raudracosmos.com/">
<meta name="twitter:title" content="Raudra Cosmos | Mythological Card RPG Gacha Game">
<meta name="twitter:description" content="Collect 250+ deities from 7 legendary pantheons. Free-to-play mythology card RPG with strategic deck building and gacha mechanics.">
<meta name="twitter:image" content="https://raudracosmos.com/og-image.jpg">
```

#### Additional SEO Meta Tags
```html
<!-- Canonical URL -->
<link rel="canonical" href="https://raudracosmos.com/">

<!-- Alternate Language (future-proofing) -->
<link rel="alternate" hreflang="en" href="https://raudracosmos.com/">

<!-- Author/Publisher -->
<meta name="author" content="Raudra Cosmos Games">
<link rel="author" href="https://raudracosmos.com/">

<!-- Favicon updates -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### 1.2 Structured Data (JSON-LD)

**Add before closing `</head>` tag:**

#### Organization Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Raudra Cosmos Games",
  "url": "https://raudracosmos.com",
  "logo": "https://raudracosmos.com/logo.png",
  "sameAs": [
    "https://discord.gg/wvvFtqftMvM",
    "https://twitter.com/raudracosmos",
    "https://youtube.com/@raudracosmos"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  }
}
</script>
```

#### Video Game Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Raudra Cosmos",
  "url": "https://raudracosmos.com",
  "description": "A mythological card RPG gacha game featuring 250+ deities from 7 legendary pantheons including Hindu, Norse, Egyptian, Greek, Babylonian, Shinto, and Taoist mythologies.",
  "genre": ["Card RPG", "Gacha", "Strategy", "Role-Playing Game", "Mythology"],
  "playMode": ["MultiPlayer", "CoOp", "SinglePlayer"],
  "gamePlatform": ["PC", "Web Browser", "Mobile"],
  "applicationCategory": "Game",
  "operatingSystem": "Windows, macOS, Linux, Android, iOS",
  "keywords": "mythology card RPG, gacha game, TCG, trading card game, Hindu gods game, Norse mythology game, card battle RPG",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "100"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>
```

#### FAQ Schema (for FAQ section)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Raudra Cosmos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raudra Cosmos is a free-to-play mythological card RPG gacha game featuring 250+ collectible deities from 7 legendary pantheons including Hindu, Norse, Egyptian, Greek, Babylonian, Shinto, and Taoist mythologies."
      }
    },
    {
      "@type": "Question",
      "name": "When will Raudra Cosmos be released?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raudra Cosmos is scheduled for release in 2026. Join our Discord for beta access opportunities and development updates."
      }
    },
    {
      "@type": "Question",
      "name": "Is Raudra Cosmos free to play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Raudra Cosmos is free-to-play with optional gacha mechanics for collecting deity cards. The game features fair summoning rates and a pity system."
      }
    }
  ]
}
</script>
```

### 1.3 GitHub Pages SEO Files

**Create new files in root directory:**

#### robots.txt
```txt
# robots.txt for Raudra Cosmos
# Allow all crawlers

User-agent: *
Allow: /

# Disallow admin/config files if any
Disallow: /_/

# Sitemap location
Sitemap: https://raudracosmos.com/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://raudracosmos.com/</loc>
    <lastmod>2026-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs as you create new pages -->
</urlset>
```

---

## Phase 2: On-Page SEO Optimization (Week 1-2)

### 2.1 Title Tag Optimization

**Current:** `Raudra Cosmos | The Mythical Gods Card Multiplayer RPG Game`

**Recommended variations for different pages:**
- Homepage: `Raudra Cosmos | Mythological Card RPG Gacha Game with 250+ Deities`
- Features page: `Game Features | Raudra Cosmos - Strategy Card RPG`
- Deities page: `250+ Collectible Deities | Raudra Cosmos Mythology Card Game`
- Pantheon pages: `Hindu Deities Collection | Raudra Cosmos` (and similar for others)

### 2.2 Meta Description Optimization

**Current:** Basic description exists

**Improved version (155-160 characters):**
```
Collect 250+ deities from 7 mythological pantheons in this free-to-play card RPG gacha game. Strategic deck building, Hindu/Norse/Egyptian gods. Coming 2026!
```

### 2.3 H1 Tag Optimization

**Current:** Uses `RAUDRA COSMOS` as H1

**Ensure proper hierarchy:**
- H1: Used once per page - "Raudra Cosmos | Mythological Card RPG"
- H2: Major sections - "The Vision", "Game Features", "Pantheons", etc.
- H3: Subsections and feature cards
- H4: Fine-grained details (footer navigation, etc.)

### 2.4 Image Alt Text Strategy

Even though current images are CSS-based, when actual game images are added:

```html
<!-- Character cards -->
<img src="/images/rudra.jpg" alt="Rudra - Hindu Destroyer Deity Card in Raudra Cosmos Card RPG">

<!-- Game screenshots -->
<img src="/images/gameplay.jpg" alt="Raudra Cosmos card battle gameplay showing strategic turn-based combat">

<!-- Icons (decorative) -->
<img src="/icon.svg" alt="" role="presentation">
```

### 2.5 Internal Linking Structure

Add strategic internal links:
```html
<!-- From hero section to pantheons -->
<a href="#pantheon" aria-label="Explore all 7 mythological pantheons in Raudra Cosmos">

<!-- From features to detailed pages -->
<a href="/features/gacha-system" aria-label="Learn about the fair gacha summoning system">

<!-- Contextual links within descriptions -->
<p>Collect <a href="/deities/hindu-pantheon">Hindu deities</a> like Shiva, Indra, and Rudra.</p>
```

---

## Phase 3: Content Strategy & Keyword Targeting (Week 2-8)

### 3.1 Keyword Priority Matrix

#### Tier 1: Primary Brand Keywords (High Priority)
| Keyword | Search Volume | Competition | Priority |
|---------|--------------|-------------|----------|
| Raudra Cosmos | Low | Low | **P0** |
| Raudra Game | Low | Low | **P0** |
| Rudra Cosmos | Low | Low | **P0** |
| Raudra Games | Low | Low | **P0** |
| Rudra Games | Low | Low | **P0** |

#### Tier 2: High-Value Long-Tail (Medium Priority)
| Keyword | Search Volume | Competition | Priority |
|---------|--------------|-------------|----------|
| mythology card RPG | Medium | Medium | **P1** |
| mythological card game | Medium | Medium | **P1** |
| gacha card game | Medium | High | **P1** |
| gods card game | Low-Med | Low | **P1** |
| mythology gacha game | Low | Low | **P1** |
| TCG mythology | Low-Med | Medium | **P1** |
| trading card game gods | Low | Low | **P1** |

#### Tier 3: Niche Long-Tail (Lower Priority, Easier Wins)
| Keyword | Search Volume | Competition | Priority |
|---------|--------------|-------------|----------|
| Hindu mythology card game | Very Low | Very Low | **P2** |
| Norse mythology card RPG | Low | Low | **P2** |
| Egyptian gods card game | Very Low | Very Low | **P2** |
| Greek mythology TCG | Low | Medium | **P2** |
| Indian mythology game | Low | Low | **P2** |
| Shinto card game | Very Low | Very Low | **P2** |
| Babylonian gods game | Very Low | Very Low | **P2** |

#### Tier 4: "Games Like" Keywords (Content Marketing)
| Keyword | Search Volume | Competition | Priority |
|---------|--------------|-------------|----------|
| games like Marvel Snap mythology | Low-Med | Low | **P2** |
| games like Hearthstone with gods | Low | Low | **P2** |
| mythology games like Raid Shadow Legends | Med | High | **P3** |
| best gacha games 2026 | High | High | **P3** |

### 3.2 New Pages to Create

**GitHub Pages structure:**
```
/
├── index.html (existing)
├── sitemap.xml (new)
├── robots.txt (new)
├── about.html
├── features.html
├── pantheons/
│   ├── index.html
│   ├── hindu.html
│   ├── norse.html
│   ├── egyptian.html
│   ├── greek.html
│   ├── babylonian.html
│   ├── shinto.html
│   └── taoist.html
├── deities.html
├── gacha.html
├── blog/
│   ├── index.html
│   ├── best-mythology-card-rpg-games.html
│   ├── hindu-deities-in-gaming.html
│   ├── gacha-system-explained.html
│   ├── deck-building-guide.html
│   └── games-like-marvel-snap-mythology.html
└── faq.html
```

### 3.3 Content Calendar (12-Week Plan)

#### Week 2-3: Core Pages
- [ ] about.html - Studio & Game Overview
- [ ] features.html - All features detailed
- [ ] faq.html - Expanded FAQ page
- [ ] gacha.html - Gacha system explanation

#### Week 4-5: Pantheon Pages
- [ ] hindu.html - Hindu pantheon overview
- [ ] norse.html - Norse pantheon overview
- [ ] egyptian.html - Egyptian pantheon overview
- [ ] greek.html - Greek/Olympian pantheon overview
- [ ] babylonian.html - Babylonian pantheon overview
- [ ] shinto.html - Shinto pantheon overview
- [ ] taoist.html - Taoist pantheon overview

#### Week 6-10: Blog Content (SEO Powerhouses)
- [ ] "Best Mythology Card RPG Games in 2026" (1,500 words)
- [ ] "Top 10 Gacha Card Games with Mythological Themes" (1,200 words)
- [ ] "Hindu Deities in Video Games: A Complete Guide" (1,500 words)
- [ ] "Games Like Marvel Snap: Mythology Alternatives" (1,000 words)
- [ ] "How Our Gacha System Ensures Fair Summons" (800 words)
- [ ] "Deck Building Guide for Mythology Card RPGs" (1,200 words)
- [ ] "Norse Mythology in Gaming: From God of War to Card RPGs" (1,000 words)
- [ ] "Free-to-Play Mythology Games Worth Playing in 2026" (1,200 words)
- [ ] "TCG vs Gacha: Understanding the Difference" (800 words)
- [ ] "250+ Deities: The Ultimate Mythology Roster in Gaming" (1,000 words)

#### Week 11-12: Optimization & Refinement
- [ ] Internal linking audit
- [ ] Meta tag refinement
- [ ] Image optimization
- [ ] Performance optimization
- [ ] Mobile SEO check

### 3.4 Blog Post Template

Each blog post should include:
```html
<article>
  <h1>Target Keyword in H1 | Secondary Keyword</h1>
  <meta name="description" content="Compelling description with keywords (155-160 chars)">

  <p>Introduction with hook and primary keyword...</p>

  <h2>Keyword-Rich Subheading</h2>
  <p>Content block with LSI keywords...</p>

  <h2>Another Keyword Subheading</h2>
  <p>More content...</p>

  <!-- Internal links to relevant pages -->
  <!-- External links to authoritative sources -->

  <h2>Conclusion</h2>
  <p>Summary and CTA...</p>
</article>
```

---

## Phase 4: Technical Performance & Core Web Vitals (Week 3)

### 4.1 Performance Optimization Tasks

| Task | Current | Target | Impact |
|------|---------|--------|--------|
| LCP (Largest Contentful Paint) | ~2.5s | <2.5s | High |
| FID/INP (Interactivity) | ~100ms | <200ms | Medium |
| CLS (Layout Shift) | ~0.05 | <0.1 | High |
| TTFB (Time to First Byte) | ~200ms | <600ms | Medium |
| Image Optimization | CSS only | WebP format | Medium |

### 4.2 CSS Optimization

**Current:** Single `style.css` (~1100 lines)

**Actions:**
- Minify CSS for production
- Consider critical CSS inlining for above-fold content
- Remove unused CSS rules
- Use CSS containment for better performance

### 4.3 JavaScript Optimization

**Actions:**
- Defer non-critical JS loading
- Add `loading="lazy"` to images (when real images added)
- Minify JS for production
- Consider code splitting for larger features

### 4.4 Font Optimization

```html
<!-- Update font loading with display swap -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;600&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

---

## Phase 5: Off-Page SEO & Link Building (Week 4-12)

### 5.1 Social Media Signals

**Priority Platforms:**
1. **Discord** - Community building (already active)
2. **Twitter/X** - Game announcements, developer updates
3. **YouTube** - Gameplay trailers, devlogs, tutorials
4. **Reddit** - r/gacha, r/indiegaming, r/mythology
5. **Instagram** - Character reveals, fan art

**Content Strategy:**
- Weekly devlog posts
- Character spotlights with hashtags
- Behind-the-scenes content
- Community showcases

### 5.2 Community Engagement

**Target Subreddits:**
- r/gachagaming
- r/indiegaming
- r/mythology
- r/mythologygaming
- r/Games
- r/IndieGaming

**Forums & Communities:**
- TouchArcade
- ResetEra
- RPG.net
- Mythology forums

### 5.3 Backlink Strategy

**Target Link Sources:**
| Source Type | Target Sites | Difficulty |
|-------------|--------------|------------|
| Gaming Directories | IndieDB, Itch.io | Easy |
| Game Wikis | Fandom, Wiki.gg | Medium |
| Gaming Press | Kotaku, PC Gamer (press) | Hard |
| Content Creators | YouTubers, Streamers | Medium |
| Mythology Sites | Education sites | Medium |

**Press Kit Components:**
- Game fact sheet
- High-res screenshots
- Logo assets
- Developer Q&A
- Trailer embed codes

---

## Phase 6: Local & Niche SEO (Week 6-8)

### 6.1 Indian Gaming Market Focus

**Keywords:**
- Indian mythology card game
- Hindu god game
- Bengaluru game studio
- Indian indie game
- Sanskrit deities game

**Strategy:**
- Highlight "Made in Bengaluru, India"
- Target Indian gaming communities
- Press releases to Indian gaming media
- Regional language considerations (future)

### 6.2 Mythology Education Angle

**Content opportunities:**
- "Learn Mythology Through Gaming" blog series
- Educational partnerships
- Museum collaborations
- Academic citations

---

## Phase 7: Monitoring & Analytics (Ongoing)

### 7.1 Tools to Set Up

| Tool | Purpose | Priority |
|------|---------|----------|
| Google Search Console | Performance monitoring | P0 |
| Google Analytics 4 | User behavior tracking | P0 |
| Google Tag Manager | Tag management | P1 |
| PageSpeed Insights | Core Web Vitals | P1 |
| Rich Results Test | Schema validation | P1 |
| Bing Webmaster Tools | Additional search data | P2 |

### 7.2 Key Metrics to Track

**Search Metrics:**
- Organic search traffic
- Keyword rankings
- Click-through rate (CTR)
- Impressions
- Position tracking

**User Metrics:**
- Bounce rate
- Time on page
- Pages per session
- Conversion (newsletter, Discord joins)

**Technical Metrics:**
- Core Web Vitals scores
- Mobile usability
- Index coverage
- Crawl errors

---

## Phase 8: GitHub Pages Specific Considerations

### 8.1 Deployment Structure

**For GitHub Pages with custom domain:**
```
raudracosmos.github.io/
└── (main branch contains site files)
```

**OR custom repository:**
```
raudracosmos.com (repository)
└── main branch
```

### 8.2 Jekyll Considerations

GitHub Pages uses Jekyll by default. Either:
1. Add `.nojekyll` file to bypass Jekyll processing
2. Use Jekyll for blog functionality

**Recommended:** Add `.nojekyll` file for pure static site

### 8.3 CDN and HTTPS

GitHub Pages provides:
- Automatic HTTPS
- Fast CDN via GitHub's infrastructure
- Global edge caching

### 8.4 Custom Domain Setup Checklist

- [ ] A record points to GitHub Pages IPs
- [ ] CNAME file exists in repository root
- [ ] HTTPS enforced
- [ ] WWW redirect configured (if needed)
- [ ] DNS propagation complete

---

## Implementation Priority Matrix

### MUST DO (P0) - Week 1
- [ ] Add Open Graph meta tags
- [ ] Add Twitter Card meta tags
- [ ] Add JSON-LD structured data
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Optimize title tags
- [ ] Optimize meta descriptions
- [ ] Set up Google Search Console
- [ ] Add `.nojekyll` file

### SHOULD DO (P1) - Week 2-4
- [ ] Create core additional pages (About, Features, FAQ)
- [ ] Create pantheon-specific pages (7 pages)
- [ ] Improve internal linking structure
- [ ] Add FAQ schema markup
- [ ] Optimize images with alt text
- [ ] Set up Google Analytics
- [ ] Performance optimization
- [ ] Mobile responsiveness check

### NICE TO HAVE (P2) - Week 5-12
- [ ] Create blog section
- [ ] Write 10 SEO-optimized blog posts
- [ ] Press kit development
- [ ] Community engagement campaign
- [ ] Backlink outreach
- [ ] Social media content calendar

---

## Success Metrics & KPIs

### 3-Month Targets
| Metric | Current | Target |
|--------|---------|--------|
| Organic Traffic | 0 | 500/month |
| Indexed Pages | 1 | 20+ |
| Keywords Ranking | 0 | 30+ |
| Backlinks | 0 | 20+ |
| Discord Members | Current | +50% |

### 6-Month Targets
| Metric | Target |
|--------|--------|
| Organic Traffic | 2,000/month |
| Indexed Pages | 50+ |
| Keywords Ranking (Top 10) | 15+ |
| Keywords Ranking (Top 50) | 50+ |
| Backlinks | 100+ |
| Domain Authority | 20+ |

---

## Keyword Targeting Summary

### Primary Keywords by Page Type

**Homepage:**
- Raudra Cosmos, Rudra Cosmos, Raudra Games
- mythology card RPG, mythological gacha game
- card RPG game, strategy card game

**Pantheon Pages:**
- Hindu mythology card game, Norse mythology TCG
- Egyptian gods RPG, Greek mythology card game
- [Pantheon name] + card/RPG/game

**Feature Pages:**
- gacha card game, TCG gacha
- card battle RPG, deck building game
- turn-based card RPG

**Blog Posts:**
- best mythology card RPG games
- games like [popular game] mythology
- free gacha RPG, online card RPG
- mythology strategy game, gods battle game

---

## Content Writing Guidelines

### SEO Best Practices

1. **Keyword Density:** 1-2% primary keyword, 0.5-1% secondary
2. **Readability:** Flesch-Kincaid grade 8-10
3. **Content Length:**
   - Homepage: 500-800 words
   - Core pages: 800-1,200 words
   - Blog posts: 1,000-2,000 words
4. **Heading Structure:** H1 → H2 → H3 (logical hierarchy)
5. **Internal Links:** 2-5 per page contextual links
6. **External Links:** 2-3 authoritative sources

### Title Tag Formula
```
[Primary Keyword] | [Secondary Keyword] - [Brand Name]
Example: "Hindu Mythology Card Game | Play with Deities - Raudra Cosmos"
```

### Meta Description Formula
```
[Action verb] [benefit] + [keywords] + [CTA]
Example: "Collect powerful Hindu deities in this free-to-play mythology card RPG. Strategic gacha gameplay with 250+ gods. Play now!"
```

---

## Appendix: Quick Reference

### Essential Meta Tags Template
```html
<head>
  <!-- Primary SEO -->
  <title>Raudra Cosmos | Mythological Card RPG Gacha Game</title>
  <meta name="description" content="Collect 250+ deities from 7 pantheons. Free mythology card RPG with strategic gacha gameplay.">
  <link rel="canonical" href="https://raudracosmos.com/">

  <!-- Open Graph -->
  <meta property="og:title" content="Raudra Cosmos | Mythological Card RPG">
  <meta property="og:description" content="...">
  <meta property="og:image" content="...">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://raudracosmos.com/">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="...">

  <!-- Structured Data -->
  <script type="application/ld+json">...</script>
</head>
```

### Content Checklist
- [ ] H1 includes primary keyword
- [ ] Title tag under 60 characters
- [ ] Meta description 155-160 characters
- [ ] At least 2 H2s with keywords
- [ ] Image alt text descriptive
- [ ] Internal links to relevant pages
- [ ] External links to authoritative sources
- [ ] URL short and keyword-rich
- [ ] Mobile-responsive
- [ ] Page speed under 3 seconds

---

## Next Steps

1. **Review this plan** and approve priorities
2. **Begin Phase 1 implementation** (Technical SEO)
3. **Set up analytics** (Search Console, GA4)
4. **Create content calendar** for blog posts
5. **Start with highest-impact changes** first

**Estimated Timeline for Full Implementation:** 12 weeks

---

*This plan should be reviewed and updated monthly based on performance data and algorithm updates.*
