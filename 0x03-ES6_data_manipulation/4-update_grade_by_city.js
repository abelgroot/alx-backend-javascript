export default function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students) || !Array.isArray(grades)) return [];
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
