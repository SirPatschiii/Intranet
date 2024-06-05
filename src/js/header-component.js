class HeaderComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
      this.shadowRoot.querySelector('#subNavForm').addEventListener('click', this.subNav.bind(this));
  }

  subNav(event) {
    const subNav = this.shadowRoot.querySelector(".subNav");
    const subNavElements = subNav.querySelector(".subNavElements");

    if (subNavElements.style.display === "none") {
        subNavElements.style.display = "flex";
    } else {
        subNavElements.style.display = "none";
    }
    
  }

  render() {
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
                    <li class="subNav">
                        <a href="javascript:void(0)" id="subNavTitel">Formulare</a>
                        <ul class="subNavElements">
                            <li class="visibility">
                                <a href="../html/formularurlaub.html" id="subNavUrlaub">Urlaub</a>
                            </li>
                            <li class="visibility">
                                <a href="../html/formularfeedback.html" id="subNavFeed">Feedback</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="./department.html">Abteilung</a></li>
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
}

customElements.define('header-component', HeaderComponent);
