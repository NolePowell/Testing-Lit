import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Set links for the navigation bar
interface NavLink {
  name: string;
  href: string;
}

@customElement('nav-bar')
export class NavBar extends LitElement {
  // Formatting for the navigation bar
  static styles = css`
    :host {
      display: block;
      background-color: silver;
      color: white;
      font-family: Arial, sans-serif;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
    nav {
      display: flex;
      align-items: center;
      padding: 10px 20px;
    }
    .nav-item {
      margin: 0 15px;
      cursor: pointer;
    }
    .nav-item:hover {
      color: blue;
    }
  `;

  // Define properies for the links
  @property({ type: Array })
  links: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  render() {
    return html`
      <nav>
        ${this.links.map(
          (link) => html`<a href="${link.href}" class="nav-item">${link.name}</a>`
        )}
      </nav>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'nav-bar': NavBar
    }
}