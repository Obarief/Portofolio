import { Controller, Post, Get, Req, Res, Query, Header, HttpCode, Redirect, HttpRedirectResponse } from '@nestjs/common';
import { Request, response, Response } from 'express';

@Controller('/api/users')
export class UserController {

    // cookie

    @Get('/set-cookie')
    setCookie(@Query('nama') nama: string, @Res() response : Response){
        response.cookie('nama', nama) // 'nama' bersifat fleksibel, nama = harus sama seperti query
        response.status(200).send('Success Set Cookie')
    }

    @Get('/get-cookie')
    getCookie(@Req() request: Request): string{
        return request.cookies['nama'] 
        // ['nama'] digunakan karena sebagai bracket notation fleksibilitas dalam menangani cookie (lebih strict)

        // jika hanya .nama untuk identifier diketahui langsung (contoh: user-name, maka tidak bisa)
        
        // dan jika hanya [nama] untuk menggunakan karakter khusus (contoh: user-name, maka bisa)
    }

        // view
        @Get('/view/hello')
        viewHello(@Query('name') name: string, @Res() response: Response){
            response.render('index.html', {
                title: 'Template Engine', // mengisi {{...}}
                name: name || 'Guest' // mengisi {{...}}
            })
        }

        // request

        @Post()
        post(): string{
            return 'POST';
        }
    
    
        @Get('/:id')
        getById(@Req()request: Request): string{ 
            return `GET ${request.params.id}`;
        } // not recomended
    
        @Get('/sapa')
        getSapa(
            @Query('nama_depan') namaDepan: string,
            @Query('nama_belakang') namaBelakang: string
            ): string{
            return `Halo ${namaDepan} ${namaBelakang}`
        } // recomended
    
    // response
        
        @Get('/sample/response')
        contohResponse(@Res() response: Response){
            response
            .status(200)
            .send('sample response berhasil dibuat')
        } // not recomended
    
        @Get('/sample/response/rec')
        @Header('Content-Type', 'application/json')
        @HttpCode(200)
        contohResponseRec(): Record<string, string>{ // seharusnya ada struktur jsonnnya karena tidak ada coba dibuat recordnya <string, string>
        return {
            data: 'halo dunia'
        }
    
        } // recomended
    
    
        @Get()
        @Redirect() // dalam @Redirect(location, code) (location = url, code = statusCode) = penggunaannya static
        redirectSampelResponse(): HttpRedirectResponse{ // penggunaan HttpRedirectResponse = untuk mempertegas agar tidak terjadi conflict jika dijadikan api publik
            
            return { // jika penggunaan url dll di return value maka lebih dinamis
                url: '/api/users/sample/response/rec',
                statusCode: 200
            }
        }
    
        // asynchronous
    
        @Get('/asink')
        async sayHello(@Query('nama') nama: string): Promise<string>{
        return `hello cuy ${nama || 'Guest'}`
        
    }

}

