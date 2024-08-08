export interface message{
    content : string;
    createdAt : Date
}

export interface ApiResponse{
    success : boolean;
    message : string,
    isAccpectingMessages? : boolean;
    messsage?: Array<message>
}