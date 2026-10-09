export interface Room {
    totalRooms: number,
    availabelRooms: number,
    bookedRooms: number
}

export interface RoomList {
    RoomNumber : number,
    RoomTypes : string,
    amenities: string,
    price : number,
    photos: string,
    checkintime: Date,
    checkouttime: Date,
}
