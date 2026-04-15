const ROUTES = [
  "/",
  "/login",
  "/verify-otp",
  "/signup",
  "/register-business",
  "/register-personal",
  "/all-products",
  "/showcase",
  "/my-showcases",
  "/create-showcase",
  "/network",
  "/conversations",
  "/edit-profile",
  "/you",
];

const labels = {
  "/": "Home",
  "/login": "Login",
  "/verify-otp": "Verify OTP",
  "/signup": "Signup",
  "/register-business": "Register Business",
  "/register-personal": "Register Personal",
  "/all-products": "All Products",
  "/showcase": "Showcase",
  "/my-showcases": "My Showcases",
  "/create-showcase": "Create Showcase",
  "/network": "Network",
  "/conversations": "Conversations",
  "/edit-profile": "Edit Profile",
  "/you": "You",
};

const state = {
  route: readRoute(),
};

function readRoute() {
  const route = new URLSearchParams(window.location.search).get("preview-route");
  return ROUTES.includes(route) ? route : "/";
}

function setRoute(route) {
  const url = new URL(window.location.href);
  url.searchParams.set("preview-route", route);
  history.replaceState({}, "", url);
  state.route = route;
  render();
}

function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => node.classList.remove("show"), 1800);
}

function field(label, type = "text", placeholder = "") {
  return `
    <label>
      <span class="label">${label}</span>
      <input class="input" type="${type}" placeholder="${placeholder}" />
    </label>`;
}

function screenTemplate(route) {
  switch (route) {
    case "/login":
      return `
        <div class="card">${field("Phone number", "tel", "+1 000 000 0000")}</div>
        <button class="btn primary" data-action="goto" data-to="/verify-otp">Continue</button>
        <button class="btn secondary" data-action="goto" data-to="/signup">Create account</button>`;
    case "/verify-otp":
      return `
        <div class="card">${field("Enter OTP", "number", "6-digit code")}</div>
        <button class="btn primary" data-action="toast" data-message="OTP verified">Verify</button>
        <button class="btn secondary" data-action="goto" data-to="/login">Back to login</button>`;
    case "/signup":
      return `
        <div class="card">
          ${field("Full name", "text", "Jane Doe")}
          ${field("Email", "email", "jane@example.com")}
          ${field("Phone", "tel", "+1 000 000 0000")}
        </div>
        <div class="row">
          <button class="btn secondary" data-action="goto" data-to="/register-business">Business</button>
          <button class="btn secondary" data-action="goto" data-to="/register-personal">Personal</button>
        </div>`;
    case "/register-business":
      return `
        <div class="card">
          ${field("Business name", "text", "Acme Inc")}
          ${field("Category", "text", "Electronics")}
          <label><span class="label">Description</span><textarea class="textarea" placeholder="Tell us about your business"></textarea></label>
        </div>
        <button class="btn primary" data-action="toast" data-message="Business registration submitted">Submit</button>`;
    case "/register-personal":
      return `
        <div class="card">
          ${field("Display name", "text", "@janedoe")}
          ${field("City", "text", "San Francisco")}
          ${field("Interests", "text", "Tech, Design")}
        </div>
        <button class="btn primary" data-action="toast" data-message="Personal account created">Create personal profile</button>`;
    case "/all-products":
      return `
        <div class="card"><strong>Featured products</strong><p>Modern card/list layout with tappable products.</p><span class="badge">3 new</span></div>
        <div class="row">
          <button class="btn secondary" data-action="toast" data-message="Filter opened">Filter</button>
          <button class="btn secondary" data-action="toast" data-message="Sort opened">Sort</button>
        </div>
        <button class="btn primary" data-action="goto" data-to="/showcase">Open showcase</button>`;
    case "/showcase":
      return `
        <div class="card"><strong>Showcase feed</strong><p>Stories-style cards and creator highlight.</p></div>
        <button class="btn primary" data-action="goto" data-to="/create-showcase">Create new showcase</button>
        <button class="btn secondary" data-action="goto" data-to="/my-showcases">View my showcases</button>`;
    case "/my-showcases":
      return `
        <div class="card"><strong>Your showcases</strong><p>Manage drafts, published entries, analytics.</p></div>
        <div class="row">
          <button class="btn secondary" data-action="toast" data-message="Analytics opened">Analytics</button>
          <button class="btn secondary" data-action="toast" data-message="Drafts opened">Drafts</button>
        </div>`;
    case "/create-showcase":
      return `
        <div class="card">
          ${field("Title", "text", "Summer Collection")}
          <label><span class="label">Description</span><textarea class="textarea" placeholder="Write a short pitch"></textarea></label>
        </div>
        <button class="btn primary" data-action="toast" data-message="Showcase published">Publish</button>`;
    case "/network":
      return `
        <div class="card"><strong>People you may know</strong><p>Follow/connect actions with quick stats.</p></div>
        <button class="btn primary" data-action="toast" data-message="Connection request sent">Connect</button>`;
    case "/conversations":
      return `
        <div class="card"><strong>Inbox</strong><p>Conversation list and unread indicators.</p><span class="badge">2 unread</span></div>
        <button class="btn secondary" data-action="toast" data-message="New chat started">Start chat</button>`;
    case "/edit-profile":
      return `
        <div class="card">
          ${field("Full name", "text", "Jane Doe")}
          ${field("Bio", "text", "Product designer & seller")}
          ${field("Website", "url", "https://")}
        </div>
        <button class="btn primary" data-action="toast" data-message="Profile updated">Save changes</button>`;
    case "/you":
      return `
        <div class="card"><strong>Profile dashboard</strong><p>Account, settings, saved items, billing.</p></div>
        <div class="row">
          <button class="btn secondary" data-action="goto" data-to="/edit-profile">Edit profile</button>
          <button class="btn secondary" data-action="toast" data-message="Settings opened">Settings</button>
        </div>`;
    default:
      return `
        <div class="card"><strong>Telephone</strong><p>Figma preview route navigator.</p></div>
        <button class="btn primary" data-action="goto" data-to="/login">Go to Login</button>
        <button class="btn secondary" data-action="goto" data-to="/all-products">Go to Products</button>`;
  }
}

function bindActions() {
  document.querySelectorAll("[data-action]").forEach((node) => {
    node.addEventListener("click", () => {
      const action = node.dataset.action;
      if (action === "goto") setRoute(node.dataset.to);
      if (action === "toast") toast(node.dataset.message || "Done");
    });
  });
}

function render() {
  const route = state.route;
  document.getElementById("screenTitle").textContent = labels[route] || "Telephone";
  document.getElementById("screenContent").innerHTML = screenTemplate(route);

  document.getElementById("routeList").innerHTML = ROUTES.map(
    (r) => `<button class="${r === route ? "active" : ""}" data-route="${r}">${labels[r]}</button>`
  ).join("");

  document.getElementById("bottomNav").innerHTML = ["/all-products", "/showcase", "/network", "/conversations", "/you"]
    .map((r) => `<button class="${r === route ? "active" : ""}" data-route="${r}">${labels[r]}</button>`)
    .join("");

  document.querySelectorAll("[data-route]").forEach((node) => {
    node.addEventListener("click", () => setRoute(node.dataset.route));
  });

  bindActions();
}

document.getElementById("copyRouteBtn").addEventListener("click", async () => {
  const route = state.route;
  const toCopy = `${window.location.origin}${window.location.pathname}?preview-route=${encodeURIComponent(route)}`;
  try {
    await navigator.clipboard.writeText(toCopy);
    toast("Route URL copied");
  } catch {
    toast(toCopy);
  }
});

window.addEventListener("popstate", () => {
  state.route = readRoute();
  render();
});

render();
