import { NodeInputProps } from '@/app/login/components/NodeInput'

export function NodeInputHidden({ attributes }: NodeInputProps) {
    return (
        <input
            type={attributes.type}
            name={attributes.name}
            value={(attributes.value as string) || 'true'}
        />
    )
}
