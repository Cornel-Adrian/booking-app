class Service {
    name: string;
    description: string;
    price: number;
}


export class CreateCompanyDto {
    name: string;
    email: string;
    description: string;
    services: Service[];
}
