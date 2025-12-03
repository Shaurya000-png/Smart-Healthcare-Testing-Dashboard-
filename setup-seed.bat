@echo off
setlocal
cd /d "%~dp0"

if "%MYSQL_USER%"=="" set MYSQL_USER=root
if "%MYSQL_PASSWORD%"=="" (
  echo Applying demo seed (you will be prompted for MySQL password)...
  mysql -u %MYSQL_USER% -p < "db\seed.sql"
) else (
  mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% < "db\seed.sql"
)

if errorlevel 1 (
  echo Failed. Run db\schema.sql first, then try again.
  exit /b 1
)

echo Demo data loaded. Open the dashboard to see charts and tables.
