import smtplib
from email.mime.text import MIMEText
from .constants import EMAIL_SENDER, EMAIL_PASSWORD

subject = "Test Subject"
body = "This is the body of the text message"
sender = "noreply@glfxlimited.com"
recipients = ["begopi9547@dovesilo.com"]
password = "ajsj wxbd lhdj kpbo"


def send_email(subject, body, recipients):
    try:
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = EMAIL_SENDER
        msg['To'] = ', '.join(recipients)
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
            smtp_server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            smtp_server.sendmail(EMAIL_SENDER, recipients, msg.as_string())
        return True
    except Exception as e:
        print(str(e))
        return False


# send_email(subject, body, sender, recipients, password)
