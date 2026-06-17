class PhoneAuth {
    constructor() {
        this.phone = '';
        document.getElementById('phone-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.phone = document.getElementById('phone-number').value;
            if (/^09\d{9}$/.test(this.phone)) {
                fetch('../api/auth/register.php', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({phone: this.phone, action: 'send_otp'})
                }).then(r => r.json()).then(d => {
                    if(d.success) {
                        document.getElementById('phone-form').style.display='none';
                        document.getElementById('otp-form').style.display='block';
                    }
                });
            } else alert('شماره نامعتبر');
        });
    }
}
new PhoneAuth();
