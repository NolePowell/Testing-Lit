import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js'

@customElement('test-panel')
export class TestPanel extends LitElement {
    static styles = css `
        .title {
            background: aquamarine;
            color: #222;
            padding: 0.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
        .body {
            padding: 1rem;
            border: 1px solid aquamarine;
        }        
    `

    @property({ type: String })
        title = 'Placeholder'

    render() {
        return html`
            <div class="title">
                ${this.title}
            </div>
            <div class="body">
                <slot></slot>
            </div>
        `
    }
}
declare global {
    interface HTMLElementTagNameMap {
      'test-panel': TestPanel
    }
}