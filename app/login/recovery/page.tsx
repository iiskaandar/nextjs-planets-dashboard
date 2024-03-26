import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { recoveryUrl, ory } from '@/api/auth'
import { Flow } from '@/app/login/components/Flow'
import type { RecoveryFlow } from '@ory/client'

export default async function Recovery({
    searchParams,
}: {
    searchParams?: Record<string, string | Array<string> | undefined>
}) {
    try {
        const flowId = z.string().parse(searchParams?.flow)

        const { data: flow } = await ory.getRecoveryFlow({
            id: flowId,
            cookie: headers().get('cookie') ?? undefined,
        })

        return <RecoveryPage flow={flow} />
    } catch (e) {
        redirect(recoveryUrl)
    }
}

function RecoveryPage({ flow }: { flow: RecoveryFlow }) {
    return (
        <div>
            <h2>{'Recovery'}</h2>
            <Flow flow={flow} />
        </div>
    )
}
