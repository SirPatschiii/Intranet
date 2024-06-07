async function readTextFile(filePath) {
  try {
    const response = await fetch(filePath);
    const data = await response.text();
    return data;
  } catch (error) {
    return console.error("Error reading file:", error);
  }
}

async function readWorkersData() {
  const workersData = await readTextFile("../js/workers.txt");
  return workersData
    .trim()
    .split(";")
    .map((line) => {
      const [userNamePart, passwordPart, departmentPart] = line.split(",");
      const userName = userNamePart
        ? userNamePart.split(":")[1].replace(/"/g, "")
        : "";
      const password = passwordPart
        ? passwordPart.split(":")[1].replace(/"/g, "")
        : "";
      const department = departmentPart
        ? departmentPart.split(":")[1].replace(/"/g, "")
        : "";
      return { userName, password, department };
    })
    .filter(
      (worker) => worker.userName && worker.password && worker.department
    );
}

// Set a cookie with the department information
function setCookie(name, value) {
  document.cookie = name + "=" + value + ";path=/";
}

// Get the value of a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.querySelector(".loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;

  const workersData = await readWorkersData();
  const user = workersData.find(
    (worker) => worker.userName === username && worker.password === password
  );

  if (user) {
    const department = user.department;
    const departmentKey = department.toLowerCase();
    const departmentLink = `../html/${departmentKey}.html`;

    // Set cookies with the department information
    setCookie("departmentKey", departmentKey); // No expiration date set
    setCookie("departmentLink", departmentLink); // No expiration date set
    setCookie("departmentText", department); // No expiration date set

    // Alert the user with the login information
    alert(`Angemeldet als ${username} in der Abteilung: ${department}.`);

    // Find the header-component element
    const headerComponent = document.querySelector("header-component");

    // Create the abteilungLink element in the header-component
    if (headerComponent) {
      headerComponent.createAbteilungLink(departmentLink, department);
    }

    // Redirect the user to the departmentLink website
    window.location.href = departmentLink;
  } else {
    alert("Der Benutzername oder das Passwort ist falsch");
  }
});
