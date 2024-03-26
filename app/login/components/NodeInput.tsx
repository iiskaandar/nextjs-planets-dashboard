import type { UiNode, UiNodeInputAttributes } from '@ory/client'
import { NodeInputSubmit } from '@/app/login/components/NodeInputSubmit'
import { NodeInputDefault } from '@/app/login/components/NodeInputDefault'
import { NodeInputHidden } from '@/app/login/components/NodeInputHidden'

export interface NodeInputProps {
    node: UiNode
    attributes: UiNodeInputAttributes
}

export function NodeInput(props: NodeInputProps) {
    const { attributes } = props

    switch (attributes.type) {
        case 'hidden':
            // Render a hidden input field
            return <NodeInputHidden {...props} />
        case 'submit':
            // Render the submit button
            return <NodeInputSubmit {...props} />
    }
    // Render a generic text input field.
    return <NodeInputDefault {...props} />
}
