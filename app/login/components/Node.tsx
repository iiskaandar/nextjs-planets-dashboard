import type { UiNode } from '@ory/client'
import {
    isUiNodeInputAttributes,
    isUiNodeTextAttributes,
} from '@ory/integrations/ui'

import { NodeInput } from '@/app/login/components/NodeInput'
import { NodeText } from '@/app/login/components/NodeText'

interface Props {
    node: UiNode
}

export function Node({ node }: Props) {
    if (isUiNodeInputAttributes(node.attributes)) {
        return <NodeInput node={node} attributes={node.attributes} />
    }
    if (isUiNodeTextAttributes(node.attributes)) {
        return <NodeText node={node} attributes={node.attributes} />
    }

    return null
}
