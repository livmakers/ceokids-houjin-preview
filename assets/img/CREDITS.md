# 画像・書体 台帳（/houjin/ CEOキッズアカデミー 法人プログラム）

2026-09-15 Phase 2（site-builder）。正本 = `_work/build.py` の `SLOTS` 辞書（95枠・写真95点、サイト全体で写真は一意 = 同じ写真を2箇所以上で使わない）。
判定の一次情報 = `outputs/photo-inventory.md`（写真調達チーム、既存149枚 + 追加66枚）。REJECT 判定の写真は一切使用していない。

## 子どもの写真について（BOSS確認済み）

**2026-09-15 BOSS指示:「サイトで使っている子供はモデルだから、そのまま使って良い。」** 公式サイト（ceokidsacademy.com）掲載の子どもの写真はモデルであり、法人向けサイトでの利用について同意範囲の確認は不要（以前の「ローンチ前にBOSS確認」の保留事項は解消）。
ストック（Pexels）写真に子どもが写るものは引き続き対象外（`photo-inventory.md` のREJECT方針どおり、追加バッチも子ども0枚）。

## 書体（3種・SIL OFL 1.1・Google Fonts配布・サブセット化してセルフホスト）

| 役割 | 書体 | 取得元 | サブセット後サイズ |
|---|---|---|---|
| 和文見出し | Zen Kaku Gothic New Bold（静的） | google/fonts `ofl/zenkakugothicnew/ZenKakuGothicNew-Bold.ttf` | 57.5 KB |
| 和文本文 | Noto Sans JP（可変・wght 400–700にインスタンス化） | google/fonts `ofl/notosansjp/NotoSansJP[wght].ttf` | 190.0 KB |
| 欧文ディスプレイ | Inter Tight（可変・wght 200–600にインスタンス化） | google/fonts `ofl/intertight/InterTight[wght].ttf` | 15.8 KB |

**合計 263.2 KB**（ブリーフ上限520KB・目標490KBに対して大幅に余裕）。ライセンス文 `OFL.txt` は `_work/fonts-src/<family>/OFL.txt` に同梱。旧書体（Zen Maru Gothic・Figtree）は完全撤去済み（参照ゼロ・404ゼロを確認済み）。
再生成: `python _work/subset_fonts.py`（本文・alt・キャプションを変更したら必ず再実行）。

## 写真の運用ルール（Phase 2・2026-09-15 BOSS指示）

- **サイト全体で写真は一意**: 同じ原本（トリミング違いを含む）を2箇所以上で使わない。`_work/build.py` の `check_photo_uniqueness()` がビルド時に自動検査し、重複があればビルドを失敗させる（`python _work/build.py` の実行時に写真ごとの使用回数を毎回出力）。
- フッターの写真帯・共通CTAバーの写真は廃止（全ページ共通で同じ写真を繰り返し映す構成をやめた）。
- 写真マーキー（C4）は複製せず1セットのみ。往復ドリフト（ease-in-out alternate）でループさせる。`prefers-reduced-motion` では静止グリッド。
- 透かし写真（`.wm` / kind="wm"）は SLOTS の中で通常の枠と同列に管理。ネイビー面 opacity .34・明るい面 .45・モバイル(≤768px) .20 を標準とし、可読性を守るスクリム（グラデーション）を重ねている。
- キャプション・altは「枠」ではなく「写真そのもの」に紐づく（`ALT_BY_PHOTO` / `CAP_BY_PHOTO`、`_work/build.py`）。stock写真、および公式サイト掲載だが購入ストックの可能性が高いと判定された6点は「写真はイメージです。」、それ以外の実写授業・講座写真は「CEOキッズアカデミーの授業の様子」等の正確なキャプション。

## 1. 公式サイト（ceokidsacademy.com）由来の写真（23点）

すべて `USE` または `USE-FLAG`（子どもの顔が識別できる＝モデルのためBOSS確認済み、上記参照）。

| file | 出典 | 撮影者/ライセンス | 使用スロット | 使用ページ |
|---|---|---|---|---|
| `active-learning` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery17.png  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-H1 | / |
| `books-notebook` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/hsu-step2.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | DO-H2 | /documents/ |
| `class-calculator` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery4.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | WF-1 | /welfare/ |
| `class-jobs-slide` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery8.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-W3 | / |
| `class-presentation` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery10.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-M4 | / |
| `class-sticky` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery16.png  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-B2 | / |
| `class-whiteboard` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/kids-gallery4.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-M1 | / |
| `consult-meeting` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/flow.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | KE-2 | /keisho/ |
| `instructor-talk` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/instructor-gallery6.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | CO-H | /community/ |
| `instructor-training` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/fc-steps-photo-1.png  | 公式サイト掲載（撮影者クレジット表記なし） | SP-5 | /sponsor/ |
| `lemonade-close` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery3.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | SP-4 | /sponsor/ |
| `mama-laptop` | https://ceokidsacademy.com/wp-content/uploads/2023/02/mama06-1-scaled.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | WF-2 | /welfare/ |
| `money-class` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/money_class.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-B1 | / |
| `online-small` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/mama-step2.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | KE-5 | /keisho/ |
| `parent-tablet` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/parent.png  | 公式サイト掲載（撮影者クレジット表記なし） | DO-2 | /documents/ |
| `planning-hands` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/hsu-step3.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-F1 | / |
| `recent-class` | https://ceokidsacademy.com/wp-content/uploads/2025/06/basic_250610.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-B3 | / |
| `seminar-room` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery9.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | FQ-H2 | /faq/ |
| `seminar-talk` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/mama-gallery5.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | KE-3 | /keisho/ |
| `seminar-wide` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery9.jpeg  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-M5 | / |
| `tablet-class` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/fc-mv-tablet-photo.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | CO-M3 | /community/ |
| `teen-consult` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/fc-steps-photo-2.png  | 公式サイト掲載（撮影者クレジット表記なし） | HUB-M2 | / |
| `workshop-adults` | https://ceokidsacademy.com/wp-content/themes/ceokidsacademy/img/gallery7.jpg  | 公式サイト掲載（撮影者クレジット表記なし） | CO-M5 | /community/ |

### (1)-a USE-FLAG（子どもの顔が識別できる）として使用している12点 — 使用ページ

| 写真 | 使用ページ |
|---|---|
| `active-learning`（gallery17.png） | / |
| `class-jobs-slide`（gallery8.jpg） | / |
| `class-presentation`（gallery10.jpg） | / |
| `class-sticky`（gallery16.png） | / |
| `class-whiteboard`（kids-gallery4.jpeg） | / |
| `money-class`（money_class.jpg） | / |
| `recent-class`（basic_250610.jpg） | / |
| `teen-consult`（fc-steps-photo-2.png） | / |
| `class-calculator`（gallery4.jpeg） | /welfare/ |
| `lemonade-close`（gallery3.jpg） | /sponsor/ |
| `consult-meeting`（flow.jpeg） | /keisho/ |
| `tablet-class`（fc-mv-tablet-photo.jpg） | /community/ |

### (1)-b 「購入ストックの可能性が高い」公式サイト写真として扱っている6点（キャプション固定で「写真はイメージです。」）— 使用ページ

コーディネーター指定（台帳 #50/#51/#66/#89 相当 + flow.jpeg・mama06.jpeg）。ライセンス（別サイトでの利用許諾範囲）はBOSS確認事項として残る。

| 写真 | 元ファイル | 使用ページ |
|---|---|---|
| `consult-meeting` | flow.jpeg | /keisho/ |
| `mama-laptop` | mama06-1-scaled.jpeg | /welfare/ |
| `books-notebook` | hsu-step2.jpeg | /documents/ |
| `planning-hands` | hsu-step3.jpeg | / |
| `online-small` | mama-step2.jpeg | /keisho/ |
| `parent-tablet` | parent.png | /documents/ |

## 2. イメージ写真（ストック・Pexels、72点）

すべて Pexels License（商用利用可・帰属表示不要 https://www.pexels.com/license/）。キャプションは全て「写真はイメージです。」。子どもが写るストック写真は0点（方針どおり不使用）。

| file | 出典 | 撮影者/ライセンス | 使用スロット | 使用ページ |
|---|---|---|---|---|
| `abstract-light-a` | https://www.pexels.com/photo/sunlight-on-the-wall-12121995/ | Dmitry Alexandrovich / Pexels License（商用利用可・帰属不要） | TH1-H | /documents/thanks/ |
| `abstract-light-b` | https://www.pexels.com/photo/abstract-sunlight-shadows-on-textured-wall-33312287/ | Diana / Pexels License（商用利用可・帰属不要） | CO-5 | /community/ |
| `abstract-wall` | https://www.pexels.com/photo/unusual-white-geometric-wall-with-windows-in-minimalist-building-7078393/ | Laura Tancredi / Pexels License（商用利用可・帰属不要） | TH2-H | /contact/thanks/ |
| `advisor-docs` | https://www.pexels.com/photo/woman-sitting-on-chair-talking-to-man-in-black-suit-7845466/ | RDNE Stock project / Pexels License（商用利用可・帰属不要） | SP-1 | /sponsor/ |
| `advisor-owner` | https://www.pexels.com/photo/an-employee-showing-a-graph-7845362/ | RDNE Stock project / Pexels License（商用利用可・帰属不要） | SP-6 | /sponsor/ |
| `audience-behind` | https://www.pexels.com/photo/attendance-on-ceremony-15325468/ | Luis Quintero / Pexels License（商用利用可・帰属不要） | CO-3 | /community/ |
| `boardroom-a` | https://www.pexels.com/photo/woman-standing-up-and-talking-on-work-meeting-7644014/ | MART PRODUCTION / Pexels License（商用利用可・帰属不要） | HUB-M6 | / |
| `boardroom-b` | https://www.pexels.com/photo/business-people-in-a-business-meeting-7644144/ | MART PRODUCTION / Pexels License（商用利用可・帰属不要） | FQ-H1 | /faq/ |
| `boardroom-c` | https://www.pexels.com/photo/colleagues-having-a-discussion-in-the-meeting-room-7643998/ | MART PRODUCTION / Pexels License（商用利用可・帰属不要） | PA-6 | /partner/ |
| `boardroom-d` | https://www.pexels.com/photo/a-team-in-a-meeting-7643723/ | MART PRODUCTION / Pexels License（商用利用可・帰属不要） | WF-5 | /welfare/ |
| `calculator-a` | https://www.pexels.com/photo/documents-17065743/ | Jakub Zerdzicki / Pexels License（商用利用可・帰属不要） | KE-6 | /keisho/ |
| `calculator-docs` | https://www.pexels.com/photo/close-up-of-finance-document-with-calculator-and-glasses-33175673/ | Bia Limova / Pexels License（商用利用可・帰属不要） | WF-3 | /welfare/ |
| `coins-yen` | https://www.pexels.com/photo/collection-of-different-coins-on-rocky-surface-6249548/ | Ryutaro Tsukata / Pexels License（商用利用可・帰属不要） | WM-PARTNER | /partner/ |
| `community-dinner` | https://www.pexels.com/photo/people-eating-and-dining-together-6954063/ | cottonbro studio / Pexels License（商用利用可・帰属不要） | CO-M2 | /community/ |
| `contract-close` | https://www.pexels.com/photo/groom-signing-document-18854010/ | Boris Hamer / Pexels License（商用利用可・帰属不要） | WM-FORM-contact | /contact/ |
| `corridor-behind` | https://www.pexels.com/photo/silhouettes-in-modern-architecture-interior-29257487/ | Daniil Kondrashin / Pexels License（商用利用可・帰属不要） | WM-HERO-welfare | /welfare/ |
| `exec-briefing` | https://www.pexels.com/photo/two-people-having-a-meeting-in-the-office-7845341/ | RDNE Stock project / Pexels License（商用利用可・帰属不要） | PA-H | /partner/ |
| `graduation-a` | https://www.pexels.com/photo/hand-holding-academic-cap-with-string-14658819/ | Towfiqu barbhuiya / Pexels License（商用利用可・帰属不要） | KE-1 | /keisho/ |
| `graduation-b` | https://www.pexels.com/photo/a-close-up-shot-of-mortarboards-7713417/ | RDNE Stock project / Pexels License（商用利用可・帰属不要） | CO-2 | /community/ |
| `handshake-a` | https://www.pexels.com/photo/a-man-and-woman-shaking-hands-in-the-office-8101767/ | Mikhail Nilov / Pexels License（商用利用可・帰属不要） | FQ-2 | /faq/ |
| `handshake-b` | https://www.pexels.com/photo/a-man-and-a-woman-shaking-hands-7643738/ | MART PRODUCTION / Pexels License（商用利用可・帰属不要） | HUB-P1 | / |
| `handshake-c` | https://www.pexels.com/photo/professional-handshake-in-business-meeting-33175650/ | Bia Limova / Pexels License（商用利用可・帰属不要） | HUB-P3 | / |
| `handshake-d` | https://www.pexels.com/photo/business-people-holding-hands-in-the-office-7964356/ | Felicity Tai / Pexels License（商用利用可・帰属不要） | HUB-P4 | / |
| `hr-discussion` | https://www.pexels.com/photo/woman-in-yellow-blazer-sitting-beside-woman-in-black-blouse-8518835/ | Artem Podrez / Pexels License（商用利用可・帰属不要） | WF-H | /welfare/ |
| `networking-b` | https://www.pexels.com/photo/photo-of-people-holding-saucers-with-white-cups-7964358/ | Felicity Tai / Pexels License（商用利用可・帰属不要） | CO-4 | /community/ |
| `networking-c` | https://www.pexels.com/photo/elegant-indoor-social-gathering-with-toast-29002698/ | Foto Art Events / Pexels License（商用利用可・帰属不要） | TH2-2 | /contact/thanks/ |
| `obj-blocks-city` | https://www.pexels.com/photo/model-of-city-5222513/ | Lexi Lauwers / Pexels License（商用利用可・帰属不要） | WM-HERO-community | /community/ |
| `obj-compass` | https://www.pexels.com/photo/compass-on-the-background-of-the-map-travel-concept-route-planning-find-your-direction-in-life-17184739/ | Саша Алалыкин / Pexels License（商用利用可・帰属不要） | CT-2 | /contact/ |
| `obj-key` | https://www.pexels.com/photo/a-hand-handing-a-key-to-a-person-wearing-blue-long-sleeves-8470846/ | Thirdman / Pexels License（商用利用可・帰属不要） | KE-4 | /keisho/ |
| `obj-plan` | https://www.pexels.com/photo/project-on-papers-7257156/ | Anete Lusina / Pexels License（商用利用可・帰属不要） | HUB-W1 | / |
| `obj-puzzle-a` | https://www.pexels.com/photo/white-puzzle-pieces-on-blue-surface-5505122/ | Mike van Schoonderwalt / Pexels License（商用利用可・帰属不要） | WM-HERO-partner | /partner/ |
| `obj-seedling` | https://www.pexels.com/photo/close-up-photography-of-green-plant-1251026/ | Crusenho Agus Hennihuno / Pexels License（商用利用可・帰属不要） | TH1-2 | /documents/thanks/ |
| `obj-stairs-a` | https://www.pexels.com/photo/modern-metal-staircase-against-clear-sky-30819021/ | 정규송 Nui MALAMA / Pexels License（商用利用可・帰属不要） | WM-CTA-documents | /documents/ |
| `office-behind` | https://www.pexels.com/photo/businessmen-crossing-street-in-urban-japan-31863763/ | Ryan Lee / Pexels License（商用利用可・帰属不要） | HUB-P2 | / |
| `office-walking` | https://www.pexels.com/photo/people-walking-on-sidewalk-12644999/ | BOOM Photography / Pexels License（商用利用可・帰属不要） | PA-5 | /partner/ |
| `office-window` | https://www.pexels.com/photo/tokyo-cityscape-from-high-rise-window-view-29367975/ | Szymon Shields / Pexels License（商用利用可・帰属不要） | HUB-H2 | / |
| `one-on-one` | https://www.pexels.com/photo/two-female-employees-sitting-down-facing-each-other-during-work-meeting-in-relaxing-office-environment-18955789/ | Resume Genius / Pexels License（商用利用可・帰属不要） | CT-1 | /contact/ |
| `owner-factory-a` | https://www.pexels.com/photo/craftsman-in-a-traditional-workshop-in-nagano-33013270/ | Gu Ko / Pexels License（商用利用可・帰属不要） | SP-2 | /sponsor/ |
| `owner-factory-b` | https://www.pexels.com/photo/photo-of-a-carpenter-at-work-14747175/ | Serena Koi / Pexels License（商用利用可・帰属不要） | WM-HERO-keisho | /keisho/ |
| `planning-a` | https://www.pexels.com/photo/laptop-and-notebook-on-top-of-a-round-table-7594475/ | Mikhail Nilov / Pexels License（商用利用可・帰属不要） | CT-H | /contact/ |
| `planning-b` | https://www.pexels.com/photo/overhead-shot-of-a-workspace-7583440/ | Mikhail Nilov / Pexels License（商用利用可・帰属不要） | TH2-1 | /contact/thanks/ |
| `presentation` | https://www.pexels.com/photo/people-sitting-at-conference-table-6949525/ | Werner Pfennig / Pexels License（商用利用可・帰属不要） | HUB-W2 | / |
| `reception` | https://www.pexels.com/photo/modern-reception-area-in-office-interior-design-34823913/ | Rana Matloob Hussain / Pexels License（商用利用可・帰属不要） | SP-3 | /sponsor/ |
| `seminar-audience` | https://www.pexels.com/photo/people-sitting-on-gang-chairs-2774556/ | Luis Quintero / Pexels License（商用利用可・帰属不要） | PA-4 | /partner/ |
| `seminar-hall` | https://www.pexels.com/photo/gathering-during-event-20733081/ | BBSO / Pexels License（商用利用可・帰属不要） | TH1-1 | /documents/thanks/ |
| `seminar-stage` | https://www.pexels.com/photo/people-sitting-inside-the-auditorium-9275222/ | Atlantic Ambience / Pexels License（商用利用可・帰属不要） | PA-2 | /partner/ |
| `signing-a` | https://www.pexels.com/photo/a-person-writing-on-a-paper-7054510/ | Kindel Media / Pexels License（商用利用可・帰属不要） | WF-4 | /welfare/ |
| `signing-b` | https://www.pexels.com/photo/a-person-s-hand-holding-a-black-and-silver-pen-8815843/ | Kampus Production / Pexels License（商用利用可・帰属不要） | DO-H1 | /documents/ |
| `sticky-notes` | https://www.pexels.com/photo/colorful-sticky-notes-taped-to-schedule-on-whiteboard-15505432/ | Walls.io / Pexels License（商用利用可・帰属不要） | WM-HUB | / |
| `storefront-shopkeeper` | https://www.pexels.com/photo/traditional-japanese-market-vendor-in-kyoto-37800460/ | Emanuele Ricciardi / Pexels License（商用利用可・帰属不要） | KE-H | /keisho/ |
| `succession` | https://www.pexels.com/photo/salesman-discussing-real-estate-to-a-senior-man-8815880/ | Kampus Production / Pexels License（商用利用可・帰属不要） | PA-1 | /partner/ |
| `tokyo-night-a` | https://www.pexels.com/photo/marunouchi-building-in-tokyo-at-night-23343412/ | Huu Huynh / Pexels License（商用利用可・帰属不要） | CO-1 | /community/ |
| `tokyo-night-b` | https://www.pexels.com/photo/vibrant-city-skyline-at-night-31002058/ | Valeria Drozdova / Pexels License（商用利用可・帰属不要） | CO-M1 | /community/ |
| `tokyo-skyline` | https://www.pexels.com/photo/aerial-view-of-tokyo-skyline-with-iconic-landmarks-31249696/ | Sam Schiro / Pexels License（商用利用可・帰属不要） | HUB-M3 | / |
| `tokyo-station` | https://www.pexels.com/photo/rainy-day-at-tokyo-station-with-skyscrapers-37715161/ | Iban Lopez Luna / Pexels License（商用利用可・帰属不要） | CO-M4 | /community/ |
| `warehouse` | https://www.pexels.com/photo/workers-walking-along-aisle-in-warehouse-4487383/ | Tiger Lily / Pexels License（商用利用可・帰属不要） | WM-HERO-sponsor | /sponsor/ |
| `wm-aerial-japan` | https://www.pexels.com/photo/tokyo-covered-with-fog-15275312/ | Ruiz / Pexels License（商用利用可・帰属不要） | WM-CTA-faq | /faq/ |
| `wm-bokeh` | https://www.pexels.com/photo/yellow-and-green-light-bokeh-10542146/ | Alexey Demidov / Pexels License（商用利用可・帰属不要） | WM-CTA-community | /community/ |
| `wm-ceiling` | https://www.pexels.com/photo/modern-building-interior-with-led-light-design-34642046/ | Muhammad Furqan / Pexels License（商用利用可・帰属不要） | WM-CTA-sponsor | /sponsor/ |
| `wm-flatlay` | https://www.pexels.com/photo/overhead-shot-of-notebooks-and-planners-8251117/ | PNW Production / Pexels License（商用利用可・帰属不要） | PA-3 | /partner/ |
| `wm-glass-a` | https://www.pexels.com/photo/windows-of-office-building-19807697/ | Jan van der Wolf / Pexels License（商用利用可・帰属不要） | WM-CTA-welfare | /welfare/ |
| `wm-glass-b` | https://www.pexels.com/photo/pattern-on-building-wall-17104072/ | Felix Maltz / Pexels License（商用利用可・帰属不要） | WM-CTA-legal | /legal/ |
| `wm-gradient` | https://www.pexels.com/photo/bright-colorful-lights-on-abstract-background-7130496/ | Codioful / Pexels License（商用利用可・帰属不要） | WM-CTA-partner | /partner/ |
| `wm-leaves` | https://www.pexels.com/photo/green-leaves-on-tree-19774735/ | Kássia Melo / Pexels License（商用利用可・帰属不要） | WM-CTA-privacy | /privacy/ |
| `wm-paper` | https://www.pexels.com/photo/close-up-shot-of-white-papers-11738391/ | Lighten Up / Pexels License（商用利用可・帰属不要） | FQ-1 | /faq/ |
| `wm-sakura` | https://www.pexels.com/photo/pink-cherry-blossom-on-white-background-4366839/ | Julissa Pires / Pexels License（商用利用可・帰属不要） | WM-CTA-docthanks | /documents/thanks/ |
| `wm-tokyo-dusk-a` | https://www.pexels.com/photo/tokyo-cityscape-at-dusk-18846343/ | Shakur Muller / Pexels License（商用利用可・帰属不要） | WM-CTA-hub | / |
| `wm-tokyo-dusk-b` | https://www.pexels.com/photo/silhouette-of-tokyo-skyscrapers-at-dusk-34963057/ | Maksym Grinenko / Pexels License（商用利用可・帰属不要） | WM-CTA-cothanks | /contact/thanks/ |
| `wm-window-desk` | https://www.pexels.com/photo/order-on-home-office-table-19328778/ | Nuray / Pexels License（商用利用可・帰属不要） | WM-CTA-contact | /contact/ |
| `wm-wood` | https://www.pexels.com/photo/wooden-boards-creating-flat-background-3800260/ | Dmitry Demidov / Pexels License（商用利用可・帰属不要） | WM-CTA-keisho | /keisho/ |
| `workshop-a` | https://www.pexels.com/photo/blue-collar-workers-in-textile-factory-31019572/ | EqualStock IN / Pexels License（商用利用可・帰属不要） | SP-7 | /sponsor/ |
| `workshop-b` | https://www.pexels.com/photo/engineers-working-in-industrial-plant-machinery-37668543/ | abdo alshreef / Pexels License（商用利用可・帰属不要） | SP-H | /sponsor/ |

## 3. 公式サイトから取得したが使わないもの（再利用しないこと）

修了証・賞状を持つ写真、名札の読める集合写真、実績数値・メディア名が入った画像、申込を促す文字入りバナー、受講生プロフィール写真、他社ロゴ・外国通貨が読める写真。詳細は `outputs/photo-inventory.md` のREJECT行を参照（既存分84点・追加分9点）。

## 4. フェーズ3（在庫拡充後）の作業手順

1. `outputs/photo-inventory.md` に新しい調達バッチが追記されたら、`_work/build_live_photos.py`（公式サイト）または `_work/build_stock_photos.py`（ストック）の `PHOTOS` リストに1行追加（書き出し名・原本ファイル・比率・焦点・出典/ライセンス）。**REJECT判定の写真は追加しない**。
2. `_work/build.py` の `ALT_BY_PHOTO` に新しい書き出し名のalt文を追加（画像を実際に見てから書く）。stock、または「購入ストックの可能性」写真は `_STOCK_CAPTION_NAMES` に追加する。
3. `SLOTS[slot]["photo"]` を新しい書き出し名に差し替える、または未充足スロットに新規追加する。
4. `python _work/build_live_photos.py` / `build_stock_photos.py` → `python _work/build.py`（**写真の重複チェックが自動で走る。重複があればビルドが失敗して一覧が出力される**）→ `python _work/subset_fonts.py`。
5. この CREDITS.md の一覧を再生成し、compliance-qa に回す。

## 2026-10-15 ページ削除に伴う写真の扱い

BOSS指示により「紹介パートナー制度」(/partner/) と「後継者育成プログラム」(/keisho/) をページごと削除した。
両ページに割り当てていた写真（KE-*・PA-*・WM-HERO-keisho/partner・WM-CTA-keisho/partner、および旧トップカードの HUB-P3）は**未使用**になった。
書き出し済みファイルと SLOTS 定義は残してあるので、別の枠に割り当てれば再利用できる（サイト全体で一意の原則は維持）。
トップの「次世代経営者ネットワーク構想」カードには、旧「紹介パートナー制度」カードの写真（HUB-P4）を流用した。
