var spawnSync = require('child_process').spawnSync

test('Typescript', () => {
  const testTypescriptCompilation = spawnSync('yarn', ['test:ts'])

  const typescriptCompilationOutput = testTypescriptCompilation.stdout
    .toString()
    .trimRight()

  const trimmedTypescriptCompilationOutput = typescriptCompilationOutput.substring(
    0,
    typescriptCompilationOutput.lastIndexOf('\n'),
  )

  expect(trimmedTypescriptCompilationOutput).toMatchSnapshot(
    'Typescript expected failures',
  )
})
