import { UiNode, UiNodeTextAttributes } from '@ory/client'

interface Props {
    node: UiNode
    attributes: UiNodeTextAttributes
}

export const NodeText = ({ node, attributes }: Props) => {
    return (
        <span data-testid={`node/text/${attributes.id}/label`}>
            {node.meta?.label?.text}
        </span>
    )
}
