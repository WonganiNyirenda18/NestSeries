import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

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

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role)
            if (rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
                return rolesArray

        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user=> user.id === id)

        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
