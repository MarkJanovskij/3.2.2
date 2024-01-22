
const studentsScore = require(`./students`);


describe('studentsScore', () => {
    it('should be an array', () => {
      expect(Array.isArray(studentsScore)).toBe(true);
    });
  
    it('should have at least one student', () => {
      expect(studentsScore.length).toBeGreaterThan(0);
    });
  
    it('each student should have a name and a score', () => {
      studentsScore.forEach(student => {
        expect(student.name).toBeDefined();
        expect(typeof student.name).toBe('string');
        expect(student.score).toBeDefined();
        expect(typeof student.score).toBe('number');
      });
    });
  });