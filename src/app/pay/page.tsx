import { PaymentLinkContent } from "@/components/payment-link-content"

export const dynamic = 'force-dynamic'

function firstParam(value: string | string[] | undefined): string | undefined {
    if (!value) return undefined
    return Array.isArray(value) ? value[0] : value
}

export default async function PaymentLinkPage(props: {
    searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
    const searchParams = await props.searchParams
    const payeeParam = firstParam(searchParams.to)
    const adminFromEnv = process.env.ADMIN_USERS?.split(',')[0]?.trim()
    const payee = payeeParam || adminFromEnv || null

    return <PaymentLinkContent payee={payee} />
}
