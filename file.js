document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // التبديل بين النماذج عند النقر على الروابط
    const toggleLinks = document.querySelectorAll(".toggle-form");

    toggleLinks.forEach(link => {
        link.addEventListener("click", function() {
            // التبديل بين النماذج
            loginForm.classList.toggle("hidden");
            registerForm.classList.toggle("hidden");
        });
    });

    // عند إرسال نموذج التسجيل
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // استرجاع بيانات المستخدم المدخلة
        let username = document.getElementById('userInputEmail1').value;
        let email = document.getElementById('InputEmail1reg').value;
        let password = document.getElementById('InputPassword1reg').value;
        let confirmPassword = document.getElementById('confirmPasswordreg').value;

        // التحقق من تطابق كلمة المرور
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // التحقق من صحة البريد الإلكتروني
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // التحقق من صحة كلمة المرور (على سبيل المثال: يجب أن تكون أكثر من 6 أحرف)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // استرجاع بيانات المستخدمين المخزنة في localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // التحقق من أن البريد الإلكتروني غير موجود مسبقًا
        if (users.find(u => u.email === email)) {
            alert('Email is already registered!');
            return;
        }

        // إضافة المستخدم الجديد إلى users
        let newUser = { username: username, email: email, password: password };
        users.push(newUser);

        // تخزين البيانات في localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in.');
        
        // التبديل إلى نموذج تسجيل الدخول بعد النجاح
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    // عند إرسال نموذج تسجيل الدخول
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // استرجاع بيانات المستخدم المدخلة
        let email = document.getElementById('InputEmail1log').value;
        let password = document.getElementById('InputPassword1log').value;

        // استرجاع بيانات المستخدمين المخزنة في localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // التحقق من وجود المستخدم
        let user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // إذا كان المستخدم موجودًا
            alert('Login successful!');
            localStorage.setItem('currentUser', JSON.stringify(user)); // تخزين المستخدم الحالي في localStorage
            window.location.href = 'home.html'; // إعادة التوجيه إلى الصفحة الرئيسية
        } else {
            // إذا كانت البيانات غير صحيحة
            alert('Invalid email or password!');
        }
    });
});

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
