const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  });
});

const roleDescriptions = {
  all: {
    text: "All four sessions form a complete progression from foundations to AI-native delivery.",
    links: [["Start with Week 1", "#session-1"]],
  },
  new: {
    text: "Start with Week 2 for a practical introduction, then continue through the series as your confidence grows.",
    links: [["Go to Week 2", "#session-2"]],
  },
  advanced: {
    text: "Weeks 1, 3, and 4 focus on the latest platform capabilities, agentic workflows, and AI-native delivery.",
    links: [
      ["Week 1", "#session-1"],
      ["Week 3", "#session-3"],
      ["Week 4", "#session-4"],
    ],
  },
  leader: {
    text: "Weeks 1 and 4 provide the strongest view of platform evolution, governance, review, and delivery at scale.",
    links: [
      ["Week 1", "#session-1"],
      ["Week 4", "#session-4"],
    ],
  },
};

const roleButtons = document.querySelectorAll("[data-role]");
const sessions = document.querySelectorAll("[data-roles]");
const finderResult = document.querySelector(".finder-result");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.dataset.role;

    roleButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    sessions.forEach((session) => {
      const isRecommended = role === "all" || session.dataset.roles.split(" ").includes(role);
      session.classList.toggle("is-recommended", role !== "all" && isRecommended);
      session.classList.toggle("is-muted", !isRecommended);
    });

    const recommendation = roleDescriptions[role];
    finderResult.replaceChildren(document.createTextNode(`${recommendation.text} `));
    recommendation.links.forEach(([label, href], index) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      finderResult.append(link);
      finderResult.append(document.createTextNode(index === recommendation.links.length - 1 ? "." : " · "));
    });
  });
});
