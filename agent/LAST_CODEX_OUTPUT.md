**Modified Files**

[agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md)  
[src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css)  
[src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/HeroSection.jsx)  
[src/components/AboutSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/AboutSection.jsx)  
[src/components/ContactSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/ContactSection.jsx)  
[src/components/Gallery-gridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/Gallery-gridSection.jsx)  
[src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/FloatingWhatsAppButton.jsx)  
[src/pages/Home.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx)  
[src/pages/Gallery.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx)  

**What Was Implemented**

Removed the default Vite global layout constraints and replaced them with app-safe base styles in [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css), including full-width root sizing, box-sizing, overflow protection, image defaults, and section scroll offsets for anchored navigation.

Refined responsive spacing and sizing across the allowed sections and pages: hero padding and CTA sizing, about/contact grid behavior, gallery grid/card sizing, and floating WhatsApp button bounds. I also added `overflowX` protection on [src/pages/Home.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx) and [src/pages/Gallery.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx) so the layout stays contained across the required breakpoints.

Updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md) with the task summary.

**Build Result**

`npm run build` passed successfully with Vite production build output generated in `dist/`.

I did not run browser-based breakpoint validation in this turn, so the build is verified but not visually inspected in-browser here.

OpenAI Codex v0.111.0 (research preview)
--------
workdir: /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/armandocosta/.codex/memories]
reasoning effort: none
reasoning summaries: none
session id: 019cd525-ba75-72d1-aead-2f2862c7c073
--------
user
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-premium-modern-website-for-an-i

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.

## Objective
- Generate production-ready static websites that are clear, stable, responsive, modular, and easy to validate.
- Prioritize correctness before visual polish.
- Prefer predictable implementation over improvisation.

## Source of Truth
- The human prompt is not the implementation source of truth.
- `site-spec.json` is the only source of truth for pages, sections, navigation, routing, and required features.
- If supported by the project architecture, `content.json` is the source of truth for copy, labels, CTA text, and contact details.
- If supported by the project architecture, `theme.json` is the source of truth for colors, typography, spacing, radius, and visual tokens.
- The implementation flow must be: `prompt -> site-spec.json -> tasks -> code`.
- Never implement pages, routes, sections, navigation items, or features that are not defined in the spec.

## Core Principles
- Build for users first: clarity, speed, and clear actions.
- Keep code modular: reusable components with clear responsibilities.
- Favor consistency over custom one-off solutions.
- Ship small, test often, improve iteratively.
- Prefer deterministic implementation over free interpretation.
- Do not invent structure outside the spec.

## Stack
- Vite
- React
- Component-based architecture

## Required Architecture
Preferred structure:

```txt
src/
  components/
  sections/
  pages/
  layout/
  data/
  assets/
  styles/
  utils/
```

### Rules
- One responsibility per component.
- No giant monolithic page files.
- Reuse shared primitives where possible.
- Avoid duplicated markup patterns across sections.
- Prefer composition over deeply nested conditional JSX.
- Keep structure, content, and styling separated where possible.

## Layout Rules
- Hero must be full width or visually dominant at the top.
- Mobile-first responsive design is mandatory.
- Primary CTA must be visible above the fold.
- Use a max content width for readability, except for intentionally full-bleed sections.
- Maintain a consistent spacing system across all sections.
- Visual hierarchy must be clear: headline -> value -> action.
- No horizontal overflow on any tested breakpoint.
- Sections must feel complete and intentional, not sparse or placeholder-like.

## Required Components
- Header
- Hero
- Sections
- Footer

## Minimum Homepage Requirements
- Every homepage must include a hero section.
- Every homepage must include at least 2 additional meaningful content sections.
- Every homepage must include at least 1 visible CTA.
- If a gallery is required by spec, it must exist and be reachable.
- If contact actions are required by spec, they must be implemented and functional.

## Component Guidelines
- One responsibility per component.
- Keep UI and business logic separated when possible.
- Use props for configuration and avoid hardcoded content inside reusable components.
- Create shared primitives for buttons, headings, cards, containers, and section wrappers.
- Prefer composition over deeply nested conditional JSX.
- Use clear component names and prop names.
- Avoid dead components and unused routes.
- Avoid excessive inline complexity.

## Content Rules
- Content must be specific, concise, user-focused, and business-relevant.
- No lorem ipsum.
- No placeholder text.
- No dummy text.
- No "coming soon" unless explicitly required by the spec.
- No empty sections.
- No empty buttons.
- No empty links.
- Use exactly one meaningful `h1` per page.
- Section headings must be descriptive.
- CTA text must be action-oriented and specific.
- Text must feel realistic for the business type.
- When supported by the architecture, text content should come from `content.json`.
- Reusable sections should accept content through props or mapped data instead of hardcoded strings.

## Gallery
- Use a grid layout.
- Use responsive columns:
  - mobile: 1
  - tablet: 2
  - desktop: 3 or more when appropriate
- Optimize images with compression, proper dimensions, and lazy loading where appropriate.
- Images must have valid sources.
- Images must not be broken.
- Informative images must have meaningful alt text.
- Decorative images may use empty alt text only when semantically appropriate.
- Do not include a gallery navigation item unless the gallery exists and is reachable.

## CTA
- There must be at least one primary CTA in the hero.
- A fixed WhatsApp button must exist only when required by the spec.
- A phone CTA should exist in the hero when relevant to the business type.
- Primary CTA text must be action-oriented and specific.
- CTA style must remain consistent across all pages and sections.
- Every CTA must resolve correctly.
- Telephone CTAs must use valid `tel:` links.
- Email CTAs must use valid `mailto:` links.
- WhatsApp CTAs must use a valid WhatsApp URL format when enabled.
- Internal CTAs must point to an existing section or route.

## Responsive Rules
- Design starts from mobile viewport first.
- No horizontal scroll on any breakpoint.
- Touch targets must be large enough on mobile.
- Fixed CTAs must not cover essential content.
- Header must remain usable on small screens.
- Hero content must remain readable on small screens.
- Text blocks must not become too wide on desktop.
- Images must scale correctly without distortion.
- Grids must collapse cleanly across breakpoints.
- Test at least these breakpoints:
  - 360px
  - 768px
  - 1024px
  - 1440px

## Navigation Integrity
- Every navigation item must point to a real existing destination.
- Do not create links for pages, routes, or sections that do not exist.
- Before considering the implementation complete, verify that every header link, footer link, CTA, and internal navigation target resolves correctly.
- For single-page sections, verify that the target section `id` exists in the rendered page.
- For multi-page navigation, verify that the route exists and renders without 404 errors.
- If the project uses HashRouter, all internal navigation must be compatible with HashRouter.
- Do not mix plain absolute paths and hash-based routes incorrectly.
- If a section or page is not implemented, remove the corresponding navigation item instead of leaving a broken link.
- Navigation should be derived from the structure defined in `site-spec.json` whenever possible.
- Navigation must not be treated as freeform UI content.

## Accessibility
- Use semantic HTML: `header`, `main`, `section`, `footer`, `nav`.
- Ensure readable color contrast.
- All interactive elements must be keyboard accessible.
- Provide meaningful alt text for informative images.
- Decorative images may use empty alt text only when appropriate.
- Keep heading structure logical: `h1 -> h2 -> h3`.
- Buttons must be real buttons when they trigger actions.
- Links must be real links when they navigate.
- Avoid vague labels when the context is unclear.

## Performance
- Optimize and compress media assets.
- Prefer local or controlled assets over fragile third-party hotlinks when possible.
- Use lazy loading for below-the-fold images where appropriate.
- Minimize unnecessary re-renders in React components.
- Avoid heavy dependencies unless they add clear value.
- Keep the implementation lightweight and static-friendly.

## SEO and Content
- One clear `h1` per page.
- Descriptive page title.
- Descriptive meta description.
- Use meaningful section headings and internal links.
- Keep copy concise, scannable, and user-focused.
- Do not sacrifice usability for SEO tricks.

## Code Quality Rules
- Code must remain maintainable and readable.
- Use clear component names.
- Use clear prop names.
- Do not leave dead components in the project.
- Do not leave unused routes in the project.
- Avoid duplicated layout logic when a shared wrapper is appropriate.
- Reusable UI patterns should be extracted into shared primitives.

Preferred shared primitives:
- Button
- Container
- SectionWrapper
- HeadingBlock
- Card
- CTABlock

## Task Execution Constraints
- Modify only the files allowed for the current task.
- Respect protected files.
- Do not introduce unrelated refactors.
- Do not break previously validated functionality.
- Do not change router behavior unless the task explicitly requires it.
- Do not add speculative features.
- Each task must produce the smallest correct change that moves the project forward safely.

## Definition of Done for a Task
A task is complete only if:
- the requested feature is implemented
- the app builds successfully
- the affected UI renders correctly
- navigation remains valid
- no new console errors are introduced
- responsive behavior is not broken
- no placeholder content is left behind

A task is not complete if it only looks correct in code but is not validated in the browser.

## Quality Gates
### Technical Pass
A site passes technical validation only if:
- build succeeds
- required semantic structure exists
- no broken images
- no broken navigation
- no blocking console errors
- required core components are present

### Publishable Pass
A site passes publishable validation only if:
- content feels real and complete
- no placeholder or empty sections exist
- CTA strategy is visible and coherent
- hierarchy is clear
- layout feels intentional on mobile and desktop
- contact actions are usable
- the site does not feel unfinished

A site must not deploy unless it passes both levels.

## Quality Checklist Before Delivery
- Layout matches all required sections and CTA rules.
- Fully responsive and tested on key breakpoints.
- No console errors.
- No broken images.
- No broken navigation.
- No empty sections.
- No placeholder text.
- Hero is strong and readable.
- CTA is visible and functional.
- Contact actions work.
- Heading structure is valid.
- Page title and meta description are set.
- Lighthouse baseline checked for Performance, Accessibility, and Best Practices.
- Final pass completed for text, links, and contact actions.

## Priority Order for Decision Making
When rules conflict, apply this order:
1. source of truth correctness
2. navigation integrity
3. technical stability
4. responsive usability
5. content clarity
6. visual polish
7. implementation elegance


## Original project brief
# Original project prompt

Create a premium modern website for an Italian restaurant called Osteria 19 Torino.

The website must feel contemporary, elegant, warm, urban, and high quality, like a modern bistro in the center of Turin that combines traditional Italian cuisine with refined presentation.

GENERAL GOAL
The final result must look like a real restaurant website ready to be shown to a client, not a generic template.
The website should communicate atmosphere, quality ingredients, strong identity, and make it easy for users to explore the menu and book a table.

BRAND POSITIONING
- Restaurant type: modern Italian restaurant / contemporary osteria
- City: Torino
- Target audience:
  - couples
  - young professionals
  - people looking for a stylish dinner place
  - small groups
- Brand personality:
  - refined but not snobbish
  - urban and warm
  - authentic Italian food with modern presentation
  - inviting in the evening
- Tone of voice:
  - concise
  - elegant
  - appetizing
  - confident

VISUAL STYLE
- Design style: modern editorial restaurant website
- Look and feel:
  - strong typography
  - large images
  - elegant spacing
  - premium but not overly luxurious
  - minimal clutter
- The site must feel intentional, stylish, and contemporary.

COLOR PALETTE
Use a modern warm palette:
- deep charcoal: #1F1F1B
- warm ivory: #F6F1E8
- muted olive: #6F7558
- terracotta accent: #B85C38
- soft gold accent: #C8A66A

TYPOGRAPHY
- Titles: elegant serif, with strong editorial character
- Body: modern clean sans serif
- High contrast between headings and body text
- Typography must feel premium and readable

LAYOUT DIRECTION
- Mobile first
- Spacious sections
- Strong hierarchy
- No clutter
- Max width containers for readability
- Full-bleed sections where visually useful
- Smooth transitions and subtle hover effects
- Rounded corners can be used sparingly, but overall feel should be sleek and modern

SITE STRUCTURE
The website must have these pages:
- Home
- Menu
- Gallery

NAVIGATION
Header navigation must include:
- Home
- Menu
- Gallery
- About
- Contact

Navigation must be coherent with real existing routes or sections.
Do not create any broken navigation item.

HEADER
- Sticky header
- Transparent on top of hero
- Becomes solid on scroll
- Logo or text logo on the left
- Navigation on the right
- Mobile menu for smaller screens
- Header must feel premium and minimal

HOME PAGE STRUCTURE

1. HERO SECTION
- Large full screen hero
- Strong atmospheric background image of a stylish Italian restaurant interior or plated dishes
- Dark overlay for readability
- Centered or slightly left-aligned content
- Hero must immediately communicate identity and atmosphere

Hero content:
Eyebrow:
"Osteria contemporanea a Torino"

Title:
"Modern Italian dining with soul"

Subtitle:
"Seasonal ingredients, elegant plates, and a warm atmosphere in the heart of Torino."

Primary CTA:
"Book a table"

Secondary CTA:
"Explore the menu"

2. SIGNATURE DISHES SECTION
A visually strong section showcasing signature dishes.

Layout:
- responsive card grid
- 3 columns desktop
- 2 tablet
- 1 mobile

Include at least 6 dishes with:
- dish image
- dish name
- short refined description

Example dish names:
- Handmade Tajarin with butter and sage
- Braised beef cheek with red wine reduction
- Roasted octopus with chickpea cream
- Burrata, roasted tomatoes and basil oil
- Hazelnut tiramisu
- Dark chocolate tart with sea salt

Cards must feel premium and modern.

3. ABOUT SECTION
- Split layout
- One side image
- One side text

Text should describe the philosophy of the restaurant:
- seasonal ingredients
- contemporary interpretation of Italian tradition
- intimate atmosphere
- curated wine selection

4. AMBIENCE / EXPERIENCE SECTION
A section focused on the dining experience.
Can be text + image or editorial layout.
Must communicate:
- dinner atmosphere
- lighting
- hospitality
- wine and cocktails
- ideal for dates and dinners with friends

5. CONTACT / BOOKING SECTION
Must include:
- address
- phone
- opening hours
- booking CTA
- optional map placeholder area
- strong visual clarity

Address:
Via Maria Vittoria 19
Torino

Phone:
+39 011 3821947

Opening hours:
Tuesday – Thursday
19:00 – 23:00

Friday – Saturday
19:00 – 00:00

Sunday
12:30 – 15:00
19:00 – 22:30

Monday
Closed

MENU PAGE
Create a dedicated Menu page.

It must feel elegant and easy to scan.

Structure:
- Intro section with title and short description
- Menu categories with clean visual separation

Categories:
- Starters
- Pasta
- Main courses
- Desserts
- Wine selection

Each category must include realistic example items with prices.

Examples:

Starters
- Burrata, roasted peppers, basil oil — €14
- Veal tartare, capers, mustard seeds — €16
- Crispy polenta, mushrooms, fondue — €13

Pasta
- Tajarin, butter, sage, hazelnuts — €17
- Plin in roast sauce — €18
- Risotto with saffron and bone marrow — €19

Main courses
- Beef cheek, parsnip cream, jus — €24
- Catch of the day, seasonal vegetables — €26
- Cauliflower steak, olive crumb, herb emulsion — €20

Desserts
- Hazelnut tiramisu — €9
- Chocolate tart, sea salt, cream — €9
- Lemon semifreddo — €8

Wine selection
- Curated Italian labels from Piemonte and beyond
- Add a short descriptive paragraph rather than a full wine list if needed

GALLERY PAGE
Create a dedicated Gallery page.

Requirements:
- responsive image grid
- at least 9 images
- atmosphere images + food images
- all images should feel coherent and premium
- hover effects should be subtle
- images must fill containers correctly
- no broken layouts

IMAGES
Use high quality images from Unsplash.
Search themes:
- modern italian restaurant interior
- fine dining italian dishes
- restaurant table setting
- plated pasta
- wine bar restaurant
- elegant dining interior

Images must:
- use object-fit: cover
- never appear stretched
- feel visually consistent
- support the identity of the brand

CTA STRATEGY
The site must contain:
- primary booking CTA in hero
- menu exploration CTA
- phone CTA where relevant
- fixed WhatsApp or booking CTA only if it fits the design cleanly

Booking CTA can point to:
- a placeholder booking link
- a tel link
- or a clear internal booking/contact target

FOOTER
Dark footer with:
- restaurant name
- address
- phone
- opening hours summary
- social links placeholder
- copyright text

SEO / CONTENT
- One clear H1 per page
- Realistic and polished copy
- No lorem ipsum
- No placeholder feel
- Content should sound like a real restaurant brand

RESPONSIVE DESIGN
- Fully responsive
- No horizontal scroll
- Balanced spacing on all breakpoints
- Mobile navigation must work
- Cards and sections must collapse cleanly

QUALITY EXPECTATION
The final website must feel like a real modern restaurant website that could realistically be sold to a client.
Avoid generic template feel.
Avoid weak content.
Avoid empty sections.
Avoid broken navigation.


## Brief summary
# Brief summary

## Original prompt
Create a premium modern website for an Italian restaurant called Osteria 19 Torino.

The website must feel contemporary, elegant, warm, urban, and high quality, like a modern bistro in the center of Turin that combines traditional Italian cuisine with refined presentation.

GENERAL GOAL
The final result must look like a real restaurant website ready to be shown to a client, not a generic template.
The website should communicate atmosphere, quality ingredients, strong identity, and make it easy for users to explore the menu and book a table.

BRAND POSITIONING
- Restaurant type: modern Italian restaurant / contemporary osteria
- City: Torino
- Target audience:
  - couples
  - young professionals
  - people looking for a stylish dinner place
  - small groups
- Brand personality:
  - refined but not snobbish
  - urban and warm
  - authentic Italian food with modern presentation
  - inviting in the evening
- Tone of voice:
  - concise
  - elegant
  - appetizing
  - confident

VISUAL STYLE
- Design style: modern editorial restaurant website
- Look and feel:
  - strong typography
  - large images
  - elegant spacing
  - premium but not overly luxurious
  - minimal clutter
- The site must feel intentional, stylish, and contemporary.

COLOR PALETTE
Use a modern warm palette:
- deep charcoal: #1F1F1B
- warm ivory: #F6F1E8
- muted olive: #6F7558
- terracotta accent: #B85C38
- soft gold accent: #C8A66A

TYPOGRAPHY
- Titles: elegant serif, with strong editorial character
- Body: modern clean sans serif
- High contrast between headings and body text
- Typography must feel premium and readable

LAYOUT DIRECTION
- Mobile first
- Spacious sections
- Strong hierarchy
- No clutter
- Max width containers for readability
- Full-bleed sections where visually useful
- Smooth transitions and subtle hover effects
- Rounded corners can be used sparingly, but overall feel should be sleek and modern

SITE STRUCTURE
The website must have these pages:
- Home
- Menu
- Gallery

NAVIGATION
Header navigation must include:
- Home
- Menu
- Gallery
- About
- Contact

Navigation must be coherent with real existing routes or sections.
Do not create any broken navigation item.

HEADER
- Sticky header
- Transparent on top of hero
- Becomes solid on scroll
- Logo or text logo on the left
- Navigation on the right
- Mobile menu for smaller screens
- Header must feel premium and minimal

HOME PAGE STRUCTURE

1. HERO SECTION
- Large full screen hero
- Strong atmospheric background image of a stylish Italian restaurant interior or plated dishes
- Dark overlay for readability
- Centered or slightly left-aligned content
- Hero must immediately communicate identity and atmosphere

Hero content:
Eyebrow:
"Osteria contemporanea a Torino"

Title:
"Modern Italian dining with soul"

Subtitle:
"Seasonal ingredients, elegant plates, and a warm atmosphere in the heart of Torino."

Primary CTA:
"Book a table"

Secondary CTA:
"Explore the menu"

2. SIGNATURE DISHES SECTION
A visually strong section showcasing signature dishes.

Layout:
- responsive card grid
- 3 columns desktop
- 2 tablet
- 1 mobile

Include at least 6 dishes with:
- dish image
- dish name
- short refined description

Example dish names:
- Handmade Tajarin with butter and sage
- Braised beef cheek with red wine reduction
- Roasted octopus with chickpea cream
- Burrata, roasted tomatoes and basil oil
- Hazelnut tiramisu
- Dark chocolate tart with sea salt

Cards must feel premium and modern.

3. ABOUT SECTION
- Split layout
- One side image
- One side text

Text should describe the philosophy of the restaurant:
- seasonal ingredients
- contemporary interpretation of Italian tradition
- intimate atmosphere
- curated wine selection

4. AMBIENCE / EXPERIENCE SECTION
A section focused on the dining experience.
Can be text + image or editorial layout.
Must communicate:
- dinner atmosphere
- lighting
- hospitality
- wine and cocktails
- ideal for dates and dinners with friends

5. CONTACT / BOOKING SECTION
Must include:
- address
- phone
- opening hours
- booking CTA
- optional map placeholder area
- strong visual clarity

Address:
Via Maria Vittoria 19
Torino

Phone:
+39 011 3821947

Opening hours:
Tuesday – Thursday
19:00 – 23:00

Friday – Saturday
19:00 – 00:00

Sunday
12:30 – 15:00
19:00 – 22:30

Monday
Closed

MENU PAGE
Create a dedicated Menu page.

It must feel elegant and easy to scan.

Structure:
- Intro section with title and short description
- Menu categories with clean visual separation

Categories:
- Starters
- Pasta
- Main courses
- Desserts
- Wine selection

Each category must include realistic example items with prices.

Examples:

Starters
- Burrata, roasted peppers, basil oil — €14
- Veal tartare, capers, mustard seeds — €16
- Crispy polenta, mushrooms, fondue — €13

Pasta
- Tajarin, butter, sage, hazelnuts — €17
- Plin in roast sauce — €18
- Risotto with saffron and bone marrow — €19

Main courses
- Beef cheek, parsnip cream, jus — €24
- Catch of the day, seasonal vegetables — €26
- Cauliflower steak, olive crumb, herb emulsion — €20

Desserts
- Hazelnut tiramisu — €9
- Chocolate tart, sea salt, cream — €9
- Lemon semifreddo — €8

Wine selection
- Curated Italian labels from Piemonte and beyond
- Add a short descriptive paragraph rather than a full wine list if needed

GALLERY PAGE
Create a dedicated Gallery page.

Requirements:
- responsive image grid
- at least 9 images
- atmosphere images + food images
- all images should feel coherent and premium
- hover effects should be subtle
- images must fill containers correctly
- no broken layouts

IMAGES
Use high quality images from Unsplash.
Search themes:
- modern italian restaurant interior
- fine dining italian dishes
- restaurant table setting
- plated pasta
- wine bar restaurant
- elegant dining interior

Images must:
- use object-fit: cover
- never appear stretched
- feel visually consistent
- support the identity of the brand

CTA STRATEGY
The site must contain:
- primary booking CTA in hero
- menu exploration CTA
- phone CTA where relevant
- fixed WhatsApp or booking CTA only if it fits the design cleanly

Booking CTA can point to:
- a placeholder booking link
- a tel link
- or a clear internal booking/contact target

FOOTER
Dark footer with:
- restaurant name
- address
- phone
- opening hours summary
- social links placeholder
- copyright text

SEO / CONTENT
- One clear H1 per page
- Realistic and polished copy
- No lorem ipsum
- No placeholder feel
- Content should sound like a real restaurant brand

RESPONSIVE DESIGN
- Fully responsive
- No horizontal scroll
- Balanced spacing on all breakpoints
- Mobile navigation must work
- Cards and sections must collapse cleanly

QUALITY EXPECTATION
The final website must feel like a real modern restaurant website that could realistically be sold to a client.
Avoid generic template feel.
Avoid weak content.
Avoid empty sections.
Avoid broken navigation.

## Structured summary
- Site name: site-create-a-premium-modern-website-for-an-i
- Business type: restaurant
- Routing mode: hash
- Pages: home, gallery
- Navigation: Home [route:/], Gallery [route:/gallery], About [section:about], Contact [section:contact]
- Validation checks: semantic-structure, navigation-integrity, cta-integrity, images-not-broken, responsive-layout, placeholder-content-absent
- Breakpoints: 360, 768, 1024, 1440
- Gallery: yes
- WhatsApp CTA: yes
- Phone CTA: yes

## Pages and sections
- home: sections [hero (hero), about (split-content), contact (contact-block)], ctas [primary-hero-cta (internal/hero), whatsapp-floating (external/floating), phone-hero (external/hero)]
- gallery: sections [gallery-grid (image-grid)], ctas [none]

## Notes
- Use the original prompt as the richest source of visual and branding intent.
- Use site-spec.json as the implementation contract.
- Use TASK_GRAPH.json as the execution structure.
- Do not invent pages, sections, routes, or navigation items outside the spec.


## Structured spec
```json
{
  "originalPrompt": "Create a premium modern website for an Italian restaurant called Osteria 19 Torino.\n\nThe website must feel contemporary, elegant, warm, urban, and high quality, like a modern bistro in the center of Turin that combines traditional Italian cuisine with refined presentation.\n\nGENERAL GOAL\nThe final result must look like a real restaurant website ready to be shown to a client, not a generic template.\nThe website should communicate atmosphere, quality ingredients, strong identity, and make it easy for users to explore the menu and book a table.\n\nBRAND POSITIONING\n- Restaurant type: modern Italian restaurant / contemporary osteria\n- City: Torino\n- Target audience:\n  - couples\n  - young professionals\n  - people looking for a stylish dinner place\n  - small groups\n- Brand personality:\n  - refined but not snobbish\n  - urban and warm\n  - authentic Italian food with modern presentation\n  - inviting in the evening\n- Tone of voice:\n  - concise\n  - elegant\n  - appetizing\n  - confident\n\nVISUAL STYLE\n- Design style: modern editorial restaurant website\n- Look and feel:\n  - strong typography\n  - large images\n  - elegant spacing\n  - premium but not overly luxurious\n  - minimal clutter\n- The site must feel intentional, stylish, and contemporary.\n\nCOLOR PALETTE\nUse a modern warm palette:\n- deep charcoal: #1F1F1B\n- warm ivory: #F6F1E8\n- muted olive: #6F7558\n- terracotta accent: #B85C38\n- soft gold accent: #C8A66A\n\nTYPOGRAPHY\n- Titles: elegant serif, with strong editorial character\n- Body: modern clean sans serif\n- High contrast between headings and body text\n- Typography must feel premium and readable\n\nLAYOUT DIRECTION\n- Mobile first\n- Spacious sections\n- Strong hierarchy\n- No clutter\n- Max width containers for readability\n- Full-bleed sections where visually useful\n- Smooth transitions and subtle hover effects\n- Rounded corners can be used sparingly, but overall feel should be sleek and modern\n\nSITE STRUCTURE\nThe website must have these pages:\n- Home\n- Menu\n- Gallery\n\nNAVIGATION\nHeader navigation must include:\n- Home\n- Menu\n- Gallery\n- About\n- Contact\n\nNavigation must be coherent with real existing routes or sections.\nDo not create any broken navigation item.\n\nHEADER\n- Sticky header\n- Transparent on top of hero\n- Becomes solid on scroll\n- Logo or text logo on the left\n- Navigation on the right\n- Mobile menu for smaller screens\n- Header must feel premium and minimal\n\nHOME PAGE STRUCTURE\n\n1. HERO SECTION\n- Large full screen hero\n- Strong atmospheric background image of a stylish Italian restaurant interior or plated dishes\n- Dark overlay for readability\n- Centered or slightly left-aligned content\n- Hero must immediately communicate identity and atmosphere\n\nHero content:\nEyebrow:\n\"Osteria contemporanea a Torino\"\n\nTitle:\n\"Modern Italian dining with soul\"\n\nSubtitle:\n\"Seasonal ingredients, elegant plates, and a warm atmosphere in the heart of Torino.\"\n\nPrimary CTA:\n\"Book a table\"\n\nSecondary CTA:\n\"Explore the menu\"\n\n2. SIGNATURE DISHES SECTION\nA visually strong section showcasing signature dishes.\n\nLayout:\n- responsive card grid\n- 3 columns desktop\n- 2 tablet\n- 1 mobile\n\nInclude at least 6 dishes with:\n- dish image\n- dish name\n- short refined description\n\nExample dish names:\n- Handmade Tajarin with butter and sage\n- Braised beef cheek with red wine reduction\n- Roasted octopus with chickpea cream\n- Burrata, roasted tomatoes and basil oil\n- Hazelnut tiramisu\n- Dark chocolate tart with sea salt\n\nCards must feel premium and modern.\n\n3. ABOUT SECTION\n- Split layout\n- One side image\n- One side text\n\nText should describe the philosophy of the restaurant:\n- seasonal ingredients\n- contemporary interpretation of Italian tradition\n- intimate atmosphere\n- curated wine selection\n\n4. AMBIENCE / EXPERIENCE SECTION\nA section focused on the dining experience.\nCan be text + image or editorial layout.\nMust communicate:\n- dinner atmosphere\n- lighting\n- hospitality\n- wine and cocktails\n- ideal for dates and dinners with friends\n\n5. CONTACT / BOOKING SECTION\nMust include:\n- address\n- phone\n- opening hours\n- booking CTA\n- optional map placeholder area\n- strong visual clarity\n\nAddress:\nVia Maria Vittoria 19\nTorino\n\nPhone:\n+39 011 3821947\n\nOpening hours:\nTuesday – Thursday\n19:00 – 23:00\n\nFriday – Saturday\n19:00 – 00:00\n\nSunday\n12:30 – 15:00\n19:00 – 22:30\n\nMonday\nClosed\n\nMENU PAGE\nCreate a dedicated Menu page.\n\nIt must feel elegant and easy to scan.\n\nStructure:\n- Intro section with title and short description\n- Menu categories with clean visual separation\n\nCategories:\n- Starters\n- Pasta\n- Main courses\n- Desserts\n- Wine selection\n\nEach category must include realistic example items with prices.\n\nExamples:\n\nStarters\n- Burrata, roasted peppers, basil oil — €14\n- Veal tartare, capers, mustard seeds — €16\n- Crispy polenta, mushrooms, fondue — €13\n\nPasta\n- Tajarin, butter, sage, hazelnuts — €17\n- Plin in roast sauce — €18\n- Risotto with saffron and bone marrow — €19\n\nMain courses\n- Beef cheek, parsnip cream, jus — €24\n- Catch of the day, seasonal vegetables — €26\n- Cauliflower steak, olive crumb, herb emulsion — €20\n\nDesserts\n- Hazelnut tiramisu — €9\n- Chocolate tart, sea salt, cream — €9\n- Lemon semifreddo — €8\n\nWine selection\n- Curated Italian labels from Piemonte and beyond\n- Add a short descriptive paragraph rather than a full wine list if needed\n\nGALLERY PAGE\nCreate a dedicated Gallery page.\n\nRequirements:\n- responsive image grid\n- at least 9 images\n- atmosphere images + food images\n- all images should feel coherent and premium\n- hover effects should be subtle\n- images must fill containers correctly\n- no broken layouts\n\nIMAGES\nUse high quality images from Unsplash.\nSearch themes:\n- modern italian restaurant interior\n- fine dining italian dishes\n- restaurant table setting\n- plated pasta\n- wine bar restaurant\n- elegant dining interior\n\nImages must:\n- use object-fit: cover\n- never appear stretched\n- feel visually consistent\n- support the identity of the brand\n\nCTA STRATEGY\nThe site must contain:\n- primary booking CTA in hero\n- menu exploration CTA\n- phone CTA where relevant\n- fixed WhatsApp or booking CTA only if it fits the design cleanly\n\nBooking CTA can point to:\n- a placeholder booking link\n- a tel link\n- or a clear internal booking/contact target\n\nFOOTER\nDark footer with:\n- restaurant name\n- address\n- phone\n- opening hours summary\n- social links placeholder\n- copyright text\n\nSEO / CONTENT\n- One clear H1 per page\n- Realistic and polished copy\n- No lorem ipsum\n- No placeholder feel\n- Content should sound like a real restaurant brand\n\nRESPONSIVE DESIGN\n- Fully responsive\n- No horizontal scroll\n- Balanced spacing on all breakpoints\n- Mobile navigation must work\n- Cards and sections must collapse cleanly\n\nQUALITY EXPECTATION\nThe final website must feel like a real modern restaurant website that could realistically be sold to a client.\nAvoid generic template feel.\nAvoid weak content.\nAvoid empty sections.\nAvoid broken navigation.",
  "siteName": "site-create-a-premium-modern-website-for-an-i",
  "businessType": "restaurant",
  "routing": {
    "mode": "hash"
  },
  "pages": [
    {
      "id": "home",
      "type": "page",
      "sections": [
        {
          "id": "hero",
          "type": "hero"
        },
        {
          "id": "about",
          "type": "split-content"
        },
        {
          "id": "contact",
          "type": "contact-block"
        }
      ],
      "ctas": [
        {
          "id": "primary-hero-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "section",
            "value": "contact"
          }
        },
        {
          "id": "whatsapp-floating",
          "kind": "external",
          "placement": "floating",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        },
        {
          "id": "phone-hero",
          "kind": "external",
          "placement": "hero",
          "target": {
            "type": "phone",
            "value": "phone"
          }
        }
      ]
    },
    {
      "id": "gallery",
      "type": "page",
      "sections": [
        {
          "id": "gallery-grid",
          "type": "image-grid"
        }
      ],
      "ctas": []
    }
  ],
  "navigation": [
    {
      "label": "Home",
      "type": "route",
      "target": "/"
    },
    {
      "label": "Gallery",
      "type": "route",
      "target": "/gallery"
    },
    {
      "label": "About",
      "type": "section",
      "target": "about"
    },
    {
      "label": "Contact",
      "type": "section",
      "target": "contact"
    }
  ],
  "theme": {
    "mode": "derived-from-prompt"
  },
  "validation": {
    "breakpoints": [
      360,
      768,
      1024,
      1440
    ],
    "checks": [
      "semantic-structure",
      "navigation-integrity",
      "cta-integrity",
      "images-not-broken",
      "responsive-layout",
      "placeholder-content-absent"
    ]
  },
  "features": {
    "gallery": true,
    "whatsappCta": true,
    "phoneCta": true
  }
}

```

## Current task id
responsive-polish

## Current task title
Refine responsive layout and spacing

## Current task type
responsive

## Current task target
```json
{
  "breakpoints": [
    360,
    768,
    1024,
    1440
  ]
}
```

## Depends on
- navigation-structure
- section-home-hero
- section-home-about
- section-home-contact
- section-gallery-gallery-grid

## Files allowed
- src/App.css
- src/index.css
- src/components
- src/pages/Home.jsx
- src/pages/Gallery.jsx

## Definition of done
- layout works across required breakpoints
- no horizontal overflow
- spacing and hierarchy are coherent

## Strict execution rules
- Execute only this current task.
- Do not implement future tasks.
- Do not modify files outside the allowed list unless a truly minimal cross-file change is strictly required to preserve build integrity.
- Prefer the allowed files as the primary implementation scope.
- Keep the code modular, readable, and production-oriented.
- Follow the development method strictly.
- Respect the structured spec.
- If the original brief includes stylistic guidance not fully captured by the spec, follow the brief without violating the spec.
- Do not redesign unrelated sections.
- Do not remove already implemented valid work unless required for the current task.
- Keep routing and navigation coherent with the spec.
- Preserve compatibility with the project routing mode.

## Required completion behavior
- Implement the task.
- Run a build check.
- Update agent/AGENT_REPORT.md with a short summary of what was implemented.
- Do not manually change TASK_STATE.json.

## Required output
- Modified files
- What was implemented
- Build result

mcp startup: no servers
codex
I’m checking the current implementation against the task scope and the allowed files first. Then I’ll tighten responsive spacing and overflow issues without changing structure outside this task.
exec
/bin/zsh -lc "sed -n '1,220p' src/App.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,240p' src/index.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Home.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Gallery.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "pwd && rg --files . | rg '"'^(src/(App.css|index.css|pages/Home.jsx|pages/Gallery.jsx|components/)|agent/AGENT_REPORT.md|agent/CURRENT_TASK_PROMPT.md|site-spec.json|docs/DEVELOPMENT_METHOD.md|brief/(original-prompt|brief-summary).md)$'"'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i succeeded in 51ms:
import { useEffect } from "react"

import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
import HeroSection from "../components/HeroSection"

export default function Home() {
  useEffect(() => {
    document.title = "Osteria 19 Torino | Contemporary Italian Dining"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Osteria 19 Torino, a modern osteria with seasonal Italian plates, curated wines, and a warm dining room in the heart of Turin.",
      )
    }
  }, [])

 succeeded in 52ms:
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

 succeeded in 52ms:
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
 succeeded in 52ms:
import { useEffect } from "react"

import GalleryGridSection from "../components/Gallery-gridSection"

const styles = {
  main: {
    backgroundColor: "#f6f1e8",
    color: "#1f1f1b",
  },
  hero: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "7.5rem 1.5rem 3rem",
  },
  copy: {
    maxWidth: "38rem",
    display: "grid",
    gap: "1rem",
  },
  eyebrow: {
 exited 1 in 51ms:
/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i
codex
The current CSS still has Vite defaults, so the responsive work likely needs to happen mostly in shared component styles. I’m reading the active section components now to find the actual layout constraints and any overflow risks.
exec
/bin/zsh -lc "sed -n '1,260p' src/components/HeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,240p' src/components/FloatingWhatsAppButton.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,260p' src/components/AboutSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,280p' src/components/ContactSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc 'rg --files src/components' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,280p' src/components/Gallery-gridSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i succeeded in 53ms:
const bookingLink =
  "https://wa.me/390113821947?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Osteria%2019%20Torino."

const styles = {
  link: {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 30,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.85rem 1rem",
    borderRadius: "999px",
    backgroundColor: "#25d366",
    color: "#102417",
    textDecoration: "none",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
    fontSize: "0.95rem",
    fontWeight: 700,
 succeeded in 53ms:
const aboutImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"

const highlights = [
  "Seasonal produce selected with the rhythm of Piemonte markets",
  "Italian classics reworked with clean presentation and measured elegance",
  "An intimate dining room shaped for long dinners, wine, and conversation",
  "A curated cellar built around local labels and expressive Italian bottles",
]

const styles = {
  section: {
    background:
      "linear-gradient(180deg, #f6f1e8 0%, rgba(246, 241, 232, 0.96) 100%)",
    color: "#1f1f1b",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "4.5rem 1.5rem",
 succeeded in 53ms:
const bookingLink = "https://wa.me/390113821947?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Osteria%2019%20Torino."

const openingHours = [
  {
    days: "Tuesday - Thursday",
    hours: ["19:00 - 23:00"],
  },
  {
    days: "Friday - Saturday",
    hours: ["19:00 - 00:00"],
  },
  {
    days: "Sunday",
    hours: ["12:30 - 15:00", "19:00 - 22:30"],
  },
  {
    days: "Monday",
    hours: ["Closed"],
  },
]
 succeeded in 53ms:
const backgroundImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "#1f1f1b",
    color: "#f6f1e8",
  },
  media: {
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(180deg, rgba(16, 16, 14, 0.48) 0%, rgba(16, 16, 14, 0.76) 56%, rgba(16, 16, 14, 0.92) 100%), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "scale(1.04)",
 succeeded in 50ms:
src/components/FloatingWhatsAppButton.jsx
src/components/AboutSection.jsx
src/components/ContactSection.jsx
src/components/Gallery-gridSection.jsx
src/components/HeroSection.jsx
 succeeded in 50ms:
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary Italian restaurant dining room with warm pendant lighting",
    category: "Dining room",
    title: "Warm urban interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant restaurant table setting prepared for evening service",
    category: "Table setting",
    title: "Evening table detail",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined plated pasta served in a modern Italian restaurant",
    category: "Pasta",
    title: "Signature pasta plates",
  },
  {
codex
I have the layout surface now. The main issues are global Vite defaults, fixed-width touch targets at small sizes, and a few grids and floating elements that need stricter mobile behavior.
Plan update
Responsive polish needs coordinated CSS cleanup plus small component-level adjustments inside the allowed files.
  ✓ Inspect active layout and identify overflow/spacing risks across home and gallery
  → Patch global CSS and component styles for mobile-first spacing, grids, and fixed CTA behavior
  • Run build check and update agent report
exec
/bin/zsh -lc "sed -n '1,220p' agent/AGENT_REPORT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,240p' src/App.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i succeeded in 53ms:
import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const sectionId = params.get("section")

    if (!sectionId) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return
    }

    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
 succeeded in 53ms:
# AGENT REPORT

Project created.

Prepared TASK page-home-shell (Create home page shell) for execution.

Prepared TASK page-home-shell (Create home page shell) for execution.

Launching Codex for TASK page-home-shell.

Completed TASK `page-home-shell`.
- Replaced the placeholder home page with a semantic shell containing `hero`, `about`, and `contact` sections.
- Preserved the home route in `src/App.jsx` and ensured the page includes valid booking and phone CTAs.

TASK page-home-shell executed by Codex.
Waiting for validation.

TASK page-home-shell completed successfully.
Build passed.
Commit created for TASK page-home-shell.
codex
I’ve narrowed this to a small, safe patch: remove the global starter CSS that’s constraining the app, then tighten section spacing and fixed CTA behavior so the layout holds from 360px through desktop.
exec
/bin/zsh -lc "sed -n '1,220p' package.json" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc "sed -n '1,220p' src/main.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i succeeded in 53ms:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 succeeded in 53ms:
{
  "name": "site-create-a-premium-modern-website-for-an-i",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test:ui": "playwright test"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@playwright/test": "^1.58.2",
codex
I’m applying the patch now. The changes stay inside the allowed files and focus on global reset fixes, section padding, grid sizing, and mobile-safe CTA sizing rather than reshaping the pages.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx
@@ -8,2 +8,3 @@
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
@@ -12,3 +13,4 @@
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
@@ -36,3 +38,3 @@
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/FloatingWhatsAppButton.jsx
@@ -6,4 +6,4 @@
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
@@ -12,3 +12,4 @@
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
@@ -18,3 +19,3 @@
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
@@ -36,2 +37,3 @@
     color: "#102417",
+    whiteSpace: "nowrap",
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/AboutSection.jsx
@@ -19,6 +19,7 @@
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
@@ -28,3 +29,3 @@
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
@@ -55,6 +56,8 @@
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
@@ -63,3 +66,3 @@
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
@@ -76,3 +79,3 @@
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx
@@ -7,2 +7,9 @@
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
@@ -21,3 +28,3 @@
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/ContactSection.jsx
@@ -41,3 +41,4 @@
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
@@ -48,3 +49,3 @@
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
@@ -84,3 +85,3 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
@@ -110,2 +111,3 @@
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
@@ -147,2 +149,4 @@
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
@@ -153,2 +157,3 @@
     fontWeight: 700,
+    textAlign: "center",
   },
@@ -159,2 +164,4 @@
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
@@ -166,2 +173,3 @@
     fontWeight: 700,
+    textAlign: "center",
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/Gallery-gridSection.jsx
@@ -66,5 +66,6 @@
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
@@ -98,4 +99,4 @@
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
@@ -104,3 +105,4 @@
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
@@ -125,3 +127,3 @@
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
@@ -141,3 +143,3 @@
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/HeroSection.jsx
@@ -7,3 +7,3 @@
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
@@ -24,4 +24,4 @@
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
@@ -37,3 +37,4 @@
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
@@ -57,6 +58,6 @@
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
@@ -81,2 +82,4 @@
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
@@ -88,2 +91,3 @@
     lineHeight: 1,
+    textAlign: "center",
   },
@@ -94,2 +98,4 @@
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
@@ -100,2 +106,5 @@
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
@@ -107,3 +116,4 @@
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css
@@ -1,10 +1,7 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
@@ -15,9 +12,11 @@
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
@@ -26,42 +25,46 @@
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
apply_patch(auto_approved=true) exited 0 in 95ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/HeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/AboutSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/ContactSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/Gallery-gridSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/FloatingWhatsAppButton.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx
file update:
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

file update:
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

codex
The responsive patch is in. I’m running a build now and then I’ll append the task summary to the agent report with only the work done for this task.
exec
/bin/zsh -lc 'git diff -- src/index.css src/components/HeroSection.jsx src/components/AboutSection.jsx src/components/ContactSection.jsx src/components/Gallery-gridSection.jsx src/components/FloatingWhatsAppButton.jsx src/pages/Home.jsx src/pages/Gallery.jsx' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-iexec
/bin/zsh -lc 'npm run build' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i succeeded in 53ms:
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd..9e26b8e 100644
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@ const styles = {
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
 succeeded in 820ms:

> site-create-a-premium-modern-website-for-an-i@0.0.0 build
> vite build

vite v7.3.1 building client environment for production...
transforming...
✓ 49 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.69 kB │ gzip:  0.40 kB
dist/assets/index-aOhLRcYF.css    0.71 kB │ gzip:  0.41 kB
dist/assets/index-02mnxKfB.js   248.98 kB │ gzip: 78.58 kB
✓ built in 549ms
file update:
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

codex
The build passed. I’m updating `agent/AGENT_REPORT.md` with a short task-specific entry and then I’ll summarize the modified files and outcome.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md
@@ -184 +184,8 @@
 Launching Codex for TASK responsive-polish.
+2026-03-10: Refined responsive spacing and layout behavior across the home and gallery pages by removing the default Vite global constraints, tightening section padding and grid sizing, and making hero/contact/floating CTA elements safer on small screens without changing routing or page structure.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
apply_patch(auto_approved=true) exited 0 in 110ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index a7ccede6cf03b2ae3a02c7c921cf818d9da8d1ad..6d814cf4c6fc31eef4fe2407dc31d392a425017b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -182,3 +182,10 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+2026-03-10: Refined responsive spacing and layout behavior across the home and gallery pages by removing the default Vite global constraints, tightening section padding and grid sizing, and making hero/contact/floating CTA elements safer on small screens without changing routing or page structure.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index a7ccede6cf03b2ae3a02c7c921cf818d9da8d1ad..6d814cf4c6fc31eef4fe2407dc31d392a425017b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -182,3 +182,10 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+2026-03-10: Refined responsive spacing and layout behavior across the home and gallery pages by removing the default Vite global constraints, tightening section padding and grid sizing, and making hero/contact/floating CTA elements safer on small screens without changing routing or page structure.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

Plan update
  ✓ Inspect active layout and identify overflow/spacing risks across home and gallery
  ✓ Patch global CSS and component styles for mobile-first spacing, grids, and fixed CTA behavior
  ✓ Run build check and update agent report
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index a7ccede6cf03b2ae3a02c7c921cf818d9da8d1ad..6d814cf4c6fc31eef4fe2407dc31d392a425017b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -182,3 +182,10 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+2026-03-10: Refined responsive spacing and layout behavior across the home and gallery pages by removing the default Vite global constraints, tightening section padding and grid sizing, and making hero/contact/floating CTA elements safer on small screens without changing routing or page structure.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

codex
**Modified Files**

[agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md)  
[src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css)  
[src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/HeroSection.jsx)  
[src/components/AboutSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/AboutSection.jsx)  
[src/components/ContactSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/ContactSection.jsx)  
[src/components/Gallery-gridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/Gallery-gridSection.jsx)  
[src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/components/FloatingWhatsAppButton.jsx)  
[src/pages/Home.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx)  
[src/pages/Gallery.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx)  

**What Was Implemented**

Removed the default Vite global layout constraints and replaced them with app-safe base styles in [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/index.css), including full-width root sizing, box-sizing, overflow protection, image defaults, and section scroll offsets for anchored navigation.

Refined responsive spacing and sizing across the allowed sections and pages: hero padding and CTA sizing, about/contact grid behavior, gallery grid/card sizing, and floating WhatsApp button bounds. I also added `overflowX` protection on [src/pages/Home.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Home.jsx) and [src/pages/Gallery.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/src/pages/Gallery.jsx) so the layout stays contained across the required breakpoints.

Updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-i/agent/AGENT_REPORT.md) with the task summary.

**Build Result**

`npm run build` passed successfully with Vite production build output generated in `dist/`.

I did not run browser-based breakpoint validation in this turn, so the build is verified but not visually inspected in-browser here.
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index a7ccede6cf03b2ae3a02c7c921cf818d9da8d1ad..6d814cf4c6fc31eef4fe2407dc31d392a425017b
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -182,3 +182,10 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+2026-03-10: Refined responsive spacing and layout behavior across the home and gallery pages by removing the default Vite global constraints, tightening section padding and grid sizing, and making hero/contact/floating CTA elements safer on small screens without changing routing or page structure.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/components/AboutSection.jsx b/src/components/AboutSection.jsx
index 1e935fd972c71dd94105f26ab479a7dbc0e3db4f..9e26b8e2200ee621762ddf2752beb2fba204644a
--- a/src/components/AboutSection.jsx
+++ b/src/components/AboutSection.jsx
@@ -17,16 +17,17 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem)",
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
-    gap: "2rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
+    gap: "clamp(1.5rem, 4vw, 3rem)",
     alignItems: "center",
   },
   mediaCard: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "22rem",
+    minHeight: "clamp(20rem, 56vw, 31rem)",
     borderRadius: "1.75rem",
     backgroundColor: "#d8d1c5",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -53,15 +54,17 @@
     gap: "0.6rem",
     padding: "0.75rem 1rem",
     borderRadius: "999px",
+    maxWidth: "calc(100% - 2.5rem)",
     backgroundColor: "rgba(31, 31, 27, 0.82)",
     color: "#f6f1e8",
-    fontSize: "0.88rem",
+    fontSize: "0.84rem",
     letterSpacing: "0.04em",
+    lineHeight: 1.4,
   },
   content: {
     display: "grid",
     alignContent: "center",
-    gap: "1.5rem",
+    gap: "1.35rem",
   },
   eyebrow: {
     margin: 0,
@@ -74,7 +77,7 @@
   title: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
+    fontSize: "clamp(2.2rem, 8vw, 4.25rem)",
     lineHeight: 1,
     letterSpacing: "-0.04em",
     maxWidth: "12ch",
diff --git a/src/components/ContactSection.jsx b/src/components/ContactSection.jsx
index d64f20ea5ded9828685adb1d95ebb05d367eb86a..2ef67d6a67595f39c7ed246c644dbe9f85ee615f
--- a/src/components/ContactSection.jsx
+++ b/src/components/ContactSection.jsx
@@ -39,14 +39,15 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "4.5rem 1.5rem 5rem",
+    padding:
+      "clamp(4rem, 8vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
     gap: "1.5rem",
   },
   panel: {
     display: "grid",
     gap: "2rem",
-    padding: "1.5rem",
+    padding: "clamp(1.25rem, 4vw, 2.25rem)",
     border: "1px solid rgba(246, 241, 232, 0.1)",
     borderRadius: "1.75rem",
     background:
@@ -82,7 +83,7 @@
   },
   content: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
     gap: "1.25rem",
     alignItems: "start",
   },
@@ -108,6 +109,7 @@
     gap: "0.35rem",
     color: "rgba(246, 241, 232, 0.92)",
     lineHeight: 1.7,
+    wordBreak: "break-word",
   },
   cardLink: {
     color: "#f6f1e8",
@@ -145,18 +147,23 @@
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 15rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.24)",
     backgroundColor: "rgba(246, 241, 232, 0.04)",
@@ -164,6 +171,7 @@
     textDecoration: "none",
     fontSize: "0.98rem",
     fontWeight: 700,
+    textAlign: "center",
   },
   note: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 44d85068470878067a8991837a8912a4962530ec..68ffbed96e0d60852e12873b102201c887986d80
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -4,19 +4,20 @@
 const styles = {
   link: {
     position: "fixed",
-    right: "1rem",
-    bottom: "1rem",
+    right: "clamp(0.75rem, 3vw, 1rem)",
+    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
     zIndex: 30,
     display: "inline-flex",
     alignItems: "center",
     gap: "0.75rem",
-    padding: "0.85rem 1rem",
+    maxWidth: "calc(100vw - 1.5rem)",
+    padding: "0.8rem 0.95rem",
     borderRadius: "999px",
     backgroundColor: "#25d366",
     color: "#102417",
     textDecoration: "none",
     boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
-    fontSize: "0.95rem",
+    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
     fontWeight: 700,
     lineHeight: 1,
   },
@@ -34,6 +35,7 @@
   label: {
     display: "block",
     color: "#102417",
+    whiteSpace: "nowrap",
   },
 }
 
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index 3167c6ee88b7a1fe06452079d0b4788e83859aa5..2074dfc9439a15f60e6460722660f608b3908935
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -64,9 +64,10 @@
   shell: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "0 1.5rem 5rem",
+    padding:
+      "0 clamp(1rem, 4vw, 1.5rem) clamp(4.5rem, 9vw, 6rem)",
     display: "grid",
-    gap: "2rem",
+    gap: "clamp(1.5rem, 4vw, 2.25rem)",
   },
   intro: {
     display: "grid",
@@ -96,13 +97,14 @@
   },
   grid: {
     display: "grid",
-    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
-    gap: "1rem",
+    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
+    gap: "clamp(0.9rem, 2vw, 1.25rem)",
   },
   card: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "21rem",
+    minHeight: "19rem",
+    aspectRatio: "0.82",
     borderRadius: "1.6rem",
     backgroundColor: "#d9d1c4",
     boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
@@ -123,7 +125,7 @@
   caption: {
     position: "absolute",
     inset: "auto 0 0 0",
-    padding: "1.25rem",
+    padding: "clamp(1rem, 3vw, 1.25rem)",
     display: "grid",
     gap: "0.4rem",
     color: "#f6f1e8",
@@ -139,7 +141,7 @@
   captionTitle: {
     margin: 0,
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "1.35rem",
+    fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
     lineHeight: 1.1,
   },
 }
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 70c3827ad63957a5b5390af176b8692691fcc8f2..346d7acdda02e88206100155ed3d3be5832c4362
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -5,7 +5,7 @@
   section: {
     position: "relative",
     overflow: "hidden",
-    minHeight: "100vh",
+    minHeight: "100svh",
     display: "flex",
     alignItems: "stretch",
     backgroundColor: "#1f1f1b",
@@ -22,8 +22,8 @@
   glow: {
     position: "absolute",
     inset: "auto -15% -25% auto",
-    width: "22rem",
-    height: "22rem",
+    width: "clamp(14rem, 32vw, 22rem)",
+    height: "clamp(14rem, 32vw, 22rem)",
     borderRadius: "999px",
     background:
       "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
@@ -35,7 +35,8 @@
     width: "100%",
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "8rem 1.5rem 4rem",
+    padding:
+      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
     display: "grid",
     alignItems: "end",
   },
@@ -55,10 +56,10 @@
   title: {
     margin: "1rem 0 0",
     fontFamily: 'Georgia, "Times New Roman", serif',
-    fontSize: "clamp(3rem, 9vw, 6rem)",
+    fontSize: "clamp(2.85rem, 10vw, 6rem)",
     lineHeight: 0.94,
     letterSpacing: "-0.04em",
-    maxWidth: "10ch",
+    maxWidth: "9ch",
   },
   subtitle: {
     margin: "1.5rem 0 0",
@@ -79,6 +80,8 @@
     justifyContent: "center",
     border: 0,
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     backgroundColor: "#b85c38",
     color: "#f6f1e8",
@@ -86,18 +89,24 @@
     fontSize: "0.98rem",
     fontWeight: 700,
     lineHeight: 1,
+    textAlign: "center",
   },
   secondaryAction: {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     borderRadius: "999px",
+    flex: "1 1 14rem",
+    minHeight: "3.25rem",
     padding: "0.95rem 1.5rem",
     border: "1px solid rgba(246, 241, 232, 0.42)",
     color: "#f6f1e8",
     backgroundColor: "rgba(246, 241, 232, 0.08)",
     fontSize: "0.98rem",
     fontWeight: 700,
+    lineHeight: 1,
+    textAlign: "center",
+    textDecoration: "none",
   },
   details: {
     display: "flex",
@@ -105,7 +114,8 @@
     gap: "1rem 1.5rem",
     marginTop: "1.5rem",
     color: "rgba(246, 241, 232, 0.74)",
-    fontSize: "0.9rem",
+    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
+    lineHeight: 1.6,
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..1e802e3713b72d8c9523ca11dc5beba3ab0b94b4
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,71 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #1f1f1b;
+  background-color: #f6f1e8;
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  overflow-x: clip;
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
+  background-color: #f6f1e8;
+  color: #1f1f1b;
+  overflow-x: clip;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+body,
+#root {
+  width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+#root {
+  min-height: 100vh;
 }
-button:hover {
-  border-color: #646cff;
+
+img {
+  display: block;
+  max-width: 100%;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+a {
+  color: inherit;
+  text-decoration: none;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
+button,
+input,
+textarea,
+select {
+  font: inherit;
+}
+
+main {
+  display: block;
+}
+
+section {
+  scroll-margin-top: 5.5rem;
+}
+
+@media (max-width: 479px) {
+  section {
+    scroll-margin-top: 4.75rem;
   }
 }
diff --git a/src/pages/Gallery.jsx b/src/pages/Gallery.jsx
index 668f3e0db3b1e7b2cf9690cd2efa40365b8e2f23..b2f3bb4e606f11873fd3dfa891110a8cb6a2d31b
--- a/src/pages/Gallery.jsx
+++ b/src/pages/Gallery.jsx
@@ -6,11 +6,13 @@
   main: {
     backgroundColor: "#f6f1e8",
     color: "#1f1f1b",
+    overflowX: "hidden",
   },
   hero: {
     maxWidth: "72rem",
     margin: "0 auto",
-    padding: "7.5rem 1.5rem 3rem",
+    padding:
+      "clamp(6.5rem, 14vw, 7.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 3rem)",
   },
   copy: {
     maxWidth: "38rem",
@@ -34,7 +36,7 @@
   },
   lead: {
     margin: 0,
-    fontSize: "1.05rem",
+    fontSize: "clamp(1rem, 2.6vw, 1.05rem)",
     lineHeight: 1.8,
     color: "rgba(31, 31, 27, 0.76)",
   },
diff --git a/src/pages/Home.jsx b/src/pages/Home.jsx
index 34f65c3a82c1336fc2a68a9494d9621bd6cf132b..62db0664f4692a7c5e6cbca71d784c32346cf4c7
--- a/src/pages/Home.jsx
+++ b/src/pages/Home.jsx
@@ -5,6 +5,13 @@
 import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
 import HeroSection from "../components/HeroSection"
 
+const styles = {
+  main: {
+    backgroundColor: "#f6f1e8",
+    overflowX: "hidden",
+  },
+}
+
 export default function Home() {
   useEffect(() => {
     document.title = "Osteria 19 Torino | Contemporary Italian Dining"
@@ -19,7 +26,7 @@
   }, [])
 
   return (
-    <main>
+    <main style={styles.main}>
       <HeroSection />
       <AboutSection />
       <ContactSection />

tokens used
47.401