call TaskKill /F /IM node.exe
call chdir ".\src\bitbook-webtorrent-ext"
call del "bitbook-webtorrent-ext-v0.0.1.tgz"
call yarn run build
call chdir "..\..\"
call yarn run reinstall