
    let currentStep = 1;

    function nextStep() {
        // Validate form data and proceed to the next step
        if (currentStep) {
          document.getElementById(`step${currentStep}`).style.display = "none";
          currentStep++;
          document.getElementById(`step${currentStep}`).style.display = "block";
        }
      }

      function generateResume() {
        // Retrieve form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const duties = document.getElementById('duties').value;
        const selectedTemplate = document.querySelector('input[name="template"]:checked').value;
      
        // Generate resume template dynamically based on the selected template
        let resumeTemplate = `
          <div class="resume-container">
            <h2>Resume</h2>
            <p>Name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Work Experience</h3>
            <p>Company: ${company}</p>
            <p>Duties: ${duties}</p>
          </div>
        `;
      
        // Load the selected CSS file for styling
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.type = 'text/css';
        styleLink.href = selectedTemplate;
        document.head.appendChild(styleLink);
      
        // Display the generated resume with the applied styling
        document.getElementById('resume').innerHTML = resumeTemplate;
      }
      