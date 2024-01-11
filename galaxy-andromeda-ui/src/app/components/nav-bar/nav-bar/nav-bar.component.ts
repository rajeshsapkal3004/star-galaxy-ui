import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  dropdownBtn: any = document.querySelectorAll(".dropdown-btn");
  dropdown: any = document.querySelectorAll(".dropdown");
  hamburgerBtn: any = document.getElementById("hamburger");
  navMenu: any = document.querySelector(".menu");
  links: any = document.querySelectorAll(".dropdown a");

  ngOnInit() {
    this.dropdownBtn.forEach((btn: any) => {
      btn.addEventListener("click", (e: any) => {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);
  
        if (dropdownElement) {
          dropdownElement.classList.toggle("active");
          this.dropdown.forEach((drop: any) => {
            if (drop.id !== btn.dataset.dropdown) {
              drop.classList.remove("active");
            }
          });
          e.stopPropagation();
          btn.setAttribute(
            "aria-expanded",
            btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
          );
        }
      });
    });
  

    // close dropdown menu when the dropdown links are clicked
    this.links.forEach((link: any) =>
      link.addEventListener("click", () => {
        this.closeDropdownMenu();
        this.setAriaExpandedFalse();
        this.toggleHamburger();
      })
    );

    // close dropdown menu when you click on the document body
    document.documentElement.addEventListener("click", () => {
      this.closeDropdownMenu();
      this.setAriaExpandedFalse();
    });

    // close dropdown when the escape key is pressed
    document.addEventListener("keydown", (e: any) => {
      if (e.key === "Escape") {
        this.closeDropdownMenu();
        this.setAriaExpandedFalse();
      }
    });

    // toggle hamburger menu
    this.hamburgerBtn.addEventListener("click", () => this.toggleHamburger());
  }

  setAriaExpandedFalse() {
    this.dropdownBtn.forEach((btn: any) => btn.setAttribute("aria-expanded", "false"));
  }

  closeDropdownMenu() {
    this.dropdown.forEach((drop: any) => {
      drop.classList.remove("active");
      drop.addEventListener("click", (e: any) => e.stopPropagation());
    });
  }

  toggleHamburger() {
    this.navMenu.classList.toggle("show");
  }
}
