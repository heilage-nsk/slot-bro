import _ from "lodash";
import { Module } from "base/module";

export class HelloPopup extends Module {
    init(initData, onReady) {
        this.makeChild('message');

        console.log('Hello world from popup');

        setTimeout(() => {
            this.notify('popupHello', 'This was transferred message from popup');
        }, 1000);

        onReady();
    }

    _parentHandlers() {
        return {
            'ping': msg => console.log('Reply from background:', msg)
        };
    }
}
