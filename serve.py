#!/usr/bin/env python3
"""Local preview server that behaves like GitHub Pages.

python -m http.server serves files literally, so an extensionless link such as
/research 404s locally even though it works in production. GitHub Pages resolves
/research to research.html and serves 404.html for anything missing. This does
the same, so local previews match the deployed site.

    python3 serve.py [port]
"""
import functools, http.server, os, pathlib, socketserver, sys

ROOT = pathlib.Path(__file__).parent


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        local = pathlib.Path(super().translate_path(path))
        # /research -> research.html, matching GitHub Pages
        if not local.exists() and not local.suffix:
            html = local.with_suffix(".html")
            if html.is_file():
                return str(html)
        return str(local)

    def send_error(self, code, message=None, explain=None):
        if code == 404 and (ROOT / "404.html").is_file():
            body = (ROOT / "404.html").read_bytes()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return
        super().send_error(code, message, explain)

    def end_headers(self):
        # never cache during development
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("  %s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8731
    os.chdir(ROOT)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), Handler) as httpd:
        print(f"HECS site on http://localhost:{port}  (extensionless URLs + 404.html)")
        httpd.serve_forever()
