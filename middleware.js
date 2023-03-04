import Cookies from 'js-cookie';
import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {
    const verify = request.cookies.get("logedin");

    const { device } = userAgent(request)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    Cookies.set("viewport",viewport)
    if (!verify && request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname.startsWith('/users')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}