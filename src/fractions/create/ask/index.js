export default async (props) => {
  const { generator, payload } = props
  generator.ui.drawSectionHeader({
    type: 'h2',
    title: `App informations 🚀`,
    subTitle: `Servable required general informations.`
  })

  return generator.prompt.ask([
    {
      name: 'name',
    },
  ])
}




