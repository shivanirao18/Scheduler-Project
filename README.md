Scheduler Project
A web-based email scheduling app that lets users compose, schedule, and send emails at a future time using background jobs.
Features:
- Compose email with subject, body, and attachments
- Schedule emails to send at a specific time/date
- Email delivery via SMTP (e.g., Gmail, Outlook)
- View history of sent/scheduled emails
- Background job queue (e.g., Celery, APScheduler, cron)
- Optional: User authentication and dashboard
Tech Stack:
- Python (Flask / Django / FastAPI)
- SMTP (via `smtplib`, `yagmail`, or `email`)
- Celery + Redis / APScheduler for background scheduling
- SQLite / PostgreSQL for storing scheduled jobs
- Frontend: HTML/CSS/JS or Streamlit
Setup:
1.Install dependencies
```bash
pip install -r requirements.txt
```
2.Configure SMTP
Edit `.env` or update your SMTP credentials in `email_utils.py`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
```
3.Run the app
```bash
python app/main.py
```
4.Start the scheduler
If using Celery:
```bash
celery -A app.scheduler worker --loglevel=info
```
If using APScheduler, it's embedded into the main process.
Optional Enhancements:
- User login with JWT or Flask-Login
- Email status tracking (delivered, failed)
- Retry failed deliveries
- Cron-style recurring emails
License:
MIT
