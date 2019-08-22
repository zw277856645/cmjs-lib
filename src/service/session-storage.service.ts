import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

    getItem(k: string) {
        return JSON.parse(sessionStorage.getItem(k));
    }

    setItem(k: string, value: any) {
        sessionStorage.setItem(k, JSON.stringify(value));
    }

    clear() {
        sessionStorage.clear();
    }

    removeItem(k: string) {
        sessionStorage.removeItem(k);
    }
}