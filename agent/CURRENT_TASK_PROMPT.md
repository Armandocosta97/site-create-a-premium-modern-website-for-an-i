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
section-home-hero

## Current task title
Create hero section on home

## Current task type
section

## Current task target
```json
{
  "pageId": "home",
  "sectionId": "hero",
  "sectionType": "hero"
}
```

## Depends on
- page-home-shell

## Files allowed
- src/pages/Home.jsx
- src/components/HeroSection.jsx
- src/components

## Definition of done
- section hero exists on home
- section hero matches type hero
- section hero is rendered in page home

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
