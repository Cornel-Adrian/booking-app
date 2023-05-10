export class CreateOrderDto {
    orderId: string;
    companyId: string;
    userEmail: string;
    desiredDate: string; 

    serviceName: string;
    price: number;
}
