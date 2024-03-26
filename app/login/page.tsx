import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { loginUrl, ory, recoveryUrl } from '@/api/auth'
import { Flow } from '@/app/login/components/Flow'
import Link from 'next/link'
import type { LoginFlow } from '@ory/client'

export default async function Login({
    searchParams,
}: {
    searchParams?: Record<string, string | Array<string> | undefined>
}) {
    try {
        const flowId = z.string().parse(searchParams?.flow)

        const { data: flow } = await ory.getLoginFlow({
            id: flowId,
            cookie: headers().get('cookie') ?? undefined,
        })

        return <LoginPage flow={flow} />
    } catch (e) {
        // redirect(loginUrl)
    }
}

function LoginPage({ flow }: { flow: LoginFlow }) {
    return (
        <div>
            <h2>{'Login'}</h2>
            <div>
                <Flow flow={flow} />
                <Link
                    // variant="text"
                    // fullWidth
                    href={recoveryUrl}
                >
                    {'Recover'}
                </Link>
            </div>
        </div>
    )
}
