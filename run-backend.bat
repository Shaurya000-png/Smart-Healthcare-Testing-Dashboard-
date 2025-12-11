@echo off
setlocal
cd /d "%~dp0backend"

if not exist ".env" (
  if exist ".env.example" (
    copy /Y ".env.example" ".env" >nul
    echo Created backend\.env from .env.example
  ) else (
    echo Missing .env.example in backend folder.
    exit /b 1
  )
)

if not exist "node_modules" (
  echo Installing backend dependencies...
  call npm install
  if errorlevel 1 exit /b 1
)

echo Starting backend on http://localhost:5000 ...
call npm run dev
