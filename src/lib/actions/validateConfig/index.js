/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/

// import { validateFeature } from '@cliNext/tools'

export default async (props) => {
    const { toolbox, payload } = props
    const appPath = payload.desiredWriteDestinationPathAbsolute

    return { isValid: true, message: null }
    // try {
    //     const configPath = `${appPath}/cliNext.config.js`
    //     const cliNextConfig = (await import(configPath)).default
    //     // const cliNextConfig = JSON.parse(configRawdata)
    //     if (!cliNextConfig) {
    //         return
    //     }
    //     if (!cliNextConfig.features) {
    //         cliNextConfig.features = {}
    //     }
    //     cliNextConfig.features.local = [
    //         `${appPath}/lib/features`
    //         // path.resolve(__dirname, `./features`)
    //     ]
    //     cliNextConfig.rootFeaturePayload = {
    //         type: 'app',
    //         id: 'app',
    //         // path: path.resolve(__dirname, "./app")
    //         path: `${appPath}/lib/features`
    //     }

    //     const schema = await buildSchema({ cliNextConfig })
    //     return schema

    // } catch (e) {
    //     console.error(e)
    //     return null
    // }
}

