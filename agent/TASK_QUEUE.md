# TASK QUEUE

## page-home-shell — Create home page shell

### Type
- page-shell

### Depends on
- none

### Files allowed
- src/App.jsx
- src/pages/Home.jsx

### Definition of done
- page shell exists for home
- home route is mounted if required
- home page renders without crashing

## section-home-hero — Create hero section on home

### Type
- section

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components/HeroSection.jsx
- src/components

### Definition of done
- section hero exists on home
- section hero matches type hero
- section hero is rendered in page home

## section-home-about — Create about section on home

### Type
- section

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components/AboutSection.jsx
- src/components

### Definition of done
- section about exists on home
- section about matches type split-content
- section about is rendered in page home

## section-home-contact — Create contact section on home

### Type
- section

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components/ContactSection.jsx
- src/components

### Definition of done
- section contact exists on home
- section contact matches type contact-block
- section contact is rendered in page home

## cta-home-primary-hero-cta — Add CTA primary-hero-cta on home

### Type
- cta

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components

### Definition of done
- CTA primary-hero-cta exists on home
- CTA primary-hero-cta is visible in placement hero
- CTA primary-hero-cta points to a valid destination

## cta-home-whatsapp-floating — Add CTA whatsapp-floating on home

### Type
- cta

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components
- src/App.jsx
- src/layout/Layout.jsx

### Definition of done
- CTA whatsapp-floating exists on home
- CTA whatsapp-floating is visible in placement floating
- CTA whatsapp-floating points to a valid destination

## cta-home-phone-hero — Add CTA phone-hero on home

### Type
- cta

### Depends on
- page-home-shell

### Files allowed
- src/pages/Home.jsx
- src/components

### Definition of done
- CTA phone-hero exists on home
- CTA phone-hero is visible in placement hero
- CTA phone-hero points to a valid destination

## page-gallery-shell — Create gallery page shell

### Type
- page-shell

### Depends on
- none

### Files allowed
- src/App.jsx
- src/pages/Gallery.jsx

### Definition of done
- page shell exists for gallery
- gallery route is mounted if required
- gallery page renders without crashing

## section-gallery-gallery-grid — Create gallery-grid section on gallery

### Type
- section

### Depends on
- page-gallery-shell

### Files allowed
- src/pages/Gallery.jsx
- src/components/Gallery-gridSection.jsx
- src/components

### Definition of done
- section gallery-grid exists on gallery
- section gallery-grid matches type image-grid
- section gallery-grid is rendered in page gallery

## navigation-structure — Build navigation from spec

### Type
- navigation

### Depends on
- page-home-shell
- page-gallery-shell
- section-home-hero
- section-home-about
- section-home-contact
- section-gallery-gallery-grid

### Files allowed
- src/App.jsx
- src/layout/Layout.jsx

### Definition of done
- all navigation items are rendered
- all navigation links point to valid pages or sections
- navigation is compatible with routing mode

## seo-basics — Add baseline SEO structure

### Type
- seo

### Depends on
- page-home-shell
- page-gallery-shell

### Files allowed
- index.html
- src/pages/Home.jsx
- src/pages/Gallery.jsx

### Definition of done
- title exists
- meta description exists
- one meaningful h1 per page exists

## responsive-polish — Refine responsive layout and spacing

### Type
- responsive

### Depends on
- navigation-structure
- section-home-hero
- section-home-about
- section-home-contact
- section-gallery-gallery-grid

### Files allowed
- src/App.css
- src/index.css
- src/components
- src/pages/Home.jsx
- src/pages/Gallery.jsx

### Definition of done
- layout works across required breakpoints
- no horizontal overflow
- spacing and hierarchy are coherent

## validation-prep — Prepare site for final validation

### Type
- validation-prep

### Depends on
- navigation-structure
- responsive-polish
- seo-basics

### Files allowed
- src
- index.html

### Definition of done
- required semantic structure exists
- required CTA structure exists
- required sections exist
- site is ready for final validation

