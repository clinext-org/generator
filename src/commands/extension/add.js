import ChunkFeatureContent from '../../lib/chunks/extension/content/index.js'

export default ({
  _clinextType: "command",
  name: 'add',
  disabled: true,
  description: 'Add an empty extension to a CliNext app',
  questions: [
    {
      name: 'appPath',
      message: "App to add a feature to",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'featureId',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'featureDescription',
    },

    {
      name: 'license',
    },
  ],
  example: "$0 feature eject",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    await CliNext.prompt.ask([
      {
        name: 'featureId',
      },
    ])

    CliNext.payload.destination = `${CliNext.payload.appPath}/src/extensions/${CliNext.payload.featureId}`

    let pass = await ChunkFeatureContent.ask()

    if (!pass) {
      return
    }

    await ChunkFeatureContent.write()
  },
})
