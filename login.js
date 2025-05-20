   document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            document.getElementById('usernameError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
          
            
            if (username === '') {
                document.getElementById('usernameError').textContent = 'Username is required';
               
            }
            
            if (password === '') {
                document.getElementById('passwordError').textContent = 'Password is required';
               
            } 
               
            
            
            if (username==="russian" &&password==="6000") {
                // Redirect to welcome page
                window.location.href = "cse_aiml.html";
            }
        });
