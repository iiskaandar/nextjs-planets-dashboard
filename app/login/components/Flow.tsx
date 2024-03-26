import type {
    LoginFlow,
    RecoveryFlow,
    SettingsFlow,
    UiNodeGroupEnum,
} from '@ory/client'
import { Node } from '@/app/login/components/Node'
import { getNodeId } from '@ory/integrations/ui'

interface Props {
    flow: LoginFlow | RecoveryFlow | SettingsFlow
    only?: UiNodeGroupEnum
    hideGlobalMessages?: boolean
}
/**
 * @param flow Ory flow object recieved from the client
 * @param only When set only renders nodes from said group ex. "profile",
 * this allows you to insert custom nodes between groups like headers etc.
 * @param hideGlobalMessages Every flow contains global messages for the whole flow
 * e.g. "The provided credentials are invalid...", this prop allows you to hide them.
 * Useful combined with `only` when you render multiple flows and want to show messages only once.
 *
 * @example
 * <Flow flow={flow} only="profile" hideGlobalMessages />
 */
export function Flow({ flow, only, hideGlobalMessages = false }: Props) {
    const { ui } = flow
    const { action, method, messages = [] } = ui

    const nodes = only
        ? ui.nodes.filter(({ group }) => group === only || group === 'default')
        : ui.nodes

    return (
        <form action={action} method={method}>
            <div>
                {nodes.map((node) => {
                    return <Node node={node} key={getNodeId(node)} />
                })}
                {!hideGlobalMessages &&
                    messages.map(({ text, id }) => <p key={id}>{text}</p>)}
            </div>
        </form>
    )
}
