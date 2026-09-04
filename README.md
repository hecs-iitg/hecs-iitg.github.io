# HECS IITG Website — Interactive v5

Website for **HECS IITG — Hydrogen, Energy and Combustion Systems Laboratory**.

## Current version
- Final two-ring HECS IITG branding with hydrogen, combustion and engine/piston identity.
- Interactive homepage with animated research-focus chips.
- Floating logo/particle motion and pointer-responsive hero panel.
- Scroll progress indicator and compact sticky header behavior.
- Staggered section reveals and subtle interactive card effects.
- Animated research statistics and button ripple feedback.
- Publication search/filter interactions.
- Responsive mobile navigation and reduced-motion accessibility support.
- Pre-launch wording for the laboratory's planned November 2026 start at IIT Guwahati.
- PI designation shown as **Incoming Assistant Professor** until formal joining.

## Editing

After changing `style.css` or `main.js`, run:

    python3 stamp-assets.py

It rewrites the `?v=` hash on those two files in every page. GitHub Pages serves
assets with `cache-control: max-age=600` while revalidating HTML separately, so
without the hash a returning visitor can load new HTML against a cached old
stylesheet - which renders the page unstyled.

## Deployment
This repository is published with GitHub Pages at:

https://hecs-iitg.github.io/

After formal joining at IIT Guwahati, update the pre-launch wording and replace **Incoming Assistant Professor** with **Assistant Professor**.
