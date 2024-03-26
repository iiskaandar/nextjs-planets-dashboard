import { NodeInputProps } from '@/app/login/components/NodeInput'
import { getNodeLabel } from '@ory/integrations/ui'

export function NodeInputSubmit({ node, attributes }: NodeInputProps) {
    return (
        <button
            name={attributes.name}
            type="submit"
            value={(attributes.value as string) || ''}
            disabled={attributes.disabled}
            // variant="contained"
        >
            {getNodeLabel(node)}
        </button>
    )
}
