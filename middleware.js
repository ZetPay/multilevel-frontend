import Cookies from 'js-cookie';
import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {
    const verify = request.cookies.get("logedin");

    const { device } = userAgent(request)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    Cookies.set("viewport",viewport)
    // console.log("VERFY",verify)
    if (verify === undefined && request.nextUrl.pathname.startsWith('/member')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}