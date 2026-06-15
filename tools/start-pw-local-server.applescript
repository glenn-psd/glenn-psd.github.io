tell application "Terminal"
	activate
	do script "cd /Users/glenn/Documents/workspace/pw
if lsof -nP -iTCP:4173 -sTCP:LISTEN >/dev/null 2>&1; then
  echo 'PW local server is already running at http://127.0.0.1:4173'
else
  echo 'Starting PW local server at http://127.0.0.1:4173'
  python3 -m http.server 4173
fi"
end tell

delay 1
open location "http://127.0.0.1:4173"
