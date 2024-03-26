import type { NodeInputProps } from '@/app/login/components/NodeInput'
// import { useTranslations } from 'next-intl'

const isInputError = (node: NodeInputProps['node']) =>
    node.messages.find(({ type }) => type === 'error') ? true : false

export function NodeInputDefault(props: NodeInputProps) {
    const { node, attributes } = props
    // const t = useTranslations('auth.login')

    // https://github.com/ory/kratos/issues/2255#issuecomment-1407578786
    const isID = node.meta.label?.text === 'ID'
    //  const label = isID ? t('email') : node.meta.label?.text

    return (
        // TextField
        <input
            //label={label}
            /*InputLabelProps={{
                // Remove if browsers ever fix firing events on password autocomplete
                // https://github.com/whatwg/html/issues/3016
                shrink: true,
            }}*/
            type={attributes.type}
            name={attributes.name}
            defaultValue={attributes.value as string}
            disabled={attributes.disabled}
            //error={isInputError(node)}
            /*helperText={
                <>
                    {node.messages.map(({ text, id }, k) => (
                        <span
                            key={`${id}-${k}`}
                            data-testid={`ui/message/${id}`}
                        >
                            {text}
                        </span>
                    ))}
                </>
            }*/
        />
    )
}
