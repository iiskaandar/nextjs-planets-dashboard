import { redirect } from 'next/navigation'
import { z } from 'zod'
import { loginUrl, ory } from '@/api/auth'
import Link from 'next/link'

export default async function Login({
    searchParams,
    params: { locale },
}: {
    searchParams?: Record<string, string | Array<string> | undefined>
    params: { locale: string }
}) {
    try {
        const id = z.string().parse(searchParams?.id)
        const { data: flow } = await ory.getFlowError({ id })

        const error = z
            .object({ reason: z.string(), status: z.string() })
            .parse(flow.error)

        return (
            <div>
                <h2>{error.status}</h2>
                <span>{error.reason}</span>
                <Link href={loginUrl}>{'Return'}</Link>
            </div>
        )
    } catch (e) {
        redirect(loginUrl)
    }
}
