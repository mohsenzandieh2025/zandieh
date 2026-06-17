// بارگذاری نام کاربر
fetch('../api/user/get-profile.php')
    .then(r => r.json())
    .then(d => {
        if(document.getElementById('user-name')) document.getElementById('user-name').textContent = d.fullname || 'کاربر';
    });
