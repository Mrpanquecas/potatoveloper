const getRandomSkill = (skills: { [key: string]: boolean }[], name: string) => {
  let deleteRandomSkill = name
  while (deleteRandomSkill === name) {
    let seed = Math.floor(Math.random() * skills.length)
    let randomName = Object.keys(skills[seed])[0]
    if (name !== randomName) return randomName
  }
}

export { getRandomSkill }
