import { Configuration, FrontendApi } from '@ory/client'

export const ory = new FrontendApi(
    new Configuration({
        basePath: 'http://127.0.0.1:60210',
        baseOptions: {
            withCredentials: true,
        },
    })
)

export const loginUrl = 'http://127.0.0.1:60210/self-service/login/browser'
export const recoveryUrl =
    'http://127.0.0.1:60210/self-service/recovery/browser'
export const settingsUrl =
    'http://127.0.0.1:60210/self-service/settings/browser'
