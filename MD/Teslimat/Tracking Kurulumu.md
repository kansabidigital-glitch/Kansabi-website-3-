---
tags: [delivery]
status: active
---

# Tracking (Takip) Kurulum Sistemi

## Araçlar
GTM (merkezi tag yönetimi), GA4 (web analytics), Meta Pixel + CAPI, Hotjar (ısı haritası), Looker Studio (raporlama)

## GTM Kurulum SOP
1. GTM hesabı → Web konteyneri → kod yerleştirme → Publish
2. GA4 mülkü oluştur → GTM üzerinden tag ekle → özel olaylar (form_submit, button_click)
3. Meta Pixel ID al → GTM tag ekle → standard olaylar (PageView, Lead, Purchase) → CAPI entegrasyonu
4. Doğrulama: GTM Preview Mode, Meta Events Manager, GA4 Realtime, Chrome extensions (GTM/GA4 Debugger, Meta Pixel Helper)

## Event Naming Standardı
`page_view`, `lead_submit`, `purchase`, `scroll_depth` + CRM sync events

## İlgili
- [[Meta Ads SOP]]
- [[Google Ads SOP]]
- [[Raporlama Dashboard]]
