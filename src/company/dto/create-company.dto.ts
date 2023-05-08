class Service {
    name: string;
    description: string;
    price: number;
}


export class CreateCompanyDto {
    companyId: string;
    name: string;
    email: string;
    description: string;
    services: Service[];
}
