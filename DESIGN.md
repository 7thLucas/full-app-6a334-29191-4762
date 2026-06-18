# JohnCarefulness — Design Guidelines

## Color Palette
- **Primary**: Deep Forest Green `#2D6A4F` — trustworthy, natural, premium feel
- **Secondary / Accent**: Warm Amber `#F4A261` — draws attention to CTAs
- **Background**: Off-White `#F9F6F0` — soft, editorial, easy on the eyes
- **Surface / Card**: Pure White `#FFFFFF` with subtle shadow
- **Text Primary**: Charcoal `#1A1A2E`
- **Text Secondary**: Medium Gray `#6B7280`
- **Success / Badge**: Emerald `#52B788`

## Typography
- **Headings**: "Playfair Display" (serif) — editorial, premium
- **Body / UI**: "Inter" (sans-serif) — clean, readable
- **CTA Buttons**: Inter Semi-Bold, uppercase tracking

## Elevation & Shadows
- Cards: `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` — subtle lift
- Hover state: `box-shadow: 0 6px 20px rgba(0,0,0,0.14)` — noticeable elevation
- Modals/overlays: `box-shadow: 0 16px 48px rgba(0,0,0,0.20)`

## Components
### Product Card
- Rounded corners: `border-radius: 12px`
- Product image: full-width, 16:9 or 4:3 aspect ratio, object-fit cover
- Category badge: small pill in Emerald on top-left of image
- Product name: Playfair Display 18px bold
- Short description: Inter 14px, gray
- Price: Inter 20px semi-bold, Charcoal
- CTA Button: full-width, Amber background, white text, rounded, Inter Semi-Bold

### CTA Button
- Background: Amber `#F4A261`
- Text: White, Semi-Bold, slight letter-spacing
- Border-radius: `8px`
- Padding: `12px 24px`
- Hover: darken to `#E8894A`, slight scale `1.02`

### Navigation
- Top nav: white background, green logo text, category links in Charcoal
- Active/hover link: underline in Amber

### Hero / Banner
- Full-width, green-to-emerald gradient background
- White heading text, subheading in off-white
- Single Amber CTA button

## Layout
- Max content width: `1200px`, centered
- Product grid: 3 columns desktop, 2 columns tablet, 1 column mobile
- Generous whitespace between sections (64px vertical padding)
- Mobile-first responsive breakpoints