function constructionCrew(person) {
    if (!person.handsShaking) {
        return person;
    }

    person.bloodAlcoholLevel += person.weight * 0.1 * person.experience;
    person.handsShaking = false;

    return person;
}

console.log(constructionCrew({ weight: 80, experience: 1, bloodAlcoholLevel: 0, handsShaking: true }));