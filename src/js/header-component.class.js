export default class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.subNavTitelLink = null;
    this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../css/styleHeader.css">
        <header>
            <nav>
                <ul class="navLeft">
                    <li class="navLogo">
                    <a href="../html/index.html">
                        <img src="../images/IntraDLTransparent.png" alt="IntraDL Logo">
                      </a>
                    </li>
                </ul>
                <ul class="navMiddle">
                      <li><a href="../html/index.html">News</a></li>
                      <li><a href="../html/dashboard.html">Dashboard</a></li>
                      <li class="subNav" id="subNav">
                          <a href="javascript:void(0)" id="subNavTitel" class="subNavTitelLink">Formulare</a>
                          <ul class="subNavElements">
                              <li>
                                  <a href="../html/formularurlaub.html" id="subNavUrlaub">Urlaub</a>
                              </li>
                              <li>
                                  <a href="../html/formularfeedback.html" id="subNavFeed">Feedback</a>
                              </li>
                          </ul>
                      </li>
                      <li id="deparment"></li>
                </ul>
                <ul class="navRight">
                  <li>
                      <a href="../html/login.html" id="navLogin">Login</a>
                  </li>
                </ul>
            </nav>
        </header>
        <script type="text/javascript" src="../js/scriptDepartment.js"></script>
        `;

  }

  connectedCallback() {
    this.subNavTitelLink = this.shadowRoot.querySelector("#subNavTitel");
    this.subNavTitelLink.addEventListener("click", this.subNav.bind(this));
    // Get the stored departmentLink and departmentText from localStorage
    const storedDepartmentLink = this.getCookie("departmentLink");
    const storedDepartmentText = this.getCookie("departmentText");

    // Create and append the abteilungLink element if the values are available
    if (storedDepartmentLink && storedDepartmentText) {
      this.createAbteilungLink(storedDepartmentLink, storedDepartmentText);
    }
  }

  subNav(event) {
    const subNav = this.shadowRoot.querySelector(".subNav");
    const subNavElements = subNav.querySelector(".subNavElements");

    if (
      subNavElements.style.display === "none" ||
      subNavElements.style.display === ""
    ) {
      subNavElements.style.display = "flex";
    } else {
      subNavElements.style.display = "none";
    }
  }

  createAbteilungLink(departmentLink, departmentText) {
    const abteilungLink = document.createElement("a");
    abteilungLink.id = "abteilungLink";
    abteilungLink.href = departmentLink;
    abteilungLink.textContent = departmentText;
    const navElement = this.shadowRoot.getElementById("deparment");
    navElement.appendChild(abteilungLink);
  }

  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
