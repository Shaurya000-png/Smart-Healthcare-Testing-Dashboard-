@echo off
setlocal
cd /d "%~dp0"

if "%MYSQL_USER%"=="" set MYSQL_USER=root
if "%MYSQL_PASSWORD%"=="" (
  echo MYSQL_PASSWORD env var not set. You will be prompted by MySQL.
  mysql -u %MYSQL_USER% -p < "db\schema.sql"
) else (
  mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% < "db\schema.sql"
)

if errorlevel 1 (
  echo Failed to apply schema. Check MySQL service and credentials.
  exit /b 1
)

echo Database schema applied successfully.
