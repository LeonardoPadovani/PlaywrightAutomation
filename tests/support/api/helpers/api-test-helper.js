

export class ApiTest {

    constructor(request) {
        this.request = request
        this.token = undefined
        this.baseApi = process.env.BASE_API
        
    }

    async setToken(requestBody) {
        const response = await this.request.post(this.baseApi + '/auth/login', {
            data: requestBody
        });

        const responseBody = JSON.parse(await response.text())
        this.token = responseBody.token

    }

    async postMovie(requestBody) {
        const response = await this.request.post(this.baseApi + '/auth/login', {
            headers: {
                Authorization: 'Bearer ' + this.token,
                ContentType: 'application/json'
            },
            data: requestBody
        });


        return response;


    }

    async getProducts(userId) {

        const response = await this.request.get(`${this.baseApi}/products/${userId}`);

        const responseBody = await response.json();

        return {
            response,
            responseBody
        };


    }


}