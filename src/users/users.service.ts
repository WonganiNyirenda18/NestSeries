import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Wongani Nyirenda",
            "email": "wongani@gmail.com",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Lauryn Mwase",
            "email": "mwase@gmail.com",
            "role": "ENGINEER",
        },
        {
            "id": 3,
            "name": "Rita Makanjira",
            "email": "rita@gmail.com",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Carlos Muleke",
            "email": "carlos@gmail.com",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Astro Chimwala",
            "email": "astro@gmail.com",
            "role": "ADMIN",
        }
    ]
}
