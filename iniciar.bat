@echo off
title Venon Performance - Servidor Local
echo ==============================================
echo   Iniciando Servidor Venon Performance...
echo ==============================================
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
npm run dev
pause
