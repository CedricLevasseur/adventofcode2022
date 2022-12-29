//import fetch from 'node-fetch';
import { readFileSync } from 'fs';

export const DATA1: string = "./data/input1.ts"
//const file = readFileSync(DATA1, 'utf-8');
export function getDataFetch(url: string) {
    fetch(url)
        .then(
            (response) => console.log(response.text())
        );
}
export function getDataFS(path: string): string {
    return readFileSync(path, 'utf8');

}