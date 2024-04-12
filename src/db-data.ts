export const DRAWS: any = [
  {
drawDate: "20-Mar-2024",
ball01: 10,
ball02: 25,
ball03: 29,
ball04: 14,
ball05: 8,
ball06: 35,
bonusBall: 32,
ballSet: "10",
machine: "Guinevere",
drawNumber: 2947
 },
{
drawDate: "16-Mar-2024",
ball01: 44,
ball02: 11,
ball03: 45,
ball04: 35,
ball05: 18,
ball06: 16,
bonusBall: 51,
ballSet: "9",
machine: "Lancelot",
drawNumber: 2946
 },
{
drawDate: "13-Mar-2024",
ball01: 35,
ball02: 34,
ball03: 26,
ball04: 37,
ball05: 24,
ball06: 28,
bonusBall: 48,
ballSet: "9",
machine: "Lancelot",
drawNumber: 2945
 },
{
drawDate: "09-Mar-2024",
ball01: 53,
ball02: 17,
ball03: 33,
ball04: 15,
ball05: 14,
ball06: 55,
bonusBall: 43,
ballSet: "11",
machine: "Lancelot",
drawNumber: 2944
 },
{
drawDate: "06-Mar-2024",
ball01: 58,
ball02: 32,
ball03: 11,
ball04: 37,
ball05: 48,
ball06: 7,
bonusBall: 28,
ballSet: "11",
machine: "Lancelot",
drawNumber: 2943
 },
{
drawDate: "02-Mar-2024",
ball01: 48,
ball02: 2,
ball03: 59,
ball04: 40,
ball05: 20,
ball06: 34,
bonusBall: 6,
ballSet: "10",
machine: "Guinevere",
drawNumber: 2942
 },
{
drawDate: "28-Feb-2024",
ball01: 50,
ball02: 44,
ball03: 45,
ball04: 39,
ball05: 12,
ball06: 21,
bonusBall: 51,
ballSet: "10",
machine: "Guinevere",
drawNumber: 2941
 },
{
drawDate: "24-Feb-2024",
ball01: 56,
ball02: 4,
ball03: 20,
ball04: 36,
ball05: 3,
ball06: 11,
bonusBall: 28,
ballSet: "9",
machine: "Guinevere",
drawNumber: 2940
 },
{
drawDate: "21-Feb-2024",
ball01: 50,
ball02: 27,
ball03: 58,
ball04: 25,
ball05: 32,
ball06: 54,
bonusBall: 55,
ballSet: "9",
machine: "Guinevere",
drawNumber: 2939
 }
]

export function findCourseById(courseId:number) {
  return DRAWS.find((course: { id: number; }) => course.id === courseId);
}
