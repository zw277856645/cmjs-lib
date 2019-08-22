import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    getItem(k: string) {
        return JSON.parse(localStorage.getItem(k));
    }

    setItem(k: string, value: any) {
        localStorage.setItem(k, JSON.stringify(value));
    }

    clear() {
        localStorage.clear();
    }

    removeItem(k: string) {
        localStorage.removeItem(k);
    }
}