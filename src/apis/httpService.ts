import axios from 'axios';

export class httpService {
    private httpHead = {
        hxrFields: {withCredentials:true}
    }

    addTimeStamp(url: string): string {
        if (url.indexOf('?') > -1) {
            if (url.indexOf('timeStamp') < 0) {
                url += '&timeStamp=' + Math.random();
            } else {
                url += '&timeStamp=' + Math.random();
            }
        }
        return url;
    }

    doPost(url:string, params?: string, option?: any): void {
        url = this.addTimeStamp(url);
        axios.post(url, )
    }

}