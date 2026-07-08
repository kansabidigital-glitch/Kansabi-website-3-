---
tags: [brand]
status: active
---

# Renk Paleti — Resmi Versiyon

> Çakışma kapatıldı. Bu tek ve geçerli renk sistemidir. Önceki V1 (Zen Altın) ve V2 (Nötr Gri) taslakları 99-Kaynak-Arsiv'e taşındı.

---

## Temel Renkler

| İsim | Hex | RGB | Kullanım |
|---|---|---|---|
| **Soft Black** | `#1C1C1C` | 28, 28, 28 | Primary text, headings, strong emphasis |
| **Warm White** | `#FAFAF9` | 250, 250, 249 | Primary background, canvas, negative space |
| **Stone Gray** | `#52525B` | 82, 82, 91 | Secondary text, labels, subtle elements |
| **Muted Charcoal** | `#3F3F46` | 63, 63, 70 | Hover states, medium emphasis |
| **Cloud** | `#E4E4E7` | 228, 228, 231 | Borders, dividers, subtle containers |
| **Fog** | `#A1A1AA` | 161, 161, 170 | Tertiary text, disabled states |
| **Zen Accent** | `#71717A` | 113, 113, 122 | Body text, secondary information |
| **Pure** | `#FFFFFF` | 255, 255, 255 | Cards, elevated surfaces |

---

## Hiyerarşi & Kullanım Mantığı

```
Soft Black   → En güçlü — başlıklar, CTA metni, kritik vurgu
Muted Charcoal → İkinci kademe güç — hover, orta vurgu
Stone Gray   → Yardımcı metin — label, alt başlık
Zen Accent   → Gövde metni — paragraflar, açıklamalar
Fog          → Zayıf metin — disabled, placeholder
---
Warm White   → Ana zemin
Pure White   → Kart ve yükseltilmiş yüzeyler
Cloud        → Sınır / bölücü çizgiler
```

## Tasarım Notları

- Sisteme **accent renk eklenmedi** — minimal, nötr, içerik odaklı duruş korundu.
- İleride bir vurgu rengi (örn. terracotta, sage, gold) eklenecekse tek bir notla bu listeye eklenir.
- Dark mode için Soft Black ↔ Warm White yer değiştirir, ara tonlar simetrik çalışır.

## İlgili
- [[Tipografi]]
- [[UI Sistem Yonergesi]]
- [[Logo Sistemi]]
