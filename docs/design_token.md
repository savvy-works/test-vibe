# Design System Guide

## 1. Visual Theme & Atmosphere

The interface follows a precision-first SaaS aesthetic — clean, structured, and tool-oriented. The design emphasizes clarity, speed, and confidence through sharp edges, controlled spacing, and subtle motion.

The visual identity is defined by a cool-indigo primary system, supported by a refined accent palette and neutral grayscale foundation.

**Key Characteristics:**

- Bright canvas with deep charcoal text (`#0f172a`)
- Indigo (`#4f46e5`) as primary brand & interaction color
- Modern grotesk font system with medium contrast
- Subtle but rich accent palette (teal, magenta, amber, lime)
- Tight border-radius (6px–10px) — controlled softness
- Layered shadow system (soft elevation, not dramatic)
- Compact uppercase labels with slight tracking
- Micro-interaction: `translateY(-2px)` + `scale(1.01)`

---

## 2. Color Palette & Roles

### Primary

| Token | Hex | Role |
|---|---|---|
| Charcoal 900 | `#0f172a` | Primary text |
| Indigo 600 | `#4f46e5` | Primary CTA & links |
| Indigo 500 | `#6366f1` | Hover / active states |
| Indigo 700 | `#4338ca` | Pressed / focus state |

### Secondary Accents

| Token | Hex | Role |
|---|---|---|
| Teal | `#14b8a6` | Success / highlight |
| Magenta | `#d946ef` | Creative accent |
| Amber | `#f59e0b` | Warning / attention |
| Lime | `#84cc16` | Positive indicators |
| Rose | `#f43f5e` | Error / destructive |

### Neutral

| Token | Hex | Role |
|---|---|---|
| Gray 900 | `#111827` | Heading text |
| Gray 700 | `#374151` | Body text |
| Gray 500 | `#6b7280` | Secondary text |
| Gray 300 | `#d1d5db` | Borders |
| Gray 200 | `#e5e7eb` | Divider / subtle UI |
| Gray 100 | `#f3f4f6` | Background sections |

### Surface

| Token | Hex | Role |
|---|---|---|
| White | `#ffffff` | Main background |
| Soft Surface | `#f9fafb` | Section background |
| Elevated Surface | `#ffffff` | Cards / modals |

### Shadows

Soft 4-layer elevation:

```css
box-shadow:
  rgba(0,0,0,0.02) 0px 40px 80px,
  rgba(0,0,0,0.04) 0px 20px 40px,
  rgba(0,0,0,0.06) 0px 10px 20px,
  rgba(0,0,0,0.08) 0px 4px 8px;
```

---

## 3. Typography Rules

### Font System

- **Primary Font:** `Inter`
- **Fallback:** `system-ui, -apple-system, Segoe UI, Roboto, Arial`

### Weights

| Usage | Weight |
|---|---|
| Display / Heading | 600–700 |
| Body | 400–500 |
| Label / UI | 500–600 |

### Scale

| Level | Size |
|---|---|
| Display | 32px–48px |
| Heading | 20px–28px |
| Body | 14px–16px |
| Caption | 12px–13px |

### Labels

- Uppercase usage for UI labels
- Letter-spacing: `0.04em – 0.08em`
- Font-size: `11px – 13px`
- Weight: `500–600`

---

## 4. Border Radius

| Size | Value | Usage |
|---|---|---|
| Small | `6px` | Inputs, buttons |
| Medium | `8px` | Cards |
| Large | `10px` | Modals |

> Avoid overly rounded shapes (no "pill overload")

---

## 5. Spacing System

- **Base unit:** `4px`
- **Common scale:** `4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64`

---

## 6. Interaction & Motion

### Hover

- Slight lift: `translateY(-2px)`
- Optional: `scale(1.01)`
- Duration: `120ms – 180ms`
- Easing: `ease-out`

### Active / Pressed

- `translateY(0)`
- Darken color (Indigo 700)

### Focus

- Outline: `2px solid #6366f1`
- Offset: `2px`

---

## 7. Component Philosophy

- Prioritize clarity over decoration
- Use color functionally, not decoratively
- Avoid excessive gradients or glassmorphism
- Components should feel tool-like, not marketing-heavy
- Maintain consistent density across layouts

---

## 8. Design Principles

| Principle | Description |
|---|---|
| **Functional First** | Every element serves purpose |
| **Consistency Over Creativity** | System > improvisation |
| **Subtle Depth** | Use shadow sparingly |
| **Readable Always** | Contrast is mandatory |
| **Fast Interaction Feel** | Micro delays must feel instant |