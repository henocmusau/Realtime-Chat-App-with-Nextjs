'use server'

import { headers } from "next/headers"

export async function IP() {
    const FALLBACK_IP_ADDRESS = '0.0.0.0'
    const forwardedFor = headers().get('X-Forwarded-For')

    if (forwardedFor) {
        return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
    }

    return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}