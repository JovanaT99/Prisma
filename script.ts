import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.createMany({
    data: [
      {
          name: 'ihi',
          email: 'Toooo@gmail.com',
          isAdmin:false,
          age: 20,
      },

    ],
  })
  console.log(user);
  //   data: [{
  //     name: 'ii',
  //     email: 'To@gmail.com',
  //     isAdmin:false,
  //     age: 27,
  // }, {
  // name: 'Jovana',
  // email: 'Jole@gmail.com',
  // isAdmin:false,
  // age: 24,

  // }]
  // })

}
main()
  .catch((e) => {
    console.error(e.error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
