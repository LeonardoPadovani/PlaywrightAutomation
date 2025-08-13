

export class Api {

    constructor(request) {
        this.request = request
        this.token = undefined

    }

    async setToken(requestBody) {
        const response = await this.request.post('https://fakestoreapi.com/auth/login', {
            data: requestBody
        });

        const responseBody = JSON.parse(await response.text())
        this.token = responseBody.token

    }

    


}