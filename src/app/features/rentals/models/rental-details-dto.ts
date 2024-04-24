export interface RentalDetailsItemDto {
    id: number
    customerId: number
    carId: number
    customer: Customer
    car: Car
    rentalDate: string
    returnDate: string
  }

interface Customer {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  
 interface Car {
    id: number
    modelId: number
    plate: string
    state: number
    model: Model
  }
  
 interface Model {
    id: number
    brandId: number
    name: string
    modelYear: number
    imageUrl: string
    dailyPrice: number
    brand: Brand
  }
  
 interface Brand {
    id: number
    name: string
  }
  