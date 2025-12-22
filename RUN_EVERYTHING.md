# Run Everything (Windows)

## 1) Start MySQL service

Make sure your MySQL server is running.

## 2) Create database tables

In Command Prompt at project root:

```bat
setup-db.bat
```

If needed, set credentials before running:

```bat
set MYSQL_USER=root
set MYSQL_PASSWORD=your_password
setup-db.bat
```

## 2b) (Optional) Load demo data for charts and tables

```bat
setup-seed.bat
```

Run this once after `setup-db.bat` so the dashboard shows sample test cases, bugs, and history.

## 3) Configure backend DB credentials

Edit `backend\.env` and set:

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME=smart_healthcare_testing`

## 4) Start backend

Open terminal 1:

```bat
run-backend.bat
```

## 5) Start frontend

Open terminal 2:

```bat
run-frontend.bat
```

## 6) Open app

Go to:

- Frontend: http://localhost:5173
- Backend health: http://localhost:5000/api/health
