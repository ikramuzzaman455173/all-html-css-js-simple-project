const accorditions = document.querySelectorAll(".accordition");
const panels = document.querySelectorAll(".panel");
let sectionNumber = accorditions.length + 1; // Initialize the section number

accorditions.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");

    // toggle functionality add
    let panel = acc.nextElementSibling;
    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else panel.style.maxHeight = panel.scrollHeight + "px";

    // only one section open at a time functionality add
    for (const p of panels) {
      if (panel !== p) p.previousElementSibling.classList.remove("active"), (p.style.maxHeight = null);
    }
  });
});

