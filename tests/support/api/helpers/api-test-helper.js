

export class ApiTest {

    constructor(request) {
        this.request = request
        this.baseApi = process.env.BASE_API

    }

    async postToken(requestBody) {
        const response = await this.request.post(this.baseApi + '/auth/login', {
            data: requestBody,
        });

        const responseBody = await response.json();
        const token = responseBody.token;

        return {
            response,
            responseBody,
            token,
        };
    }


    async postMovie(token,requestBody) {
        const response = await this.request.post(this.baseApi + '/auth/login', {
            headers: {
                Authorization: 'Bearer ' + token,
                ContentType: 'application/json'
            },
            data: requestBody
        });

        const responseBody = await response.json();

        return {
            response,
            responseBody
        };

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