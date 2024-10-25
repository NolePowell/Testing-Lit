import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface CarouselItem {
  src: string;
  alt: string;
}

@customElement('item-carousel')
export class ItemCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      max-width: 600px;
      overflow: hidden;
      border: 2px solid #333;
      border-radius: 10px;
    }
    .carousel-container {
      display: flex;
      transition: transform 0.5s ease;
    }
    .carousel-item {
      position: relative;
      min-width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .caption {
      position: absolute;
      bottom: 10%;
      width: 100%;
      text-align: center;
      color: black;
      font-size: 15px;
      font-weight: bold;
    }
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  `;

  @property({ type: Array })
  //Adjust image src to pictures of drinks at different levels of full
  items: CarouselItem[] = [
    { src: '', alt: '100% Sweetness' },
    { src: '', alt: '75% Sweetness' },
    { src: '', alt: '50% Sweetness' },
    { src: '', alt: '25% Sweetness' },
    { src: '', alt: '0% Sweetness' },
  ];

  @state()
  private currentIndex = 0;

  private previousWindow() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  private nextWindow() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  render() {
    return html`
      <div class="carousel">
        <div class="carousel-container" style="transform: translateX(-${this.currentIndex * 100}%);">
          ${this.items.map(
            (item) => html`
              <div class="carousel-item">
                <img src="${item.src}" alt="${item.alt}" />
                <div class="caption">${item.alt}</div>
              </div>
            `
          )}
        </div>
        <button class="nav-button prev" @click="${this.previousWindow}"></button>
        <button class="nav-button next" @click="${this.nextWindow}"></button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'item-carousel': ItemCarousel;
  }
}