export interface Room {
    totalRooms: number,
    availabelRooms: number,
    bookedRooms: number
}

export interface RoomList {
    RoomNumber : number,
    RoomType : string,
    amenities: string,
    price : number,
    photos: string,
    checkintime: Date,
    checkouttime: Date,
}
