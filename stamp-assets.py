#!/usr/bin/env python3
"""Stamp style.css and main.js with a content hash in every page.

GitHub Pages serves assets with cache-control: max-age=600 and the HTML is
revalidated separately, so an unversioned <link href="style.css"> lets a browser
pair freshly deployed HTML with a stale stylesheet. Hashing the URL means the
filename changes whenever the content does, so that pairing cannot happen.

Run this after editing style.css or main.js, before committing.
"""
import hashlib, pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
ASSETS = ("style.css", "main.js")

def digest(name):
    return hashlib.sha256((ROOT / name).read_bytes()).hexdigest()[:10]

def main():
    vers = {a: digest(a) for a in ASSETS}
    changed = 0
    for page in sorted(ROOT.glob("*.html")):
        src = page.read_text(encoding="utf-8")
        out = src
        for asset, v in vers.items():
            out = re.sub(rf'(["\'/]){re.escape(asset)}(\?v=[0-9a-f]+)?',
                         rf'\g<1>{asset}?v={v}', out)
        if out != src:
            page.write_text(out, encoding="utf-8")
            changed += 1
    for a, v in vers.items():
        print(f"  {a:12} -> ?v={v}")
    print(f"  stamped {changed} page(s)")

if __name__ == "__main__":
    sys.exit(main())
