

   
 
        // Initialize EmailJS with your user ID
        (function() {
            emailjs.init("user_YOUR_USER_ID"); // Replace with your actual user ID
        })();
        
        // Function to send email
        function sendEmail(e) {
            e.preventDefault();
            
            // Show loading state
            const status = document.getElementById("status");
            status.innerHTML = '<div class="spinner-border text-primary" role="status"></div> Sending your message...';
            status.className = 'status';
            status.style.display = 'block';
            
            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            
            // Send email using EmailJS
            emailjs.send("default_service", "template_YOUR_TEMPLATE_ID", {
                to_email: "ahmedsamir3bas@gmail.com",
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            })
            .then(function(response) {
                // Success message
                status.innerHTML = '<i class="fas fa-check-circle me-2"></i> Message sent successfully!';
                status.className = 'status success';
                
                // Clear form
                document.getElementById("contactForm").reset();
            }, function(error) {
                // Error message
                status.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i> Failed to send message. Please try again.';
                status.className = 'status error';
                console.error('EmailJS Error:', error);
            });
        }
        
        // Add form submit event listener
        document.getElementById("contactForm").addEventListener("submit", sendEmail);
