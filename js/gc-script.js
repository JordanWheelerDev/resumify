function uploadImage() {
  // Trigger click event on the file input element
  document.getElementById("image-upload").click();
}

const panelBgColorPicker = document.getElementById("panelColor");
const panelBgColor = document.getElementById("colPanel");
const accentHeading = document.querySelectorAll(".accentHeading");
const panelFontColorPicker = document.getElementById("panelFontColor");
const colPanel = document.getElementById("colPanel");

panelFontColorPicker.addEventListener("input", function () {
  const fontColor = panelFontColorPicker.value;

  colPanel.querySelectorAll("*").forEach((element) => {
    element.style.color = fontColor;
  });
});

panelBgColorPicker.addEventListener("input", function () {
  panelBgColor.style.backgroundColor = panelBgColorPicker.value;
  
  const darkerShade = tinycolor(panelBgColorPicker.value).darken(5).toString();
  
   accentHeading.forEach((heading) => {
    heading.style.color = darkerShade;
   });
  });

// Function to handle image upload
document
  .getElementById("image-upload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the uploaded file
    const img = document.getElementById("resume-image");

    // Check if a file is selected
    if (file) {
      const reader = new FileReader();

      // Callback function to set the uploaded image as the src attribute
      reader.onload = function (event) {
        img.src = event.target.result;
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  });

function saveResume() {
  const resumeContainer = document.querySelector(".resume-container");

  html2pdf()
  .from(resumeContainer)
  .set({
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  })
  .save()
    
}

function addWorkExperience() {
  const jobExperiences = document.querySelectorAll(".jobExperience");
  const newJobExperience = jobExperiences[0].cloneNode(true);
  jobExperiences[0].parentNode.insertBefore(
    newJobExperience,
    jobExperiences[0]
  );
}

function addEducation() {
  const education = document.querySelectorAll(".educationArea");
  const neweducation = education[0].cloneNode(true);
  education[0].parentNode.insertBefore(neweducation, education[0]);
}


// Font family selector
document
  .getElementById("font-family-selector")
  .addEventListener("change", function () {
    const selectedFont = this.value;
    document.querySelector(".resume-container").style.fontFamily =
      selectedFont;
  });

document
  .getElementById("heading-font-size")
  .addEventListener("change", function () {
    const headingSize = this.value;
    const headingElements = document.querySelectorAll(
      ".resume-container .heading"
    );

    headingElements.forEach(function (headingElement) {
      headingElement.style.fontSize = headingSize + "px";
    });
  });

document
  .getElementById("sub-heading-font-size")
  .addEventListener("change", function () {
    const subheadingSize = this.value;
    const subheadingElements = document.querySelectorAll(
      ".resume-container .sub-heading"
    );

    subheadingElements.forEach(function (subheadingElement) {
      subheadingElement.style.fontSize = subheadingSize + "px";
    });
  });

document
  .getElementById("body-font-size")
  .addEventListener("change", function () {
    const bodySize = this.value;
    const bodyElements = document.querySelectorAll(
      ".resume-container .body"
    );

    bodyElements.forEach(function (bodyElement) {
      bodyElement.style.fontSize = bodySize + "px";
    });
  });

// No references on Get Coding template, but keeping this function in the event
// it should be added at a later date
function addReferencePlaceholder() {
  const defaultRef = document.getElementById("defaultRef");

  defaultRef.style.display = "none";
  // Create a new reference element
  var referenceElement = document.createElement("div");
  referenceElement.classList.add("reference", "mb-3");

  // Create elements for name, role, and contact
  var nameElement = document.createElement("div");
  nameElement.classList.add("section-bold");
  nameElement.setAttribute("contenteditable", "true");
  nameElement.textContent = "John Doe";

  var roleElement = document.createElement("div");
  roleElement.classList.add("text-muted");
  roleElement.setAttribute("contenteditable", "true");
  roleElement.textContent = "Friend";

  var contactElement = document.createElement("div");
  contactElement.classList.add("body");
  contactElement.setAttribute("contenteditable", "true");
  contactElement.textContent = "(123) 456-7890";

  // Append name, role, and contact elements to the reference element
  referenceElement.appendChild(nameElement);
  referenceElement.appendChild(roleElement);
  referenceElement.appendChild(contactElement);

  // Append the reference element to the references area
  var referencesArea = document.getElementById("referencesArea");
  referencesArea.appendChild(referenceElement);
}

function addSkills() {
  // Create a new skill element
  var skillElement = document.createElement("span");
  skillElement.classList.add("skill");
  skillElement.contentEditable = true;
  skillElement.textContent = "Enter your skill";

  // Create a line break element
  var lineBreakElement = document.createElement("br");

  // Append the skill element to the skills section
  var skillsSection = document.getElementById("skillsSection");
  skillsSection.appendChild(skillElement);

  // Append the line break if there are already skills present
  if (skillsSection.children.length > 1) {
    skillsSection.appendChild(lineBreakElement);
  }
}
