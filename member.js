function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 20000,
        getSkills: function() {
            return this.skills;
        }
    };
    return member;
}