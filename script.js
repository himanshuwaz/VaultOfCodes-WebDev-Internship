function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) {
    showToast('❗ Please enter Email or ID.');
    return;
  }

  showSpinner(true);
  resultBox.innerHTML = '';

  // Simulated Database Response
  setTimeout(() => {
    let student;
    if (id.toLowerCase() === "john@example.com" || id === "VOC123") {
      student = {
        name: "John Doe",
        email: "john@example.com",
        mobile: "9876543210",
        domain: "Web Development",
        college: "Dummy University",
        start: "01 June 2024",
        duration: "1 Month",
        photo: "https://via.placeholder.com/130",
        assignments: [true, false, true, true],
        certificate: "#"
      };
    }

    showSpinner(false);

    if (!student) {
      showToast("❌ Invalid ID or Email. No records found.");
      return;
    }

    resultBox.innerHTML = `
      <div class="card">
        <img src="${student.photo}" alt="Student Photo">
        <h3>${student.name}</h3>
        <p>Email: ${student.email}</p>
        <p>Mobile: ${student.mobile}</p>
        <p>Domain: ${student.domain}</p>
        <p>College: ${student.college}</p>
        <p>Start Date: ${student.start}</p>
        <p>Duration: ${student.duration}</p>
        <h4>Assignments</h4>
        <div class="assignment-status">
          ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
        </div>
        <p>Status: <strong>Completed</strong></p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;
    showToast('✅ Verified successfully!');
  }, 1500);
}

function showSpinner(show) {
  document.querySelector('.spinner').classList.toggle('hidden', !show);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'show';
  setTimeout(() => toast.className = '', 3000);
}
