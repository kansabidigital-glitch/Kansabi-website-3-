---
tags: [infra]
status: active
---

# Ödeme & Bankacılık Yapısı

| Araç | Amaç | Maliyet |
|---|---|---|
| Starling Business | Ana UK banka hesabı | Ücretsiz |
| Wise Business | Uluslararası transferler (AU, US) | Düşük işlem ücreti |
| Stripe | Online fatura/ödeme | %1.4 + 20p (EU) |
| FreeAgent | Muhasebe/faturalama | £19/ay (ltd. şirket) |
| Notion | Fatura takibi/operasyon | Ücretsiz başlangıç |

## Fatura Akışı
```
Müşteri → Stripe ödeme linki → Starling hesabı → FreeAgent'ta kayıt → (gerekirse) Wise ile uluslararası transfer
```

## İlgili
- [[Hukuki Yapi (UK)]]
