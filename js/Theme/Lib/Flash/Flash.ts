import Engine from './FlashEngine.js'

export type Levels = 'success' | 'error' | 'info' | 'warning';

export interface ToastConfig {
    title: string,
    msg?: string | null,
    level?: Levels,
}

class Flash {

    _displayTime: number;
    _toast: HTMLElement;
    _queue: Array<ToastConfig>;
    _hideTimeout: NodeJS.Timeout;

    constructor() {
        this._displayTime = 3500;
        this._queue = [];
    }

    async default(config: ToastConfig) {
        await this.processQueue({title: config.title, msg: config.msg, level: 'info'});
    }

    async info(config: ToastConfig) {
        await this.processQueue({title: config.title, msg: config.msg, level: 'info'});
    }

    async success(config: ToastConfig) {
        await this.processQueue({title: config.title, msg: config.msg, level: 'success'});
    }

    async error(config: ToastConfig) {
        await this.processQueue({title: config.title, msg: config.msg, level: 'error'});
    }

    async warning(config: ToastConfig) {
        await this.processQueue({title: config.title, msg: config.msg, level: 'warning'});
    }

    async processQueue(config: ToastConfig) {
        await this.ensureToastCleared()
        await this.addNodeToDocument(config);
        await this.triggerShow();
    }

    async triggerShow() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this._toast) {
                    this._toast.addEventListener('transitionend', (e: TransitionEvent) => {
                        if (e.target instanceof HTMLElement) {
                            if (e.target.classList.contains('opacity-0')) {
                                this.reset();
                            }
                        }
                    });
                    this._toast.classList.replace('mb-0', 'mb-8')
                    this._toast.classList.replace('opacity-0', 'opacity-100');
                    this.triggerHide();
                }
                res(true);
            }, 10)
        })
    }

    triggerHide() {
        this._hideTimeout = setTimeout(() => {
            this.hide()
        }, this._displayTime)
    }

    async reset() {
        return new Promise((res, rej) => {
            if (this._toast) {
                this._toast.remove();
                this._toast = null;
            }
            if (this._hideTimeout) {
                clearTimeout(this._hideTimeout);
                this._hideTimeout = null;
            }
            res(true);
        })
    }

    async hide() {
        return new Promise((res, rej) => {
            this._toast.classList.replace('mb-8', 'mb-0')
            this._toast.classList.replace('opacity-100', 'opacity-0');
            res(true);
        })
    }

    async ensureToastCleared() {
        return new Promise(async (resolve, reject) => {
            !this._toast
                ? resolve(true)
                : await this.clearToast(resolve, reject);
        })
    }

    async clearToast(res, rej) {
        await this.hide();
        await this.reset();
        res(true);
    }

    private async addNodeToDocument(config: ToastConfig) {
        return new Promise((res, rej) => {
            this._toast = (new Engine)
                .level(config.level)
                .title(config.title)
                .msg(config.msg)
                .getNode();

            document.body.appendChild(this._toast)
            res(this._toast);
        })
    }
}


export default new Flash();
