
export default async (props) => {
  const { generator, payload, destination } = props
  const destinator = v => `${destination}/${v}`
  generator.fs.copyFraction({
    destination: destinator('jsconfig.json'),
    source: `jsconfig.json`,
  })
}
