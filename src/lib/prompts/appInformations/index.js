/*---------------------------------------------------------
 * Copyright (C) CliNext Community. All rights reserved.
 *--------------------------------------------------------*/

import askForAppID from "./askForAppID.js"
import askForGeneric from "../utils/askForGeneric.js"

import askForGenericPort from "../utils/askForGenericPort.js"
import validateNumber from "../../lib/validateNumber.js"

export default async (props) => {
  const { toolbox, payload, options: { force = false } = {} } = props
  if (!force && payload.promptGroupsPassed.appInformations) {
    return
  }

  toolbox.ui.drawSectionHeader({
    toolbox,
    title: `App informations 🚀`,
    subTitle: `CliNext required general informations.`
  })

  await askForAppID(props)
  await askForAppID(props)

  await askForGeneric({
    ...props, options: {
      ...props.options,
      name: 'appDescription'
    }
  })

  await askForGeneric({
    ...props, options: {
      ...props.options,
      name: 'appMasterKey',
    }
  })
  await askForGeneric({
    ...props, options: {
      ...props.options,
      name: 'appJavascriptKey',
    }
  })
  // await askForGeneric({
  //     ...props, options: {
  //         ...props.options,
  //         name: 'restApiKey',
  //         message: 'Rest Api Key?',
  //         defaultValue: 'REST_API_KEY_TO_CHANGE'
  //     }
  // })
  await askForGenericPort({
    ...props, options: {
      ...props.options,
      type: 'number',
      name: 'appPort',
      port: { value: 1337 },
      validate: validateNumber
    }
  })
  await askForGeneric({
    ...props, options: {
      ...props.options,
      name: 'appEndpoint',
    }
  })

  payload.maxUploadSize = '20mb'
  payload.authorName = ""
  payload.authorEmail = ""
  payload.authorUrl = ""
  payload.restApiKey = 'REST_API_KEY_TO_CHANGE'
  payload.promptGroupsPassed.appInformations = true
}
