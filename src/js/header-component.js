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
    const elements = this.shadowRoot.querySelectorAll('.subNav a:not(#subNavForm)');
    const subNav = this.shadowRoot.querySelector(".subNav");
    for(let i=0; i<elements.length; i++){
        if(elements[i].classList.contains("visibility")){
            elements[i].classList.remove("visibility");
            subNav.style.background = 'linear-gradient(to bottom right, rgb(246, 246, 246), rgb(158, 158, 158))';
            subNav.style.boxShadow = '0px 0px 15px -4px #000000';
        } else {
            elements[i].classList.add("visibility");
            subNav.style.background = 'none';
            subNav.style.boxShadow = 'none';
        }
      }
  }

  render() {
      this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../css/styleHeader.css">
      <header>
          <nav>
              <div class="navLeft">
                  <a href="../html/index.html" class="navLogo">
                      <img src="../images/IntraDLTransparent.png" alt="IntraDL Logo">
                  </a>
              </div>
              <ul class="navMiddle">
                    <li><a href="../html/index.html">News</a></li>
                    <li><a href="../html/dashboard.html">Dashboard</a></li>
                    <li><a href="javascript:void(0)" id="subNavForm">Formulare</a></li>
                    <li><a href="./department.html">Abteilung</a></li>
              </ul>
              <div class="navRight">
                  <a href="../html/login.html" id="navLogin">Login</a>
              </div>
          </nav>
          <div class="subNav">
                <a href="../html/formularurlaub.html" id="subNavUrlaub" class="visibility">Urlaub</a>
                <a href="../html/formularfeedback.html" id="subNavFeed" class="visibility">Feedback</a>
            </div>
      </header>
      <script type="text/javascript" src="../js/scriptDepartment.js"></script>
      `;
  }
} 

customElements.define('header-component', HeaderComponent);
