import {nanoid} from 'nanoid';

class FlashEngine {
    _id: string;
    _level: string;
    _title: string;
    _msg: string;
    _node: HTMLDivElement;

    getNode(): HTMLDivElement {
        this.create();
        return this._node;
    }

    level(value) {
        this._level = value;
        return this;
    }

    msg(value) {
        this._msg = value;
        return this;
    }

    title(value) {
        this._title = value;
        return this;
    }

    create() {
        this._id = nanoid();
        // Wrap
        this._node = document.createElement('div');
        this._node.setAttribute('id', this._id);
        this._node.classList.add(...'flex shadow-xl fixed left-1/4 px-6 py-5 bottom-0 opacity-0 mb-0 block alert w-1/2 transition-all duration-150 ease-in-out'.split(' '))
        this._node.classList.add(`alert-${this._level}`)
        // Add icon
        this._node.appendChild(this.icon());
        // Content
        this._node.appendChild(this.addContent(document.createElement('div')));
    }

    icon() {
        let div = document.createElement('div');
        div.classList.add(...'mr-2 mt-0.5'.split(' '));
        div.innerHTML = this.iconHtml();
        return div;
    }

    iconHtml() {
        let path = ['success', 'green'].includes(this._level)
            ? "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
            : "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";

        return `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="${path}"/></svg>`;
    }

    addContent(wrap) {
        if (this._title) {
            let title = document.createElement('div');
            title.textContent = this._title;
            title.classList.add('font-semibold');
            wrap.appendChild(title);
        }
        if (this._msg) {
            let message = document.createElement('div');
            message.innerHTML = this._msg;
            message.classList.add(...'text-sm mt-1 opacity-90'.split(' '));
            wrap.appendChild(message);
        }

        return wrap;
    }
}

export default FlashEngine;
